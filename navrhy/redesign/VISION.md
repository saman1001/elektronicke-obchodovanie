# VISION — Dizajnový smer redizajnu webu Elektronické obchodovanie

Dopĺňa [PRD.md](PRD.md). Tento dokument hovorí, ako má web a infografiky vyzerať. PRD hovorí, čo sa má urobiť.

## 1. Smer v jednej vete

Online kurz k vysokoškolskému predmetu Elektronické obchodovanie: veľa vzduchu, výrazná typografická hierarchia, veľké čísla blokov, karty s okrajmi namiesto tieňov, jeden akcent (koralová) na pozadí petrolejovej. Web má na prvý pohľad pôsobiť ako kurz, ktorým študent prechádza blok po bloku, nie ako dokumentácia knižnice.

## 2. Princípy

1. **Orientácia pred ozdobou.** Každý prvok na dashboarde a v hlavičke bloku odpovedá na otázku „kde som a kam idem". Čo na ňu neodpovedá, nepatrí tam.
2. **Hĺbku tvoria okraje.** Karty majú 1 px okraj a zaoblenie 16 px. Tieň len pri hoveri. Žiadne gradienty na plochách, žiadne sklo.
3. **Jeden akcent.** Koralová je na tlačidle, aktuálnom bode dráhy a číslach. Petrolejová je na odkazoch a nadpisoch sekcií. Nič tretie.
4. **Čísla sú veľké, text je pokojný.** Číslo bloku alebo časti je najväčší prvok karty (Bricolage Grotesque 800). Popisy sú IBM Plex Sans 15 až 17 px, riadkovanie 1.6.
5. **Rovnaké veci vyzerajú rovnako.** Dráha na dashboarde a mini dráha v hlavičke bloku sú ten istý komponent v dvoch veľkostiach. Infografiky používajú ten istý systém ikon a farieb ako web.
6. **Funguje bez JavaScriptu a bez myši.** Všetko je viditeľné bez JS, všetko je dostupné z klávesnice, kontrast textu aspoň 4,5 : 1.

## 3. Tokeny

Prevzaté z `docs/stylesheets/extra.css`. Nemenia sa, nové komponenty ich len používajú.

| Token | Svetlý | Tmavý | Použitie |
|---|---|---|---|
| `--md-primary-fg-color` | `#0E5A6B` | `#146275` | odkazy, nadpisy sekcií, primárne tlačidlo |
| `--md-primary-fg-color--dark` | `#0B4654` | `#0B4654` | hover primárneho tlačidla |
| `--tw-primary-soft` | `#E7F0F1` | `#12333A` | pozadie zvýraznených kariet |
| `--tw-accent` | `#E4572E` | `#FF6B47` | akcent: číslo, aktuálny bod, CTA v tmavom režime |
| `--tw-accent-soft` | `#FBE9E1` | `#3A241D` | pozadie čísla kroku |
| `--md-default-bg-color` | `#FAF8F5` | `#0C171A` | pozadie stránky |
| `--tw-surface` | `#FFFFFF` | `#12242A` | pozadie kariet |
| `--tw-border` | `#E7E1D8` | `#23393F` | okraje |
| `--tw-ink` | `#16282E` | `#E9EFEC` | text |
| `--tw-muted` | `#5A6B70` | `#9BB0AC` | sekundárny text |
| `--tw-check` | `#2E7D4F` | `#4FBF7F` | fajky, hotové |
| `--tw-note-*`, `--tw-tip-*`, `--tw-warn-*`, `--tw-example-*` | viď CSS | viď CSS | admonition boxy |

Nové tokeny (pridajú sa do oboch režimov):

| Token | Svetlý | Tmavý | Použitie |
|---|---|---|---|
| `--tw-cast-1` | `#0E5A6B` | `#5BBECE` | farba časti 1 v dráhe |
| `--tw-cast-2` | `#2E7D4F` | `#4FBF7F` | farba časti 2 |
| `--tw-cast-3` | `#B4530A` | `#E8A25C` | farba časti 3 |
| `--tw-cast-4` | `#6B4FA0` | `#B39DDB` | farba časti 4 |
| `--tw-radius-card` | `16px` | `16px` | zaoblenie kariet |
| `--tw-radius-pill` | `999px` | `999px` | body dráhy, odznaky |

