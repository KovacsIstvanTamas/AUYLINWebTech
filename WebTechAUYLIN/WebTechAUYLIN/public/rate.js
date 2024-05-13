$(document).ready(function() {
    $('#rating-form').submit(function(event) {
        var megjegyzes = $('#megjegyzes').val();
        var maxChars = 1000;
        var regex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
        var error = '';

        if (megjegyzes.length > maxChars) {
            error = 'A megjegyzés maximum 1000 karakter lehet';
        } else if (regex.test(megjegyzes)) {
            error = 'A megjegyzés nem tartalmazhat speciális karaktereket';
        }

        if (error) {
            $('#megjegyzes-error').text(error);
            $('#megjegyzes').addClass('is-invalid');
            event.preventDefault();
        } else {
            $('#megjegyzes-error').text('');
            $('#megjegyzes').removeClass('is-invalid');
            alert('Értékelés sikeresen elküldve!');
            window.location.href = 'receptek.html';
        }
    });
});

function validateTextarea(textarea) {
    var maxChars = 1000;
    var text = textarea.value;
    var errorDiv = document.getElementById('megjegyzes-error');

    if (text.length > maxChars) {
        errorDiv.textContent = 'A megjegyzés maximum 1000 karakter lehet';
        textarea.classList.add('is-invalid');
    } else {
        errorDiv.textContent = '';
        textarea.classList.remove('is-invalid');
    }

    var regex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    if (regex.test(text)) {
        errorDiv.textContent = 'A megjegyzés nem tartalmazhat speciális karaktereket';
        textarea.classList.add('is-invalid');
    }
}