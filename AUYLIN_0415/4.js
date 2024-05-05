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

    $("#elrejt").click(function(){
        $("p").hide();
    });

    $("#megjelenit").click(function(){
        $("p").show();
    });

    $("#elrejtMegjelenit").click(function(){
        $("p").toggle();
    });

    $("#formElrejt").click(function(){
        $("#regForm").hide();
    });

    $("#formMegjelenit").click(function(){
        $("#regForm").show();
    });

    $("#formElrejtMegjelenit").click(function(){
        $("#regForm").toggle();
    });

    $("#attetszosseg01").click(function(){
        $("#regForm").css("opacity", "0.1");
    });

    $("#attetszosseg05").click(function(){
        $("#regForm").css("opacity", "0.5");
    });

    $("#attetszosseg08").click(function(){
        $("#regForm").css("opacity", "0.8");
    });
});
