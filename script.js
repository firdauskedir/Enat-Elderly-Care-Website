// Highlight the link for the current page.

const currentPage =
    window.location.pathname.split("/").pop() || "index.html";

const navigationLinks = document.querySelectorAll(".main-nav a");

navigationLinks.forEach(function (link) {
    const linkPage = link.getAttribute("href");

    if (linkPage === currentPage) {
        link.classList.add("active");
        link.setAttribute("aria-current", "page");
    }
});


// Update the copyright year automatically.

const yearElements = document.querySelectorAll(".current-year");

yearElements.forEach(function (element) {
    element.textContent = new Date().getFullYear();
});


// Contact form handling.

const contactForm = document.querySelector("#contact-form");

if (contactForm) {
    const statusMessage = document.querySelector("#form-status");

    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        statusMessage.textContent = "";
        statusMessage.className = "form-status";
        statusMessage.hidden = true;

        const name = document.querySelector("#name").value.trim();
        const email = document.querySelector("#email").value.trim();
        const phone = document.querySelector("#phone").value.trim();
        const subject = document.querySelector("#subject").value;
        const message = document.querySelector("#message").value.trim();

        // Check required fields.

        if (!name || !email || !subject || !message) {
            statusMessage.textContent =
                "Please complete all required fields.";

            statusMessage.classList.add("status-error");
            statusMessage.hidden = false;
            return;
        }

        // Check email format.

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {
            statusMessage.textContent =
                "Please enter a valid email address.";

            statusMessage.classList.add("status-error");
            statusMessage.hidden = false;
            return;
        }

        // This demonstration form does not send data to a server.

        statusMessage.textContent =
            "Thank you, " + name + ". Your form entries look complete, " +
            "but your message has NOT been sent or saved. " +
            "This demonstration form is not connected to a server yet. " +
            "Please contact the care team directly.";

        statusMessage.classList.add("status-warning");
        statusMessage.hidden = false;
    });
}