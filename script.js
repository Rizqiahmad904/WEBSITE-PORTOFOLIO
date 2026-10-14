
// ================= OPENING =================
const intro = document.getElementById("mountainIntro");
const enterButton = document.getElementById("enterButton");

if (intro && enterButton) {
    enterButton.addEventListener("click", function () {
        intro.classList.add("hide");
    });
}


// ================= NAVBAR HP =================
const navLinks = document.querySelectorAll("#mainNav .nav-link");
const navCollapse = document.getElementById("mainNav");

navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        if (
            navCollapse &&
            navCollapse.classList.contains("show") &&
            window.bootstrap
        ) {
            const collapse = bootstrap.Collapse.getOrCreateInstance(navCollapse);
            collapse.hide();
        }
    });
});


// ================= ANIMASI SAAT SCROLL =================
const sections = document.querySelectorAll(
    ".about-section, .skills-section, .projects-section, .contact-section"
);

if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
        function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add("section-visible");
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.08 }
    );

    sections.forEach(function (section) {
        observer.observe(section);
    });
} else {
    sections.forEach(function (section) {
        section.classList.add("section-visible");
    });
}
