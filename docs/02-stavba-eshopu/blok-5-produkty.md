---
blok: 5
cast: 2
ikony: [px-zoznam, tricko, kosik, pero, paleta, px-kontrola]
---

# Blok 5 — Produkty

E-shop stojí, ale je prázdny. Dnes doň dáš to, kvôli čomu existuje: **produkty**. Zdá sa to mechanické — názov, cena, fotka — ale práve tu zákazník rozhoduje, či nakúpi. Zlá fotka a popis „kvalitný výrobok" predajú menej než pekná fotka a jedna veta o tom, komu produkt pomôže a ako.

Vychádzaš zo sortimentu z bloku 1: **5 až 10 produktov** v **2 až 4 kategóriách**. Viac netreba — a vo Webnode free pláne ani nejde.

## 🎯 Čo sa v tomto bloku naučíš

- Pripraviť si podklady k produktom skôr, než klikáš v administrácii.
- Vytvoriť kategórie a produkty vrátane variantov a digitálnych produktov.
- Napísať popis, ktorý predáva — a nechať si ho navrhnúť AI bez toho, aby si predával niečo, čo nemáš.
- Legálne získať a správne pripraviť fotky.

## Pozri si teóriu

--8<-- "infografiky/blok-5.html"

## Krok 1 — Podklady najprv, klikanie potom 📋

Najrýchlejšia cesta je pripraviť si všetko v jednej tabuľke (Excel alebo priamo v dokumente projektu) a až potom otvoriť administráciu. Stĺpce:

| Názov | Kategória | Krátky popis (1 veta) | Dlhý popis (3–5 viet) | Cena (€) | Varianty | Sklad (ks) | Fotka (súbor) | Zdroj fotky |
|---|---|---|---|---|---|---|---|---|
| Káva Etiópia 250 g | Zrnková káva | Ovocná svetlá káva na filter. | … | 9,90 | 250 g / 1 kg | 20 | etiopia.jpg | vlastná |

**Odkiaľ fotky:**

