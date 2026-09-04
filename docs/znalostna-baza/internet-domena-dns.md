# Internet, doména a DNS

Slovník pojmov, bez ktorých sa nedá vyberať hosting ani pochopiť, prečo e-shop „nejde". Ide o to, aby si vedel, čo si kupuješ (alebo dostávaš zadarmo) a kto je za čo zodpovedný.

## Internet

Sieť sietí: milióny počítačov prepojených tak, že sa každý dohovorí s každým cez spoločné pravidlá — **protokoly TCP/IP**. Dva základné vzory komunikácie:

- **klient – server (C2S):** tvoj prehliadač (klient) si pýta stránku od servera, na ktorom leží e-shop. Tak funguje web.
- **peer-to-peer (P2P):** počítače sú si rovné, každý dáva aj berie (torrenty, časť kryptomien).

## IP adresa

Číselná adresa každého zariadenia v sieti. **IPv4** vyzerá ako `158.193.180.1` — adresy sa vyčerpali, preto prichádza **IPv6** (dlhšie, hexadecimálne). Server s tvojím e-shopom má IP adresu, ale nikto si ju nepamätá — preto existujú domény.

## Doména

Meno, ktoré si ľudia zapamätajú: `fpedas.uniza.sk`. Číta sa sprava: **.sk** je doména najvyššej úrovne (spravuje ju SK-NIC), **uniza** je doména univerzity (registrovaná, platí sa ročne), **fpedas** je **subdoména**, ktorú si majiteľ domény vytvorí sám, zadarmo a koľko chce.

Preto ti free hosting dá **subdoménu** (`nazoveshopu.hosting.xy`) — patrí pod jeho doménu, nič ho nestojí. Vlastná doména `nazoveshopu.sk` sa kupuje u registrátora, rádovo za desiatku eur ročne, a je nezávislá od hostingu: keď zmeníš hosting, doména ide s tebou.

## DNS

Telefónny zoznam internetu: prekladá doménu na IP adresu. Napíšeš `fpedas.uniza.sk`, DNS odpovie `158.193.180.1`, prehliadač sa spojí so serverom. Keď nastavuješ vlastnú doménu k hostingu, robíš práve toto — do DNS záznamov domény napíšeš, na ktorý server má ukazovať. Zmena sa šíri hodiny, preto „to ešte nejde" hneď po nastavení.

Vyskúšaj si: v príkazovom riadku `nslookup uniza.sk`, alebo online nástroje typu „DNS lookup".

## Hosting

Server, na ktorom fyzicky ležia súbory a databáza e-shopu a ktorý beží nonstop. Dve podoby, s ktorými sa stretneš:

- **Webhosting** — prenajatý priestor s PHP a databázou; ty doň nainštaluješ systém (WordPress + WooCommerce). Väčšia sloboda, viac starostí.
- **Platforma (SaaS)** — hotový systém, v ktorom e-shop naklikáš (Webnode, Shoptet, Shopify). Menej slobody, žiadne starosti so serverom.

## SSL a HTTPS

Šifrovanie spojenia medzi prehliadačom a serverom — zámok v adresnom riadku. Bez neho prehliadač návštevníka varuje a e-shop, ktorý pýta adresu a platbu, je bez HTTPS neprijateľný. **Let's Encrypt** vydáva certifikáty zadarmo, slušný hosting ich zapne jedným klikom.

## Kto je za čo zodpovedný

| Vec | Kto ju poskytuje | Čo stojí v praxi |
|---|---|---|
| Doména | registrátor (pre .sk cez SK-NIC) | rádovo desiatka eur ročne; subdoména hostingu zadarmo |
| DNS | zväčša registrátor domény alebo hosting | súčasť ceny |
| Hosting | hostingová firma alebo platforma | jednotky až desiatky eur mesačne; free plán s limitmi |
| SSL | hosting (Let's Encrypt) | zadarmo |
