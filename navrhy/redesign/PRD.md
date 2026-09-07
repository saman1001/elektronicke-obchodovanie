# PRD — Redizajn webu predmetu Elektronické obchodovanie

Stav: schválené zadanie, pripravené na implementačný plán.
Dátum: 7. 9. 2026.
Súvisiace dokumenty: [VISION.md](VISION.md) (dizajnový smer a špecifikácia infografík), [AGENTS.md](AGENTS.md) (pravidlá pre agenta pracujúceho v repozitári).

## 1. Zhrnutie

Web https://eo.fabus.eu (MkDocs Material, GitHub Pages) dostane novú vizuálnu vrstvu: úvodná stránka sa zmení na dashboard predmetu, každý blok dostane jednotnú hlavičku s progresom, do blokov 2 až 5 pribudnú infografiky v jednotnom štýle vytvorené v Claude Design, v Znalostnej báze pribudne stránka o tvorbe loga a produktového fota pomocou AI a web dostane jednoduchú prihlasovaciu bránu v JavaScripte. Obsah, štruktúra navigácie, URL adresy a nástroj MkDocs ostávajú.

## 2. Východiská

- Web má 20 stránok v Markdowne: úvod, 4 časti s 11 stránkami blokov (blok 11 a 12 sú na jednej stránke), 7 stránok Znalostnej báze, ochrana súkromia. Štruktúra je v `mkdocs.yml` v sekcii `nav`.
- Vizuálna vrstva je dnes len `docs/stylesheets/extra.css` (355 riadkov, style guide predmetov: petrolejová + koralová, Bricolage Grotesque na nadpisy, IBM Plex Sans a IBM Plex Mono) a HTML v `docs/index.md` (hero, 4 kroky, karty častí).
- Nasadenie: GitHub Actions (`.github/workflows/deploy.yml`) pri pushi do `main` spustí `mkdocs gh-deploy --force --strict --no-history`. Workflow sa spúšťa len pri zmene `docs/**`, `mkdocs.yml` a samotného workflow.
- `use_directory_urls: false`, takže stránky sú `blok-2-pripojenie-do-internetu.html` a web sa dá otvoriť aj z disku (`file://`).
- Plugin `print-site` generuje `print_page.html` na PDF archív. Analytika Umami (`docs/javascripts/umami.js`), kopírovanie promptov pri `file://` (`docs/javascripts/copy-lokalne.js`).
- Podklady k novému obsahu sú v `navrhy/infografiky/` (4 PNG a 2 videá z NotebookLM, osnova sekcie o logu v `ELEKTRONICKE OBCHODOVANIE.md`). Priečinok nie je v gite a nebude.
- Pôvodný návrh redizajnu je v `navrhy/navrh_redizajnu_mkdocs_edukacny_web.md`. Jeho mapa predmetu s 5 oblasťami (Základy, UX, Návrh, Realizácia, Obhajoba) sa nepoužije; dashboard mapuje existujúce 4 časti a 12 blokov.

## 3. Ciele

1. Študent na úvodnej stránke do 10 sekúnd pochopí, že predmet je jedna dráha 12 blokov v 4 častiach, a jedným klikom sa dostane do ktoréhokoľvek bloku.
2. Na každej stránke bloku študent vidí, kde v dráhe je (časť, číslo bloku, čo bolo pred ním a čo nasleduje).
3. Pojmy z blokov 2 a 3 (internet, pripojenie, doména, hosting, DNS) a z blokov 4 a 5 (logo, produktový popis, produktové foto) sú vysvetlené aj vizuálne, infografikou v jednotnom štýle predmetu.
4. Študent má návod, ako si pomocou AI vytvoriť logo a produktové foto.
5. Web pôsobí ako digitálna učebnica, nie ako technická dokumentácia, a pritom ostáva MkDocs s obsahom v Markdowne.
6. Web je za spoločným heslom pre skupinu študentov.

## 4. Neciele

- Žiadne používateľské účty, sledovanie individuálneho progresu, odovzdávanie úloh cez web ani databáza. Administratíva ostáva v Moodle.
- Žiadny prepis obsahu blokov do novej sedemdielnej osnovy z pôvodného návrhu. Obsah sa upravuje len tam, kde pribúda nový materiál (bloky 2 až 5).
- Žiadna zmena nástrojov: ostáva MkDocs Material, GitHub Pages, GitHub Actions, Umami, print-site.
- Žiadne vloženie videí z NotebookLM na web. Slúžia len ako podklad pre infografiky.
- Žiadny parallax, žiadne animácie, ktoré by rozptyľovali od čítania.
- Žiadny prechod na Next.js ani inú platformu.

