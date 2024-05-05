$(document).ready(function(){
    $("#fejlec").mousemove(function(event){
        alert("Egeret húzott a fejléc fölé!");
    });

    $("p:first").click(function(){
        $(this).hide();
    });

    $("p:last").dblclick(function(){
        $(this).hide();
    });

    $("#jelentkezes").mouseenter(function(){
        alert("A gomb felé húzta az egeret!");
    });

    $("#keret").hover(
        function(){
            $(this).css("background-color", "blue");
        },
        function(){
            $(this).css("background-color", "white");
        }
    );

    $("#nev, #email, #jelszo").focus(function(){
        $(this).css("background-color", "yellow");
    });

    $("#keret").hover(
        function(){
            $(this).css("border-color", "red");
        },
        function(){
            $(this).css("border-color", "black");
        }
    );

    $("p:first").click(function(){
        $(this).hide();
    });

    $("p:last").dblclick(function(){
        $(this).hide();
    });
});