Farby častí sú prevzaté z ikon admonition boxov (note, tip, warning, example), takže paleta ostáva v rámci štyroch farieb, ktoré web už používa.

## 4. Typografia

| Prvok | Font | Váha | Veľkosť desktop | Veľkosť mobil |
|---|---|---|---|---|
| Hero nadpis | Bricolage Grotesque | 800 | 52 px | 34 px |
| Číslo časti na karte | Bricolage Grotesque | 800 | 56 px | 44 px |
| Názov časti na karte | Bricolage Grotesque | 700 | 24 px | 20 px |
| H1 bloku | Bricolage Grotesque | 800 | Material predvolené | |
| Nadpis kroku (H2) | Bricolage Grotesque | 700 | Material predvolené | |
| Číslo kroku | IBM Plex Mono | 600 | 13 px v odznaku | |
| Perex, popisy kariet | IBM Plex Sans | 400 | 17 px, riadkovanie 1.65 | 16 px |
| Označenia (ČASŤ 1, BLOK 2 Z 12) | IBM Plex Sans | 700 | 12 px, verzálky, rozostup 1.4 px | |

## 5. Komponenty

### 5.1 Dashboard, desktop

```text
┌────────────────────────────────────────────────────────────────┐
│ EO  Elektronické obchodovanie            [hľadaj]   ☾  GitHub  │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│         Od nápadu na predaj produktu alebo služby              │
│         po funkčný e-shop — za jeden semester.                 │
│                                                                │
│      Vyberieš si firmu, nájdeš jej pripojenie a hosting ...    │
│                                                                │
│        [ Začni blokom 1 → ]   [ Znalostná báza ]               │
│                                                                │
│         4 časti  ·  12 blokov  ·  projekt za 40 bodov          │
│                                                                │
├────────────────────────────────────────────────────────────────┤
│  TVOJA CESTA PREDMETOM                                         │
│                                                                │
│  ●──●──●    ●──●──●──●    ●──●    ●──●──●                      │
│  1  2  3    4  5  6  7    8  9    10 11 12                     │
│  Firma a    Stavba        Reklama  Záver                       │
│  infraštr.  e-shopu                                            │
│                                                                │
├────────────────────────────────────────────────────────────────┤
│ ┌──────────────────────────┐  ┌──────────────────────────┐     │
│ │ 01                       │  │ 02                       │     │
│ │ FIRMA A INFRAŠTRUKTÚRA   │  │ STAVBA E-SHOPU           │     │
│ │ Vyberieš si firmu a ...  │  │ Založíš e-shop, ...      │     │
│ │ → Blok 1 Firma a produkt │  │ → Blok 4 Základ e-shopu  │     │
│ │ → Blok 2 Pripojenie      │  │ → Blok 5 Produkty        │     │
│ │ → Blok 3 Hosting         │  │ → Blok 6 Košík ...       │     │
│ │                          │  │ → Blok 7 Povinné stránky │     │
│ │ [ Otvoriť časť ]         │  │ [ Otvoriť časť ]         │     │
│ └──────────────────────────┘  └──────────────────────────┘     │
│ ┌──────────────────────────┐  ┌──────────────────────────┐     │
│ │ 03  REKLAMA              │  │ 04  ZÁVER                │     │
│ └──────────────────────────┘  └──────────────────────────┘     │
├────────────────────────────────────────────────────────────────┤
│  ČO BUDEŠ NA KONCI SEMESTRA VEDIEŤ                             │
│  ✓ vybrať a zdôvodniť poskytovateľa ...                        │
│  ✓ ...                                                         │
├────────────────────────────────────────────────────────────────┤
│  [Dve skupiny, jeden web] [Všetko zadarmo] [AI v každom bloku] │
└────────────────────────────────────────────────────────────────┘
```

