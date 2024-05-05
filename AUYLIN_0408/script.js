//Fel1
const txt = '{"név":"Laci", "irányítószám":3704, "város":"Miskolc", "egyetem":"Miskolci Egyetem"}';
const obj = JSON.parse(txt);

document.getElementById("nev").innerHTML = obj.név +" "+ obj.irányítószám +" "+ obj.város +" "+ obj.egyetem;