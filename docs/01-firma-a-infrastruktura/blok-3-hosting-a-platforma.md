# Blok 3 — Hosting a platforma

Firma je pripojená. Teraz potrebuje miesto, **kde bude e-shop bývať**: server, na ktorom beží, a adresu, na ktorej ho zákazníci nájdu. Tomu sa hovorí hosting — a pri e-shope je to rozhodnutie, s ktorým budeš žiť celý zvyšok semestra. Zlý hosting znamená pomalý web, reklamu cudzej firmy na tvojich stránkach alebo košík, ktorý sa nedá spustiť.

Podmienka predmetu je jasná: hosting musí byť **zadarmo** — a nie „zadarmo na 14 dní", ani „zadarmo, keď si kúpiš doménu". Zistíš, že takých nie je veľa. To nie je chyba zadania, to je jeho pointa: pochopíš, čo hosting v skutočnosti stojí a za čo firmy platia.

Metóda je rovnaká ako v bloku 2: **10 možností, jedna tabuľka, kritériá, rozhodnutie.** Ak si ju ešte nemáš zažitú, pozri [Tabuľka 10 poskytovateľov](../znalostna-baza/tabulka-10-poskytovatelov.md).

!!! note "Dve skupiny, dve záložky"
    Od tohto bloku sa časť postupu líši podľa toho, na čom staviaš. Skupina **WooCommerce** hľadá klasický webhosting, na ktorý sa dá nainštalovať WordPress. Skupina **Webnode** hľadá platformu so **vstavaným e-shopom**. Vyber si záložku svojej skupiny — spoločný text platí pre obe.

## 🎯 Čo sa v tomto bloku naučíš

- Čo je hosting, doména, subdoména, DNS a SSL — a čo z toho e-shop potrebuje.
- Rozlíšiť **klasický webhosting** (prenajatý priestor s PHP a databázou) od **platformy** (hotový systém, v ktorom si e-shop naklikáš).
- Rozpoznať, čo je naozaj zadarmo a kde je háčik.
- Vybrať hosting podľa kritérií a zaregistrovať sa bezpečne.

## Krok 1 — Pojmy, bez ktorých sa nedá vyberať 🧭

Skôr než otvoríš prvú ponuku, ujasni si štyri slová. Podrobne sú v Znalostnej báze → [Internet, doména a DNS](../znalostna-baza/internet-domena-dns.md), tu skratka:

- **Hosting** — počítač (server), na ktorom ležia súbory a databáza e-shopu a ktorý beží nonstop.
- **Doména** — adresa, ktorú zákazník napíše do prehliadača (`mojeshop.sk`). Kupuje sa zvlášť, hosting ju len používa. Na free hostingu dostaneš **subdoménu**: `nazoveshopu.hosting.xy`.
- **DNS** — telefónny zoznam internetu: prekladá doménu na IP adresu servera.
- **SSL / HTTPS** — šifrovanie a zámok v prehliadači. Pre e-shop **povinnosť**: bez nej prehliadač zákazníka varuje a nikto ti nezadá adresu ani kartu.

## Krok 2 — Čo presne hľadáš 🔎

Spoločné pre obe skupiny: hosting musí mať **sprievodcu e-shopom** — cestu, ako z prázdneho účtu dostať fungujúci obchod bez programovania. Čo to znamená, sa líši:

