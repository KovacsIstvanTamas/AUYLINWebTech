$(document).ready(function(){
    $("#startAnimation").click(function(){
        $(".box").animate({
            left: '600px',
            width: '400px',
            fontSize: '30pt'
        }, 2000) 
        
        .animate({
            top: '+=100px',
            width: '300px'
        }, 2000)

        .animate({
            left: '300px',
            opacity: 0.4 
        }, 2000) 

        .animate({
            top: '0px', 
            opacity: 1, 
            fontSize: '12pt' 
        }, 2000, function() { 
            alert("VÉGE"); 
        });
    });

    $("#hideParagraphs").click(function(){
        $("p").hide();
        $(".box").appendTo("body");
        alert("Bekezdések elrejtése");
    });

    $("#toggleBox").click(function(){
        $(".box").slideUp(2000)
                 .slideDown(2000)
                 .animate({left:'300px', width:'300px'},1000);
    });
    
});
