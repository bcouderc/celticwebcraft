// Initialisation des variables globales
let experiences = []; // Liste des expériences récupérées depuis le fichier JSON
let currentIndex = 0;  // Index de l'expérience actuellement affichée

// Sélection des éléments HTML où afficher les données
const title = document.querySelector("#titleContent h2");
const imageExperience = document.querySelector("imgExp");
const experienceContainer = document.querySelector("#experience");
const competencesContainer = document.querySelector("#competences");

// Sélection des flèches de navigation
const arrowLeft = document.querySelectorAll(".arrow img")[0];
const arrowRight = document.querySelectorAll(".arrow img")[1];

// Fonction pour mettre à jour le contenu de la page en fonction de l'index actuel
function updateContent(index) {
    const exp = experiences[index]; // Récupère l'objet expérience correspondant
    title.textContent = exp.date; // Met à jour la date dans le titre principal

    // Mise à jour de la section "Expérience"
    experienceContainer.innerHTML = ""; // On vide le contenu précédent
    const posteTitle = document.createElement("h3"); // On crée le nouveau <h3>
    posteTitle.textContent = exp.poste;
    const missionList = document.createElement("ul"); // On crée une nouvelle liste <ul>
    exp.missions.forEach(m => {
        const li = document.createElement("li"); // Pour chaque mission, on crée un <li>
        li.textContent = m;
        missionList.appendChild(li); // On l'ajoute à la liste
    });
    experienceContainer.appendChild(posteTitle); // On ajoute le titre du poste
    experienceContainer.appendChild(missionList); // On ajoute la liste des missions

    // Mise à jour de la section "Compétences"
    competencesContainer.innerHTML = ""; // On vide le contenu précédent
    const compTitle = document.createElement("h3"); // On crée le <h3> pour les compétences
    compTitle.textContent = exp.titreComp;
    const compList = document.createElement("ul"); // On crée la liste des compétences
    exp.competences.forEach(c => {
        const li = document.createElement("li"); // Pour chaque compétence, on crée un <li>
        li.textContent = c;
        compList.appendChild(li); // On l'ajoute à la liste
    });
    competencesContainer.appendChild(compTitle); // On ajoute le titre des compétences
    competencesContainer.appendChild(compList); // On ajoute la liste des compétences
}

// Fonction pour changer d'expérience via les flèches (delta = -1 ou +1)
function changeIndex(delta) {
    currentIndex += delta; // On modifie l'index courant

    // Gestion du retour au début ou à la fin de la liste (effet "carrousel")
    if (currentIndex < 0) currentIndex = experiences.length - 1;
    if (currentIndex >= experiences.length) currentIndex = 0;

    updateContent(currentIndex); // On met à jour le contenu affiché
}

// Événements déclenchés lors du clic sur les flèches gauche/droite
arrowLeft.addEventListener("click", () => changeIndex(-1));
arrowRight.addEventListener("click", () => changeIndex(1));

// Chargement du fichier JSON contenant les expériences
fetch("data/experiences.json")
    .then(response => response.json()) // On transforme la réponse en JSON
    .then(data => {
        experiences = data; // On stocke les données reçues
        updateContent(currentIndex); // On affiche la première expérience par défaut
    })
    .catch(error => {
        console.error("Erreur de chargement du fichier JSON :", error); // Affichage d'une erreur dans la console
    });
