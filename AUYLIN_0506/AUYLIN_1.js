$(document).ready(function(){
  $("#gomb").click(function(){
      $.ajax({
          url: 'orarend_1obj.json',
          dataType: 'json',
          success: function(data){
              var kurzusInfoHTML ="<h1>MISKOLCI EGYETEM</h1>";
              kurzusInfoHTML += "<p><strong>Cím:</strong> " + data.cim.street + ", " + data.cim.city + " " + data.cim.code + "</p>";
              kurzusInfoHTML += "<ul>";
              data["phone number"].forEach(function(item){
                  kurzusInfoHTML += "<li><strong>" + item.type + ":</strong> " + item.number + "</li>";
              });
              kurzusInfoHTML += "</ul>";
              kurzusInfoHTML += "<h2>MI Órarend 2024 Tavasz - részlet</h2>";
              kurzusInfoHTML += "<p><strong>kurzusnév:</strong>"+data.kurzusnev+"</p>";
              kurzusInfoHTML += "<p><strong>Oktató:</strong> " + data.oktato + "</p>";
              kurzusInfoHTML += "<p><strong>Szak:</strong> " + data.szak + "</p>";
              kurzusInfoHTML+= "<p><strong>Időpont:</strong></p>";
              kurzusInfoHTML += "<ul>";
              kurzusInfoHTML += "<li>Nap: "+data.idopont.nap+"</li>";
              kurzusInfoHTML += "<li>Tól: "+data.idopont.tol+"</li>";
              kurzusInfoHTML += "<li>Ig: "+data.idopont.ig+"</li>";
              kurzusInfoHTML += "</ul>";
              kurzusInfoHTML += "<p><strong>Helyszín:</strong> " + data.helyszin + "</p>";
              $("#orarend").html(kurzusInfoHTML);
          }
      });
  });
});