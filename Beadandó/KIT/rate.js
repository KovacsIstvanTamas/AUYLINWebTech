$(document).ready(function() {
    var etel = getUrlParameter('etel');

    $('#etel-nev').text(etel);

    // Betölti az értékeléseket a megfelelő ételhez
    $.getJSON("erteklesek.json", function(data) {
        var ertekelesek = data[etel] || [];
        if (ertekelesek.length > 0) {
            var finomOsszeg = 0;
            var elkeszithetoOsszeg = 0;
            var dragasagOsszeg = 0;

            ertekelesek.forEach(function(ertekeles) {
                finomOsszeg += ertekeles.finom;
                elkeszithetoOsszeg += ertekeles.elkeszitheto;
                dragasagOsszeg += ertekeles.dragasag;
            });

            var atlagFinom = finomOsszeg / ertekelesek.length;
            var atlagElkeszitheto = elkeszithetoOsszeg / ertekelesek.length;
            var atlagDragasag = dragasagOsszeg / ertekelesek.length;

            $('#finom').val(atlagFinom);
            $('#elkeszitheto').val(atlagElkeszitheto);
            $('#dragasag').val(atlagDragasag);
        }
    });

    // Értékelés mentése
    $('#rating-form').submit(function(event) {
        event.preventDefault();

        var finom = parseInt($('#finom').val());
        var elkeszitheto = parseInt($('#elkeszitheto').val());
        var dragasag = parseInt($('#dragasag').val());
        var megjegyzes = $('#megjegyzes').val();

        // Betölti az értékeléseket
        $.getJSON("erteklesek.json", function(data) {
            var ertekelesek = data[etel] || [];

            // Hozzáadja az új értékelést
            ertekelesek.push({
                finom: finom,
                elkeszitheto: elkeszitheto,
                dragasag: dragasag,
                megjegyzes: megjegyzes
            });

            // Mentés
            data[etel] = ertekelesek;
            $.ajax({
                url: "erteklesek.json",
                type: "PUT",
                contentType: "application/json",
                data: JSON.stringify(data),
                success: function() {
                    alert("Értékelés sikeresen mentve!");
                },
                error: function() {
                    alert("Hiba történt az értékelés mentése során.");
                }
            });
        });
        window.location.href = "receptek.html";
    });
});

function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
};
