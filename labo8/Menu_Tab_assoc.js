const entrees = {
  "Tranche de foie gras": 8.5,
  "Tartare de thon rouge aux câpres et noix": 6.5,
  "Terrine de queue de boeuf à l'ancienne, sauce gribiche": 5.0,
  "Carpaccio de saumon au citron vert, chèvre frais et romarin": 6.0,
  "Assortiment de charcuterie": 3.5,
  "Suggestion du moment": 5,
};
const salades = {
  "Salade de la mer": 8.1,
  "Salade Méditéranéenne": 7.5,
  "Salade fromagère": 6.8,
  "Salade Sud-ouest": 8.5,
  "Salade crudité": 6.1,
};
const plats = {
  "Plats du jour": 8.5,
  "Parmentier de cuisse de canard": 8.5,
  "Blanquette de veau et son risotto": 9.5,
  "Sauté d'agneau à l'oriental et sa semoule de blé, salade verte": 10.5,
  "Filet de dorade royale, écrasé de pommes de terre au citron et pistou, salade verte": 11,
  "Brochettes de gambas au piment d'Espellette, rizotto aux asperges vertes": 12,
  "Le vegetarien:Barigoule de légumes au romarin et basilic. Tagliatelles bio et salade verte": 9.5,
  "Suggestion du moment": "10",
};
const garnitures = {
  "Ecrasé de pomme de terre": 2.5,
  Pâtes: 2.5,
  Riz: 2.5,
  "Petits légumes": 2.5,
  "Frites maison": 3.0,
  "Panaché de salades": 2.0,
};
const desserts = {
  "Assortiment de fromages et salades vertes": 3.5,
  "Crumble aux pommes et coulis de framboise": 3.5,
  "Moelleux au chocolat": 4,
  "Verrine de mousse pistache et fruits rouges": 4,
  "Salade de fruits frais": 3.5,
  "Dessert du moment": "3",
};

