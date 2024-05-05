$(document).ready(function() {
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
