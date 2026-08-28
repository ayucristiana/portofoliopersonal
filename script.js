/* =========================
   NAVBAR SCROLL
========================= */

const navbar = document.getElementById("navbar");

window.addEventListener("scroll", function () {

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

menuBtn.addEventListener("click", function () {

    navLinks.classList.toggle("active");

});


document.querySelectorAll(".nav-links a").forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("active");

    });

});


/* =========================
   EXTRA RANDOM BUBBLES
========================= */

const ocean = document.querySelector(".ocean");

for (let i = 0; i < 18; i++) {

    const bubble = document.createElement("div");

    bubble.classList.add("bubble");

    const size =
        Math.floor(Math.random() * 25) + 8;

    bubble.style.width =
        size + "px";

    bubble.style.height =
        size + "px";

    bubble.style.left =
        Math.random() * 100 + "%";

    bubble.style.animationDuration =
        Math.floor(Math.random() * 8) + 8 + "s";

    bubble.style.animationDelay =
        Math.random() * 8 + "s";

    ocean.appendChild(bubble);

}


/* =========================
   PROJECT MODAL
========================= */

const modal =
    document.getElementById("modal");

const modalTitle =
    document.getElementById("modalTitle");

const closeModal =
    document.getElementById("closeModal");

const modalCloseBtn =
    document.getElementById("modalCloseBtn");

const projectButtons =
    document.querySelectorAll(".project-btn");


projectButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const projectName =
            button.getAttribute("data-name");

        modalTitle.textContent =
            projectName;

        modal.classList.add("active");

    });

});


closeModal.addEventListener("click", function () {

    modal.classList.remove("active");

});


modalCloseBtn.addEventListener("click", function () {

    modal.classList.remove("active");

});


modal.addEventListener("click", function (event) {

    if (event.target === modal) {

        modal.classList.remove("active");

    }

});


/* =========================
   ESC TO CLOSE MODAL
========================= */

document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {

        modal.classList.remove("active");

    }

});


/* =========================
   CONTACT FORM
========================= */

const form =
    document.getElementById("contactForm");


form.addEventListener("submit", function (event) {

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

document.addEventListener("mousemove", function (event) {

    if (window.innerWidth <= 600) {
        return;
    }

    const x =
        (event.clientX /
        window.innerWidth - 0.5) * 20;

    const y =
        (event.clientY /
        window.innerHeight - 0.5) * 20;


    const jellyfish =
        document.querySelector(".jellyfish");

    if (jellyfish) {

        jellyfish.style.marginLeft =
            `${x / 2}px`;

        jellyfish.style.marginTop =
            `${y}px`;

    }

});


/* =========================
   SCROLL REVEAL
========================= */

const revealElements =
    document.querySelectorAll(
        ".title, " +
        ".about-card, " +
        ".stat, " +
        ".skill, " +
        ".project, " +
        ".timeline-item, " +
        ".contact"
    );


revealElements.forEach(function (element) {

    element.classList.add("reveal");

});


const observer =
    new IntersectionObserver(
        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                    observer.unobserve(
                        entry.target
                    );

                }

            });

        },
        {
            threshold: 0.12
        }
    );


revealElements.forEach(function (element) {

    observer.observe(element);

});
