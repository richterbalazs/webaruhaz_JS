import { POLOKLISTA } from "./adat";
import { kartyaRendezes, megjelenit } from "./kartyaMegjelenit";

function init(lista){
    megjelenit(kartyaRendezes(lista));
}

init(POLOKLISTA)