=== "WooCommerce"

    Hľadáš **webhosting s PHP a databázou**, na ktorý nainštaluješ WordPress a k nemu plugin WooCommerce. Bez týchto vecí to nepôjde:

    - **PHP** (verzia 8 alebo novšia) a **MySQL / MariaDB databáza** — WordPress bez nich nebeží.
    - **Inštalátor WordPressu** na jeden klik (Softaculous, Installatron, „1-click install") — to je tvoj sprievodca. Ak nie je, potrebuješ aspoň **FTP alebo správcu súborov**, aby si WordPress nahral ručne.
    - **Miesto na disku** aspoň 1 GB (WordPress + WooCommerce + fotky 10 produktov).
    - **SSL certifikát** zadarmo (Let's Encrypt).
    - **Subdoména** bez podmienky kúpiť platenú doménu.

    Kde hľadať: vyhľadávanie „free webhosting php mysql", „free wordpress hosting", zoznamy a recenzie free hostingov, české a slovenské hostingy s bezplatným plánom. Štartovací zoznam mien, ktoré sa v posledných rokoch objavovali — **každé si over sám, free plány sa menia každý rok:** InfinityFree, ByetHost, AwardSpace, FreeHostia, Endora, Webzdarma.

=== "Webnode"

    Hľadáš **platformu so vstavaným e-shopom**: registruješ sa, vyberieš šablónu a produkty s košíkom naklikáš v prehliadači. Server, PHP ani databázu neriešiš — sú súčasťou služby. Sleduj:

    - **Bezplatný plán s e-shopom** — nie skúšobná verzia na 14 alebo 30 dní. Pri mnohých platformách je e-shop až v platenom pláne.
    - **Limit produktov** v bezplatnom pláne (Webnode: 10 produktov — preto sortiment do 10).
    - **Subdoména** zadarmo (`nazoveshopu.webnode.sk` a podobne).
    - **Reklama platformy** na tvojom webe — u free plánov bežná; píš si, aká veľká a kde.
    - **Platby a doprava** v bezplatnom pláne — dá sa nastaviť aspoň dobierka a prevod?
    - **Slovenčina** v administrácii aj v košíku pre zákazníka.

    Kde hľadať: vyhľadávanie „free eshop builder", „website builder free online store", porovnania tvorcov webu. Štartovací zoznam mien — **každé si over sám, bezplatné plány sa menia:** Webnode, Mozello, Ecwid, Wix, Weebly, Jimdo, Site123, Strikingly, Shoptet (len skúšobná verzia — dobrý príklad toho, čo *nie je* zadarmo).

!!! warning "Čo znamená „naozaj zadarmo""
    Pri každom kandidátovi hľadaj háčik, kým ho zapíšeš do tabuľky:

    - **Skúšobná verzia** (trial) nie je free plán — po 14 či 30 dňoch e-shop zmizne alebo sa zamkne.
    - **Podmienka kúpiť doménu** („.sk doména za 12 €/rok a hosting máte zadarmo") — to nie je zadarmo.
    - **Platobná karta pri registrácii** — nezadávaj ju. Ak ju služba vyžaduje, napíš to do tabuľky a hľadaj ďalej.
    - **Limity**, po ktorých web prestane fungovať: návštevy za deň, veľkosť databázy, počet e-mailov.
    - **Reklama** vložená do tvojich stránok — zapíš, aká a kde.

## Krok 3 — Tabuľka 10 hostingov 📊

Rovnaké pravidlá ako v bloku 2: jeden riadok = jeden hosting, ku každému údaju **zdroj**, čo nevieš zistiť, označ „neuvedené" — nikdy nedopĺňaj odhadom. V šablóne [Tabuľka 10 poskytovateľov](../sablony/EO-tabulka-10-poskytovatelov.xlsx) je na to hárok Hosting.

| Hosting / platforma | Naozaj free? (háčik) | Sprievodca e-shopom / inštalátor WP | Subdoména | Disk / limit produktov | Bandwidth, návštevy | Reklama na webe | SSL | Podpora | Registrácia vyžaduje | Zdroj |
|---|---|---|---|---|---|---|---|---|---|---|
| Príklad hosting | áno, bez karty | Softaculous (WP na 1 klik) | meno.priklad.xy | 5 GB | „fair use" | žiadna | Let's Encrypt zadarmo | len fórum | e-mail | odkaz |

## Krok 4 — Registruj sa bezpečne 🔐

Tabuľku nevyplníš z cenníka — o skutočných limitoch a reklame sa dozvieš až po registrácii. Budeš sa teda registrovať na viacerých službách. Pár pravidiel:

- **Samostatný e-mail alebo alias.** Gmail dovoľuje `tvojemeno+hosting@gmail.com` — pošta príde na tvoj účet, ale vieš, odkiaľ ti chodí spam, a všetko z hostingov máš pokope. Niektoré služby znak `+` odmietnu — vtedy si založ druhú schránku len na projekt.
- **Nové heslo pre každú službu**, uložené v správcovi hesiel (aj ten v prehliadači stačí). Free hostingy bývajú terčom únikov dát.
- **Žiadna karta, žiadne rodné číslo.** Meno, e-mail, prípadne telefón — viac free služba nepotrebuje.
- **Zapisuj si**, kde všade si sa registroval — na konci semestra účty, ktoré nepoužívaš, zruš.

## Krok 5 — Rozhodni, zdôvodni a zaregistruj adresu ✍️

Vyber jeden hosting a napíš zdôvodnenie na 3–5 viet: ktoré kritériá rozhodli, čo si obetoval, čo bolo najväčšie prekvapenie pri hľadaní. Potom na ňom zaregistruj **subdoménu e-shopu** (napr. `nazoveshopu.hosting.xy`) a zapíš si ju do dokumentu — v bloku 4 na nej začneš stavať.

Do kapitoly 3 dokumentu projektu patrí: kritériá, tabuľka, výber so zdôvodnením a **krátka teória** — čo je hosting, doména, DNS a prečo e-shop potrebuje HTTPS (so zdrojmi).

!!! tip "AI v tomto bloku"
    **Čo jej zveriť:** vysvetlenie pojmov, ktorým v ponukách nerozumieš, a kontrolu tvojich kritérií.

    ```text
    Vyberám bezplatný hosting pre malý e-shop (do 10 produktov) postavený na [WordPress + WooCommerce / platforme so vstavaným e-shopom]. Toto sú moje kritériá v poradí dôležitosti: [zoznam]. Chýba mi niečo dôležité? Ktoré z kritérií v praxi rozhoduje najviac a prečo? Odpovedaj stručne, v bodoch.
    ```

    **Čo si overiť:** zoznam hostingov od AI ber len ako začiatok hľadania — polovica z nich už nemá free plán alebo neexistuje. Do tabuľky ide výhradne to, čo si sám videl na webe služby (najlepšie po registrácii) a vieš uviesť ako zdroj.

!!! note "Ako je to v praxi"
    Skutočný e-shop nikdy nebeží na free hostingu. Bežné ceny: **zdieľaný webhosting** rádovo jednotky eur mesačne, **vlastná .sk doména** okolo desiatky eur ročne, **prenajatá e-shopová platforma** (Shoptet, Webnode v platenom pláne, Shopify) rádovo desiatky eur mesačne, **spravovaný WooCommerce hosting** podobne. Čo za to firma dostane: vlastnú doménu bez cudzieho mena, žiadnu reklamu, rýchlosť a kapacitu na sezónu, **zálohy**, **podporu, ktorá zdvihne telefón**, platobné brány a istotu, že web zajtra nezmizne. Keď dnes vidíš, čo všetko free hosting nevie, vieš aj, za čo tie desiatky eur sú.

## ✅ Výstup bloku

- [ ] Tabuľka 10 hostingov so zdrojmi + výber so zdôvodnením — **odovzdať v Moodle** (zadanie *FreeWebHosting*).
- [ ] Registrovaný účet na vybranom hostingu a **adresa budúceho e-shopu** zapísaná v dokumente.
- [ ] Kapitola 3 dokumentu: kritériá, tabuľka, výber, teória (hosting, doména, DNS, HTTPS) so zdrojmi.

Kritérium hodnotenia: **Voľba host serveru (2 b)**.
