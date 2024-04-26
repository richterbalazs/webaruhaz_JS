import { POLOKLISTA } from "./adat.js"

export function nevRendezes(lista, irany){
    lista.sort(function(e1, e2){
        let eredmeny = 1
        if(e1.nev < e2.nev){
            eredmeny = -1
        }
        return eredmeny*irany
    })
    return lista
}

export function arRendezes(lista,irany) {
    lista.sort(function (e1,e2){
        return (e1.ar - e2.ar) * irany;
    })
    return lista;
}

export function szuresNevSzerint(lista, szurtSzoveg) {
    console.log(szurtSzoveg);
    /* szurtLista - a szűrőbe írt szó alaján kilistázza azokat az adatokat a listából, amelyekben szerepel a név mezőjében az adott szó.  */
    const SZURTLiSTA = lista.filter(function (elem) {
      return elem.nev.includes(szurtSzoveg);
    });
    return SZURTLiSTA;
  }