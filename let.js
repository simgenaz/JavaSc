// let kullanırken bunu yapamayız mesela
// let x = "Simgenaz";
// let x = 5; buradaki lette hata verir.

//Fakat var değişkeninde yapabiliriz.
var x =  "Simge";
var x = 5;

//eğer let değişkeniyle bir değer tanımlarsan ve bunu {} bunların içinde yaparsan
// süslü parantezin dışında o tanımladığın değeri kullanamazsın

//fakat var değişkeninde kullanabilirsin.

//değişkenleri kullanalım
 var y = 4; //şu an değer 4
 {
    var y = 5; //şu an değer 5
 }
 //şu an değer 5


let z = 8; //z burada 8 
{
    let z = 10; //burada 10
}
//burada tekrar 8

//Redeclaring 
// var değişkeniyle her yerde değişiklik yapılabilir fakat let için bu doğru değildir
var x = 2; //x = 2
var x = 3; //x = 3
//bu ikiside kabuldur


var x = 2; //kabul
let x = 3; //kabul değil

{
    let x = 2; //kabul
   // let x = 3; //kabul değl
}

{
    let x = 2; //Kabul
    var x = 3; //kabul değil
}

//Fakat farklı bloklar içinde let değeriyle değişkeni değiştirebilirsin mesela
let x = 2;

{
    let x = 3;
}
{
    let x = 5;
}