Dráha: body sú kruhy 28 px s číslom, spojnice 2 px vo farbe časti. Každý segment má pod sebou názov časti vo farbe časti. Body sú odkazy s `title` názvom bloku a viditeľným názvom pri hoveri (tooltip nad bodom). Body 11 a 12 vedú na tú istú stránku.

Karty: 2 × 2 mriežka, medzera 20 px. Číslo časti veľké vľavo hore vo farbe časti, názov verzálkami, jedna veta, zoznam blokov ako odkazy s šípkou, tlačidlo dole. Karta má okraj `--tw-border`, na hoveri okraj vo farbe časti a tieň `0 4px 14px rgba(22,40,46,.08)`.

### 5.2 Dashboard, mobil (do 44 em)

Hero nadpis 34 px, tlačidlá pod sebou na celú šírku. Dráha sa zlomí na 4 riadky, každý riadok je jedna časť: názov časti vľavo, body vpravo. Karty pod sebou. Boxy pod sebou.

### 5.3 Hlavička stránky bloku

```text
┌────────────────────────────────────────────────────────────────┐
│ ČASŤ 1 · FIRMA A INFRAŠTRUKTÚRA              BLOK 2 Z 12       │
│ ●──◉──○    ○──○──○──○    ○──○    ○──○──○                       │
│ ← Blok 1 Firma a produkt          Blok 3 Hosting a platforma → │
└────────────────────────────────────────────────────────────────┘

# Blok 2 — Pripojenie do internetu
```

Hlavička je karta na celú šírku obsahu s pozadím `--tw-surface`, okrajom a zaoblením 16 px, vnútorný odstup 16 px 20 px. Mini dráha má body 12 px bez čísel; hotové bloky (nižšie číslo) plné vo farbe časti, aktuálny bod s akcentovým krúžkom, budúce prázdne s okrajom. Odkazy na susedné bloky sú v druhom riadku, na mobile pod sebou.

### 5.4 Sekcie bloku

- **Čo sa v tomto bloku naučíš**: karta s pozadím `--tw-primary-soft`, ikona terča vľavo od nadpisu, zoznam s fajkami ako `.tw-skills`.
- **Pozri si najprv**: infografika na celú šírku obsahu, zaoblenie 12 px, okraj 1 px; pod ňou riadok s jednou vetou a odkazom „Otvoriť v plnej veľkosti".
- **Krok N**: nadpis kroku má vľavo odznak s číslom (IBM Plex Mono, pozadie `--tw-accent-soft`, text `--tw-accent`), zvyšok nadpisu ako doteraz. Emoji v nadpisoch ostávajú.
- **AI v tomto bloku** (`tip ai`): ikona iskry, ľavý okraj 3 px vo farbe `--tw-tip-icon`.
- **Ako je to v praxi** (`note prax`): ikona bankovky, ľavý okraj 3 px vo farbe `--tw-note-icon`.
- **Výstup bloku**: karta s okrajom, nadpis s fajkou, položky ako checklist Materialu.

### 5.5 Prekrytie brány

Celá obrazovka v pozadí `--md-default-bg-color`, v strede karta 360 px: názov predmetu (Bricolage 800, 24 px), veta „Web je určený študentom predmetu. Zadaj heslo z Moodle.", pole na heslo, primárne tlačidlo „Vstúpiť", pod ním riadok pre chybu vo farbe `--tw-accent`. Žiadne logo, žiadna ilustrácia. Rešpektuje tmavý režim cez tie isté tokeny.

## 6. Infografiky

### 6.1 Spoločné pravidlá

