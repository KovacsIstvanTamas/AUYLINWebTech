document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('contact-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Megakadályozza az űrlap alapértelmezett működését (pl. oldal újratöltése)

        var nameInput = document.getElementById('name');
        var emailInput = document.getElementById('email');
        var messageInput = document.getElementById('message');

        // Ellenőrizzük a nevet
        if (nameInput.value === '') {
            nameInput.style.border = '2px solid red'; // Piros keret a hiba jelzésére
            alert('Kérjük, adja meg a nevét!');
            return;
        } else {
            nameInput.style.border = 'none'; // Ha helyes, eltávolítjuk a keretet
        }

        // Ellenőrizzük az email címet
        if (emailInput.value === '' || !emailInput.value.includes('@')) {
            emailInput.style.border = '2px solid red'; // Piros keret a hiba jelzésére
            alert('Kérjük, adjon meg érvényes email címet!');
            return;
        } else {
            emailInput.style.border = 'none'; // Ha helyes, eltávolítjuk a keretet
        }

        // Ellenőrizzük az üzenetet
        if (messageInput.value === '') {
            messageInput.style.border = '2px solid red'; // Piros keret a hiba jelzésére
            alert('Kérjük, írja meg az üzenetét!');
            return;
        } else {
            messageInput.style.border = 'none'; // Ha helyes, eltávolítjuk a keretet
        }

        // Ha minden ellenőrzés sikeres, elküldhetjük az adatokat
        // (Ebben a példában csak az ellenőrzést mutattam be, az adatok elküldését nem)

        // Űrlap mezőinek tartalmának törlése
        form.reset();
    });
});