// Récupération des dimensions de la brique

// fonction qui récupère les valeurs du mur et calcul sa superficie
function dimMur() {
  let loMur = document.getElementById("longMur").value;
  let laMur = document.getElementById("largMur").value;

  loMur = parseFloat(loMur);
  laMur = parseFloat(laMur);

  if (loMur != 0 && laMur != 0) {
    superficieMur(loMur, laMur);
  }
}

function superficieMur(longeurMur, largeurMur) {
  let superficie = (longeurMur / 100) * (largeurMur / 100);

  document.getElementById("superficie").innerHTML = superficie.toFixed(2);
}

// fonction de récupération de la dimension de la brique
function valBrique(dimBrique) {
  // var dimBrique = document.getElementById("choix").value;
  let reg = new RegExp("x");
  let brique = dimBrique.split(reg);

  ecritureValSelect(brique);
}

// ecriture des valeurs dans la page html
function ecritureValSelect(brique) {
  //recuperation des valeurs aux différents index
  let long = parseFloat(brique[0]);
  let larg = parseFloat(brique[1]);
  let haut = parseFloat(brique[2]);
  let briqueMur = 0;

  //affiche les valeurs de la longeur, largeur, hauteur
  document.getElementById("long").innerHTML = long;
  document.getElementById("larg").innerHTML = larg;
  document.getElementById("haut").innerHTML = haut;

  //affichage du calcul de la superficie de la face
  document.getElementById("face").innerHTML =
    ((long / 100) * (haut / 100)).toFixed(2) + " m²";

  // var supCal = document.getElementById("superficie").innerHTML;
  // var supFace = document.getElementById("face").innerHTML;

  let loMur = document.getElementById("longMur").value;
  let laMur = document.getElementById("largMur").value;

  briqueMur = nombre_brique(loMur, laMur, long, haut);

  let epaisseur = document.querySelector("#choix option:checked").parentElement
    .label;

  if (epaisseur == "Blocs en béton") {
    jointEpaisseur = 1.5;
  } else if (epaisseur == "Brique rapide") {
    jointEpaisseur = 1;
  } else {
    jointEpaisseur = 0.8;
  }

  let mortierMur = mortier(long, haut, briqueMur, jointEpaisseur);

  let sableRhin = sable(mortierMur, 40);
  let sableKg = sableRhin * 40;
  let qteCiment = ciment(mortierMur, 25);
  let cimentKg = qteCiment * 25;

  //affiche les valeurs de la longeur, largeur, hauteur
  document.getElementById("qteBrique").innerHTML = Math.ceil(briqueMur);

  //volume de mortier
  document.getElementById("qteMortier").innerHTML =
    mortierMur.toFixed(2) + "litres";

  //nombre de sac de sable
  document.getElementById("kgSable").innerHTML = sableKg.toFixed(2);
  document.getElementById("sacs40").innerHTML =
    Math.ceil(sableRhin) + " sacs de 40 kg";

  document.getElementById("kgCiment").innerHTML = cimentKg.toFixed(2);

  document.getElementById("sacs25").innerHTML =
    Math.ceil(qteCiment) + " sacs de 25 kg";
}

function nombre_brique(longueurMur, hauteurMur, longueurBrique, hauteurBrique) {
  let nbbrique;
  let briqueLong;
  let briqueLarg;

  if (
    longueurMur != 0 &&
    hauteurMur != 0 &&
    longueurBrique != 0 &&
    hauteurBrique != 0
  ) {
    briqueLong = Math.ceil((longueurMur / longueurBrique) * 1.02);
    briqueLarg = Math.ceil((hauteurMur / hauteurBrique) * 1.02);

    nbbrique = briqueLarg * briqueLong;

    return Math.ceil(nbbrique);
  }
}

function mortier(longueurBrique, hauteurBrique, nbreBrique, epaisseurJoint) {
  var largeurBrique = document.getElementById("larg").innerHTML;
  var largeurBrique = parseFloat(largeurBrique);
  var surfaceMaconner = (longueurBrique + hauteurBrique) * largeurBrique;
  var surfaceMortier = surfaceMaconner * nbreBrique;
  return (surfaceMortier * epaisseurJoint * 1.1) / 1000;
}

function sable(volumeMortier, qtt_sable_par_sac) {
  return ((volumeMortier / 1000) * 1800) / qtt_sable_par_sac;
}

function ciment(volumeMortier, qtt_ciment_par_sac) {
  return ((volumeMortier / 1000) * 350) / qtt_ciment_par_sac;
}
