document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('.article-container');
    const slides = document.querySelectorAll('.article-wrapper');
    const prevButton = document.querySelector('.slider-arrow.prev');
    const nextButton = document.querySelector('.slider-arrow.next');
    
    const totalSlides = slides.length;
    let currentIndex = 0;

    // Clone the first three slides and append them to the end
    const firstThreeClones = Array.from(slides).slice(0, 3).map(slide => slide.cloneNode(true));
    // Clone the last three slides and prepend them to the beginning
    const lastThreeClones = Array.from(slides).slice(-3).map(slide => slide.cloneNode(true));

    // Add clones to container
    lastThreeClones.forEach(clone => container.insertBefore(clone, slides[0]));
    firstThreeClones.forEach(clone => container.appendChild(clone));

    // Adjust starting position to show first three real slides
    currentIndex = 3;
    
    function updateSliderPosition(animate = true) {
        const slideWidth = slides[0].offsetWidth + 20; // Including 20px gap
        const offset = -currentIndex * slideWidth;
        
        if (!animate) {
            container.style.transition = 'none';
        } else {
            container.style.transition = 'transform 0.5s ease-in-out';
        }
        
        requestAnimationFrame(() => {
            container.style.transform = `translateX(${offset}px)`;
            if (!animate) {
                requestAnimationFrame(() => {
                    container.style.transition = 'transform 0.5s ease-in-out';
                });
            }
        });
    }

    function moveSlide(direction) {
        if (direction === 'next') {
            currentIndex++;
            if (currentIndex >= totalSlides + 3) {
                // If we've shown the cloned slides, quickly reset to real slides
                setTimeout(() => {
                    currentIndex = 3;
                    updateSliderPosition(false);
                }, 500);
            }
        } else {
            currentIndex--;
            if (currentIndex < 3) {
                // If we've shown the cloned slides, quickly reset to real slides
                setTimeout(() => {
                    currentIndex = totalSlides + 2;
                    updateSliderPosition(false);
                }, 500);
            }
        }
        updateSliderPosition();
    }

    // Event Listeners
    if (prevButton) {
        prevButton.addEventListener('click', () => moveSlide('prev'));
    }

    if (nextButton) {
        nextButton.addEventListener('click', () => moveSlide('next'));
    }

    // Initialize position
    updateSliderPosition(false);

    // Update slider position when window is resized
    window.addEventListener('resize', () => updateSliderPosition(false));

    // Handle edge cases when transition ends
    container.addEventListener('transitionend', () => {
        if (currentIndex >= totalSlides + 3) {
            currentIndex = 3;
            updateSliderPosition(false);
        } else if (currentIndex < 3) {
            currentIndex = totalSlides + 2;
            updateSliderPosition(false);
        }
    });
});