## 5. Používatelia

- **Študent** (10 až 15 osôb na skupinu, dve skupiny: WooCommerce a Webnode). Otvára web na notebooku na cvičení a na mobile doma. Potrebuje rýchlo nájsť aktuálny blok a vedieť, čo má odovzdať.
- **Vyučujúci.** Upravuje obsah v Markdowne cez GitHub, nechce sa dotýkať HTML ani CSS. Mení heslo raz za semester.
- **Spoluautor obsahu.** Pridáva stránky podľa README bez lokálnej inštalácie.

## 6. Čo sa nemení

- Obsah všetkých existujúcich stránok okrem cielených doplnení opísaných v F5.
- Poradie a názvy položiek v `nav`, názvy súborov, `use_directory_urls: false`, URL adresy.
- Záložky WooCommerce a Webnode v blokoch 3 až 7.
- Farebné tokeny, fonty a princíp „hĺbku tvoria okraje, nie tiene" zo style guidu predmetov. Existujúce tokeny `--tw-*` v `extra.css` sú základ, nové komponenty ich používajú.
- Svetlý aj tmavý režim.
- Plugin `print-site`, Umami, `copy-lokalne.js`, stránka ochrany súkromia.
- Automatické nasadenie cez GitHub Actions.

## 7. Funkčné požiadavky

### F1 Dashboard (úvodná stránka)

Úvodná stránka `docs/index.md` sa vykresľuje vlastnou šablónou `overrides/home.html` (front matter `template: home.html`), bez ľavej navigácie a bez obsahu strany. Sekcie zhora nadol:

