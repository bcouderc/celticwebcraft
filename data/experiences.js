let experiences = [];
let currentIndex = 0;

// Sélecteurs DOM
const expImage = document.getElementById("expImage");
const expZone = document.getElementById("expZone");
const compZone = document.getElementById("compZone");

// Création des boutons navigation
const navContainer = document.createElement("div");
navContainer.id = "expNav";

const btnPrev = document.createElement("button");
btnPrev.textContent = "⟵ Précédent";

const btnNext = document.createElement("button");
btnNext.textContent = "Suivant ⟶";

navContainer.appendChild(btnPrev);
navContainer.appendChild(btnNext);

// Insertion des boutons après la zone compétence
compZone.after(navContainer);

// Chargement du fichier JSON
fetch("data/experiences.json")
    .then(response => response.json())
    .then(data => {
        console.log(data);
        experiences = data;
        displayExperience(currentIndex);
    })
    .catch(error => console.error("Erreur de chargement JSON :", error));

// Affichage d’une expérience
function displayExperience(index) {
    const exp = experiences[index];

    // Image
    expImage.src = exp.image;
    expImage.alt = exp.poste;

    // Zone expérience
    expZone.innerHTML = "";

    const h2 = document.createElement("h2");
    h2.textContent = exp.date;

    const h3 = document.createElement("h3");
    h3.textContent = exp.poste;

    const ulmission = document.createElement("ul");
    exp.mission.forEach(mission => {
        const li = document.createElement("li");
        li.textContent = mission;
        ulmission.appendChild(li);
    });

    expZone.append(h2, h3, ulmission);

    // Zone compétences
    compZone.innerHTML = "";

    const ulComp = document.createElement("ul");
    exp.competence.forEach(comp => {
        const li = document.createElement("li");
        li.textContent = comp;
        ulComp.appendChild(li);
    });

    compZone.appendChild(ulComp);
}

// Navigation
btnNext.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % experiences.length;
    displayExperience(currentIndex);
});

btnPrev.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + experiences.length) % experiences.length;
    displayExperience(currentIndex);
});
