const coupe = document.getElementById('coupe');
const ordinateur = document.getElementById('ordinateur');
const badge = document.getElementById('badge');
const tablette = document.getElementById('tablette');
const planning = document.getElementById('planning');

// Coordonnées d'origine
const coordonneesOrigineCoupe = [600, 650, 430, 440];
const coordonneesOrigineOrdinateur = [1000, 1430, 1320, 1220];
const coordonneesOrigineBadge = [600, 930, 520, 670];
const coordonneesOrigineTablette = [790, 1340, 965, 1220];
const coordonneesOriginePlanning = [500, 445, 100, 120];

// Calcul du facteur d'échelle en fonction de la taille de l'image
const image = document.getElementById('fond');
const echelle = image.offsetWidth / image.naturalWidth;
//const echelle = image.offsetHeight / image.naturalHeight;


// Recalcul des coordonnées en fonction de l'échelle
const coordonneesFinaleCoupe = coordonneesOrigineCoupe.map(coord => coord * echelle);
const coordonneesFinaleOrdinateur = coordonneesOrigineOrdinateur.map(coord => coord * echelle);
const coordonneesFinaleBadge = coordonneesOrigineBadge.map(coord => coord * echelle);
const coordonneesFinaleTablette = coordonneesOrigineTablette.map(coord => coord * echelle);
const coordonneesFinalePlanning = coordonneesOriginePlanning.map(coord => coord * echelle);

// Mise à jour de la zone cliquable
coupe.coords = coordonneesFinaleCoupe.join(','); //le conteu des parentheses du join indiquent qu'il y aura une virgule entre chaque composants de la nouvelle echelle
ordinateur.coords = coordonneesFinaleOrdinateur.join(',');
badge.coords = coordonneesFinaleBadge.join(',');
tablette.coords = coordonneesFinaleTablette.join(',');
planning.coords = coordonneesFinalePlanning.join(',');

