$(document).ready(function(){
    $("#gomb").click(function(){
        $.ajax({
            url: 'KIT_orarend.json',
            dataType: 'json',
            success: function(data){
                var kurzusInfoHTML = "<h1>MISKOLCI EGYETEM</h1>";
                
                data.forEach(function(item){
                    kurzusInfoHTML += "<p><strong>Cím:</strong> " + item.cim.street + ", " + item.cim.city + " " + item.cim.code + "</p>";
                    kurzusInfoHTML += "<ul>";
                    item["phone number"].forEach(function(item2){
                        kurzusInfoHTML += "<li><strong>" + item2.type + ":</strong> " + item2.number + "</li>";
                    });
                    kurzusInfoHTML += "</ul>";
                    kurzusInfoHTML += "<h2>MI Órarend 2024 Tavasz - részlet</h2>";
                    kurzusInfoHTML += "<p><strong>kurzusnév:</strong>"+item.kurzusnev+"</p>";
                    kurzusInfoHTML += "<p><strong>Oktató:</strong> " + item.oktato + "</p>";
                    kurzusInfoHTML += "<p><strong>Szak:</strong> " + item.szak + "</p>";
                    kurzusInfoHTML+= "<p><strong>Időpont:</strong></p>";
                    kurzusInfoHTML += "<ul>";
                    kurzusInfoHTML += "<li>Nap: "+item.idopont.nap+"</li>";
                    kurzusInfoHTML += "<li>Tól: "+item.idopont.tol+"</li>";
                    kurzusInfoHTML += "<li>Ig: "+item.idopont.ig+"</li>";
                    kurzusInfoHTML += "</ul>";
                    kurzusInfoHTML += "<p><strong>Helyszín:</strong> " + item.helyszin + "</p>";
                });
                
                $("#orarend").html(kurzusInfoHTML);
            }
        });
    });
});
