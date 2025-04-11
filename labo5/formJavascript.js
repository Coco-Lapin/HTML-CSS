function calculer() {
  // Récupération des valeurs des encodages des longueur, largeur et hauteur
  var valeurLongueur = document.getElementById("longueur").value;
  var valeurLargeur = document.getElementById("largeur").value;
  var valeurHauteur = document.getElementById("hauteur").value;

  // Conversion des valeurs en nombres
  valeurLongueur = parseFloat(valeurLongueur);
  valeurLargeur = parseFloat(valeurLargeur);
  valeurHauteur = parseFloat(valeurHauteur);

  // Etape 1 -- calcul du volume de la pièce
  var volume = valeurHauteur * valeurLargeur * valeurLongueur;

  // Etape 2 -- récupération de la température souhaitée dans la pièce
  var option = document.getElementById("temp").value;
  var vtemp;
  if (option == 1) {
    vtemp = volume * 60;
  } else if (option == 2) {
    vtemp = volume * 70;
  } else {
    vtemp = volume * 80;
  }

  // Etape 3 -- calcul en fonction des murs extérieurs
  var nbExte = document.getElementById("mursExte").value;

  // Conversion des valeurs en nombres
  nbExte = parseInt(nbExte);

  volume = volume * (1 + 0, 1 * nbExte);

  // Etape 4 -- calcul en fonction de l'isolation du plafond
  var plafond = document.getElementById("plafondIso").checked;
  if (plafond) {
    volume = volume * 0.85;
  }

  // Etape 5 -- calcul en fonction de l'isolation d'ouverture isolée (10%) ou non (20%)
  var watts = 0;
  var nonIso = document.getElementById("nonIsole").value;
  var iso = document.getElementById("Isole").value;

  // Conversion des valeurs en nombres
  nonIso = parseInt(nonIso);
  iso = parseInt(iso);

  watts = volume + volume * (0.2 * nonIso + 0.1 * iso);
  document.getElementById("valueRes").textContent = watts;
  alert("Puissance nécessaire est de " + watts.toFixed(2) + " watt(s)");
}

function updateValueExte(nbExte) {
  document.getElementById("rangeMursExte").textContent = nbExte;
}

function updateValueIsole(iso) {
  document.getElementById("rangeIsole").textContent = iso;
}

function updateValueNIsole(nonIso) {
  document.getElementById("rangeNonIsole").textContent = nonIso;
}
