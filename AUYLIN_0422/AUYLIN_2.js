$(document).ready(function(){
    $("#textButton").click(function(){
        var text = "HTML kód...";
        alert(text);
    });

    $("#htmlButton").click(function(){
        var html = "ME GEIK - PTI";
        alert(html);
    });


    $("#valueButton").click(function(){
        var name = $("#name").val();
        var email = $("#email").val();
        var pass = $("#password").val();
        alert("Név: " + name + "\nE-mail: " + email + "\nJelszó: " + pass);
    });

    $("#submitButton").click(function(){
        $("#valueButton").trigger("click");
        alert("Jelentkezés");
    });

    $("#paramButton").click(function(){
        var link = prompt("Kérem írja ide a linket:");
        var area = prompt("Kérem írja ide a területet:");
        var id = prompt("Kérem írja ide az attribútumot (id):");

        alert("Paraméter értéke: \nLink: " + link + "\nTerület: " + area + "\nID: " + id);
    });
});