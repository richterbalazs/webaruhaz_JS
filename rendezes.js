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


export function arRendezes(lista) {
    console.log("RENDEZÉS ***************");
    lista.sort(function (e1, e2) {
      console.log(e1.kor, e2.kor, e2.kor - e1.kor);
      return e2.kor - e1.kor;
    });
    console.log(lista);
  }
  rendez(emberekLISTA);