export function tablazat(lista) {
  let txt = "<div class='tabla row'>";
  txt += "<table class='table table-striped col-lg-4'>";
  txt +=
    "<thead><tr><th>Márka:</th><th>Ár:</th><th></th></tr></thead>";
  txt += "<tbody>";
  let osszeg = 0;
  let db = 0;
  lista.forEach((elem, index) => {
    txt += `<tr>`;
    for (const kulcs in elem) {
      if (kulcs !== "kep") {
        txt += `<td>${elem[kulcs]}</td>`;
      }
      if (kulcs === "ar") {
        osszeg += parseInt(elem[kulcs]);
      }
     
    }
    txt += `<td class='torol' id=${"k" + index}>🗑️</td>`;

    txt += `</tr>`;
  });
  txt += "</tbody></table></div>";
  txt += "<div class='osszeggomb'>";
  txt += `<h5>Végösszeg: ${osszeg} Ft</h5>`;
  txt += `<button type="button" class="vasarlasgomb btn btn-success">Vásárlás</button>`
  txt += "</div>";
  return txt;
}

export function torlesEsemeny(lista, index){
        lista.splice(index, 1)
        return lista;
}