- **Formát:** 16 : 9, artboard 1920 × 1080 px, export PNG 2400 px široký. Bezpečný okraj 64 px.
- **Pozadie:** `#FAF8F5` (pozadie webu). Bloky obsahu na `#FFFFFF` s okrajom `#E7E1D8` 2 px a zaoblením 24 px. Žiadne tiene, žiadne gradienty, žiadne fotky.
- **Farby:** petrolejová `#0E5A6B` na nadpisy a hlavné ikony, koralová `#E4572E` na jeden zvýraznený prvok na infografiku (šípku, číslo, kľúčové slovo), zelená `#2E7D4F` na „správne", oranžová `#B4530A` na „pozor", fialová `#6B4FA0` na doplnkové. Text `#16282E`, sekundárny `#5A6B70`.
- **Ikony:** líniové, hrúbka čiary 3 px pri 1920 px, zaoblené konce, jedna farba (petrolejová) s prípadnou koralovou výplňou na jednom detaile. Rovnaká sada v celom cykle (server, dom, glóbus, kábel, Wi-Fi, zámok, obálka, prehliadač, fotoaparát, štetec, váha, lupa).
- **Typografia:** nadpis Bricolage Grotesque 800, 64 px. Podnadpisy Bricolage 700, 36 px. Text IBM Plex Sans 400, 26 px, riadkovanie 1.4, max. 2 riadky na popis. Kód alebo doména IBM Plex Mono.
- **Rozsah textu:** najviac 120 slov na infografiku. Každý blok obsahu má nadpis do 5 slov a popis do 25 slov. Čo sa nezmestí, patrí do textu stránky, nie do obrázka.
- **Jazyk:** slovenčina, tykanie ako na webe, žiadne anglické nadpisy okrem ustálených skratiek (DNS, IP, TCP, HTTPS, CTA).
- **Značky:** žiadne logá skutočných firiem ani nástrojov, žiadny vodoznak generátora. Príklad domény `mojeshop.sk`, príklad firmy „Kávová pražiareň" (zhodné s príkladmi v blokoch). V pravom dolnom rohu drobný text `eo.fabus.eu` v `#5A6B70`.
- **Konzistencia:** všetkých 6 artboardov na jednom plátne v Claude Design, spoločné komponenty (nadpisová lišta, blok obsahu, ikona v krúžku) sa kopírujú, nie kreslia nanovo.
- **Tmavý režim webu:** infografiky ostávajú svetlé; na webe majú okraj 1 px `--tw-border`, aby na tmavom pozadí nesplývali s okolím. Netreba tmavú verziu.
- **Prístupnosť:** informácia nikdy nie je len vo farbe (vždy aj text alebo ikona). Kontrast textu na bielej aspoň 4,5 : 1.

### 6.2 Artboard 1: Ako cestujú dáta (blok 2)

Súbor `02-ako-cestuju-data.png`. Otázka, na ktorú odpovedá: čo sa stane, keď zákazník napíše adresu e-shopu.

Rozloženie: nadpis hore, pod ním horizontálny tok zľava doprava v 5 krokoch, dole dva doplnkové bloky.

1. Nadpis: „Čo sa stane, keď zákazník otvorí tvoj e-shop".
2. Tok (5 krúžkov s ikonou, spojené šípkami, koralová šípka pri kroku 3):
   - Prehliadač zákazníka: „napíše mojeshop.sk"
   - DNS: „telefónny zoznam internetu, preloží meno na IP adresu"
   - IP a TCP: „IP je adresa, TCP kontroluje, že prišlo všetko a v poradí"
   - Server hostingu: „počítač, kde leží tvoj e-shop, beží nonstop"
   - HTTPS: „stránka príde šifrovaná, prehliadač ukáže zámok"
3. Dolný blok vľavo „Čo je internet": „celosvetová sieť sietí, ktoré si rozumejú vďaka rodine protokolov TCP/IP. Nemá jeden stred, preto funguje, aj keď časť vypadne."
4. Dolný blok vpravo „Ďalšie protokoly, ktoré e-shop používa": tri riadky s ikonou: HTTP/HTTPS webové stránky, SMTP a IMAP e-maily zákazníkom, FTP a SFTP nahrávanie súborov na hosting.

