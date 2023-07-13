

//variablename = (condition) ? value1:value2  

let voteable = (age < 18) ? "Too young":"Old enough";
//eğer ki burada 18 den küçükse ilk too young büyükse old enough çalışır


let name = null;
let text = "missing";
let result = name ?? text; //?? ilk değeri döndürür eğer değer null değilse

// Objeyi oluştur:
const car = {type:"Fiat", model:"500", color:"white"};
// Arabanın ismini sor:
document.getElementById("demo").innerHTML = car?.name;  //?. undefined döndürür