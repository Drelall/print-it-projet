//tableau contenant les différentes images du carrousel

const slides = [ 
	{
		"image":"slide1.jpg", // chemin de l'image
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>" // texte associé à l'image
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	},
];

//points dynamique du carrousel

const pointscontainer = document.querySelector('.points');

function generatePoints() {
  slides.forEach(() => {
    const dot = document.createElement('div');
    dot.className = 'dot';
    pointscontainer.appendChild(dot);
  });
}

generatePoints();

// Sélection des éléments du "DOM", le Dom transforme les balises en objets manipulables Javascript

const carouselImg = document.querySelector('.carousel-img');//image principale du caroussel
const arrowLeft = document.querySelector('.arrow_left');// flèche gauche du carrousel
const arrowRight = document.querySelector('.arrow_right');// flèche droite du carrousel
const points = document.querySelectorAll('.dot'); // Sélectionnez tous les points

let currentIndex = 0;//position actuelle du carrousel, initialisée à 0

// Fonction pour mettre à jour les points indicateurs en fonction de l'image actuelle

function updatePoints(index) { // Mettre à jour les points indicateurs
    points.forEach((dot, i) => {// Parcourir tous les points
        if (i === index) {
            dot.classList.add('dot_selected'); // Ajoutez la classe pour le point actuel
        } else {
            dot.classList.remove('dot_selected'); // Supprimez la classe pour les autres points
        }
    });
}

// Fonction pour mettre à jour les points indicateurs, l'image et le texte

function updateCarousel(index, direction) {// Mettre à jour l'image et le texte du carrousel
      if (currentIndex === -1 && direction === 'left') {// Si l'index est -1 et que la direction est 'left', on revient à la dernière image
        currentIndex = slides.length - 1;// On revient à la dernière image
    } else if (currentIndex === slides.length && direction === 'right') {
        currentIndex = 0;// Si l'index est égal à la longueur du tableau et que la direction est 'right', on revient à la première image
    }

    // Mettre à jour l'image

    const imagePath = `assets/images/slideshow/${slides[currentIndex].image}`;// Chemin de l'image
    carouselImg.src = imagePath;// Mettre à jour la source de l'image
    carouselImg.alt = `Slide ${currentIndex + 1}`;// Mettre à jour l'attribut alt de l'image

    // Mettre à jour le texte

    const tagLine = slides[currentIndex].tagLine;// Texte associé à l'image
    document.querySelector('p').innerHTML = tagLine;// Mettre à jour le texte dans le paragraphe

    console.log(`Clic sur la flèche ${direction}`);// Afficher la direction du clic dans la console
}

// Gestionnaire d'événement pour le clic sur la flèche gauche

arrowLeft.addEventListener('click', function () {// Lorsque l'utilisateur clique sur la flèche gauche
    currentIndex = (currentIndex - 1);
    updateCarousel(currentIndex, 'left');// Mettre à jour le carrousel avec la nouvelle image/
    updatePoints(currentIndex); // Mettez à jour les points indicateurs
});

// Gestionnaire d'événement pour le clic sur la flèche droite

arrowRight.addEventListener('click', function () {
    currentIndex = (currentIndex + 1) ;// Lorsque l'utilisateur clique sur la flèche droite
    updateCarousel(currentIndex, 'right');// Mettre à jour le carrousel avec la nouvelle image
    updatePoints(currentIndex); // Mettez à jour les points indicateurs
});


// Afficher la première diapositive au chargement de la page

updateCarousel(currentIndex, 'démarrage');// Mettre à jour le carrousel pour la première image
updatePoints(currentIndex); // Mettez à jour les points indicateurs pour la première image

