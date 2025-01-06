function scrollToProjects() {
    const projectsSection = document.getElementById('projects');
    projectsSection.scrollIntoView({ behavior: 'smooth' });
}
function scrollToService() {
    const featureSection = document.getElementById('Service');
    featureSection.scrollIntoView({ behavior: 'smooth' });
}
function scrollToContacts() {
    const featureSection = document.getElementById('contact');
    featureSection.scrollIntoView({ behavior: 'smooth' });
}
function scrollToHome() {
    const featureSection = document.getElementById('home');
    featureSection.scrollIntoView({ behavior: 'smooth' });
}

document.addEventListener('DOMContentLoaded', function () {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    let currentIndex = 0;
    const totalSlides = slides.length;
    const slidesToShow = 4; 
    const slideWidth = 100 / slidesToShow;

    function updateSliderPosition() {
        slider.style.transform = `translateX(-${currentIndex * slideWidth}%)`;
    }

    function showNextSlide() {
        if (currentIndex >= totalSlides - slidesToShow) {
            currentIndex = 0;
        } else {
            currentIndex++;
        }
        updateSliderPosition();
    }

    function showPrevSlide() {
        if (currentIndex <= 0) {
            currentIndex = totalSlides - slidesToShow;
        } else {
            currentIndex--;
        }
        updateSliderPosition();
    }

    nextButton.addEventListener('click', showNextSlide);
    prevButton.addEventListener('click', showPrevSlide);
});


    function openLightbox(img) {
        var lightbox = document.getElementById("lightbox");
        var lightboxImg = document.getElementById("lightbox-img");
        lightbox.style.display = "block";
        lightboxImg.src = img.src;
    }
    
    function closeLightbox() {
        var lightbox = document.getElementById("lightbox");
        lightbox.style.display = "none";
    }
    document.addEventListener('keydown', function(event) {
       
        if (event.key === 'PrintScreen') {
            var warningMessage = document.getElementById('warning-message');
            warningMessage.style.display = 'block';
            setTimeout(function() {
                warningMessage.style.display = 'none';
            }, 3000);
        }
    });
    document.addEventListener('contextmenu', function(event) {
        event.preventDefault();
        var message = document.getElementById('message');
        message.style.display = 'block';
        setTimeout(function() {
            message.style.display = 'none';
        }, 3000);
    });