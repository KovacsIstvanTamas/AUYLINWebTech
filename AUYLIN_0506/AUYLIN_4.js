$(document).ready(function() {
    $('#szoveg').click(function() {
        $('#box').append('<p>Programtervező informatikus</p>');
    });

    $('#html_kod').click(function() {
        $('#box').text('ME GEIK - PTI');
    });

    $('#ertek').click(function() {
        var name = $('#name').val();
        if (name) {
            alert('Név: ' + name);
        } else {
            alert('Nincs megadva név.');
        }
    });

    $('form').submit(function(e) {
        e.preventDefault();
        alert('Jelentkezés');
    });

    $('#parameter').click(function() {
        var link = $('#link').attr('href');
        var url = new URL(link);
        var area = url.pathname;
        var id = $('#box').attr('id');
        
        alert('Paraméter értéke:\nLink: ' + link + '\nTerület: ' + area + '\nID: ' + id);
    });

    $('#uj_gomb').click(function() {
        $('#box').after('<button>ME GEIK-PTI</button>');
    });

    $('#fejlec').click(function() {
        $('#form_fejlec').text('AUYLIN-ŰRLAP');
    });

    $('#alcim').click(function() {
        $('body').prepend('<h1>jQuery feladat</h1>');
    });

    $('#urlap_fejlec').click(function() {
        $('body').prepend('<h2>HTML - add elementsk</h2>');
    });

    $('#gomb').click(function() {
        $('#gombbeilleszt').append('<button>PTI Gomb</button>');
    });
     $("#box").draggable();

     $("#name").autocomplete({
         source: ["Laci", "Balázs", "Lajos"]
     });
 
     $("#fejlec").click(function() {
         $('#form_fejlec').fadeOut(500, function() {
             $(this).text('AUYLIN-ŰRLAP').fadeIn(500);
         });
     });
 
     var position = $("#box").position();
     console.log("Top: " + position.top + ", Left: " + position.left);

    $("#num1, #num2").spinner({
        min: 0,
        max: 100,
        step: 1
    });
 

    $('#calculate').click(function() {
        var num1 = parseFloat($('#num1').val());
        var num2 = parseFloat($('#num2').val());
        var operator = $('input[name="operator"]:checked').val();
        var result;

        if (isNaN(num1) || isNaN(num2)) {
            alert('Kérem adjon meg érvényes számokat!');
            return;
        }

        switch (operator) {
            case 'add':
                result = num1 + num2;
                break;
            case 'subtract':
                result = num1 - num2;
                break;
            case 'multiply':
                result = num1 * num2;
                break;
            case 'divide':
                if (num2 !== 0) {
                    result = num1 / num2;
                } else {
                    alert('Nullával nem lehet osztani!');
                    return;
                }
                break;
            default:
                alert('Kérem válasszon egy operátort!');
                return;
        }

        $('#result').val(result);
    });
});