function start() {
  TR = document.createElement("tr"); //creation d'une ligne

  TH1 = document.createElement("th"); //creation d'une cellule
  TXT1 = document.createTextNode("Les entrees"); // creation d'un noeud text
  TH1.appendChild(TXT1); //ajout du noeud text à la cellule
  TR.appendChild(TH1); //ajout de la cellule à la ligne

  TH2 = document.createElement("th");
  TXT2 = document.createTextNode("Prix");
  TH2.appendChild(TXT2);
  TR.appendChild(TH2);

  TH3 = document.createElement("th"); //creation d'une cellule
  TH3.setAttribute("colspan", "3");
  TXT3 = document.createTextNode("qte commandé"); // creation d'un noeud text
  TH3.appendChild(TXT3); //ajout du noeud text à la cellule
  TR.appendChild(TH3); //ajout de la cellule à la ligne

  document.getElementById("tableau").appendChild(TR); //ajout de la ligne au tableau

  BR = document.createElement("br"); //creation d'une ligne
  document.getElementById("tableau").appendChild(BR); //ajout de la ligne au tableau

  //entree du menu
  for (var i in entrees) {
    //ajout dynamique dans un tableau
    TR = document.createElement("tr"); //creation d'une ligne
    TR.className = "choixRepas";

    TD1 = document.createElement("td"); //creation d'une cellule
    TXT1 = document.createTextNode(i); // creation d'un noeud text
    TD1.appendChild(TXT1); //ajout du noeud text à la cellule
    TR.appendChild(TD1); //ajout de la cellule à la ligne

    TD2 = document.createElement("td");
    TXT2 = document.createTextNode(entrees[i]);
    TD2.appendChild(TXT2);
    TR.appendChild(TD2);

    TD3 = document.createElement("button"); //creation d'une cellule
    TXT3 = document.createTextNode("+"); // creation d'un noeud text
    TD3.appendChild(TXT3); //ajout du noeud text à la cellule
    TR.appendChild(TD3); //ajout de la cellule à la ligne
    TD3.className = "ajoutQTE";

    TD4 = document.createElement("td"); //creation d'une cellule
    TXT4 = document.createTextNode("0"); // creation d'un noeud text
    TD4.appendChild(TXT4); //ajout du noeud text à la cellule
    TR.appendChild(TD4); //ajout de la cellule à la ligne
    TD4.className = "qteCommande";

    TD5 = document.createElement("button"); //creation d'une cellule
    TXT5 = document.createTextNode("-"); // creation d'un noeud text
    TD5.appendChild(TXT5); //ajout du noeud text à la cellule
    TR.appendChild(TD5); //ajout de la cellule à la ligne
    TD5.className = "dimQTE";

    document.getElementById("tableau").appendChild(TR); //ajout de la ligne au tableau
  }

  BR = document.createElement("br"); //creation d'une ligne
  document.getElementById("tableau").appendChild(BR); //ajout de la ligne au tableau

  TR = document.createElement("tr"); //creation d'une ligne

  TH1 = document.createElement("th"); //creation d'une cellule
  TXT1 = document.createTextNode("Les salades"); // creation d'un noeud text
  TH1.appendChild(TXT1); //ajout du noeud text à la cellule
  TR.appendChild(TH1); //ajout de la cellule à la ligne

  TH2 = document.createElement("th");
  TXT2 = document.createTextNode("Prix");
  TH2.appendChild(TXT2);
  TR.appendChild(TH2);

  TH3 = document.createElement("th"); //creation d'une cellule
  TH3.setAttribute("colspan", "3");
  TXT3 = document.createTextNode("qte commandé"); // creation d'un noeud text
  TH3.appendChild(TXT3); //ajout du noeud text à la cellule
  TR.appendChild(TH3); //ajout de la cellule à la ligne

  document.getElementById("tableau").appendChild(TR); //ajout de la ligne au tableau

  BR = document.createElement("br"); //creation d'une ligne
  document.getElementById("tableau").appendChild(BR); //ajout de la ligne au tableau

  //salade
  for (var i in salades) {
    //ajout dynamique dans un tableau
    TR = document.createElement("tr"); //creation d'une ligne
    TD1 = document.createElement("td"); //creation d'une cellule
    TXT1 = document.createTextNode(i); // creation d'un noeud text
    TD1.appendChild(TXT1); //ajout du noeud text à la cellule
    TR.appendChild(TD1); //ajout de la cellule à la ligne

    TD2 = document.createElement("td");
    TXT2 = document.createTextNode(salades[i]);
    TD2.appendChild(TXT2);
    TR.appendChild(TD2);

    TD3 = document.createElement("button"); //creation d'une cellule
    TXT3 = document.createTextNode("+"); // creation d'un noeud text
    TD3.appendChild(TXT3); //ajout du noeud text à la cellule
    TR.appendChild(TD3); //ajout de la cellule à la ligne

    TD4 = document.createElement("td"); //creation d'une cellule
    TXT4 = document.createTextNode("0"); // creation d'un noeud text
    TD4.appendChild(TXT4); //ajout du noeud text à la cellule
    TR.appendChild(TD4); //ajout de la cellule à la ligne

    TD5 = document.createElement("button"); //creation d'une cellule
    TXT5 = document.createTextNode("-"); // creation d'un noeud text
    TD5.appendChild(TXT5); //ajout du noeud text à la cellule
    TR.appendChild(TD5); //ajout de la cellule à la ligne

    document.getElementById("tableau").appendChild(TR); //ajout de la ligne au tableau
  }
  BR = document.createElement("br"); //creation d'une ligne
  document.getElementById("tableau").appendChild(BR); //ajout de la ligne au tableau

  TR = document.createElement("tr"); //creation d'une ligne

  TH1 = document.createElement("th"); //creation d'une cellule
  TXT1 = document.createTextNode("Les plats du chef"); // creation d'un noeud text
  TH1.appendChild(TXT1); //ajout du noeud text à la cellule
  TR.appendChild(TH1); //ajout de la cellule à la ligne

  TH2 = document.createElement("th");
  TXT2 = document.createTextNode("Prix");
  TH2.appendChild(TXT2);
  TR.appendChild(TH2);

  TH3 = document.createElement("th"); //creation d'une cellule
  TH3.setAttribute("colspan", "3");
  TXT3 = document.createTextNode("qte commandé"); // creation d'un noeud text
  TH3.appendChild(TXT3); //ajout du noeud text à la cellule
  TR.appendChild(TH3); //ajout de la cellule à la ligne

  document.getElementById("tableau").appendChild(TR); //ajout de la ligne au tableau

  BR = document.createElement("br"); //creation d'une ligne
  document.getElementById("tableau").appendChild(BR); //ajout de la ligne au tableau

  //plat du chef
  for (var i in plats) {
    //ajout dynamique dans un tableau
    TR = document.createElement("tr"); //creation d'une ligne
    TD1 = document.createElement("td"); //creation d'une cellule
    TXT1 = document.createTextNode(i); // creation d'un noeud text
    TD1.appendChild(TXT1); //ajout du noeud text à la cellule
    TR.appendChild(TD1); //ajout de la cellule à la ligne

    TD2 = document.createElement("td");
    TXT2 = document.createTextNode(plats[i]);
    TD2.appendChild(TXT2);
    TR.appendChild(TD2);

    TD3 = document.createElement("button"); //creation d'une cellule
    TXT3 = document.createTextNode("+"); // creation d'un noeud text
    TD3.appendChild(TXT3); //ajout du noeud text à la cellule
    TR.appendChild(TD3); //ajout de la cellule à la ligne

    TD4 = document.createElement("td"); //creation d'une cellule
    TXT4 = document.createTextNode("0"); // creation d'un noeud text
    TD4.appendChild(TXT4); //ajout du noeud text à la cellule
    TR.appendChild(TD4); //ajout de la cellule à la ligne

    TD5 = document.createElement("button"); //creation d'une cellule
    TXT5 = document.createTextNode("-"); // creation d'un noeud text
    TD5.appendChild(TXT5); //ajout du noeud text à la cellule
    TR.appendChild(TD5); //ajout de la cellule à la ligne

    document.getElementById("tableau").appendChild(TR); //ajout de la ligne au tableau
  }

  BR = document.createElement("br"); //creation d'une ligne
  document.getElementById("tableau").appendChild(BR); //ajout de la ligne au tableau

  TR = document.createElement("tr"); //creation d'une ligne

  TH1 = document.createElement("th"); //creation d'une cellule
  TXT1 = document.createTextNode("Les garnitures"); // creation d'un noeud text
  TH1.appendChild(TXT1); //ajout du noeud text à la cellule
  TR.appendChild(TH1); //ajout de la cellule à la ligne

  TH2 = document.createElement("th");
  TXT2 = document.createTextNode("Prix");
  TH2.appendChild(TXT2);
  TR.appendChild(TH2);

  TH3 = document.createElement("th"); //creation d'une cellule
  TH3.setAttribute("colspan", "3");
  TXT3 = document.createTextNode("qte commandé"); // creation d'un noeud text
  TH3.appendChild(TXT3); //ajout du noeud text à la cellule
  TR.appendChild(TH3); //ajout de la cellule à la ligne

  document.getElementById("tableau").appendChild(TR); //ajout de la ligne au tableau

  BR = document.createElement("br"); //creation d'une ligne
  document.getElementById("tableau").appendChild(BR); //ajout de la ligne au tableau

  //garnitures
  for (var i in garnitures) {
    //ajout dynamique dans un tableau
    TR = document.createElement("tr"); //creation d'une ligne
    TD1 = document.createElement("td"); //creation d'une cellule
    TXT1 = document.createTextNode(i); // creation d'un noeud text
    TD1.appendChild(TXT1); //ajout du noeud text à la cellule
    TR.appendChild(TD1); //ajout de la cellule à la ligne

    TD2 = document.createElement("td");
    TXT2 = document.createTextNode(garnitures[i]);
    TD2.appendChild(TXT2);
    TR.appendChild(TD2);

    TD3 = document.createElement("button"); //creation d'une cellule
    TXT3 = document.createTextNode("+"); // creation d'un noeud text
    TD3.appendChild(TXT3); //ajout du noeud text à la cellule
    TR.appendChild(TD3); //ajout de la cellule à la ligne

    TD4 = document.createElement("td"); //creation d'une cellule
    TXT4 = document.createTextNode("0"); // creation d'un noeud text
    TD4.appendChild(TXT4); //ajout du noeud text à la cellule
    TR.appendChild(TD4); //ajout de la cellule à la ligne

    TD5 = document.createElement("button"); //creation d'une cellule
    TXT5 = document.createTextNode("-"); // creation d'un noeud text
    TD5.appendChild(TXT5); //ajout du noeud text à la cellule
    TR.appendChild(TD5); //ajout de la cellule à la ligne

    document.getElementById("tableau").appendChild(TR); //ajout de la ligne au tableau
  }

  BR = document.createElement("br"); //creation d'une ligne
  document.getElementById("tableau").appendChild(BR); //ajout de la ligne au tableau

  TR = document.createElement("tr"); //creation d'une ligne

  TH1 = document.createElement("th"); //creation d'une cellule
  TXT1 = document.createTextNode("Les desserts Maison"); // creation d'un noeud text
  TH1.appendChild(TXT1); //ajout du noeud text à la cellule
  TR.appendChild(TH1); //ajout de la cellule à la ligne

  TH2 = document.createElement("th");
  TXT2 = document.createTextNode("Prix");
  TH2.appendChild(TXT2);
  TR.appendChild(TH2);

  TH3 = document.createElement("th"); //creation d'une cellule
  TH3.setAttribute("colspan", "3");
  TXT3 = document.createTextNode("qte commandé"); // creation d'un noeud text
  TH3.appendChild(TXT3); //ajout du noeud text à la cellule
  TR.appendChild(TH3); //ajout de la cellule à la ligne

  document.getElementById("tableau").appendChild(TR); //ajout de la ligne au tableau

  BR = document.createElement("br"); //creation d'une ligne
  document.getElementById("tableau").appendChild(BR); //ajout de la ligne au tableau

  //desserts
  for (var i in desserts) {
    //ajout dynamique dans un tableau
    TR = document.createElement("tr"); //creation d'une ligne

    TD1 = document.createElement("td"); //creation d'une cellule
    TXT1 = document.createTextNode(i); // creation d'un noeud text
    TD1.appendChild(TXT1); //ajout du noeud text à la cellule
    TR.appendChild(TD1); //ajout de la cellule à la ligne

    TD2 = document.createElement("td");
    TXT2 = document.createTextNode(desserts[i]);
    TD2.appendChild(TXT2);
    TR.appendChild(TD2);

    TD3 = document.createElement("button"); //creation d'une cellule
    TXT3 = document.createTextNode("+"); // creation d'un noeud text
    TD3.appendChild(TXT3); //ajout du noeud text à la cellule
    TR.appendChild(TD3); //ajout de la cellule à la ligne

    TD4 = document.createElement("td"); //creation d'une cellule
    TXT4 = document.createTextNode("0"); // creation d'un noeud text
    TD4.appendChild(TXT4); //ajout du noeud text à la cellule
    TR.appendChild(TD4); //ajout de la cellule à la ligne

    TD5 = document.createElement("button"); //creation d'une cellule
    TXT5 = document.createTextNode("-"); // creation d'un noeud text
    TD5.appendChild(TXT5); //ajout du noeud text à la cellule
    TR.appendChild(TD5); //ajout de la cellule à la ligne

    document.getElementById("tableau").appendChild(TR); //ajout de la ligne au tableau
  }

  TR = document.createElement("tr"); //creation d'une ligne

  TH1 = document.createElement("th"); //creation d'une cellule
  TXT1 = document.createTextNode("Résumé de la commande"); // creation d'un noeud text
  TH1.appendChild(TXT1); //ajout du noeud text à la cellule
  TR.appendChild(TH1); //ajout de la cellule à la ligne
  TH1.setAttribute("colspan", "2");
  document.getElementById("commande").appendChild(TR); //ajout de la ligne au tableau

  TR = document.createElement("tr"); //creation d'une ligne

  TD1 = document.createElement("td"); //creation d'une cellule
  TXT1 = document.createTextNode("Article commandé"); // creation d'un noeud text
  TD1.appendChild(TXT1); //ajout du noeud text à la cellule
  TR.appendChild(TD1); //ajout de la cellule à la ligne

  TD2 = document.createElement("td");
  TXT2 = document.createTextNode("Quantité");
  TD2.appendChild(TXT2);
  TR.appendChild(TD2);

  document.getElementById("commande").appendChild(TR); //ajout de la ligne au tableau

  TD3 = document.createElement("td");
  TXT3 = document.createTextNode("Total a payer");
  TD3.ppendChild(TXT3);
  TR.appendChild(TD3);

  document.getElementById("commande").appendChild(TR); //ajout de la ligne au tableau
}
