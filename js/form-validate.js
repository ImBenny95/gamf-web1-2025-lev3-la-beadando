document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();
    const favoriteMap = document.getElementById("favoriteMap").value.trim();
    const messageBox = document.getElementById("formMessage");

    function isEmailValid(email) {
        return /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email);
    }

    if (!name || !email || !subject || !message || !favoriteMap) {
        messageBox.textContent = "Minden mezőt ki kell tölteni!";
        return;
    }

    if (message.length < 10) {
        messageBox.textContent = "Az üzenet mezőnek legalább 10 karakter hosszúnak kell lennie!";
        return;
    }

    if (!isEmailValid(email)) {
        messageBox.textContent = "Az e-mail cím nem érvényes!";
        return;
    }

    messageBox.textContent = "Sikeres küldés! Köszönöm, hogy írtál.";
    this.reset();
});
