/* =========================================
DRD PORTFOLIO
SCRIPT.JS
========================================= */

document.addEventListener("DOMContentLoaded", function () {

```
/* =====================================
   MOBILE MENU
   ===================================== */

const menuButton = document.getElementById("menu-btn");
const navMenu = document.getElementById("nav-links");
const navLinks = document.querySelectorAll(".nav-link");

if (menuButton && navMenu) {

    menuButton.addEventListener("click", function () {

        navMenu.classList.toggle("open");

        const icon = menuButton.querySelector("i");

        if (navMenu.classList.contains("open")) {

            icon.classList.remove("fa-bars");
            icon.classList.add("fa-xmark");

        } else {

            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");

        }

    });

}


/* =====================================
   CLOSE MOBILE MENU AFTER CLICK
   ===================================== */

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        if (navMenu) {
            navMenu.classList.remove("open");
        }

        if (menuButton) {

            const icon = menuButton.querySelector("i");

            if (icon) {
                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars");
            }

        }

    });

});


/* =====================================
   ACTIVE NAVIGATION
   ===================================== */

const sections = document.querySelectorAll("section[id]");

function updateActiveNavigation() {

    let currentSection = "home";

    sections.forEach(function (section) {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            currentSection = section.getAttribute("id");

        }

    });


    navLinks.forEach(function (link) {

        link.classList.remove("active");

        const href = link.getAttribute("href");

        if (href === "#" + currentSection) {
            link.classList.add("active");
        }

    });

}

window.addEventListener(
    "scroll",
    updateActiveNavigation
);

updateActiveNavigation();


/* =====================================
   SKILL BARS
   ===================================== */

const skillsSection =
    document.getElementById("skills");

const skillBars =
    document.querySelectorAll(".skill-progress");

if (skillsSection) {

    const skillObserver =
        new IntersectionObserver(
            function (entries, observer) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        skillBars.forEach(function (bar) {

                            const width =
                                bar.getAttribute("data-width");

                            if (width) {
                                bar.style.width = width;
                            }

                        });

                        observer.unobserve(entry.target);

                    }

                });

            },
            {
                threshold: 0.2
            }
        );

    skillObserver.observe(skillsSection);

}


/* =====================================
   BACK TO TOP
   ===================================== */

const backToTop =
    document.getElementById("back-to-top");

if (backToTop) {

    window.addEventListener("scroll", function () {

        if (window.scrollY > 400) {

            backToTop.classList.add("show");

        } else {

            backToTop.classList.remove("show");

        }

    });


    backToTop.addEventListener(
        "click",
        function () {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        }
    );

}


/* =====================================
   CONTACT FORM
   ===================================== */

const contactForm =
    document.getElementById("contact-form");

const formMessage =
    document.getElementById("form-message");

if (contactForm) {

    contactForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            const name =
                document.getElementById("name").value.trim();

            const email =
                document.getElementById("email").value.trim();

            const subject =
                document.getElementById("subject").value.trim();

            const message =
                document.getElementById("message").value.trim();


            if (
                name === "" ||
                email === "" ||
                subject === "" ||
                message === ""
            ) {

                formMessage.textContent =
                    "Please fill in all fields.";

                return;

            }


            const receiver =
                "dasdiptiranjan719@gmail.com";


            const mailSubject =
                encodeURIComponent(subject);


            const mailBody =
                encodeURIComponent(
                    "Name: " +
                    name +
                    "\n\nEmail: " +
                    email +
                    "\n\nMessage:\n" +
                    message
                );


            window.location.href =
                "mailto:" +
                receiver +
                "?subject=" +
                mailSubject +
                "&body=" +
                mailBody;


            formMessage.textContent =
                "Opening your email application...";

        }
    );

}
```

});