Alt text: „Cesta dát z prehliadača zákazníka do e-shopu: DNS preloží mojeshop.sk na IP adresu, TCP zabezpečí úplný prenos, server hostingu pošle stránku a HTTPS ju zašifruje."

### 6.3 Artboard 2: Pripojenie a rýchlosť (blok 2)

Súbor `02-pripojenie-a-rychlost.png`. Otázka: aké pripojenie firma potrebuje a čo znamenajú čísla v ponukách.

Rozloženie: nadpis, vľavo stĺpec typov pripojenia, vpravo hore vysvetlenie jednotiek, vpravo dole tabuľka.

1. Nadpis: „Aké pripojenie tvoja firma potrebuje".
2. Ľavý stĺpec „Typy pripojenia" (5 riadkov, ikona + názov + jedna veta):
   - Optika: najrýchlejšie a najstabilnejšie, nie všade dostupné
   - Káblové a DSL: po existujúcich rozvodoch, rýchlosť závisí od vzdialenosti
   - Mobilné (LTE, 5G): bez káblov, rýchlosť kolíše, dátové limity
   - Bezdrôtové (Wi-Fi od poskytovateľa): na vidieku, závisí od počasia a výhľadu
   - Satelit: všade, drahé, vysoká odozva
3. Pravý horný blok „Ako čítať ponuku":
   - Mbit/s: koľko megabitov prejde za sekundu. 100 Mbit/s = asi 12 MB za sekundu.
   - Download vs. upload: e-shop potrebuje aj upload (fotky produktov, videohovory, zálohy). Asymetrické linky majú upload 10× menší, koralové zvýraznenie.
   - Viazanosť, pripojovací poplatok, FUP limit: to, čo cenu naozaj určuje. Preto tabuľka 10 poskytovateľov.
4. Pravý dolný blok „Odporúčanie pre malú firmu" (tabuľka 3 riadky):
   - Vybavovanie objednávok, e-maily, administrácia e-shopu: do 50 Mbit/s, 1 až 3 zariadenia
   - Plus nahrávanie fotiek, videohovory, pokladňa: 100 až 300 Mbit/s, do 10 zariadení
   - Viac prevádzok, kamery, veľké zálohy: 300 Mbit/s a viac, symetrické

Alt text: „Päť typov pripojenia (optika, káblové a DSL, mobilné, bezdrôtové, satelit), význam Mbit/s, rozdiel medzi downloadom a uploadom a odporúčaná rýchlosť podľa činnosti malej firmy."

### 6.4 Artboard 3: Dom e-shopu (blok 3)

Súbor `03-dom-eshopu.png`. Otázka: čo je hosting, doména a e-shop a ako spolu súvisia.

Rozloženie: vľavo veľká ilustrácia domu v troch vrstvách s popiskami, vpravo dva bloky.

1. Nadpis: „Hosting, doména a e-shop: tri veci, ktoré potrebuješ".
2. Ilustrácia (líniová, petrolejová, bez perspektívy 3D, izometria nie je potrebná): pozemok so servermi dole, dom v strede, tabuľka s adresou na dome.
   - Dole: „HOSTING = pozemok a základy. Server, kde ležia súbory a databáza. Beží 24/7."
   - Stred: „E-SHOP = dom. WooCommerce alebo Webnode, produkty, košík, stránky."
   - Tabuľka na dome: „DOMÉNA = adresa. mojeshop.sk. Kupuje sa zvlášť, hosting ju len používa."
3. Pravý horný blok „Anatómia domény" s `obchod.mojeshop.sk` v IBM Plex Mono a tromi svorkami: `obchod` subdoména (3. úroveň), `mojeshop` hlavná doména (2. úroveň), `sk` koncovka (1. úroveň, TLD).
4. Pravý dolný blok „Na free hostingu": „Dostaneš subdoménu `mojeshop.hosting.xy`. Vlastná doména `.sk` stojí okolo 10 až 15 € ročne a je to prvá vec, za ktorú sa v praxi platí." Koralové zvýraznenie na slove subdoménu.

