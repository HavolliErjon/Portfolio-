// Inizializza EmailJS con la tua chiave pubblica
(function() {
    emailjs.init("t0iExWhdl15wjD5c-");  // Sostituisci con la tua chiave pubblica
})();

// Funzione per inviare l'email tramite EmailJS
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Impedisce il comportamento predefinito del form (ricaricare la pagina)

    // Crea un oggetto con i dati del form
    var params = {
        fullName: document.getElementById("fullName").value,
        email_id: document.getElementById("email_id").value,
        message: document.getElementById("message").value
    };

    const serviceID = "service_ieuohjq";  // Sostituisci con il tuo service ID
    const templateID = "template_167edrh";  // Sostituisci con il tuo template ID

    // Invia il messaggio tramite EmailJS
    emailjs.send(serviceID, templateID, params)
        .then(function(response) {
            console.log("Successo:", response);
            alert("Il tuo messaggio è stato inviato!");

            // Pulisce il modulo dopo l'invio
            document.getElementById("fullName").value = "";
            document.getElementById("email_id").value = "";
            document.getElementById("message").value = "";
        }, function(error) {
            console.log("Errore:", error);
            alert("C'è stato un errore nell'invio del messaggio. Riprova più tardi.");
        });
});


        // Attendere che il documento sia completamente caricato
        document.addEventListener("DOMContentLoaded", function () {
            const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
            const navMenu = document.querySelector('.navmenu');
    
            // Aggiungi un event listener per clic sull'icona hamburger
            mobileNavToggle.addEventListener('click', function () {
                navMenu.classList.toggle('mobile-nav-active');  // Alterna la classe per il menu mobile
            });
        });
        