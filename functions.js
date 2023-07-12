//fonksiyonlar bir den fazla kez çalıştırılabilir
//aynı kodu farklı değerlerle tekrar kullanabiliriz

let x = myFunction(4,3);
function myFunction(a,b){
    return a * b;
}

let y = myFunction(10 ,4);

//x in cevabı 12 yken y nin cevabı 40 dır.

function toCelsius(fahrenheit) {
    return (5/9) * (fahrenheit-32);
  }
  
  let value = toCelsius();

let a = toCelsius(77);
let text = "The tempeerature is " + x + " Celsius"; 
// let text = "The temperature is " + toCelsius(77) + "Celcius"; şeklinde de yazılabilir.

//bazı yerel değişkenler vardır bunlara fonksiyonun içinde ve dışında ulaşabiliceğimiz bölümler bulunmaktadır

function myFunction(){
    let carName = "Volvo";
//carName burada kullanılabilir

}
//carName burada kullanılamaz