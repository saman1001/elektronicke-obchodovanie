# Elektronické obchodovanie — zdroj predmetu

Materiál predmetu **Elektronické obchodovanie** pre študentov programu Elektronický obchod a manažment (FPEDAS UNIZA).
Postavený na [MkDocs Material](https://squidfunk.github.io/mkdocs-material/), rovnakým štýlom ako predmet
[Návrh a tvorba webových stránok](https://tvorbawww.fabus.eu).

Web predmetu: **https://eo.fabus.eu**

## Štruktúra

Predmet je jedna dráha cez 12 blokov (číslo cvičenia = číslo bloku) podľa osnovy semestrálneho projektu: študent si vyberie **firmu**, nájde jej **pripojenie a hosting**, postaví **e-shop s košíkom**, spraví mu **reklamu** a projekt **obháji**. Dve skupiny študentov stavajú na rôznych nástrojoch (WordPress + WooCommerce, Webnode) — na webe sa líšia len záložkami v blokoch 3–7.

- **Časť 1 — Firma a infraštruktúra** (`docs/01-firma-a-infrastruktura/`) — bloky 1–3: firma a sortiment, tabuľka 10 poskytovateľov pripojenia, tabuľka 10 free hostingov.
- **Časť 2 — Stavba e-shopu** (`docs/02-stavba-eshopu/`) — bloky 4–7: základ e-shopu, produkty, košík s dopravou a platbami, povinné stránky.
- **Časť 3 — Reklama** (`docs/03-reklama/`) — bloky 8–9: bannery a výmena reklamy, ďalšia forma reklamy a meranie.
- **Záver** (`docs/04-zaver/`) — bloky 10–12: odovzdanie projektu, obhajoby a hodnotenie spolužiakov.
- **Znalostná báza** (`docs/znalostna-baza/`) — návody, na ktoré bloky odkazujú: semestrálny projekt a hodnotenie, metóda tabuľky 10 poskytovateľov, internet a DNS, AI v predmete, WordPress a WooCommerce, Webnode, offline kópia webu.
- **Sylabus cvičení** (`SYLABUS-CVICENIA.md`) — metodická príručka pre vyučujúceho; je mimo `docs/`, takže sa nedostane do webu pre študentov.
- **Roadmapa** (`ROADMAP.md`) — checklist, čo je hotové a čo čaká.
- **Stav projektu** (`CURRENT.md`) — interný snapshot stavu pre vývoj; spolu so zadaním (`SPEC.md`) je mimo repozitára.
- **Podklady** (`podklady/`) — pôvodné materiály vyučujúceho, z ktorých vznikol obsah; nejdú do webu ani do repozitára.

Každý blok má rovnakú kostru: čo sa naučíš, kroky, box **„AI v tomto bloku"** (čo zveriť AI, prompt, čo overiť), box **„Ako je to v praxi"** (koľko to stojí firmy a čo za to dostanú) a výstup bloku s odkazom na kritérium hodnotenia. Všetky nástroje pre študentov sú zadarmo.

## Ako si materiál pozrieť lokálne

Potrebuješ Python. V priečinku `elektronicke_obchodovanie`:

```bash
pip install mkdocs-material mkdocs-print-site-plugin
mkdocs serve
```

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

## PDF archív semestra

Plugin `print-site` spája celý web do `site/print_page.html`. Na konci semestra z nej vyrob archívne PDF
(napr. do `_archiv/`, ktorý sa nekomituje): otvor stránku v prehliadači a **Ctrl+P → uložiť ako PDF**,
alebo bez klikania:

```bash
mkdocs build
chrome --headless --no-pdf-header-footer --print-to-pdf="_archiv/eo-archiv-RRRR-MM-DD.pdf" site/print_page.html
```
