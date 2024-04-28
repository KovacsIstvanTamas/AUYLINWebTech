$(document).ready(function() {
    $('#save-ratings-btn').click(function(e) {
        e.preventDefault();
        alert("Köszönjük az értékelést!");
        window.location.href = "receptek.html";
    });
});