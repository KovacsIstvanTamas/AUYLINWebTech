$(document).ready(function(){
    $("#betoltesGomb").click(function(){
      $.ajax({
        url: "KIT_orarend.json",
        type: "GET",
        dataType: "json",
        success: function(data) {

          var orarend = data.hét;
          var napok = Object.keys(orarend);
          var megjelenitettOrarend = "";

          for (var i = 0; i < napok.length; i++) {
            var nap = napok[i];
            var orak = orarend[nap];
  
            megjelenitettOrarend += "<h2>" + nap + ":</h2>";
  
            for (var j = 0; j < orak.length; j++) {
              var ora = orak[j];
              megjelenitettOrarend += "<p>" + ora.név + " | " + ora.tanár + " | " + ora.tol + "-" + ora.ig + " | " + ora.terem + "</p>";
            }
          }

          $("#terulet").html(megjelenitettOrarend);
        },
        error: function() {
          $("#terulet").text("Hiba történt az órarend betöltése közben.");
        }
      });
    });
  });
  