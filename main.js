import { POLOKLISTA } from "./adat.js";
import { kartyaRendezes, megjelenit } from "./kartyaMegjelenit.js";
import { arRendezes, nevRendezes, szuresNevSzerint } from "./rendezes.js";

let nevIrany = 1;
let arIrany = 1;
const kosarLISTA = [];

function init(lista){
    megjelenit(kartyaRendezes(lista));
}

init(POLOKLISTA);
nevRendez();
arRendez();
szuresEsemeny();

function nevRendez(){
    const nevRendezELEM = $("#nev")
    nevRendezELEM.on("click", function(){
        const rLista = nevRendezes(POLOKLISTA, nevIrany)
        init(rLista)
        nevIrany *= (-1)
    })
}

function arRendez(){
    const arELEM = $("#ar")
    arELEM.on("click", function(){
        const arLista = arRendezes(POLOKLISTA,arIrany)
        init(arLista)
        arIrany *= (-1)
    })
}

function szuresEsemeny() {
    const keresELEM = $(".szuro");
    keresELEM.on("keyup", function () {
      let keresoSzoveg = keresELEM.val();
      const szurtLISTA = szuresNevSzerint(POLOKLISTA, keresoSzoveg);
      init(szurtLISTA);
    });
  }
