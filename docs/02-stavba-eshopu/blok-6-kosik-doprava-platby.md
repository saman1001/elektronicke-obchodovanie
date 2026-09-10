---
blok: 6
cast: 2
ikony: [budova, sipka, px-platba, px-email, kosik]
---

# Blok 6 — Košík, doprava a platby

Toto je blok, po ktorom sa z katalógu stane **obchod**. Zákazník vloží produkt do košíka, vyberie dopravu, zaplatí a dostane potvrdenie — a ty objednávku vidíš v administrácii. Každý z tých krokov je rozhodnutie firmy (koľko stojí doprava? berieme dobierku?) a zároveň nastavenie v systéme. Urobíš oboje.

Na konci bloku si e-shop nechaš **otestovať spolužiakom**. Skutočný nákup od človeka, ktorý tvoj e-shop nikdy nevidel, odhalí veci, ktoré ty už nevidíš. Výstupom je **adresa funkčného košíka**, ktorá sa odovzdáva v Moodle.

## 🎯 Čo sa v tomto bloku naučíš

- Rozhodnúť ako firma o doprave a platbách — a vedieť, čo stoja v praxi.
- Nastaviť dopravné metódy, platobné metódy a potvrdzovacie e-maily.
- Prejsť nákupný proces očami zákazníka a otestovať ho podľa checklistu.
- Vidieť a spracovať objednávku v administrácii.

## Krok 1 — Rozhodni ako firma 🧭

Skôr než klikneš do nastavení, odpovedz si v dokumente:

**Doprava.** Ako sa tovar dostane k zákazníkovi a koľko za to zaplatí? Bežné možnosti na Slovensku: **Packeta (Zásielkovňa)** na výdajné miesto, **Slovenská pošta**, **kuriér** (GLS, DPD, SPS…), **osobný odber**. Pri digitálnom produkte doprava nie je. Stanov ceny (napr. výdajné miesto 3 €, kuriér 5 €, osobný odber 0 €) a **hranicu dopravy zadarmo** (od 50 €?) — je to najsilnejší nástroj na zvýšenie priemernej objednávky.

**Platby.** **Dobierka** (platba pri prevzatí, s príplatkom), **prevod na účet** (zákazník čaká na potvrdenie platby), **platobná karta cez bránu** (okamžite, ale brána si berie percentá a vyžaduje zmluvu s firmou). V školskom projekte nastavíš dobierku a prevod; kartu len ako ukážku, ak brána ponúka testovací režim bez zmluvy.

**Skutočné údaje.** Do e-shopu **nezadávaj svoj skutočný IBAN**. Použi zjavne vzorový (napr. `SK00 0000 0000 0000 0000 0000`) a vetu „vzorový účet, študentský projekt" v popise platby.

## Krok 2 — Doprava 🚚

