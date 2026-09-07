# Roadmapa

Checklist funkcií projektu — čo je hotové a čo čaká. Bez dátumov (históriu drží git). Súbor je verejný — žiadne interné dohody. Detail rozpracovaných vecí je v CURRENT.md, zadanie v SPEC.md.

## Obsah predmetu

- [x] Štruktúra dráhy: 12 blokov v 4 častiach podľa osnovy semestrálneho projektu
- [x] Úvodná stránka s dráhou predmetu (hero, kroky, karty častí, zoznam zručností)
- [x] Komiksová infografika dráhy predmetu na úvodnej stránke
- [x] Časť 1 — Firma a infraštruktúra, bloky 1–3 (firma a sortiment, tabuľka 10 poskytovateľov pripojenia, tabuľka 10 hostingov so záložkami WooCommerce/Webnode)
- [x] Časť 2 — Stavba e-shopu, bloky 4–7 (základ e-shopu, produkty, košík s dopravou a platbami, povinné stránky; záložky WooCommerce/Webnode)
- [x] Časť 3 — Reklama, bloky 8–9 (bannery a výmena reklamy, ďalšia forma reklamy a meranie)
- [x] Záver, bloky 10–12 (odovzdanie projektu, obhajoby, hodnotenie spolužiakov)
- [x] Box „AI v tomto bloku" s promptom a kontrolou v každom bloku
- [x] Box „Ako je to v praxi" (náklady a výhody platených riešení) v každom bloku
- [x] Znalostná báza — 7 stránok (semestrálny projekt a hodnotenie, tabuľka 10 poskytovateľov, internet a DNS, AI v predmete, WordPress a WooCommerce, Webnode, offline kópia webu)
- [x] Hodnotenie 40 b a pravidlá odovzdávania (na webe)
- [x] Šablóny na stiahnutie (dokument projektu, Excel tabuľka poskytovateľov, protokol testu nákupu, formulár na odstúpenie, hodnotenie spolužiakov)
- [x] Vzorový príklad jednej firmy naprieč blokmi (Kávová pražiareň Zrnko: vzorový referát, tabuľka a protokol)

## Web

- [x] Kostra MkDocs Material, slovenská lokalizácia, navigácia po častiach
- [x] Vlastný dizajn podľa style guidu predmetov (petrolejová + koralová, fonty, svetlý/tmavý režim)
- [x] Kopírovanie promptov aj pri lokálnom otvorení HTML (file://)
- [x] Stránka ochrany súkromia + odkaz v pätičke
- [x] Build bez warningov (`mkdocs build --strict`)
- [x] Príprava PDF archívu celého webu (plugin print-site, postup v README)
- [x] Analytika Umami — website založená, ID v `umami.js`

## Nasadenie

- [x] Verejný GitHub repozitár (interné súbory mimo repa)
- [x] GitHub Pages (vetva `gh-pages`)
- [x] Automatické nasadenie cez GitHub Actions pri pushi do `main` (strict build)
- [x] Súbor `docs/CNAME` pre doménu eo.fabus.eu
- [x] DNS záznam eo.fabus.eu
- [x] HTTPS na vlastnej doméne (vynútené)
- [x] Návod pre spoluautorov v README (úprava cez GitHub bez lokálnej inštalácie)

## Pre vyučujúceho

- [ ] Sylabus 12 cvičení (interný, mimo webu)
- [ ] Checklist nastavenia Moodle (interný, mimo repa)
- [x] Kritériá hodnotenia projektu a rubrika hodnotenia spolužiakov (na webe)
