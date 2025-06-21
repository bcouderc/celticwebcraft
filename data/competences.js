// Charge le fichier JSON contenant les compétences
fetch('competences.json')
  .then(response => response.json()) // Convertit la réponse en objet JavaScript
  .then(data => {
    const container = document.getElementById('competencesContainer'); // Récupère le conteneur où afficher les compétences

    data.forEach(cat => { // Pour chaque catégorie de compétences dans le JSON
      const section = document.createElement('section'); // Crée une section HTML pour la catégorie
      section.classList.add('categorie');

      const titre = document.createElement('h2'); // Crée un titre pour la catégorie
      titre.textContent = cat.titre; // Insère le titre depuis le JSON
      section.appendChild(titre); // Ajoute le titre à la section

      const liste = document.createElement('ul'); // Crée une liste pour les compétences

      // Si la catégorie contient une liste de compétences
      if (Array.isArray(cat.liste)) {
        cat.liste.forEach(item => {
          const li = document.createElement('li'); // Crée un élément de liste pour chaque compétence

          // Vérifie si la compétence est technique pour ajouter une barre de progression
          const hasBarre = item.match(/HTML|CSS|JavaScript|Git|Excel|VBA|Windows|React/i);
          li.textContent = item; // Affiche le nom de la compétence

          if (hasBarre) {
            const barre = document.createElement('div'); // Crée le conteneur de la barre
            barre.classList.add('progress-bar');

            const fill = document.createElement('div'); // Crée le remplissage de la barre
            fill.classList.add('fill');
            fill.style.width = `${Math.floor(Math.random() * 40 + 60)}%`; // Largeur aléatoire entre 60% et 100%

            barre.appendChild(fill); // Ajoute le remplissage à la barre
            li.appendChild(barre); // Ajoute la barre au li
          }

          liste.appendChild(li); // Ajoute la compétence à la liste
        });
      } else {
        // Si ce n'est pas une liste (juste une chaîne de texte)
        const li = document.createElement('li');
        li.textContent = cat.liste;
        liste.appendChild(li);
      }

      section.appendChild(liste); // Ajoute la liste à la section
      container.appendChild(section); // Ajoute la section au conteneur principal
    });
  })
  .catch(error => console.error('Erreur lors du chargement des compétences :', error));
y
