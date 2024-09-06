// Sélectionnez le lien ou le bouton pour la page 1
const indexLink = document.getElementById('index-link');
const presentationLink = document.getElementById('presentation-link');

// Ajoutez un gestionnaire d'événements pour charger la page 1 lorsque le lien est cliqué
indexLink.addEventListener('click', () => {
    loadPageContent('index_contenu.html');
});


presentationLink.addEventListener('click', () => {
    loadPageContent('presentation.html');
});