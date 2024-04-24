import { POLOKLISTA } from "./adat.js";
import { kartyaRendezes, megjelenit } from "./kartyaMegjelenit.js";

function init(lista){
    megjelenit(kartyaRendezes(lista));
}

init(POLOKLISTA);