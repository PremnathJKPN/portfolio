/* ==========================================
   MOBILE MENU
========================================== */

const menuBtn =
    document.getElementById("menuBtn");

const navMenu =
    document.getElementById("navMenu");


menuBtn.addEventListener("click", () => {

    navMenu.classList.toggle("open");

});


document
    .querySelectorAll("#navMenu a")
    .forEach(link => {

        link.addEventListener("click", () => {

            navMenu.classList.remove("open");

        });

    });



/* ==========================================
   TYPING ANIMATION
========================================== */

const typingText =
    document.getElementById("typingText");


const words = [

    "Java Developer",

    "Problem Solver",

    "IT Student",

    "Software Developer"

];


let wordIndex = 0;

let charIndex = 0;

let deleting = false;


function typeEffect() {

    const currentWord =
        words[wordIndex];


    if (!deleting) {

        typingText.textContent =
            currentWord.substring(
                0,
                charIndex + 1
            );

        charIndex++;


        if (
            charIndex ===
            currentWord.length
        ) {

            deleting = true;

            setTimeout(
                typeEffect,
                1400
            );

            return;

        }

    } else {

        typingText.textContent =
            currentWord.substring(
                0,
                charIndex - 1
            );

        charIndex--;


        if (charIndex === 0) {

            deleting = false;

            wordIndex =
                (wordIndex + 1)
                % words.length;

        }

    }


    setTimeout(

        typeEffect,

        deleting
            ? 55
            : 90

    );

}


typeEffect();



/* ==========================================
   FLOATING PARTICLES
========================================== */

const particleContainer =
    document.getElementById("particles");


function createParticle() {

    const particle =
        document.createElement("span");


    particle.className =
        "particle";


    const size =
        Math.random() * 5 + 2;


    particle.style.width =
        `${size}px`;


    particle.style.height =
        `${size}px`;


    particle.style.left =
        `${Math.random() * 100}%`;


    particle.style.setProperty(

        "--move",

        `${(Math.random() - .5) * 250}px`

    );


    particle.style.animationDuration =

        `${Math.random() * 10 + 8}s`;


    particleContainer.appendChild(
        particle
    );


    setTimeout(() => {

        particle.remove();

    }, 20000);

}


/* Initial particles */

for (
    let i = 0;
    i < 50;
    i++
) {

    createParticle();

}


/* New particles */

setInterval(
    createParticle,
    450
);



/* ==========================================
   SCROLL REVEAL
========================================== */

const observer =
    new IntersectionObserver(

        entries => {

            entries.forEach(
                entry => {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target
                            .classList
                            .add("show");

                    }

                }
            );

        },

        {
            threshold: .12
        }

    );


document
    .querySelectorAll(".reveal")
    .forEach(element => {

        observer.observe(element);

    });



/* ==========================================
   PROFILE MOUSE EFFECT
========================================== */

const profile =
    document.querySelector(
        ".profile-card"
    );


document.addEventListener(
    "mousemove",
    event => {

        if (!profile) return;


        const x =
            (window.innerWidth / 2 -
                event.clientX) / 60;


        const y =
            (window.innerHeight / 2 -
                event.clientY) / 60;


        profile.style.transform =

            `rotateY(${x}deg)
             rotateX(${y}deg)`;

    }
);


document.addEventListener(
    "mouseleave",
    () => {

        if (profile) {

            profile.style.transform =
                "rotateY(0deg) rotateX(0deg)";

        }

    }
);