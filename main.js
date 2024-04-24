import { POLOKLISTA } from "./adat.js";
import { kartyaRendezes, megjelenit } from "./kartyaMegjelenit.js";
import { nevRendezes } from "./rendezes.js";

function init(lista){
    megjelenit(kartyaRendezes(lista));
}

init(POLOKLISTA);
