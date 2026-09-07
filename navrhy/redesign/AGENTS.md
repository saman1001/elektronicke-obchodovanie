# AGENTS — pravidlá pre agenta pracujúceho na redizajne

Platí pre každého agenta (Claude Code alebo iný), ktorý v tomto repozitári implementuje [PRD.md](PRD.md) podľa [VISION.md](VISION.md). Globálne pravidlá používateľa (`~/.claude/CLAUDE.md`) platia ďalej; tento súbor ich spresňuje pre tento projekt.

## 1. Jazyk

- Komunikácia s používateľom, obsah webu, komentáre v CSS a JS a commit správy: **slovenčina**. Repozitár má slovenské komentáre aj commity a v tom sa pokračuje.
- Identifikátory v kóde (triedy CSS, premenné, názvy súborov šablón): angličtina alebo existujúca konvencia `tw-` prefixu s krátkym slovenským slovom (napríklad `.tw-draha`, `.tw-blok-hlavicka`). Pri novom komponente sa drž prefixu `tw-`.
- Názvy súborov obsahu a obrázkov: slovensky bez diakritiky, malé písmená, pomlčky (`02-ako-cestuju-data.png`).

## 2. Čo sa nesmie zmeniť

- Text existujúcich stránok mimo miest vymenovaných v PRD F5. Preformulovanie, „vylepšovanie" a mazanie odsekov je zakázané.
- Poradie a názvy v `nav`, názvy súborov `.md`, `use_directory_urls: false`, `site_url`, `repo_url`, `docs/CNAME`.
- Farebné tokeny a fonty v `extra.css` (sekcia „tokeny"). Nové tokeny sa pridávajú, existujúce sa nemenia.
- `docs/javascripts/umami.js`, `docs/javascripts/copy-lokalne.js`, `docs/ochrana-sukromia.md` okrem jednej vety o bráne.
- Konfigurácia `print-site`.
- `.gitignore` sa nerozširuje o `navrhy/`; priečinok ostáva nesledovaný a nič z neho okrem `navrhy/redesign/*.md` sa necommituje. Videá a PNG z NotebookLM sa do repozitára nedostanú.

## 3. Ako pracovať

1. Pred zmenou si prečítaj `PRD.md` (čo), `VISION.md` (ako má vyzerať) a súbor, ktorý meníš. Pri stránkach blokov si prečítaj celý blok, nie len časť.
2. Pracuj po etapách z PRD kapitoly 9. Každá etapa končí commitom a `mkdocs build --strict` bez varovaní.
3. Lokálny náhľad: `python -m mkdocs serve` a otvor `http://127.0.0.1:8000`. Ak `mkdocs` nie je nainštalované: `pip install mkdocs-material mkdocs-print-site-plugin`.
4. Vizuálne overenie je povinné pri každej zmene šablóny alebo CSS: screenshot desktop (1280 px) a mobil (375 px), svetlý aj tmavý režim, stránky `index.html`, `01-firma-a-infrastruktura/blok-2-pripojenie-do-internetu.html`, `04-zaver/blok-11-12-obhajoby.html` a nová stránka Znalostnej bázy. Screenshoty ukladaj do scratchpadu, nie do repozitára.
5. Test brány po každej zmene `gate.js`: bez hesla, zlé heslo, správne heslo, obnovenie stránky, `gate_enabled: false`, stránka ochrany súkromia, `print_page.html`.
6. Nič nenasadzuj ručne (`mkdocs gh-deploy`). Nasadenie robí GitHub Actions po pushi do `main`. Push do `main` len po tom, čo používateľ videl výsledok lokálne a súhlasil.
7. Pri neistote ohľadom faktu v obsahu (rýchlosti, ceny, dátumy) fakt over alebo vynechaj. Nevymýšľaj čísla. Existujúci obsah Znalostnej bázy má prednosť pred podkladmi z NotebookLM.

## 4. Konvencie súborov

```text
overrides/
  main.html                 rozširuje base.html: hlavička bloku, brána, data atribúty
  home.html                 dashboard (rozširuje main.html)
  partials/draha.html       komponent dráhy blokov (parametre: velkost, aktualny)
  partials/blok-hlavicka.html
docs/
  stylesheets/extra.css     tokeny + Material + komponenty (sekcie s komentárom)
  javascripts/gate.js       brána
  javascripts/animacie.js   fade-in cez IntersectionObserver
  img/infografiky/*.png     6 infografík podľa VISION.md 6.2 až 6.7
  znalostna-baza/ai-logo-a-foto.md
```

- Front matter stránok blokov: `blok`, `cast`, pri obhajobách aj `blok_do`. Kľúče sú slovenské, malé písmená.
- Admonition boxy: `!!! tip ai "AI v tomto bloku"` a `!!! note prax "Ako je to v praxi"`. Druhý token je CSS trieda.
- Nadpisy krokov: `## Krok 1 — Názov 💡 { .krok }`.
- Infografika v Markdowne:

```markdown
<figure class="infografika" markdown>
[![Alt text podľa VISION.md](../img/infografiky/02-ako-cestuju-data.png)](../img/infografiky/02-ako-cestuju-data.png)
<figcaption>Jedna veta, čo si odniesť. <a href="../img/infografiky/02-ako-cestuju-data.png">Otvoriť v plnej veľkosti</a></figcaption>
</figure>
```

- Šablóny Jinja: bloky Materialu sa prepisujú cez `{% block %}` a `{{ super() }}`, nikdy sa nekopíruje celý `base.html`.
- V JS žiadne knižnice, žiadny build krok, ES2020, `"use strict"`, komentár v hlavičke súboru, čo skript robí.
- CSS: každá nová sekcia začína komentárom `/* ---------- názov ---------- */` ako existujúce. Mobilné pravidlá v spoločnom `@media screen and (max-width: 44em)` na konci sekcie.

## 5. Commity

- Slovensky, prefix oblasti a dvojbodka, ako doteraz: `Dashboard: dráha 12 blokov a karty častí`, `Blok 3: infografiky dom e-shopu a prepojenie domény`, `Brána: heslo cez SHA-256 v localStorage`.
- Jeden commit na jednu vec. Zmeny šablón a zmeny obsahu nemiešať do jedného commitu.
- Nikdy necommitovať heslo brány v otvorenej podobe, screenshoty, `site/`, súbory z `navrhy/infografiky/`.
- Pri commite sa drž pätičky s atribúciou, ktorú vyžaduje prostredie (Co-Authored-By a odkaz na session).

## 6. Keď niečo nesedí

- Ak PRD a VISION protirečia, platí PRD pre rozsah a VISION pre vzhľad. Rozpor zapíš do PRD kapitoly 11 a spýtaj sa používateľa.
- Ak Material nedovolí niečo spraviť šablónou (napríklad metadáta cudzích stránok v `nav.pages`), použi náhradné riešenie uvedené v PRD a napíš to do commit správy.
- Ak build v strict režime zlyhá na starom obsahu, oprav minimum (odkaz, alt text) a uveď to v commite. Nerob pri tom iné úpravy textu.
- Ak podklad z NotebookLM obsahuje tvrdenie, ktoré nevieš overiť, do infografiky ani textu ho nedávaj.
