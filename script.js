// MOBILE MENU

function toggleMenu() {

    const nav = document.getElementById("navLinks");

    nav.classList.toggle("active");

}


// PORTFOLIO FILTER

function filterWork(category) {

    const items = document.querySelectorAll(".portfolio-item");

    items.forEach(function(item) {

        if (category === "all") {

            item.style.display = "block";

        } else {

            if (item.classList.contains(category)) {

                item.style.display = "block";

            } else {

                item.style.display = "none";

            }

        }

    });

}


// CONTACT FORM

const form = document.getElementById("contactForm");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;

    alert(
        "Thank you, " + name +
        "! Your message has been received. I will contact you soon."
    );

    form.reset();

});


// CLOSE MOBILE MENU AFTER CLICKING LINK

const links = document.querySelectorAll(".nav-links a");

links.forEach(function(link) {

    link.addEventListener("click", function() {

        document.getElementById("navLinks").classList.remove("active");

    });

});