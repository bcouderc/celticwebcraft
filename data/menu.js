// Charge le fichier JSON contenant les éléments du menu
fetch('data/menu.json') 
  // Convertit la réponse HTTP en un objet JavaScript
  .then(response => response.json()) 
  // Une fois les données récupérées, on exécute la fonction suivante
  .then(data => {
    // Récupère l'élément <ul> dans lequel on va insérer les éléments du menu
    const navContainer = document.getElementById('navigation');

    // Parcourt chaque valeur du JSON (ex: "Accueil", "A propos", etc.)
    Object.values(data).forEach(pageName => { 
      const li = document.createElement('li'); // Crée un élément <li> pour la liste 
      const a = document.createElement('a'); // Crée un élément <a> pour le lien
      a.textContent = pageName;
      if (pageName === "Accueil") {
        pageName = "index";
      }
      // Transforme le nom de la page en nom de fichier :
      // "Accueil" → "../accueil.html" (remonte d’un dossier dans l’arborescence)

      // UTILISER LA LIGNE CI-DESSOUS POUR LA PUBLICATION EN LIGNE SUR GITHUB
      const fileName = pageName.toLowerCase().replace(/\s+/g, '') + '.html';

      //UTILISER CETTE LIGNE POUR LIVE SERVER
      //const fileName = '../' + pageName.toLowerCase().replace(/\s+/g, '') + '.html';
      // Définit le texte affiché du lien (le nom de la page)

      a.href = fileName; // Définit l’attribut href du lien pour qu’il pointe vers la bonne page
      li.appendChild(a); // Ajoute le lien à l’intérieur du <li>
      navContainer.appendChild(li); // Ajoute le <li> au conteneur <ul>
    });
  })
  // Si une erreur survient (par exemple le fichier JSON introuvable), on l’affiche dans la console
  .catch(error => console.error('Erreur lors du chargement du menu:', error));
