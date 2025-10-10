// Selección de elementos
const track = document.querySelector('.tesis-carousel-track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.tesis-nav.next');
const prevButton = document.querySelector('.tesis-nav.prev');
let currentIndex = 0;

// Función para actualizar la posición del carrusel
function updateCarousel() {
    const slideWidth = slides[0].getBoundingClientRect().width + 30; // incluye margen
    track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

// Navegación por botones
nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateCarousel();
});

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateCarousel();
});

// Auto-play cada 6 segundos
let autoPlayInterval = setInterval(() => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateCarousel();
}, 6000);

// Reinicia el auto-play al hacer clic manualmente
[nextButton, prevButton].forEach(btn => {
    btn.addEventListener('click', () => {
        clearInterval(autoPlayInterval);
        autoPlayInterval = setInterval(() => {
            currentIndex = (currentIndex + 1) % slides.length;
            updateCarousel();
        }, 6000);
    });
});

// Ajuste responsivo
window.addEventListener('resize', updateCarousel);

// Inicializa posición
updateCarousel();

function updateCarousel() {
    const slideWidth = slides[0].getBoundingClientRect().width + 30; // incluye margen
    track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;

    // Animación fade-in + scale en la tarjeta visible
    slides.forEach((slide, index) => {
        if (index === currentIndex) {
            slide.style.animation = 'fadeScale 0.6s ease forwards';
        } else {
            slide.style.opacity = '0';
            slide.style.transform = 'scale(0.95)';
            slide.style.animation = 'none';
        }
    });
}
