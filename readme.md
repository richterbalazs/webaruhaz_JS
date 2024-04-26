# A Weboldal Specifikációja:

# Póló webshop

Jelenítsük meg a listánkat egy kártyában, majd a listát tudjuk rendezni pl ár szerint, ha rákattintunk a lenyiló menüben a rendezés ár szerint (növekvőre), akkor a legkisebb árral rendelkező terméktől a legdrágább termékik listázza a kártyákat.

# HTML felületek:


## Publikus felület:

- Tudjunk szűrni a publikus felületen név, illetve ár alapján. 
- Működik a szűrés felhasználó által beírt név alapján
- Amit a kosárba rakunk az jelenjen meg a kosár felületen, tudjuk törölni is a kosár tartamát.

## Adminisztrációs felület: 

- A táblázat fejlécére kattintva tudjunk rendezni növekvő, illetve csökkenő sorrendbe az adatokat.
- Tudjunk a táblázathoz hozzáadni termékeket.
- Tudjuk a meglévő termékeket szerkeszteni illetve törölni.

# Adatszerkezetek
- POLOKLISTA[{}, {}]
- kosarLISTA=[] - ide kerülnek a kosárba tett termékek.


# Metódusok: 

1. **kartyaMegjelenit(lista)-> txt** - összeállítja cardba a html szerkezetét divekkel, p taggel egy szöveges változóba

2. **arRendezes(lista, irany)-> lista** - egy listát vár, amit majd ár szerint fog rendezni. Visszatér a listával.

3. **nevRendezes(lista, irany)-> lista** - egy listát vár, amit majd név szerint fog rendezni. Visszatér a listával.

4. **szuresNevSzerint(lista, szurtSzoveg)-> lista** - a szűrőbe írt szó alaján kilistázza azokat az adatokat a listából, amelyekben szerepel a név mezőjében az adott szó.

5. **kosarbaTesz(kosarLista, )** -> Amikor a terméknél a kosárba gombot megnyomjuk, akkor azt az ID-jű elemet belefűzi a KOSÁRLISTÁBA, amely megjelenik a weboldal jobb szélén, a kosár szekciónál.

6. **torol(lista,id )-> toroltLista** | kitorli a listából az adott id-jű elemet, ez akkor fut le hogyha a kosárban a kuka jel mellé kattintunk.

