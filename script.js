document.addEventListener("DOMContentLoaded", function () {
    // Signup Form Validation
    document.getElementById("signupForm").addEventListener("submit", function (event) {
        event.preventDefault();
        const name = document.getElementById("signupName").value.trim();
        const email = document.getElementById("signupEmail").value.trim();
        const password = document.getElementById("signupPassword").value.trim();
        
        if (name === "" || email === "" || password === "") {
            alert("Please fill in all fields.");
            return;
        }
        alert("Signup successful! Welcome to RedAnfieldConnect.");
        this.reset();
    });

    // Signin Form Validation
    document.getElementById("signinForm").addEventListener("submit", function (event) {
        event.preventDefault();
        const email = document.getElementById("signinEmail").value.trim();
        const password = document.getElementById("signinPassword").value.trim();
        
        if (email === "" || password === "") {
            alert("Please enter both email and password.");
            return;
        }
        alert("Sign in successful! Welcome back.");
        this.reset();
    });

    // Newsletter Subscription
    document.getElementById("newsletterForm").addEventListener("submit", function (event) {
        event.preventDefault();
        const email = document.getElementById("newsletterEmail").value.trim();
        
        if (email === "") {
            alert("Please enter a valid email address.");
            return;
        }
        alert("Subscription successful! Stay updated with Liverpool FC news.");
        this.reset();
    });
});
