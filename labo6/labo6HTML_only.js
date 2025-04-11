function moyenne_UE(tableau_aa) {
  console.log(tableau_aa);
  let tot_point = 0.0; //nécessaire d'initialiser les variables puisque ensuite on les incrémente
  let tot_ects = 0.0;
  let moyenne = 0.0;

  //code du calcul de la moyenne

  return [tot_point, tot_ects, moyenne]; //on retourne un tableau
}

function calcul_total(tableau_UE) {
  let total = 0.0;
  let sur = 0;
  let ECTS = 0;
  let tot_ECTS = 0;

  // calcul des totaux

  retour = [total, sur, ECTS, tot_ECTS]; //on retourne un tableau avec les différentes valeurs nécessaires
  console.log(retour);
  return retour;
}

function remplir_AA() {
  // permet de remplir les zones de texte aléatoirement avec des valeurs entre 0 et 20
  var tab_AA = document.getElementsByClassName("points");
  for (let i = 0; i < tab_AA.length; i++) {
    tab_AA[i].value = (Math.random() * 20).toFixed(1);
    tab_AA[i].onchange();
  }
}

function change_points(UE, AA) {
  // pour éviter la redondance dans le code HTML des événements onchange, on a déplacé les instructions dans une fonction
  // UE est le tableau des UE et AA est l'AA courante que l'on vient d'encoder
  //cette fonction appelle la fonction moyenne_UE et modifie l'UE qui correspond au data-index-UE de l'AA qui a été modifiée
}

function case_cocher(check, UE) {
  if (check.checked) {
    UE[check.getAttribute("data-index-UE")].value = "disp.";
    UE[check.getAttribute("data-index-UE")].setAttribute(
      "style",
      "background-color:grey"
    );
    let aa = document.getElementsByName(check.getAttribute("data-name"));
    for (let i = 0; i < aa.length; i++) {
      aa[i].value = "";
      aa[i].setAttribute("Disabled", true);
    }
  } else {
    UE[check.getAttribute("data-index-UE")].value = "";
    UE[check.getAttribute("data-index-UE")].setAttribute(
      "style",
      "background-color:white"
    );
    let aa = document.getElementsByName(check.getAttribute("data-name"));
    for (let i = 0; i < aa.length; i++) {
      aa[i].value = "0";
      aa[i].removeAttribute("Disabled");
    }
  }
}
