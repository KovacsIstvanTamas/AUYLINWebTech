document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('contact-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        var nameInput = document.getElementById('name');
        var emailInput = document.getElementById('email');
        var messageInput = document.getElementById('message');

        if (nameInput.value === '') {
            nameInput.style.border = '2px solid red';
            alert('Kérjük, adja meg a nevét!');
            return;
        } else {
            nameInput.style.border = 'none';
        }

        if (emailInput.value === '' || !emailInput.value.includes('@')) {
            emailInput.style.border = '2px solid red';
            alert('Kérjük, adjon meg érvényes email címet!');
            return;
        } else {
            emailInput.style.border = 'none';
        }
        if (messageInput.value === '') {
            messageInput.style.border = '2px solid red';
            alert('Kérjük, írja meg az üzenetét!');
            return;
        } else {
            messageInput.style.border = 'none';
        }
        form.reset();
    });
});