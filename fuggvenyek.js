export function tablazat(lista){
    let txt = ""
    txt += "<table class='table table-striped'>";
    txt +=
      "<thead><tr><th>Név</th><th>Ár</th></tr></thead>";
    txt += "<tbody>";
    for(let i = 0; i<lista.length; i++){
      txt += `<tr>`;
      txt += `<td>${lista[i].nev}</td>`;
      txt += `<td>${lista[i].ar} Ft</td>`;
      txt += `<td class="torol" id=${i}>🗑️</td>`;
      txt += `<tr>`;
    }
    txt += "</tbody></table>";
    txt += "<h5>Rendelés végösszege:</h5>"
    txt += "<div id=vegosszeg></div>"
    txt += "<br>"
    txt += "<button type=button class=btn btn-success>Fizetés</button>"
    return txt
}

export function torlesEsemeny(lista, index){
        lista.splice(index, 1)
        return lista;
}