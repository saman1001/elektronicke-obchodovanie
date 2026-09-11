# Elektronické obchodovanie — zdroj predmetu

Materiál predmetu **Elektronické obchodovanie** pre študentov programu Elektronický obchod a manažment (FPEDAS UNIZA).
Postavený na [MkDocs Material](https://squidfunk.github.io/mkdocs-material/), rovnakým štýlom ako predmet
[Návrh a tvorba webových stránok](https://tvorbawww.fabus.eu).

Web predmetu: **https://eo.fabus.eu**

## Štruktúra

Predmet je jedna dráha cez 12 blokov (číslo cvičenia = číslo bloku) podľa osnovy semestrálneho projektu: študent si vyberie **firmu**, nájde jej **pripojenie a hosting**, postaví **e-shop s košíkom**, spraví mu **reklamu** a projekt **obháji**. Dve skupiny študentov stavajú na rôznych nástrojoch (WordPress + WooCommerce, Webnode) — na webe sa líšia len záložkami v blokoch 3–7.

- **Časť 1 — Firma a infraštruktúra** (`docs/01-firma-a-infrastruktura/`) — bloky 1–3: firma a sortiment, tabuľka 10 poskytovateľov pripojenia, tabuľka 10 free hostingov.
- **Časť 2 — Stavba e-shopu** (`docs/02-stavba-eshopu/`) — bloky 4–7: základ e-shopu, produkty, košík s dopravou a platbami, povinné stránky.
- **Časť 3 — Reklama** (`docs/03-reklama/`) — bloky 8–9: bannery a výmena reklamy. Blok 9 je nadplán s prehľadom ďalších foriem reklamy a merania, bez povinného výstupu.
- **Záver** (`docs/04-zaver/`) — bloky 10–12: odovzdanie projektu, obhajoby a hodnotenie spolužiakov.
- **Znalostná báza** (`docs/znalostna-baza/`) — návody, na ktoré bloky odkazujú: semestrálny projekt a hodnotenie, metóda tabuľky 10 poskytovateľov, internet a DNS, AI v predmete, logo a produktové foto pomocou AI, WordPress a WooCommerce, Webnode, offline kópia webu, šablóny na stiahnutie.
- **Vizuálna vrstva** — šablóny `overrides/` (dashboard, hlavička bloku, dráha 12 blokov), hook `hooks/eo_bloky.py` (zostaví dráhu z front matter blokov a pri builde obalí sekcie blokov do kariet), štýly `docs/stylesheets/` a karty infografík `snippets/infografiky/` (vkladajú sa do blokov cez `--8<-- "infografiky/blok-2.html"`).
- **Sylabus cvičení** (`SYLABUS-CVICENIA.md`) — metodická príručka pre vyučujúceho; je mimo `docs/`, takže sa nedostane do webu pre študentov.
- **Roadmapa** (`ROADMAP.md`) — checklist, čo je hotové a čo čaká.
- **Stav projektu** (`CURRENT.md`) — interný snapshot stavu pre vývoj; spolu so zadaním (`SPEC.md`) je mimo repozitára.
- **Podklady** (`podklady/`) — pôvodné materiály vyučujúceho, z ktorých vznikol obsah; nejdú do webu ani do repozitára.

Každý blok má rovnakú kostru: čo sa naučíš, v blokoch 1–5 karty **„Pozri si teóriu"**, kroky, box **„AI v tomto bloku"** (čo zveriť AI, prompt, čo overiť), box **„Ako je to v praxi"** (koľko to stojí firmy a čo za to dostanú) a výstup bloku s odkazom na kritérium hodnotenia. Všetky nástroje pre študentov sú zadarmo.

## Ako si materiál pozrieť lokálne

Potrebuješ Python. V priečinku `elektronicke_obchodovanie`:

```bash
pip install mkdocs==1.6.1 mkdocs-material==9.7.7 mkdocs-print-site-plugin==2.8
mkdocs serve
```

Verzie sú rovnaké ako v deploy workflow, aby lokálny náhľad zodpovedal webu online.

Potom otvor `http://127.0.0.1:8000` v prehliadači. Pri každej zmene `.md` súboru sa web sám obnoví.
(Ak príkaz `mkdocs` nie je v PATH, použi `python -m mkdocs serve` / `python -m mkdocs build`.)

## Ako materiál vydať online

Web beží na GitHub Pages s vlastnou doménou **https://eo.fabus.eu** (súbor `docs/CNAME`).
Nasadenie je automatické: každý push do vetvy `main` spustí workflow `.github/workflows/deploy.yml`,
ktorý web zostaví (`mkdocs build --strict`) a nahrá do vetvy `gh-pages`. Do pár minút je zmena online;
priebeh vidíš v záložke **Actions** na GitHube. Ak build zlyhá (typicky rozbitý odkaz), web ostane
v poslednej funkčnej verzii a pri commite svieti červený krížik.

Ručné nasadenie z PC (záloha, keď workflow nejde):

```bash
python -m mkdocs gh-deploy --force   # build + nasadenie na GitHub Pages (vetva gh-pages)
mkdocs build                          # len lokálny build do site/ (dá sa otvoriť dvojklikom)
```

## Ako prispievať (pre spoluautorov)

Python ani MkDocs netreba — stačí GitHub v prehliadači:

1. Otvor súbor v `docs/` na GitHube a klikni na ceruzku (**Edit**).
2. Uprav text a potvrď **Commit changes** priamo do `main`.
3. Workflow web nasadí sám; o pár minút skontroluj výsledok na https://eo.fabus.eu.

Kde čo je:

- **Nástroje AI:** `docs/znalostna-baza/ai-v-predmete.md` (sekcia „Zadarmo") a box **„AI v tomto bloku"**
  v každom bloku (`docs/0*/blok-*.md`) — tam patrí konkrétny nástroj a prompt pre daný krok.
- **Boxy a záložky** používajú syntax Material for MkDocs (`!!! tip "Nadpis"`, `=== "WooCommerce"`);
  najjednoduchšie je skopírovať existujúci box a prepísať obsah.
- **Novú stránku** pridaj do `nav:` v `mkdocs.yml`, inak sa nezobrazí v menu.
- **Nový blok** dostane na začiatku súboru front matter `blok: N` a `cast: N` (prípadne `ikony: [...]` s názvami
  ikon z `docs/img/ikony/` pre nadpisy krokov). Dráha na úvodnej stránke a hlavička bloku sa z toho zostavia samy.
  Sekcie „Čo sa v tomto bloku naučíš", „Pozri si teóriu" a „Výstup bloku" spozná web podľa textu nadpisu,
  boxy „AI v tomto bloku" a „Ako je to v praxi" podľa titulku.

## Brána s heslom

Web je verejný, brána je pripravená a vypnutá (`extra.gate_enabled: false`). Ak by mal byť web len
pre študentov, heslo sa overuje len v prehliadači (SHA-256 cez `crypto.subtle`) a v repozitári je iba
jeho hash v `mkdocs.yml` (`extra.gate_hash`). Brána odradí náhodného návštevníka a vyhľadávače,
obsah nechráni: HTML je vo verejnom repozitári.

Zapnutie alebo zmena hesla:

```bash
printf '%s' 'nove-heslo' | shasum -a 256      # vypíše hash, ten skopíruj do extra.gate_hash
```

Hash zapíš do `extra.gate_hash` a prepni `extra.gate_enabled: true`. Hodnota `false` bránu vypne bez
mazania kódu. Stránka ochrany súkromia (front matter
`gate: false`) a `print_page.html` bránu nemajú. Po správnom hesle si prehliadač zapamätá hash
v `localStorage` (kľúč `eo-gate`), takže sa pýta znova až po zmene hesla.

## PDF archív semestra

Plugin `print-site` spája celý web do `site/print_page.html`. Na konci semestra z nej vyrob archívne PDF
(napr. do `_archiv/`, ktorý sa nekomituje): otvor stránku v prehliadači a **Ctrl+P → uložiť ako PDF**,
alebo bez klikania:

```bash
mkdocs build
chrome --headless --no-pdf-header-footer --print-to-pdf="_archiv/eo-archiv-RRRR-MM-DD.pdf" site/print_page.html
```
