# A Weboldal Specifikációja:

# Póló Webshop bemutatása: 

Ez az adott webshop pólók árusításával foglalkozik. A felhasználónak lehetősége van böngészni a weboldalon megjelenített pólók között, a felhasználó tud szűrni termék név szerint, illetve tud rendezni név és ár szerint. Amennyiben a vásárló vásárolni szeretne a weboldalról, akkor a kosárba gomb megnyomása után a termék megjelenik a kosárban az árával, illetve a nevével együtt. Amennyiben a felhasználó törölni szeretné a kosár tartalmát, azt a kuka ikonra kattintva egyszerűen megteheti. A kosár képes a kosár összegének összesítésére, amelyet a kosár alján találunk.

# Póló webshop szakmai bemutatása

Jelenítsük meg a webshopon elérhető termékeket kártyában, majd a listát tudjuk rendezni pl ár szerint növekvőre vagy csökkenőre, tudjuk az adott kártyában lévő elemeket a kosárhoz adni, illetve törölni. A weboldal képes a kosárba rakott termékek árát összegezni, illetve lehetőség is van a kosárban lévő termékek törlésére is.

# HTML felületek:


## Publikus felület:

- Tudjunk szűrni a publikus felületen név, illetve ár alapján. 
- Működik a szűrés felhasználó által beírt név alapján
- Amit a kosárba rakunk az jelenjen meg a kosár felületen, tudjuk törölni is a kosár tartamát.
- Az oldal képes végösszeget is számítani a kosár tartalmából.

# Adatszerkezetek
- POLOKLISTA[{}, {}]
- kosarLISTA=[] - ide kerülnek a kosárba tett termékek.


# Metódusok: 

1. **kartyaMegjelenit(lista)-> txt** - összeállítja kártyákba a html szerkezetét divekkel, p taggel egy szöveges változóba.

2. **arRendez()** - egy listát vár, amit majd ár szerint fog rendezni. Az árat lehet rendezni növekvő, illetve csökkenő sorrendben is. 

3. **nevRendez()** - egy listát vár, amit majd név szerint fog rendezni. A nevet lehet rendezni A-Z-ig, illetve Z-A-ig is.

4. **szuresEsemeny()** - a szűrőbe írt szó alaján kilistázza azokat az adatokat a listából, amelyekben szerepel a név mezőjében az adott szó.

5. **kosarbaRak()** -> Amikor a terméknél a kosárba gombot megnyomjuk, akkor azt az ID-jű elemet belefűzi a KOSÁRLISTÁBA, amely megjelenik a weboldal jobb szélén, a kosár szekciónál.

6. **kosarTorles()** - kitorli a KOSARLISTA-ból az adott id-jű elemet, ez akkor fut le hogyha a kosárban a kuka jel mellé kattintunk.

7. **vasarlasGombPress()** - Amennyiben a vásárlás gombra kattintunk, akkor megjelenik egy Alert a sikeres megrendelésről.

8. **tablazat(lista)-> txt** - Összeállítja a jobb aside-ban a kosár táblázatot, amelybe belekerülnek a kosárba rakott termékek, a végén pedig összegezve kiírja a kosár tartalmának az összegét.

