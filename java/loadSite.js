// Sélectionnez l'élément .editor
const editor = document.querySelector('.editor');

// Fonction pour charger le contenu d'une page
function loadPageContent(pageUrl) {
    fetch(pageUrl)
        .then(response => response.text())
        .then(data => {
            // Remplacez le contenu actuel de .editor par le contenu de la page chargée
            editor.innerHTML = data;
        })
        .catch(error => {
            console.error('Erreur lors du chargement de la page :', error);
        });
}

// Exemple d'utilisation : chargez le contenu de "page1.html" au chargement de la page
loadPageContent('index_contenu.html');
