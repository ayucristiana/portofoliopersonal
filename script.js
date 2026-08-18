/* =========================
   LOADING
========================= */

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        loader.style.opacity = "0";

        setTimeout(() => {
            loader.style.display = "none";
        }, 1000);

    }, 1200);

});


/* =========================
   NAVBAR
========================= */

const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

});


/* =========================
   MOBILE MENU
========================= */

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});


document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});


/* =========================
   RANDOM BUBBLES
========================= */

const ocean = document.querySelector(".ocean");

for (let i = 0; i < 20; i++) {

    const bubble = document.createElement("div");

    bubble.classList.add("bubble");

    const size = Math.floor(Math.random() * 25) + 8;

    bubble.style.width = size + "px";
    bubble.style.height = size + "px";

    bubble.style.left =
        Math.random() * 100 + "%";

    bubble.style.animationDuration =
        Math.floor(Math.random() * 10) + 8 + "s";

    bubble.style.animationDelay =
        Math.random() * 8 + "s";

    ocean.appendChild(bubble);

}


/* =========================
   PROJECT MODAL
========================= */

const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modalTitle");
const closeModal = document.getElementById("closeModal");
const modalCloseBtn = document.getElementById("modalCloseBtn");

const projectButtons =
    document.querySelectorAll(".project-btn");


projectButtons.forEach(button => {

    button.addEventListener("click", () => {

        const projectName =
            button.getAttribute("data-name");

        modalTitle.textContent = projectName;

        modal.classList.add("active");

    });

});


closeModal.addEventListener("click", () => {

    modal.classList.remove("active");

});


modalCloseBtn.addEventListener("click", () => {

    modal.classList.remove("active");

});


modal.addEventListener("click", event => {

    if (event.target === modal) {

        modal.classList.remove("active");

    }

});


/* =========================
   CONTACT FORM
========================= */

const form =
    document.getElementById("contactForm");

form.addEventListener("submit", event => {

    event.preventDefault();

    const name =
        document.getElementById("name").value;

    alert(
        "🌊 Pesan berhasil diterima!\n\n" +
        "Terima kasih, " +
        name +
        "!\n\n" +
        "Pesanmu sudah dikirim menyeberangi lautan 🐠"
    );

    form.reset();

});


/* =========================
   MOUSE OCEAN EFFECT
========================= */

document.addEventListener("mousemove", event => {

    const x =
        (event.clientX / window.innerWidth - 0.5) * 20;

    const y =
        (event.clientY / window.innerHeight - 0.5) * 20;

    const jelly =
        document.querySelector(".jellyfish");

    const sun =
        document.querySelector(".sun");

    jelly.style.transform =
        `translate(${x / 2}px, ${y}px)`;

    sun.style.marginLeft =
        `${x}px`;

});


/* =========================
   SCROLL REVEAL
========================= */

const elements =
    document.querySelectorAll(
        ".section .title, .about-card, .stat, .skill, .project, .timeline-item, .contact"
    );


const observer =
    new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

            }

        });

    }, {
        threshold: 0.12
    });


elements.forEach(element => {

    element.classList.add("hidden");

    observer.observe(element);

});


/* =========================
   ADD REVEAL STYLE
========================= */

const revealStyle =
    document.createElement("style");

revealStyle.innerHTML = `

.hidden {
    opacity: 0;
    transform: translateY(35px);
    transition: all .8s ease;
}

.visible {
    opacity: 1;
    transform: translateY(0);
}

`;

document.head.appendChild(revealStyle);


/* =========================
   ESC CLOSE MODAL
========================= */

document.addEventListener("keydown", event => {

    if (event.key === "Escape") {

        modal.classList.remove("active");

    }

});