=== "WooCommerce"

    WooCommerce → Nastavenia → **Doprava**:

    1. **Dopravná zóna** „Slovensko" (región Slovakia). Do nej pridaj **metódy**: *Paušálna sadzba* (premenuj na „Výdajné miesto", cena 3), druhá *Paušálna sadzba* („Kuriér", cena 5), *Osobný odber* (0), *Doprava zadarmo* s podmienkou *minimálna suma objednávky* (napr. 50).
    2. Ak predávaš aj do Česka, druhá zóna s vlastnými cenami. Zákazníci mimo zón dopravu nedostanú — presne tak to má byť.
    3. Záložka *Možnosti dopravy*: zapni *Povoliť kalkulačku dopravy v košíku*.
    4. Pri **digitálnych produktoch** (virtuálne z bloku 5) sa doprava nepočíta automaticky.
    5. Chceš reálne výdajné miesta na výber? Bezplatný plugin *Packeta* pridá do pokladne mapu výdajných miest — voliteľné, nie je podmienkou.

=== "Webnode"

    E-shop → Nastavenia → **Doprava** (názvy sa môžu podľa verzie líšiť):

    1. Pridaj **spôsoby dopravy**: „Výdajné miesto" (3 €), „Kuriér" (5 €), „Osobný odber" (0 €) — pri každom krátky popis pre zákazníka (kedy tovar príde).
    2. Nastav **dopravu zadarmo od sumy**, ak to plán umožňuje; ak nie, napíš pravidlo do popisu dopravy a na stránku Doprava a platba.
    3. Obmedz **krajiny doručenia** na Slovensko (prípadne Česko).
    4. Digitálne produkty: ak sa doprava počíta aj na ne, pridaj spôsob „Doručenie e-mailom" za 0 €.

Vytvor stránku **Doprava a platba** (menu) s prehľadnou tabuľkou spôsobov a cien — zákazníci ju hľadajú pred prvým klikom do košíka.

## Krok 3 — Platby 💳

=== "WooCommerce"

    WooCommerce → Nastavenia → **Platby**:

    - **Dobierka** — zapni, nastav *Povoliť pre dopravné metódy* (nie pre osobný odber, ak nechceš) a do popisu príplatok, ak ho účtuješ.
    - **Priamy bankový prevod (BACS)** — zapni, vlož **vzorový** IBAN a text „vzorový účet, študentský projekt"; zákazník dostane údaje v e-maile.
    - **Platba kartou** — WooCommerce ponúka vlastnú bránu a doplnky (Stripe, PayPal…); všetky vyžadujú účet a overenie firmy. Nezapínaj; do dokumentu napíš, ktorú bránu by firma použila a prečo (pozri „Ako je to v praxi").

    Vypni *Šeky* a všetko, čo neponúkaš.

=== "Webnode"

    E-shop → Nastavenia → **Platby**:

    - **Dobierka** — zapni, uveď príplatok v popise.
    - **Bankový prevod** — zapni, vlož **vzorový** IBAN a text „vzorový účet, študentský projekt".
    - **Karta / PayPal** — vo Webnode zväčša až v platených plánoch alebo s vlastným účtom u brány. Nezapínaj; do dokumentu napíš, čo by firma použila.

## Krok 4 — E-maily a stránky procesu ✉️

Po objednávke musí zákazník dostať **potvrdenie** a ty **notifikáciu**. Skontroluj a uprav:

- **Odosielateľ** — názov firmy a jej e-mail (nie „WordPress" ani tvoje meno). WooCommerce → Nastavenia → E-maily; vo Webnode nastavenia e-shopu → e-maily.
- **Text potvrdenia** — čo sa stane ďalej („zásielku odošleme do 2 pracovných dní, číslo zásielky príde e-mailom"). Pri prevode údaje na platbu.
- **Ďakovná stránka** po odoslaní objednávky — je to prvé miesto, kde zákazník rozmýšľa, či urobil dobre. Aspoň jedna ľudská veta.
- **Testovacia objednávka:** objednaj si sám, prevod aj dobierku. Prišiel e-mail? Ak nie: free hostingy často blokujú odosielanie pošty — pomôže bezplatný plugin na SMTP (napr. *WP Mail SMTP*, *Easy WP SMTP*) s tvojou schránkou; vo Webnode e-maily posiela platforma.

V administrácii otvor **objednávku** (WooCommerce → Objednávky; Webnode E-shop → Objednávky): zmeň stav na „Spracováva sa" a potom „Dokončená" — presne to bude robiť firma denne.

## Krok 5 — Test nákupu spolužiakom 🧪

Vymeň si adresu e-shopu so spolužiakom. Každý nakúpi u druhého a **vyplní protokol** — zapisuje, nie opravuje:

| # | Kontrola | Funguje? | Poznámka |
|---|---|---|---|
| 1 | Nájdem produkt cez menu aj cez vyhľadávanie | | |
| 2 | Detail produktu: fotka, cena, popis, variant sa dá vybrať | | |
| 3 | Vložím do košíka, zmením množstvo, odstránim položku | | |
| 4 | V košíku vidím cenu dopravy pred vyplnením údajov | | |
| 5 | Pokladňa: formulár nepustí prázdne polia ani chybný e-mail | | |
| 6 | Doprava: všetky spôsoby, správne ceny, doprava zadarmo od hranice | | |
| 7 | Platba: dobierka aj prevod, žiadny skutočný IBAN | | |
| 8 | Odoslanie: ďakovná stránka s ľudskou vetou | | |
| 9 | Do 5 minút prišiel potvrdzovací e-mail od firmy, nie od „WordPress" | | |
| 10 | Celý nákup na mobile bez prekrývania a bez vodorovného posúvania | | |
| 11 | HTTPS zámok počas celého nákupu | | |
| 12 | Vidím vetu o študentskom projekte | | |

Protokol si vymeňte, chyby oprav **dnes** a test zopakuj. Vo WooCommerce potom testovacie objednávky zmaž (Objednávky → Kôš), vo Webnode ich zruš.

!!! tip "AI v tomto bloku"
    **Čo jej zveriť:** text potvrdzovacieho e-mailu a ďakovnej stránky, alebo ladenie, keď e-mail neprichádza či doprava nesedí.

    ```text
    Napíš text potvrdzovacieho e-mailu objednávky pre e-shop [firma], ktorý predáva [sortiment]. Tón: [vyber]. Musí obsahovať: poďakovanie, čo sa stane ďalej (odoslanie do 2 pracovných dní, číslo zásielky e-mailom), pri platbe prevodom údaje na platbu [vzorové], kontakt. Max. 8 viet, bez marketingových fráz. Zákazníkovi [tykaj/vykaj].
    ```

    **Čo si overiť:** e-mail nesmie sľubovať, čo e-shop nerobí (sledovanie zásielky, ktoré nemáš). Pri ladení do AI vlož chybovú hlášku, nie prístupové údaje ani e-maily testerov. Rady k nastaveniam over podľa svojej verzie systému.

!!! note "Ako je to v praxi"
    Doprava a platby sú miesto, kde e-shop **naozaj platí**. **Platobná brána** (GoPay, Besteron, Stripe, Adyen…) si berie rádovo **1–2 % z každej platby plus pár centov**, vyžaduje zmluvu, overenie firmy (IČO, účet, konateľ) a niekedy mesačný poplatok — za to má zákazník zaplatené za 10 sekúnd a firma peniaze na účte do dní. **Dobierka** stojí dopravcovi rádovo 1–2 € navyše a nesie riziko neprevzatia (pri niektorých sortimentoch 10–20 % zásielok). **Packeta či kuriér** účtujú e-shopu za balík rádovo 2–5 € podľa objemu a zmluvy — preto firmy dopravu „zadarmo" schovávajú do ceny alebo ju viažu na minimálnu objednávku. A **fulfillment** (sklad + balenie + expedícia ako služba) stojí ďalšie eurá za objednávku, no umožní predávať bez vlastného skladu.

## ✅ Výstup bloku

- [ ] Funkčný nákupný proces: doprava, platby (dobierka, prevod so vzorovým IBAN), potvrdzovací e-mail, stránka Doprava a platba.
- [ ] **Adresa funkčného košíka odovzdaná v Moodle** (zadanie *WWW košík adresa*).
- [ ] Protokol testu spolužiaka (pred a po opravách) a rozhodnutia o doprave a platbách v kapitole 4 dokumentu.

Kritérium hodnotenia: kľúčová časť **Vytvorenie WWW stránok e-shopu (4 b)** — nákupný systém.
