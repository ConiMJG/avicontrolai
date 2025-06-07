const track = document.getElementById('carousel-track');
const dotsContainer = document.getElementById('carousel-dots');
const images = track.querySelectorAll('img');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentSlide = 0;

function updateCarousel() {
    const width = images[0].clientWidth;
    track.style.transform = `translateX(-${currentSlide * width}px)`;

    dotsContainer.querySelectorAll('button').forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlide);
    });
}

function moveSlide(direction) {
    currentSlide += direction;
    if (currentSlide <0) currentSlide = images.length - 1;
    if (currentSlide >= images.length) currentSlide = 0;
    updateCarousel();
}

images.forEach((_, index) => {
    const dot = document.createElement('button');
    dot.addEventListener('click', () => {
        currentSlide = index;
        updateCarousel();
    });
    dotsContainer.appendChild(dot);
})

prevBtn.addEventListener('click', () => moveSlide(-1));
nextBtn.addEventListener('click', () => moveSlide(1));

setInterval(() => moveSlide(1), 8000);

updateCarousel();