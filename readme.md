# A Weboldal Specifikációja:

Jelenítsük meg a listánkat egy kártyában, majd a listát tudjuk rendezni pl ár szerint, ha rákattintunk a lenyiló menüben a rendezés ár szerint (növekvőre), akkor a legkisebb árral rendelkező terméktől a legdrágább termékik listázza a kártyákat.

# HTML felületek:


## Publikus felület:

- Tudjunk szűrni a publikus felületen név, illetve ár alapján. 
- Amit a kosárba rakunk az jelenjen meg a kosár felületen, tudjuk törölni is a kosár tartamát.

## Adminisztrációs felület: 

- A táblázat fejlécére kattintva tudjunk rendezni növekvő, illetve csökkenő sorrendbe az adatokat.
- Tudjunk a táblázathoz hozzáadni termékeket,
- Tudjuk a meglévő termékeket szerkeszteni illetve törölni.

# Adatszerkezetek
-termekLISTA[{}, {}]
- kosarLISTA=[] - ide kerülnek a kosárba tett termékek.


# Metódusok: 

1. **htmlOszeallit(lista)->txt** | összállatja a táblázat html szerkezetét egy szöveges változóba, a visszatérési értéke egy szöveg.

2. **kartyaOsszeallit(lista)-> txt** - összeállítja cardba a html szerkezetét divekkel, p taggel egy szöveges változóba

3. **megjelenit(txt, szuloElem)** -> megjelenítette szuloElemben a paraméterben kapott txt szöveget

4. **kosarbaTesz(kosarLista, termekLista, id)** -> az adott id-jű terméket beleteszi a kosárlistába

5. **rendez(lista, irany) -> rendezettLista** | a paraméterében kapott listát ár szerint megrendezi; a függvény akkor fut le, ha a lenyiló menüből kiválasztottuk a "rendezés ár szerint (legnagyobb)" menüpontot.

6. **adatHozzaadas(lista) -> kibovitettLista** |  Összegyűjti az űrlapról az adatokat és összeállít belőlük egy objektumot, majd azt beleteszi a listába.; a függvény akkor fut le, ha rákattintunk a Hozzáad gombra. 

7. **torol(lista,id )-> toroltLista** | kitorli a listából az adott id-jű elemet, ez akkor fut le hogyha a kosárban a kuka jel mellé kattintunk.

8. **szures(lista, keresoSzoveg) -> szurtLista** | a keresőmezőbe beírt szöveget keresi a lista objektumainak név mezőjében. mindez akkor fut le, ha beírunk valamit a keresőmezőbe.
