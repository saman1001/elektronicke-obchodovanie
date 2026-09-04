# Blok 9 — Reklama a meranie

Banner je jedna forma. Skutočný e-shop kombinuje viaceré — a vyberá ich podľa toho, **kde je jeho zákazník**. V tomto bloku si vyberieš **ďalšiu formu internetovej reklamy**, ktorá sa hodí práve pre tvoju firmu, a vytvoríš ju. A naučíš sa to, bez čoho je každá reklama len pocit: **merať**, koľko ľudí prišlo, odkiaľ a čo urobili.

## 🎯 Čo sa v tomto bloku naučíš

- Prehľad foriem internetovej reklamy, čo stoja a kedy sa ktorá hodí.
- Vybrať formu podľa zákazníka z bloku 1, nie podľa toho, čo je populárne.
- Vytvoriť jednu formu reklamy zadarmo: sociálne siete, základy SEO alebo newsletter.
- Zapnúť meranie a čítať tri základné čísla: návštevy, zdroj, konverzia.

## Krok 1 — Formy reklamy a čo stoja 🗺️

| Forma | Čo to je | Čo stojí v praxi | Kedy sa hodí | Čo z toho vieš zadarmo |
|---|---|---|---|---|
| **SEO** | aby ťa našiel vyhľadávač bez platenia | čas alebo agentúra (stovky eur mesačne) | dlhodobo, produkty, ktoré ľudia hľadajú | titulky, popisy, nadpisy, alt texty, rýchlosť |
| **PPC vo vyhľadávači** (Google Ads) | platená pozícia na kľúčové slovo | platíš za klik, na Slovensku rádovo desiatky centov až eurá za klik | okamžitý dopyt, sezóna | len teória — bez karty nejde |
| **Porovnávače cien** (Heureka, Pricemania) | zápis produktov, platba za klik | rádovo desiatky centov za klik + feed | tovar, ktorý sa porovnáva podľa ceny | len teória — vyžadujú reálny e-shop |
| **Sociálne siete** (Instagram, Facebook, TikTok) | profil firmy, príspevky, platená propagácia | organicky zadarmo; platená od pár eur denne | vizuálny tovar, lokálna značka, komunita | profil + príspevky |
| **E-mail marketing** | newsletter registrovaným zákazníkom | nástroje zadarmo do stoviek kontaktov | opakované nákupy, spotrebný tovar | prihlasovací formulár + prvý newsletter |
| **Influenceri, affiliate** | platba za odporúčanie alebo podiel z predaja | od produktu zadarmo po tisíce eur | značka, životný štýl | len teória |
| **Firemný profil na mape** (Google Business Profile) | zápis firmy vo vyhľadávaní a mapách | zadarmo | firma s predajňou alebo odberným miestom | vyžaduje overenie reálnej firmy — len ak je reálna |

## Krok 2 — Vyber jednu formu a zdôvodni ✍️

Vráť sa k zákazníkovi z bloku 1: kde trávi čas, ako hľadá, kupuje raz alebo opakovane? Vyber **jednu** formu, ktorú vieš urobiť zadarmo (SEO, sociálne siete alebo newsletter), a napíš zdôvodnenie na 3–5 viet. Zvyšné formy len porovnaj v tabuľke v dokumente — vrátane toho, čo by stáli.

## Krok 3 — Vytvor ju 🛠️

