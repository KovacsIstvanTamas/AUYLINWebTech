$(document).ready(function() {
    $("#K1").click(function() {
        $("ul li:lt(2)").hide();
        $("a").removeAttr("href");
    });

    $("#K2").click(function() {
        $("ul li:lt(2)").hide();
        $("a").removeAttr("href");
        $(this).hide();
    });

    $("#K3").click(function() {
        $("header").hide();
        $("ul li:lt(2)").hide();
        $("a").removeAttr("href");
    });

    $("#K4").click(function() {
        $("ul li:lt(2)").hide();  
        $("a").empty().removeAttr("href");
    });

    $("#K5").click(function() {
        $("ul li:lt(2)").hide();
        $("a").removeAttr("href");
        $("#myTable tr:even").hide();
    });
});