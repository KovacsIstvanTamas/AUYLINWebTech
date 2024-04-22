$(document).ready(function() {
    $('#save-ratings-btn').click(function() {
        var finom = parseInt($('#finom').val());
        var elkeszitheto = parseInt($('#elkeszitheto').val());
        var dragasag = parseInt($('#dragasag').val());
        var megjegyzes = $('#megjegyzes').val();
        var etel = getUrlParameter('etel');

        var ertekeles = {
            finom: finom,
            elkeszitheto: elkeszitheto,
            dragasag: dragasag,
            megjegyzes: megjegyzes
        };

        var ertekelesek = localStorage.getItem(etel) ? JSON.parse(localStorage.getItem(etel)) : [];

        ertekelesek.push(ertekeles);

        localStorage.setItem(etel, JSON.stringify(ertekelesek));

        alert('Az értékelés sikeresen mentve.');
        window.location.href = "receptek.html";
    });

    function getUrlParameter(name) {
        name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
        var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
        var results = regex.exec(location.search);
        return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
    };
});