=== "Sociálne siete"

    1. Založ **firemný profil** (Instagram alebo Facebook stránka; pri fiktívnej firme použi názov firmy a jej e-mail, do popisu „študentský projekt").
    2. Profil: logo, krátky popis, **odkaz na e-shop**.
    3. Priprav **3 príspevky**: produkt (fotka z bloku 5 + jedna veta pre koho a prečo), príbeh firmy (z bloku 1), ponuka s výzvou (odkaz na produkt). Publikuj aspoň jeden, ostatné môžeš naplánovať.
    4. Do odkazov pridaj **UTM parametre** (krok 4), aby si videl, koľko ľudí zo siete prišlo.

=== "Základy SEO"

    Cieľ: aby vyhľadávač pochopil, čo predávaš, a zobrazil ťa na správne hľadanie.

    1. **Titulok a popis každej stránky a produktu** (title do 60 znakov, meta description do 155): názov produktu + značka, popis s výhodou. WooCommerce: bezplatný plugin *Yoast SEO* alebo *Rank Math*; Webnode: nastavenia SEO pri každej stránke.
    2. **Nadpisy:** jeden H1 na stránke (názov produktu), podnadpisy H2.
    3. **Alt texty** pri všetkých fotkách (blok 5).
    4. **Rýchlosť:** skomprimované fotky, žiadne zbytočné pluginy. Zmeraj v PageSpeed Insights (zadarmo) a zapíš skóre.
    5. **Sitemap:** plugin ju vytvorí sám (WooCommerce), Webnode ju má; over, že `tvoja-adresa/sitemap.xml` existuje.
    6. Napíš 5 **kľúčových slov**, na ktoré by ťa mal zákazník nájsť, a over v Google, kto sa na ne zobrazuje dnes — to je tvoja konkurencia v SEO.

=== "Newsletter"

    1. **Nástroj zadarmo:** WooCommerce: plugin *MailPoet* (bezplatný do stoviek kontaktov); Webnode: vstavaný formulár + externý nástroj (napr. Mailchimp free) alebo blok newsletter, ak ho plán ponúka.
    2. **Prihlasovací formulár** na úvodnú stránku a do pätičky: čo za prihlásenie dostane („nové produkty raz mesačne, žiadny spam") a **súhlas** so spracovaním e-mailu (GDPR — odkaz na stránku z bloku 7).
    3. Napíš **prvý newsletter**: uvítanie, 1 produkt, 1 odkaz s UTM parametrom. Pošli ho testovacím kontaktom (ty, spolužiak).
    4. V dokumente opíš, ako často by firma posielala a čo by v ňom bolo.

## Krok 4 — Meranie 📈

Reklama bez merania je pocit. Tri čísla, ktoré potrebuješ: **koľko ľudí prišlo**, **odkiaľ** a **koľko z nich nakúpilo** (konverzný pomer = objednávky / návštevy).

**1. Štatistiky, ktoré už máš.** WooCommerce → Analytika ukazuje objednávky a tržby; návštevnosť pridá bezplatný plugin (napr. *Jetpack Stats* alebo jednoduchý *Koko Analytics*, ktorý nepotrebuje súhlas s cookies). Webnode má základné štatistiky návštevnosti v administrácii (rozsah podľa plánu).

**2. UTM parametre — meranie zdrojov zadarmo.** Ku každému odkazu, ktorý dáš mimo e-shopu (banner, príspevok, newsletter), pripoj značku:

```text
https://tvoj-eshop.xy/produkt/kava-etiopia?utm_source=instagram&utm_medium=social&utm_campaign=jesen
```

Štatistiky potom ukážu, koľko návštev prišlo z `instagram`. Odkaz na banner spolužiaka označ `utm_source=partner`. Na skrátenie použi skracovač (napr. Bitly, zadarmo) — ten navyše počíta kliky sám.

**3. Google Analytics 4** je zadarmo a najpoužívanejší, ale používa cookies — potreboval by si súhlasovú lištu (blok 7). Pre projekt nie je povinný; ak ho zapneš, lištu pridaj a do dokumentu napíš prečo.

Po týždni zapíš do dokumentu: návštevy, tri najväčšie zdroje, kliky na banner partnera, počet (testovacích) objednávok. Malé čísla sú v poriadku — ide o to, že ich **vieš zistiť a interpretovať**.

!!! tip "AI v tomto bloku"
    **Čo jej zveriť:** návrhy príspevkov, titulkov a popisov pre SEO alebo text newslettera — z tvojich faktov.

    ```text
    Pre e-shop [firma] ([sortiment], zákazník [kto]) napíš 3 príspevky na [Instagram/Facebook]: 1) predstavenie produktu [názov, 2 fakty], 2) príbeh firmy [3 fakty z bloku 1], 3) ponuka s výzvou na akciu. Každý max. 60 slov, slovensky, tón [vyber], 3–5 relevantných hashtagov, bez emoji spamu. Nevymýšľaj zľavy ani vlastnosti, ktoré som neuviedol.
    ```

    **Čo si overiť:** žiadne vymyslené zľavy, recenzie ani tvrdenia o produkte; hashtagy v slovenčine a relevantné; titulky pre SEO v limite znakov. Príspevky uprav do svojho hlasu.

!!! note "Ako je to v praxi"
    Rozpočet malého slovenského e-shopu na reklamu sa počíta v **stovkách eur mesačne** a väčšina ide do **PPC** (Google Ads, Heureka) a **sociálnych sietí**, kde sa platí za klik alebo zobrazenie. Kľúčové číslo je **návratnosť (ROAS)**: koľko eur tržieb prinesie euro reklamy — kampaň, ktorá vráti menej než náklady na tovar a dopravu, sa vypne. Preto firmy merajú všetko: každý odkaz má UTM, každá objednávka zdroj. **Agentúra** na správu kampaní stojí ďalšie stovky eur mesačne; SEO je najlacnejšie na klik, ale výsledky prídu po mesiacoch. A newsletter má stále najlepší pomer ceny a výnosu — píše sa ľuďom, ktorí už nakúpili.

## ✅ Výstup bloku

- [ ] Vybraná a vytvorená druhá forma reklamy (profil s príspevkami, SEO nastavenia alebo newsletter s formulárom) s odkazmi na e-shop s UTM parametrami.
- [ ] Zapnuté meranie a prvé čísla zapísané v dokumente.
- [ ] Kapitola 5 dokumentu: porovnanie foriem s cenami v praxi, zdôvodnenie výberu, snímky obrazovky, namerané čísla a ich interpretácia.

Kritérium hodnotenia: druhá polovica **Využitie foriem internetovej reklamy (4 b)**.
