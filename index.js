//variables + constantes
let slideIndex = 0;
const slides = document.querySelectorAll('.slide');

//funciones
function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
    });
    slides[index].classList.add('active');
}

function nextSlide() {
    slideIndex = (slideIndex + 1) % slides.length;
    showSlide(slideIndex);
}


// Auto cambio de imagen cada 4 segundos
setInterval(nextSlide, 3000);


// Mostrar la primera al cargar
showSlide(slideIndex);
