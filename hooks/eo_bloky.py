"""Hook MkDocs pre redizajn webu: dráha blokov a vizuál sekcií bloku.

on_page_context: zostaví zoznam 12 blokov z metadát stránok (blok, blok_do, cast)
a štyri časti z extra.casti v mkdocs.yml. Šablóny v overrides/ z toho kreslia dráhu
na dashboarde, hlavičku bloku a karty častí. Nový blok stačí pridať do nav
s front matter blok a cast.

on_page_content: na stránkach s metadátom blok obalí sekcie „Čo sa v tomto bloku
naučíš", „Pozri si teóriu" a „Výstup bloku" do kariet, nadpisom H2 pridá ikonu
z metadáta ikony (v poradí nadpisov; krok bez ikony dostane číslo) a odstráni
z nadpisov emoji, ktoré ikona nahrádza. Na všetkých stránkach označí boxy
„AI v tomto bloku" triedou ai a „Ako je to v praxi" triedou prax.
Markdown stránok sa nemení, všetko sa deje pri builde.
"""

import re

from mkdocs.utils import get_relative_url

EMOJI = re.compile(
    "[\U0001F000-\U0001FAFF\u2300-\u23FF\u2600-\u27BF\u2B00-\u2BFF\uFE0F\u200D]"
)
H2 = re.compile(
    r'<h2 id="(?P<id>[^"]+)">(?P<text>.*?)(?P<link><a class="headerlink".*?</a>)</h2>',
    re.S,
)
NAZOV_BLOKU = re.compile(r"^Blok\w*\s+[\d–—-]+\s+[—–-]\s+")
KROK = re.compile(r"^Krok\s+(\d+)\s*[—–-]")
BOX = re.compile(
    r'<div class="admonition (?P<typ>note|tip)">\n'
    r'<p class="admonition-title">(?P<titul>AI v tomto bloku|Ako je to v praxi)</p>'
)

# text nadpisu → (trieda sekcie, ikona)
SEKCIE = {
    "Čo sa v tomto bloku naučíš": ("tw-nauc", "info"),
    "Pozri si teóriu": ("tw-teoria", "kniha"),
    "Výstup bloku": ("tw-vystup", "vlajka"),
    "Výstup blokov": ("tw-vystup", "vlajka"),
}


def _bez_emoji(text):
    return re.sub(r"\s{2,}", " ", EMOJI.sub("", text)).strip()


def on_page_context(context, page, config, nav):
    bloky = []
    for p in nav.pages:
        meta = p.meta or {}
        if "blok" not in meta:
            continue
        od = int(meta["blok"])
        do = int(meta.get("blok_do", od))
        nazov = NAZOV_BLOKU.sub("", p.title or "")
        for n in range(od, do + 1):
            bloky.append(
                {"n": n, "od": od, "do": do, "nazov": nazov, "url": p.url, "cast": int(meta.get("cast", 0))}
            )
    bloky.sort(key=lambda b: b["n"])

    src2url = {p.file.src_uri: p.url for p in nav.pages}
    casti = []
    for c in config["extra"].get("casti", []):
        casti.append(
            {**c, "url": src2url.get(c.get("url"), c.get("url")), "bloky": [b for b in bloky if b["cast"] == c["cislo"]]}
        )

    context["eo_bloky"] = bloky
    context["eo_casti"] = casti

    meta = page.meta or {}
    if "blok" in meta:
        od = int(meta["blok"])
        do = int(meta.get("blok_do", od))
        context["eo_od"], context["eo_do"] = od, do
        context["eo_pred"] = next((b for b in bloky if b["n"] == od - 1), None)
        context["eo_dalsi"] = next((b for b in bloky if b["n"] == do + 1), None)
    return context


def on_page_content(html, page, config, files):
    html = BOX.sub(
        lambda m: '<div class="admonition %s %s">\n<p class="admonition-title">%s</p>'
        % (m.group("typ"), "ai" if m.group("titul").startswith("AI") else "prax", m.group("titul")),
        html,
    )
    meta = page.meta or {}
    if "blok" not in meta:
        return html

    ikony = list(meta.get("ikony") or [])
    cesta = get_relative_url("img/ikony/", page.url)

    def ikona(nazov, trieda):
        return '<img class="%s" src="%s%s.png" alt="" aria-hidden="true">' % (trieda, cesta, nazov)

    casti = H2.split(html)
    # split dáva: [pred, id, text, link, telo, id, text, link, telo, ...]
    vystup = [casti[0]]
    otvorena = False
    for i in range(1, len(casti), 4):
        hid, text, link, telo = casti[i], casti[i + 1], casti[i + 2], casti[i + 3]
        cisty = _bez_emoji(text)
        if otvorena:
            vystup.append("</section>\n")
            otvorena = False
        if cisty in SEKCIE:
            trieda, nazov_ikony = SEKCIE[cisty]
            vystup.append('<section class="%s">\n' % trieda)
            otvorena = True
            vystup.append('<h2 id="%s">%s%s%s</h2>' % (hid, ikona(nazov_ikony, "tw-h2-ikona"), cisty, link))
        else:
            krok = KROK.match(cisty)
            if ikony:
                predok = ikona(ikony.pop(0), "tw-krok__ikona")
            elif krok:
                predok = '<span class="tw-krok__cislo" aria-hidden="true">%s</span>' % krok.group(1)
            else:
                predok = ""
            vystup.append('<h2 id="%s" class="tw-krok">%s%s%s</h2>' % (hid, predok, cisty, link))
        vystup.append(telo)
    if otvorena:
        vystup.append("</section>\n")

    _bez_emoji_v_toc(page.toc.items)
    return "".join(vystup)


def _bez_emoji_v_toc(polozky):
    for p in polozky:
        p.title = _bez_emoji(p.title)
        _bez_emoji_v_toc(p.children)