Alt text: „Dom e-shopu: hosting je pozemok so servermi, e-shop je dom, doména je adresa na dome. Anatómia domény obchod.mojeshop.sk a rozdiel medzi subdoménou na free hostingu a vlastnou doménou."

### 6.5 Artboard 4: Ako prepojiť doménu a hosting (blok 3)

Súbor `03-domena-a-hosting-prepojenie.png`. Otázka: čo sa nastavuje, aby adresa viedla na e-shop, a prečo e-shop potrebuje HTTPS.

Rozloženie: nadpis, horný tok v 3 krokoch, dole dva bloky.

1. Nadpis: „Aby adresa viedla na tvoj e-shop".
2. Tok (3 kroky):
   - Registrátor domény: „tu si kúpil mojeshop.sk"
   - DNS záznamy: „NS záznam: kto spravuje doménu. A záznam: na akú IP adresu ísť." Koralová šípka.
   - Hosting: „server s IP adresou, na ktorom beží e-shop"
3. Ľavý dolný blok „Dve cesty":
   - Zmena NS záznamov: najjednoduchšia, hosting spravuje všetko vrátane e-mailov.
   - Zmena A záznamu: len web ide na hosting, e-maily ostávajú u pôvodného poskytovateľa.
   - Poznámka: „Zmena sa prejaví do 24 hodín. Dovtedy vidí časť sveta starý web."
4. Pravý dolný blok „SSL a HTTPS" so zámkom: „Certifikát šifruje spojenie. Pre e-shop povinnosť: bez zámku prehliadač varuje a nikto nezadá adresu ani kartu. Let's Encrypt je zadarmo, Webnode ho zapína sám."
5. Spodný pásik „Kto je za čo zodpovedný": registrátor (doména), hosting (server, SSL), ty (obsah, zálohy, aktualizácie).

Alt text: „Prepojenie domény a hostingu: registrátor, DNS záznamy NS a A, server hostingu. Dve cesty nastavenia, oneskorenie do 24 hodín, prečo e-shop potrebuje SSL certifikát a kto je za čo zodpovedný."

### 6.6 Artboard 5: Logo pomocou AI (blok 4)

Súbor `04-logo-pomocou-ai.png`. Otázka: ako napísať prompt, z ktorého vznikne použiteľné logo.

Rozloženie: nadpis, horný pás 5 druhov loga, stred anatómia promptu, dole dva bloky.

1. Nadpis: „Logo pomocou AI: od promptu k identite".
2. Horný pás „5 druhov loga" s vlastnými ukážkami pre fiktívnu Kávovú pražiareň (nie skutočné značky):
   - Wordmark: názov firmy vo výraznom písme
   - Lettermark: iniciály KP
   - Symbol: samostatná ikona zrnka
   - Emblém: názov vnútri tvaru
   - Kombinácia: symbol + názov, koralový štítok „odporúčané pre e-shop"
3. Stred „Anatómia promptu" ako 5 dielov spojených plusom, každý s ikonou a príkladom pod ním:
   - Subjekt: „logo pre kávovú pražiareň, zrnko kávy"
   - Štýl a médium: „minimalistické, plochý vektor"
   - Kompozícia: „symbol nad názvom, vycentrované"
   - Farby a osvetlenie: „dve farby, tmavohnedá a krémová, bez tieňov"
   - Technické parametre: „biele pozadie, bez textu v obrázku, štvorec"
4. Ľavý dolný blok „Váha slov zľava doprava" s váhami: „Model dáva najväčší význam začiatku promptu. Najdôležitejšie slovo je prvé."
5. Pravý dolný blok „Favicon test": to isté logo v 256 px a 32 px vedľa seba. „Ak je čitateľné ako favicon, je dobré aj na billboard. Ak nie, zjednoduš."

Alt text: „Päť druhov loga (wordmark, lettermark, symbol, emblém, kombinácia), anatómia promptu pre AI v piatich častiach s príkladom pre kávovú pražiareň, pravidlo váhy slov zľava doprava a favicon test čitateľnosti."

