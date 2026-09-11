# Roadmapa

Checklist funkcií projektu — čo je hotové a čo čaká. Bez dátumov (históriu drží git). Súbor je verejný — žiadne interné dohody. Detail rozpracovaných vecí je v CURRENT.md, zadanie v SPEC.md.

## Obsah predmetu

- [x] Štruktúra dráhy: 12 blokov v 4 častiach podľa osnovy semestrálneho projektu
- [x] Úvodná stránka ako dashboard (komiks, dráha 12 blokov, karty častí, zoznam zručností, tri boxy)
- [x] Hlavička každého bloku s pozíciou v dráhe a odkazmi na susedné bloky
- [x] Časť 1 — Firma a infraštruktúra, bloky 1–3 (firma a sortiment, tabuľka 10 poskytovateľov pripojenia, tabuľka 10 hostingov so záložkami WooCommerce/Webnode)
- [x] Časť 2 — Stavba e-shopu, bloky 4–7 (základ e-shopu, produkty, košík s dopravou a platbami, povinné stránky; záložky WooCommerce/Webnode)
- [x] Časť 3 — Reklama, bloky 8–9 (bannery a výmena reklamy, blok 9 je nadplán s prehľadom ďalších foriem reklamy a merania)
- [x] Záver, bloky 10–12 (odovzdanie projektu, obhajoby, hodnotenie spolužiakov)
- [x] Karty „Pozri si teóriu" v blokoch 1–5 (zväčšenie kliknutím, kopírovanie promptu z karty)
- [x] Box „AI v tomto bloku" s promptom a kontrolou v každom bloku
- [x] Box „Ako je to v praxi" (náklady a výhody platených riešení) v každom bloku
- [x] Znalostná báza — 9 stránok (semestrálny projekt a hodnotenie, tabuľka 10 poskytovateľov, internet a DNS, AI v predmete, logo a produktové foto pomocou AI, WordPress a WooCommerce, Webnode, offline kópia webu, šablóny na stiahnutie)
- [x] Hodnotenie 40 b a pravidlá odovzdávania (na webe)
- [x] Šablóny na stiahnutie pre bloky 1–3 (identifikácia firmy, tabuľka poskytovateľov internetu, tabuľka free hostingov so vzorcom)
- [ ] Šablóny pre ďalšie bloky (protokol testu nákupu, formulár na odstúpenie, hodnotenie spolužiakov)
- [ ] Vzorová firma Kávová pražiareň Zrnko naprieč všetkými blokmi (zatiaľ v blokoch 4 a 5)
- [ ] Karty teórie o internete a doméne aj na stránke Internet, doména a DNS

## Web

- [x] Kostra MkDocs Material, slovenská lokalizácia, navigácia po častiach
- [x] Vlastný dizajn podľa style guidu predmetov (petrolejová + koralová, fonty, svetlý/tmavý režim)
- [x] Vizuálna vrstva redizajnu: šablóny `overrides/`, hook `hooks/eo_bloky.py`, komponenty v `komponenty.css`
- [x] Fade-in sekcií dashboardu s ohľadom na `prefers-reduced-motion`
- [x] Brána so spoločným heslom (SHA-256 v prehliadači), vypnutá v konfigurácii
- [x] Nadpis úvodnej stránky čitateľný pre čítačky, komiks s popisným alt textom
- [x] Kopírovanie promptov aj pri lokálnom otvorení HTML (file://)
- [x] Stránka ochrany súkromia + odkaz v pätičke
- [x] Build bez warningov (`mkdocs build --strict`)
- [x] Príprava PDF archívu celého webu (plugin print-site, postup v README)
- [x] Analytika Umami — website založená, ID v `umami.js`
- [ ] Skrytý komiks sa na mobile nesťahuje (lazy loading alebo `<picture>`)

## Nasadenie

- [x] Verejný GitHub repozitár (interné súbory mimo repa)
- [x] GitHub Pages (vetva `gh-pages`)
- [x] Automatické nasadenie cez GitHub Actions pri pushi do `main` (strict build)
- [x] Súbor `docs/CNAME` pre doménu eo.fabus.eu
- [x] DNS záznam eo.fabus.eu
- [x] HTTPS na vlastnej doméne (vynútené)
- [x] Návod pre spoluautorov v README (úprava cez GitHub bez lokálnej inštalácie)

## Pre vyučujúceho

- [x] Sylabus 12 cvičení (interný, mimo webu)
- [ ] Checklist nastavenia Moodle (interný, mimo repa)
- [x] Kritériá hodnotenia projektu a rubrika hodnotenia spolužiakov (na webe)
