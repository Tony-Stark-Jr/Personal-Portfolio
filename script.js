window.addEventListener('resize', function () {
    addRequireClass();
});

// Function for appearing hamburger icon
function addRequireClass() {
    if (window.innerWidth < 760) {
        document.body.classList.add('mobile');
    } else {
        document.body.classList.remove('mobile');
    }
}
window.onload = addRequireClass();

// Getting and setting of hamburger icon
let hamburger = document.querySelector('.hamburger');
let mobileNav = document.querySelector('.nav-list');
let navLinks = document.querySelectorAll('.nav-list li a');

let bars = document.querySelectorAll('.hamburger span');
let isActive = false;

hamburger.addEventListener('click', function () {
    mobileNav.classList.toggle('open');
    if (!isActive) {
        bars[0].style.transform = 'rotate(45deg)';
        bars[0].style.position = 'absolute';
        bars[1].style.opacity = '0';
        bars[2].style.transform = 'rotate(-45deg)';
        bars[2].style.position = 'absolute';
        isActive = true;
    } else {
        bars[0].style.transform = 'rotate(0)';
        bars[0].style.position = 'static';
        bars[1].style.opacity = '1';
        bars[2].style.transform = 'rotate(0)';
        bars[2].style.position = 'static';
        isActive = false;
    }
});

document.querySelector('.home-btn').addEventListener('click', function () {
    document.querySelector('#about-section').scrollIntoView({
        behavior: 'smooth'
    });
});


// Close the navbar when a link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', function () {
        mobileNav.classList.remove('open');
        bars[0].style.transform = 'rotate(0)';
        bars[0].style.position = 'static';
        bars[1].style.opacity = '1';
        bars[2].style.transform = 'rotate(0)';
        bars[2].style.position = 'static';
        isActive = false;
    });
});

// Initialize Swiper
const swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    centeredSlides: true,
    spaceBetween: 10,
    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        640: {
            slidesPerView: 3,
            spaceBetween: 30
        }
    }
});


var appendNumber = 4;
var prependNumber = 1;
document
    .querySelector(".prepend-2-slides")
    .addEventListener("click", function (e) {
        e.preventDefault();
        swiper.prependSlide([
            '<div class="swiper-slide">Slide ' + --prependNumber + "</div>",
            '<div class="swiper-slide">Slide ' + --prependNumber + "</div>",
        ]);
    });
document
    .querySelector(".prepend-slide")
    .addEventListener("click", function (e) {
        e.preventDefault();
        swiper.prependSlide(
            '<div class="swiper-slide">Slide ' + --prependNumber + "</div>"
        );
    });
document
    .querySelector(".append-slide")
    .addEventListener("click", function (e) {
        e.preventDefault();
        swiper.appendSlide(
            '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>"
        );
    });
document
    .querySelector(".append-2-slides")
    .addEventListener("click", function (e) {
        e.preventDefault();
        swiper.appendSlide([
            '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>",
            '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>",
        ]);
    });