1. **Hero.** Nadpis (existujúci text „Od nápadu na predaj produktu alebo služby po funkčný e-shop — za jeden semester."), perex, dve tlačidlá: „Začni blokom 1" (primárne) a „Znalostná báza". Pod tlačidlami riadok faktov: `4 časti · 12 blokov · projekt za 40 bodov`.
2. **Tvoja cesta predmetom.** Horizontálna dráha 12 očíslovaných bodov zoskupených do 4 segmentov (časti). Každý bod je odkaz na stránku bloku a má názov bloku (na mobile sa dráha zlomí do 4 riadkov po častiach). Body 11 a 12 vedú na spoločnú stránku obhajob.
3. **Karty častí.** Štyri veľké karty v mriežke 2 × 2 (na mobile pod sebou). Karta má číslo časti, názov, jednu vetu „Čo sa naučíš", zoznam blokov časti ako odkazy a tlačidlo „Otvoriť časť". Texty sa preberú z existujúcich kariet v `index.md`.
4. **Čo budeš na konci semestra vedieť.** Existujúci zoznam so 7 položkami a fajkami.
5. **Tri boxy.** Existujúce admonition boxy „Dve skupiny, jeden web", „Všetko zadarmo", „AI v každom bloku" bez zmeny textu.

Komiksová infografika `docs/img/eshop-za-jeden-semester.jpg` sa z úvodnej stránky odstráni (súbor ostáva v repozitári, kým sa nerozhodne inak).

Texty dashboardu ostávajú v `docs/index.md` (Markdown a HTML s `markdown` atribútom), šablóna dodáva len rozloženie a dráhu. Dráha a karty sa generujú zo zoznamu blokov (pozri F2), nie z ručne písaného HTML.

### F2 Hlavička a štruktúra stránky bloku

Každá stránka bloku dostane front matter s metadátami:

```yaml
---
blok: 2
cast: 1
---
```

Stránka obhajob má `blok: 11` a `blok_do: 12`. Stránky prehľadov častí (`index.md` v priečinkoch častí) majú len `cast`.

Šablóna `overrides/main.html` (rozširuje `base.html` Materialu) vykreslí nad obsahom stránok s `blok` hlavičku:

- názov časti a „Blok 2 z 12" (pri obhajobách „Bloky 11–12 z 12"),
- mini dráha 12 bodov s aktuálnym zvýrazneným,
- odkazy na predchádzajúci a nasledujúci blok (názov bloku, nie „Ďalej").

Zoznam blokov (číslo, názov, URL, časť) šablóna zostaví z `nav.pages` podľa metadát `blok` a `cast`, takže dashboard aj hlavička majú jeden zdroj pravdy a nový blok stačí pridať do `nav` s front matter.

Existujúce sekcie blokov dostanú vizuálnu úpravu cez CSS bez zmeny Markdownu:

- sekcia „Čo sa v tomto bloku naučíš" ako zvýraznená karta,
- nadpisy `## Krok N` s veľkým číslom vľavo (CSS podľa textu nadpisu nie je možné, preto sa použije `attr_list`: každý nadpis kroku dostane atribút `{ .krok }`; agent ho doplní do všetkých blokov),
- box „AI v tomto bloku" a box „Ako je to v praxi" s vlastnou ikonou (rozlíšené titulkom admonition cez selektor `.admonition.tip` s triedou `ai` a `.admonition.note` s triedou `prax`, doplní sa do Markdownu ako `!!! tip ai "AI v tomto bloku"`),
- sekcia „Výstup bloku" ako karta s checklistom.

Nová voliteľná sekcia **„Pozri si najprv"** hneď za sekciou „Čo sa naučíš": infografika s krátkym popisom a odkazom na plnú veľkosť. Pridá sa do blokov 2, 3, 4 a 5 (F3).

### F3 Infografiky

Šesť infografík vytvorených v Claude Design v jednotnom štýle podľa [VISION.md](VISION.md), časť „Infografiky". Exportujú sa ako PNG šírky 2400 px (pomer 16 : 9) do `docs/img/infografiky/`:

| Súbor | Blok | Obsah |
|---|---|---|
| `02-ako-cestuju-data.png` | 2 | čo je internet, IP a TCP, DNS, HTTP a HTTPS, ďalšie protokoly |
| `02-pripojenie-a-rychlost.png` | 2 | typy pripojenia, Mbit/s, upload vs. download, odporúčaná rýchlosť podľa činnosti firmy |
| `03-dom-eshopu.png` | 3 | hosting = pozemok, doména = adresa, e-shop = obsah, anatómia domény, subdoména na free hostingu |
| `03-domena-a-hosting-prepojenie.png` | 3 | DNS ako telefónny zoznam, NS a A záznamy, SSL a HTTPS, kto je za čo zodpovedný |
| `04-logo-pomocou-ai.png` | 4 | 5 druhov loga, anatómia promptu, váha slov zľava doprava, favicon test |
| `05-popis-a-foto-produktu.png` | 5 | štruktúra popisu (pre koho, čo rieši, parametre, balenie), tri revízie textu, štruktúra promptu na produktové foto s príkladom |

Každá infografika sa vloží do bloku ako obrázok s alt textom (obsahový súhrn, nie „infografika"), triedou `infografika` a odkazom na plnú veľkosť. Pod ňou je jedna veta, čo si z nej odniesť. Podklady z NotebookLM sa nekopírujú: texty sa píšu nanovo po slovensky, bez brandingu nástrojov, bez log skutočných firiem, bez preklepov z podkladov. Príklad domény je `mojeshop.sk` ako v bloku 3.

Zdrojové návrhy z Claude Design (plátno) sa uložia ako odkaz na artefakt do `VISION.md`, aby sa dali neskôr upraviť.

### F4 Nová stránka: Logo a produktové foto pomocou AI

Nová stránka `docs/znalostna-baza/ai-logo-a-foto.md`, položka v `nav` „Logo a produktové foto pomocou AI" za položkou „AI v predmete", riadok v tabuľke `docs/znalostna-baza/index.md` („v bloku 4 pri logu a v bloku 5 pri fotkách"). Osnova podľa `navrhy/infografiky/ELEKTRONICKE OBCHODOVANIE.md`:

**Logo**
1. Univerzálna šablóna promptu pre logo (vzorec subjekt + štýl + kompozícia + farby + technické parametre, s vyplneným príkladom pre fiktívnu firmu).
2. Druhy loga: wordmark, lettermark, symbol, emblém, kombinácia. Kedy ktorý, s odporúčaním pre malý e-shop (wordmark alebo kombinácia).
3. Dva typy text-to-image modelov: prirodzený jazyk (celé vety) a kľúčové slová oddelené čiarkami. Ako zistiť, ktorý typ model preferuje.
4. Pravidlo váhy slov zľava doprava: najdôležitejšie slová na začiatok promptu.
5. Škálovateľnosť a favicon test: logo zmenšené na 32 × 32 px musí ostať rozpoznateľné.
6. Negatívny prompt: čo to je, kedy ho použiť (text v logu, gradienty, fotorealizmus, viac objektov) a kedy ho model nepodporuje.
7. Limit dĺžky promptu: prečo sú dlhé prompty kontraproduktívne, odporúčaný rozsah.
8. Prehľad bezplatných modelov a nástrojov v čase písania s poznámkou, že sa mení, a s kritériami výberu (bezplatný limit, komerčné použitie výstupu, možnosť negatívneho promptu).
9. Reverzné inžinierstvo: funkcia „describe" (opis existujúceho obrázka do promptu) ako spôsob, ako sa naučiť písať prompty.
10. Čo po vygenerovaní: export do PNG s priehľadným pozadím, vektorizácia, kontrola, že logo nekopíruje existujúcu značku, poznámka do dokumentu projektu, že logo vzniklo pomocou AI.

**Produktové foto**
1. Štruktúra promptu v piatich častiach: štýl, produkt a pozadie, svetlo, zariadenie, doplnkový opis štýlu.
2. Vzorový prompt z podkladu: „Product photography, smooth strawberry ice cream, served in a plain white paper ice cream cup, isolated on pure white background, soft diffused studio light, Canon EOS R5, clean and minimal style" a jeho rozbor po častiach.
3. Pravidlá pre e-shop: rovnaké pozadie a osvetlenie pre všetky produkty, štvorec 1000 × 1000 px, do 300 kB (nadväzuje na blok 5 krok 5), v dokumente uviesť, že fotky sú generované, nikdy negenerovať fotky, ktoré tvrdia niečo, čo produkt nemá.

Stránka má rovnaké boxy ako bloky: „AI v tomto bloku" s hotovým promptom a „Ako je to v praxi" (koľko stojí logo od grafika a produktové fotenie).

### F5 Úpravy existujúcich blokov

- **Blok 2**: sekcia „Pozri si najprv" s infografikami `02-ako-cestuju-data.png` a `02-pripojenie-a-rychlost.png`. Odkaz na stránku „Internet, doména a DNS" v Znalostnej báze ostáva.
- **Blok 3**: sekcia „Pozri si najprv" s `03-dom-eshopu.png`; infografika `03-domena-a-hosting-prepojenie.png` v kroku 1 pri pojmoch DNS a SSL.
- **Blok 4, krok 2 (logo)**: odrážka „Logo" sa rozšíri o druhú možnosť: vygenerovať logo pomocou AI podľa novej stránky Znalostnej bázy. Vloží sa `04-logo-pomocou-ai.png`. Pravidlo „Žiadne stiahnuté logo z internetu" ostáva.
- **Blok 5, krok 1 (podklady, fotky)**: odrážka „vygenerované AI" dostane odkaz na novú stránku (časť Produktové foto). **Blok 5, krok 4 (popis)**: doplní sa odsek o tom, pre koho sa píše (persona z bloku 1) a o troch revíziách textu (jazyková, štylistická, typografická). Vloží sa `05-popis-a-foto-produktu.png`.
- **Znalostná báza, „Internet, doména a DNS"**: infografiky z blokov 2 a 3 sa sem pridajú tiež, pri príslušných pojmoch.
- **Všetky bloky**: front matter `blok` a `cast`, triedy `{ .krok }` na nadpisoch krokov, triedy `ai` a `prax` na admonition boxoch.

### F6 Prihlasovacia brána

- Spoločné heslo pre všetkých študentov, platné semester. Overuje sa v prehliadači.
- Skript `docs/javascripts/gate.js` pri načítaní stránky skontroluje kľúč `eo-gate` v `localStorage`. Ak chýba alebo nesedí s aktuálnym hashom, zobrazí prekrytie na celú obrazovku s názvom predmetu, poľom na heslo a tlačidlom. Po zadaní vypočíta SHA-256 cez `crypto.subtle` a porovná s hashom v `extra.gate_hash` v `mkdocs.yml` (do stránky sa dostane cez `overrides/main.html` ako `data-gate-hash` na `<body>`). Pri zhode uloží hash do `localStorage` a prekrytie odstráni. Pri nezhode zobrazí hlášku „Nesprávne heslo" a pole vyprázdni.
- Heslo v repozitári nikdy nie je v otvorenej podobe, len jeho hash. Zmena hesla = zmena hashu v `mkdocs.yml`. Postup výpočtu hashu (jeden príkaz v termináli) bude v README.
- `extra.gate_enabled: false` bránu vypne bez mazania kódu.
- Stránky s front matter `gate: false` sa nebránia: ochrana súkromia a `print_page.html` (print-site sa konfiguruje mimo front matter, preto sa vylúči podľa cesty v skripte).
- Ak `crypto.subtle` nie je k dispozícii (napríklad web otvorený cez `http://` mimo localhost), brána sa nezobrazí a do konzoly sa zapíše varovanie. Pri `file://` a `localhost` brána funguje.
- Prekrytie sa vykreslí ešte pred obsahom (skript v `<head>`, inline štýl na prekrytie), aby obsah nepreblikol. Prekrytie rešpektuje svetlý aj tmavý režim.
- Brána chráni pred náhodným návštevníkom, nie obsah: HTML je vo verejnom repozitári a v zdroji stránky. Toto sa napíše do README aj do stránky ochrany súkromia (jedna veta, že heslo sa neukladá na server).

### F7 Animácie

- Karty častí a sekcie dashboardu sa pri prvom scrollovaní zobrazia jemným fade-in (opacity a posun 8 px, 300 ms) cez `IntersectionObserver`. Bez JavaScriptu sú viditeľné hneď (trieda `js` na `<html>`).
- Hover na kartách: zmena farby okraja a tieň podľa existujúcich kariet.
- Aktuálny bod v dráhe bloku má pulzujúci akcentový krúžok.
- Všetko rešpektuje `prefers-reduced-motion: reduce` (žiadne prechody).
- Sticky hlavička, návrat hore a instant navigácia ostávajú z Materialu.

## 8. Technické požiadavky

- Nový priečinok `overrides/` s `home.html`, `main.html` a partials pre dráhu blokov (`partials/draha.html`) a hlavičku bloku (`partials/blok-hlavicka.html`). V `mkdocs.yml` sa doplní `theme.custom_dir: overrides`.
- Nové CSS sa píše do `docs/stylesheets/extra.css` v samostatných sekciách s komentárom (dashboard, hlavička bloku, infografiky, brána). Ak súbor prekročí 700 riadkov, rozdelí sa na `extra.css` (tokeny a Material) a `komponenty.css` (nové komponenty) a oba sa uvedú v `extra_css`.
- Nový JavaScript: `docs/javascripts/gate.js` a `docs/javascripts/animacie.js`. Žiadne knižnice, žiadne CDN okrem už používaného Google Fonts.
- `.github/workflows/deploy.yml`: do `on.push.paths` pribudne `overrides/**`.
- `mkdocs build --strict` musí prejsť bez varovania. Nové obrázky majú alt text, nové odkazy sú relatívne.
- Infografiky PNG do 600 kB každá (optimalizované cez `pngquant` alebo Squoosh), šírka 2400 px.
- Šablóny nesmú závisieť na poradí `nav` mimo metadát `blok`; ak stránke chýba `blok`, hlavička sa nevykreslí a build neskončí chybou.
- Print-site: hlavička bloku a brána sa v `print_page.html` nevykresľujú (podmienka na `page.file.src_path` alebo trieda skrytá v print CSS).
- Mobilná verzia: dráha 12 bodov sa láme po častiach, karty pod sebou, hlavička bloku v dvoch riadkoch, nič nescrolluje horizontálne.

## 9. Etapy

| Etapa | Obsah | Výstup |
|---|---|---|
| E0 Infografiky | 6 artboardov v Claude Design podľa VISION.md, export PNG, optimalizácia | `docs/img/infografiky/*.png`, odkaz na plátno vo VISION.md |
| E1 Vizuálna vrstva | `overrides/`, CSS komponentov, dashboard, hlavička bloku, front matter blokov, triedy `krok`, `ai`, `prax`, workflow paths | nový vzhľad bez zmeny obsahu |
| E2 Obsah | stránka „Logo a produktové foto pomocou AI", úpravy blokov 2 až 5 a Znalostnej bázy, vloženie infografík | doplnený obsah |
| E3 Brána | `gate.js`, prekrytie v `main.html`, konfigurácia, README | funkčná brána |
| E4 Overenie a nasadenie | strict build, screenshoty desktop a mobil, svetlý a tmavý režim, test brány, print-site, push do main | web online |

Etapy E0 a E1 sú nezávislé a môžu bežať súbežne. E2 potrebuje E0 (obrázky) a E1 (triedy). E3 je nezávislá od E1 a E2.

## 10. Akceptačné kritériá

1. `mkdocs build --strict` prejde bez varovaní lokálne aj v GitHub Actions.
2. Úvodná stránka zobrazuje dráhu 12 blokov a 4 karty častí, každý bod a každá karta vedie na správnu stránku. Overené klikom na všetkých 12 bodov.
3. Každá z 11 stránok blokov má hlavičku so správnym číslom, časťou a odkazmi na susedné bloky. Blok 1 nemá odkaz späť, obhajoby nemajú odkaz ďalej.
4. Šesť infografík je na svojich miestach, majú alt text, odkaz na plnú veľkosť a každá je do 600 kB.
5. Stránka „Logo a produktové foto pomocou AI" pokrýva všetkých 10 bodov o logu a 3 body o fote, je v `nav` aj v tabuľke Znalostnej bázy, blok 4 a blok 5 na ňu odkazujú.
6. Brána: bez hesla sa obsah nezobrazí ani nepreblikne, zlé heslo vypíše hlášku, správne heslo pustí ďalej a po obnovení stránky sa nepýta znova. Stránka ochrany súkromia je bez brány. `gate_enabled: false` bránu vypne. Heslo v repozitári nie je.
7. Svetlý aj tmavý režim bez nečitateľných miest (kontrola dashboardu, bloku 3, novej stránky, prekrytia brány).
8. Na šírke 375 px nič nescrolluje horizontálne, dráha a karty sa lámu podľa F1.
9. `print_page.html` sa vygeneruje a neobsahuje hlavičky blokov ani prekrytie brány.
10. Umami a `copy-lokalne.js` fungujú ako doteraz (kopírovanie promptu pri `file://` overené).
11. Žiadny existujúci odstavec obsahu nebol zmazaný ani prepísaný okrem miest v F5.

## 11. Riziká a rozhodnutia

- **Brána nie je bezpečnosť.** Rozhodnuté: stačí, cieľ je odradiť náhodných návštevníkov a vyhľadávače. Ak by bola potrebná skutočná ochrana, cesta je Cloudflare Pages + Access (mimo tohto PRD).
- **Presnosť podkladov z NotebookLM.** Infografika o copywritingu obsahuje preklepy a zmiešané témy (e-mailing, sociálne siete), infografika o doméne používa skutočnú značku. Rozhodnuté: podklady sú inšpirácia pre štruktúru, texty sa píšu nanovo a overujú podľa existujúcich stránok Znalostnej bázy. Fakty, ktoré nie sú v existujúcom obsahu (dátumy, rýchlosti), si agent overí a uvedie zdroj v commite alebo ich vynechá.
- **Bezplatné AI modely sa menia.** Prehľad na novej stránke má dátum a kritériá výberu, nie odporúčanie jedného nástroja.
- **Style guide je zdieľaný so sesterským predmetom** (`tvorbawww.fabus.eu`). Tokeny sa nemenia; nové komponenty sú navyše a dajú sa preniesť.
- **Metadáta v `nav.pages`.** MkDocs načíta front matter všetkých stránok pred renderovaním, takže šablóna má prístup k `page.meta` cudzích stránok. Ak by to v použitej verzii neplatilo, náhradné riešenie je statický zoznam blokov v `extra.bloky` v `mkdocs.yml`.
- **Commit správy.** Repozitár používa slovenské správy s prefixom oblasti (napríklad „Úvod: komiksová infografika"). Pokračuje sa v tejto konvencii.

## 12. Podklady

- `navrhy/navrh_redizajnu_mkdocs_edukacny_web.md` — pôvodný návrh redizajnu (dashboard, štruktúra cvičenia, brána, čomu sa vyhnúť).
- `navrhy/infografiky/Sprievodca_svetom_internetu_a_cloudu.png`, `Čo_je_to_vlastne_internet_.mp4` — podklad pre blok 2.
- `navrhy/infografiky/Základy_domény_a_hostingu.png` — podklad pre blok 3.
- `navrhy/infografiky/Sprievodca_AI_tvorbou_loga.png`, `ELEKTRONICKE OBCHODOVANIE.md` — podklad pre blok 4 a novú stránku.
- `navrhy/infografiky/Sprievodca_profesionálnym_copywritingom.png`, `Pokorenie_hory_copywritingu.mp4` — podklad pre blok 5.
- `docs/znalostna-baza/internet-domena-dns.md` — existujúce vysvetlenie pojmov, s ktorým musia infografiky súhlasiť.
- `docs/stylesheets/extra.css` — tokeny a existujúce komponenty.