### 6.7 Artboard 6: Popis a foto produktu (blok 5)

Súbor `05-popis-a-foto-produktu.png`. Otázka: ako napísať popis, ktorý predáva, a ako vygenerovať jednotné produktové foto.

Rozloženie: nadpis, ľavá polovica popis, pravá polovica foto, zvislý deliaci okraj.

1. Nadpis: „Popis a foto, ktoré predávajú".
2. Ľavá polovica „Popis produktu":
   - Hore „Pre koho píšeš": ikona persony, „zákazník z bloku 1, jeho jazyk, jeho otázky".
   - Stred „Štyri otázky, na ktoré popis odpovedá" (4 riadky s číslom): pre koho to je, čo rieši alebo prináša, aké má parametre, čo je v balení. Koralové zvýraznenie na „parametre: len tie, ktoré máš v tabuľke".
   - Dole „Tri revízie pred zverejnením": jazyková (gramatika), štylistická (čitateľnosť, krátke vety, bez superlatívov), typografická (odrážky, medzery, jednotky).
3. Pravá polovica „Produktové foto pomocou AI":
   - „Štruktúra promptu v 5 častiach" ako zvislý zoznam s ikonami: štýl, produkt a pozadie, svetlo, zariadenie, celkový štýl.
   - Vzorový prompt v IBM Plex Mono na 3 riadky: „Product photography, smooth strawberry ice cream, served in a plain white paper ice cream cup, isolated on pure white background, soft diffused studio light, Canon EOS R5, clean and minimal style", s farebnými podčiarknutiami zodpovedajúcimi 5 častiam.
   - Spodný riadok „Pre celý katalóg rovnako": rovnaké pozadie, svetlo a orezanie; štvorec 1000 × 1000 px; do 300 kB.
4. Spodný pásik cez obe polovice: „V dokumente projektu uveď, že popisy a fotky vznikli s pomocou AI. Nikdy netvrď o produkte niečo, čo nemá."

Alt text: „Ľavá časť: popis produktu píše sa pre konkrétneho zákazníka, odpovedá na štyri otázky a prechádza tromi revíziami. Pravá časť: prompt na produktové foto má päť častí, vzorový prompt a pravidlá jednotného katalógu."

### 6.8 Postup v Claude Design

1. Jedno plátno „Infografiky EO", 6 artboardov 1920 × 1080 v poradí vyššie.
2. Najprv artboard 3 (dom e-shopu), ktorý nastaví štýl ikon a blokov. Po schválení sa jeho komponenty prenesú do ostatných.
3. Každý artboard skontrolovať podľa 6.1: počet slov, jeden koralový prvok, žiadne značky, `eo.fabus.eu` v rohu.
4. Export PNG, optimalizácia do 600 kB, uloženie do `docs/img/infografiky/`.
5. Po vytvorení plátna sem agent vloží odkaz na artefakt, aby sa dali infografiky neskôr upravovať:

Plátno Claude Design: https://claude.ai/code/artifact/8bebbb59-1f76-4465-a8ed-c674d859416a (8 artboardov: 6 infografík a 2 mockupy webu, vytvorené 7. 9. 2026)

## 7. Čomu sa vyhnúť

- Ilustrácie vo fotorealistickom alebo 3D štýle, generované obrázky ľudí.
- Viac ako jeden akcent na obrazovke, dúhové farby častí mimo štyroch definovaných.
- Karty s tieňom v pokoji, sklenené efekty, rozmazané pozadia.
- Animácie, ktoré posúvajú obsah pri čítaní, automatické karusely, parallax.
- Anglické nadpisy, marketingové frázy („revolučný", „unikátny").
- Skryté informácie za hover (na mobile neexistuje). Tooltip je doplnok, nie jediný nosič informácie.
- Typické znaky textu písaného AI: pomlčky ako oddeľovač viet, trojice prídavných mien, rečnícke otázky, prázdne prívlastky. Úplný zoznam s výnimkami je v AGENTS.md, kapitola 7. Platí aj pre texty v infografikách.
