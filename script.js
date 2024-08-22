// script.js

// Initialisation des particules d'arrière-plan
particlesJS.load('particles-js', 'particles.json', function() {
  console.log('Particules chargées avec succès.');
});

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

// Animation de typewriter sur le texte d'introduction
gsap.to(".typewriter", { 
    duration: 3.5, 
    width: "100%", 
    delay: 0.5, 
    ease: "steps(30)" 
});

// Autres animations GSAP possibles pour différents éléments
gsap.from(".zoom-in", {
    duration: 1.5,
    scale: 0,
    ease: "back.out(1.7)"
});

gsap.from(".fade-in", {
    duration: 1.5,
    opacity: 0,
    y: 50,
    ease: "power3.out",
    delay: 0.5
});
