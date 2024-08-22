// script.js

// Ouvrir la fenêtre modale pour afficher les projets
function openModal(projectId) {
    var modal = document.getElementById('project-modal');
    var modalImg = document.getElementById('modal-img');
    var modalText = document.getElementById('modal-text');

    // Changer l'image et le texte en fonction du projet cliqué
    if (projectId === 'project1') {
        modalImg.src = 'project1.png';
        modalText.innerHTML = '<h2>Projet 1</h2><p>Description du projet 1...</p>';
    } else if (projectId === 'project2') {
        modalImg.src = 'project2.png';
        modalText.innerHTML = '<h2>Projet 2</h2><p>Description du projet 2...</p>';
    }

    modal.style.display = 'block';
}

// Fermer la fenêtre modale
function closeModal() {
    document.getElementById('project-modal').style.display = 'none';
}

// Fermer la modale si on clique à l'extérieur
window.onclick = function(event) {
    var modal = document.getElementById('project-modal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}
