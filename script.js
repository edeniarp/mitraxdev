document.addEventListener('DOMContentLoaded', () => {
    // Gestion du carrousel de services
    const services = document.querySelectorAll('.service-card');
    const nextButton = document.querySelector('.arrow.right');
    const prevButton = document.querySelector('.arrow.left');
    let currentIndex = 0;

    function showService(index) {
        services.forEach((service, i) => {
            service.style.zIndex = i === index ? 2 : 1;
            service.style.opacity = i === index ? 1 : 0;
        });
    }

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % services.length;
        showService(currentIndex);
    });

    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + services.length) % services.length;
        showService(currentIndex);
    });

    showService(currentIndex);

    // Gestion de l'envoi du formulaire avec pop-up
    const contactForm = document.querySelector('#contact-form');
    const popup = document.querySelector('.popup');
    const closePopup = document.querySelector('.close-popup');

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Empêche le rafraîchissement de la page

        // Simuler l'envoi du formulaire (remplace ceci par un vrai appel API si nécessaire)
        setTimeout(() => {
            popup.style.display = 'block';
        }, 500);

        // Ici, tu pourrais ajouter le code pour envoyer l'email via un service externe
    });

    closePopup.addEventListener('click', () => {
        popup.style.display = 'none';
    });

    // Gestion du compteur de visites
    const visitCounter = document.querySelector('.visit-counter span');
    let visits = localStorage.getItem('visits') || 0;

    visits++;
    localStorage.setItem('visits', visits);
    visitCounter.textContent = visits;

    // Ouverture et fermeture des modales pour les projets
    const modal = document.querySelector('.modal');
    const modalContent = document.querySelector('.modal-content');
    const closeModal = document.querySelector('.close');
    const projectCards = document.querySelectorAll('.project-card');

    projectCards.forEach((card, index) => {
        card.addEventListener('click', () => {
            modal.style.display = 'block';
            modalContent.innerHTML = `
                <h2>Projet ${index + 1}</h2>
                <p>Description du projet ${index + 1}. Voici où vous pouvez écrire les détails du projet.</p>
                <img src="projet${index + 1}.jpg" alt="Image du projet ${index + 1}" class="project-image">
            `;
        });
    });

    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Fermeture de la modale en cliquant en dehors du contenu
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Animation du texte "À propos"
    const aboutText = document.querySelector('.typewriter');
    if (aboutText) {
        aboutText.classList.add('animate');
    }
});
