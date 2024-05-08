import { POLOKLISTA } from "./adat.js";
import { kartyaRendezes, megjelenit } from "./kartyaMegjelenit.js";
import { arRendezes, nevRendezes, szuresNevSzerint } from "./rendezes.js";
import { tablazat, torlesEsemeny } from "./fuggvenyek.js";

let nevIrany = 1;
let arIrany = 1;
const kosarLISTA = [];

function init(lista) {
    megjelenit(kartyaRendezes(lista));
    kosarbaRak(lista);

}

function kosarInit() {
    kosarELEM.html(tablazat(kosarLISTA))
    kosarTorles();
    vasarlasGombPress();
}

init(POLOKLISTA);
nevRendez();
arRendez();
szuresEsemeny();

function nevRendez() {
    const nevRendezELEM = $("#nev")
    nevRendezELEM.on("click", function () {
        const rLista = nevRendezes(POLOKLISTA, nevIrany)
        init(rLista)
        nevIrany *= (-1)
    })
}

function arRendez() {
    const arELEM = $("#ar")
    arELEM.on("click", function () {
        const arLista = arRendezes(POLOKLISTA, arIrany)
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

const kosarELEM = $("#kosartartalom");
function kosarbaRak(lista) {
    const gombELEM = $(".kosarba");
    gombELEM.on("click", function (event) {
        const ID = event.target.id
        if (!kosarLISTA.includes(lista[ID])) {
            kosarLISTA.push(lista[ID])
            kosarInit();
            alert("A tétel sikeresen hozzáadódott a kosarad tartalmához!")
        }
    })
    
}

function kosarTorles() {
    const torolELEM = $(".torol");
    console.log(torolELEM)
    torolELEM.on("click", function (event) {
        let index = event.target.id
        const torlesLISTA = torlesEsemeny(kosarLISTA, index)
        kosarELEM.html(tablazat(torlesLISTA))
        kosarInit();
        alert("A tételt sikeresen törölted a kosaradból!")
    })
}

function vasarlasGombPress(){
    const gombnyomasELEM = $(".vasarlasgomb")
    gombnyomasELEM.on("click", function (event){
        let index = event.target.id;
        alert("Sikeres megrendelés!")
    
    })
}