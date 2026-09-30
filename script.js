// =========================
// REGISTRATION FORM
// =========================

const registrationForm = document.getElementById("registrationForm");

if (registrationForm) {

    registrationForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const mobile = document.getElementById("mobile").value.trim();
        const department = document.getElementById("department").value.trim();
        const year = document.getElementById("year").value;
        const selectedEvent = document.getElementById("event").value;

        const successMessage =
            document.getElementById("successMessage");


        // Check required fields

        if (
            name === "" ||
            email === "" ||
            mobile === "" ||
            department === "" ||
            year === "" ||
            selectedEvent === ""
        ) {

            successMessage.innerText =
                "Please fill in all the required fields.";

            successMessage.style.color = "red";

            return;
        }


        // Successful registration

        successMessage.innerText =
            "Registration successful! 🎉";

        successMessage.style.color = "green";

        registrationForm.reset();

    });
}


// =========================
// CONTACT FORM
// =========================

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const name =
            document.getElementById("contactName").value.trim();

        const email =
            document.getElementById("contactEmail").value.trim();

        const message =
            document.getElementById("message").value.trim();

        const contactMessage =
            document.getElementById("contactMessage");


        if (
            name === "" ||
            email === "" ||
            message === ""
        ) {

            contactMessage.innerText =
                "Please fill in all the fields.";

            contactMessage.style.color = "red";

            return;
        }


        contactMessage.innerText =
            "Your message has been sent successfully! ✅";

        contactMessage.style.color = "green";

        contactForm.reset();

    });
}ss