//Numaralar
let length = 15;
let weight = 30;

//Strings
let color = "Red";
let lastName = "Loren";

//Booleans
let x = true;
let y = false;

//Object
const person = {fName:"Simge", lName: "Naz"};

//Array object
const cars = ["Volvo", "Bmw" , "Audi"];

//Date object:
const date = new Date("1998-05-13");


//Jscriptte aynı değişkenin farklı veri tutabildiğini görebiliriz
let s; //tanımsız
s = 5; // x şu an bir numara
s = "Simge"; //x şu an bir String

//Ve typeof operatörü bulunmaktadır 
typeof "" //String döndürür
typeof 5 //number döndürür

let car;
//bunu yazdık ama buraya yılını mı yoksa rengini mi yazıcağımız belli olmadığı için typeof tanımsız oluyor