- **vlastné** — reálna firma, mobil, denné svetlo, jednotné pozadie (biela stena, hárok papiera),
- **bezplatné fotobanky** — Unsplash, Pexels, Pixabay; pri každej fotke si zapíš zdroj a **over licenciu** (väčšina dovoľuje komerčné použitie bez uvedenia autora, ale nie všetky),
- **vygenerované AI** — pre fiktívnu firmu úplne v poriadku; v dokumente uveď, že fotky sú generované (postup a vzorový prompt: [Logo a produktové foto pomocou AI](../znalostna-baza/ai-logo-a-foto.md#produktove-foto)),
- **nikdy z webu konkurencie** ani z Google obrázkov bez licencie — porušenie autorských práv je v praxi najčastejší právny problém malých e-shopov.

## Krok 2 — Kategórie 🗂️

=== "WooCommerce"

    Produkty → Kategórie: názov, prípadne popis a obrázok kategórie. Vytvor 2–4 kategórie **skôr než produkty**, potom ich už len zaškrtávaš. Kategória „Nezaradené" zostane predvolená — premenuj ju alebo neskôr zmaž.

=== "Webnode"

    E-shop → Produkty → Kategórie (názvy položiek sa môžu mierne líšiť podľa verzie editora). Vytvor 2–4 kategórie, potom pri každom produkte vyberieš, kam patrí. Kategórie sa zobrazia v menu obchodu.

## Krok 3 — Produkty 📦

=== "WooCommerce"

    Produkty → Pridať nový. Pre každý produkt:

    - **Názov** a **dlhý popis** (hlavné pole), **krátky popis** (zobrazí sa pri cene) — z tabuľky.
    - **Údaje o produkte:** typ *Jednoduchý produkt*; **Bežná cena**, prípadne *Akciová cena*; záložka *Sklad*: SKU (kód) a *Sledovať zásoby* s množstvom, aby sa dal produkt vypredať; záložka *Doprava*: hmotnosť (zíde sa v bloku 6).
    - **Digitálny produkt** (PDF, kurz): zaškrtni *Virtuálny* a *Na stiahnutie* a nahraj súbor — doprava sa naň nebude počítať.
    - **Varianty** (veľkosť, farba, balenie): typ *Variabilný produkt* → záložka *Vlastnosti* (napr. Balenie: 250 g | 1 kg, zaškrtni *Použiť pre varianty*) → záložka *Varianty* → *Generovať varianty* → ceny pre každý variant.
    - **Obrázok produktu** (hlavná fotka) a **Galéria produktu** (ďalšie), **Kategórie** vpravo.
    - **Publikovať.**

    Skratka pri 10 produktoch: prvý sprav poriadne, ďalšie cez *Duplikovať* a meň len rozdiely.

=== "Webnode"

    E-shop → Produkty → Pridať produkt. Pre každý produkt:

    - **Názov**, **popis** (dlhý text z tabuľky; krátky popis daj ako prvú vetu),
    - **Cena** a prípadne *Zľavnená cena*,
    - **Fotky** — hlavná a ďalšie,
    - **Kategória**,
    - **Varianty** (veľkosť, balenie) a ich ceny, ak ich produkt má,
    - **Sklad** — počet kusov, aby sa produkt vedel vypredať,
    - **Digitálny produkt** — súbor na stiahnutie po zaplatení, ak to tvoj plán umožňuje; ak nie, popíš doručenie e-mailom v popise a v bloku 6 to zohľadni pri doprave.

    Sleduj **počítadlo produktov** — bezplatný plán končí pri 10. Ak máš viac nápadov než miest, sortiment zúž, nie plán rozšír.

## Krok 4 — Popis, ktorý predáva ✍️

Dobrý popis odpovedá na štyri otázky: **pre koho** to je, **čo rieši** alebo prináša, **aké má parametre** (rozmery, materiál, zloženie, gramáž) a **čo je v balení**. Píš konkrétne — „káva s tónmi čučoriedky a citrusu, praženie na filter" predá viac než „výberová káva najvyššej kvality".

Píšeš pre zákazníka z bloku 1: jeho jazykom a na jeho otázky. Hotový text prejde tromi revíziami: jazykovou (gramatika), štylistickou (krátke vety, bez superlatívov) a typografickou (odrážky, medzery, jednotky). Postup pre texty aj fotky je v Znalostnej báze → [Logo a produktové foto pomocou AI](../znalostna-baza/ai-logo-a-foto.md).

Čo do popisu **nepatrí**: tvrdenia, ktoré nevieš doložiť (zdravotné účinky, „najlepší na trhu"), a informácie, ktoré platia pre celý obchod (doprava, vrátenie) — tie patria na samostatné stránky v blokoch 6 a 7.

!!! tip "AI v tomto bloku"
    **Čo jej zveriť:** prvý návrh popisov z tvojej tabuľky. Ušetrí hodinu písania — ak jej dáš fakty.

    ```text
    Píšem popisy produktov pre e-shop [firma], ktorý predáva [sortiment] zákazníkom [kto]. Tón: [vecný / priateľský / odborný], tykanie/vykanie: [vyber]. Pre každý produkt napíš krátky popis (1 veta) a dlhý popis (3–5 viet) v štruktúre: pre koho, čo rieši, parametre, čo je v balení. Používaj LEN tieto fakty, nič nedopĺňaj ani nevymýšľaj: [vlož tabuľku produktov s parametrami].
    ```

    **Čo si overiť:** každý parameter v popise musí byť v tvojej tabuľke — AI rada „vylepší" produkt o vlastnosť, ktorú nemá, a to je klamanie zákazníka. Vyškrtni superlatívy a zdravotné tvrdenia. Popisy uprav do vlastného tónu; v dokumente uveď, že AI pripravila koncept.

## Krok 5 — Fotky, ktoré sa načítajú 🖼️

- **Rozmer:** hlavná fotka štvorec, okolo 1000 × 1000 px — stačí na zoom aj na mobil.
- **Veľkosť súboru:** do 300 kB. Zmenši a skomprimuj zadarmo (Squoosh, TinyPNG) — desať trojmegabajtových fotiek spomalí e-shop na free hostingu tak, že zákazník odíde.
- **Jednotný štýl:** rovnaké pozadie a orezanie pri všetkých produktoch; katalóg potom vyzerá ako obchod, nie ako bazár.
- **Alternatívny text (alt):** pri každej fotke krátky popis, čo je na nej — pre nevidiacich, pre vyhľadávače aj pre prípad, že sa obrázok nenačíta.

## Krok 6 — Kontrola ✅

Otvor e-shop v anonymnom okne a na mobile:

- [ ] každý produkt má fotku, cenu, kategóriu a popis — žiadny „Lorem ipsum" ani ukážkový produkt zo šablóny,
- [ ] ceny sú konečné (s DPH alebo bez DPH podľa rozhodnutia z bloku 4) a rovnaké v zozname aj na detaile,
- [ ] varianty sa dajú prepínať a menia cenu,
- [ ] fotky sa načítajú rýchlo aj na mobilných dátach,
- [ ] menu obchodu ukazuje kategórie a v každej je aspoň jeden produkt.

!!! note "Ako je to v praxi"
    Produktový obsah je v praxi drahší než celý e-shop. **Produktové fotenie** stojí rádovo desiatky eur za produkt (fotograf, ateliér, retuš), **copywriter** píše popisy za jednotky až desiatky eur za produkt, veľké e-shopy majú tisíce produktov a špeciálny softvér (PIM) na správu ich údajov a **feedy** do porovnávačov (Heureka, Google Shopping). Prečo do toho firmy investujú: dobrý popis a fotka priamo zvyšujú konverziu a znižujú vratky — zákazník, ktorý presne vedel, čo kupuje, tovar nevracia. A vyhľadávače nájdu len to, čo je napísané.

## ✅ Výstup bloku

- [ ] 5–10 produktov v 2–4 kategóriách, každý s fotkou, popisom, cenou a skladom.
- [ ] Tabuľka podkladov a zoznam zdrojov fotiek v dokumente projektu (kapitola 4) + snímka obrazovky katalógu.

Kritérium hodnotenia: pokračuješ v **Vytvorenie WWW stránok e-shopu (4 b)**.
