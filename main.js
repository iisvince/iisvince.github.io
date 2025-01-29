
//Hero
document.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    const fadeStart = 0;
    const fadeEnd = 300;

    const heroTitle = document.getElementById("hero-title");
    const arrowContainer = document.getElementById("arrow-container");

    const opacity = Math.max(0, 1 - scrollY / fadeEnd);

    heroTitle.style.opacity = opacity;
    arrowContainer.style.opacity = opacity;
});


//navbar
window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 0) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

//title cursor
const textElement = document.getElementById("text");
const cursorElement = document.querySelector(".blinking-cursor");
const text = "Vince Kang.";
let index = 0;

function typeText() {
    cursorElement.style.animation = "none";
    if (index < text.length) {
        textElement.textContent += text[index];
        index++;
        setTimeout(typeText, 150);
    } else {
        cursorElement.style.animation = "blink 1s ease-in-out infinite";
    }
}

window.addEventListener("load", () => {
    textElement.textContent = "";
    setTimeout(typeText, 1000);
});


// arrow
function scrollToSection() {
    const secondPage = document.getElementById('second-page');
    secondPage.scrollIntoView({ behavior: 'smooth' });
}

window.addEventListener('load', () => {
    const textAnimationDuration = 2000; 
    const arrowContainer = document.getElementById('arrow-container');
    setTimeout(() => {
        arrowContainer.style.opacity = '1';
        arrowContainer.style.transform = 'translateY(0)';
    }, textAnimationDuration);
});


//about
// Toggle About Section visibility
document.getElementById('about-link').addEventListener('click', (e) => {
    e.preventDefault();
    const aboutSection = document.getElementById('about-section');
    const hero = document.getElementById('hero');

    if (aboutSection.classList.contains('active')) {
        aboutSection.classList.remove('active');
        hero.classList.remove('hidden');
    } else {
        aboutSection.classList.add('active');
        hero.classList.add('hidden');
    }
});

// Close About Section when Logo is clicked
document.getElementById('logo').addEventListener('click', (e) => {
    e.preventDefault();
    const aboutSection = document.getElementById('about-section');
    const hero = document.getElementById('hero');
    aboutSection.classList.remove('active'); 
    hero.classList.remove('hidden'); 
});

// Close About Section when Close Button is clicked
document.getElementById('close-about').addEventListener('click', () => {
    const aboutSection = document.getElementById('about-section');
    const hero = document.getElementById('hero');
    aboutSection.classList.remove('active');
    hero.classList.remove('hidden');
});

// Close About Section when Home is clicked
document.getElementById('home-link').addEventListener('click', (e) => {
    e.preventDefault();
    const aboutSection = document.getElementById('about-section');
    const hero = document.getElementById('hero');
    aboutSection.classList.remove('active'); 
    hero.classList.remove('hidden');
});


// Scroll to the top of the page
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Attach event listeners for the logo and home button
window.addEventListener('load', () => {
    // Attach to logo
    const logoLink = document.querySelector('.logo a');
    if (logoLink) {
        logoLink.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent default anchor behavior
            scrollToTop();
        });
    }

    // Attach to home button
    const homeLink = document.getElementById('home-link');
    if (homeLink) {
        homeLink.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent default anchor behavior
            scrollToTop();
        });
    }
});

// Scroll to the second page when the Portfolio button is clicked
document.getElementById("portfolio-link").addEventListener("click", (e) => {
    e.preventDefault(); // Prevent the default anchor behavior
    const secondPage = document.getElementById("second-page"); // Target the second page section
    secondPage.scrollIntoView({ behavior: "smooth" }); // Smooth scrolling to the section
});

// Scroll to footer when Contact button is clicked
document.getElementById('contact-link').addEventListener('click', (e) => {
    e.preventDefault(); // Prevent the default link behavior
    const footer = document.getElementById('footer'); // Get footer element
    if (footer) {
        footer.scrollIntoView({ behavior: 'smooth' }); // Scroll to footer smoothly
    } else {
        console.error('Footer element not found!');
    }
});