
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
document.getElementById('about-link').addEventListener('click', (e) => {
    e.preventDefault();
    const aboutSection = document.getElementById('about-section');
    const hero = document.getElementById('hero');
    aboutSection.classList.add('active');
    hero.classList.add('hidden'); 
});

document.getElementById('logo').addEventListener('click', (e) => {
    e.preventDefault();
    const aboutSection = document.getElementById('about-section');
    const hero = document.getElementById('hero');
    aboutSection.classList.remove('active'); 
    hero.classList.remove('hidden'); 
});

document.getElementById('close-about').addEventListener('click', () => {
    const aboutSection = document.getElementById('about-section');
    const hero = document.getElementById('hero');
    aboutSection.classList.remove('active');
    hero.classList.remove('hidden');
});

document.getElementById('home-link').addEventListener('click', (e) => {
    e.preventDefault();
    const aboutSection = document.getElementById('about-section');
    const hero = document.getElementById('hero');
    aboutSection.classList.remove('active'); 
    hero.classList.remove('hidden');
});