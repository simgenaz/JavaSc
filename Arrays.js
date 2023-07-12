//Array özel bir değişkendir birden fazla değer tutabilir

const cars = ["Audi", "Volvo", "BMW"];

//array oluşturmak;

const array_name = [item1,item2]; //arraylari const ile oluşturmak yaygındır

//Arrayleri index numaralarını girerekte oluşturabiliriz;

const cats = [];
cats[0] = "British";
cats[1] = "Siyam";


const catNames = new Array("Asuman", "Seker", "Igor"); //Bu şekilde de array oluşturabiliriz

//arraylare index numaralarından ulaşabiliriz

const pets = ["dog" , "cat" , "bird"];
let pet = pets[0]; //ilk index
let pet2 = pets[1]; //ikinci index

//bu iki arrayde aynı şekilde oluşur
const points = new Array(40, 100, 1, 5, 25, 10);
const points2 = [40, 100, 1, 5, 25, 10];

//arrayin array olup olmadığını öğrenmek için kullandığımız method ise Array.isArray() dir

Array.isArray(fruits);

//arrayin arasına eklemek istediğimiz bir * + - vs olursa bunu join() metoduyla oluşturabiliriz.

const fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits.join(" * ");
//SONUÇ : Banana * Orange * Apple * Mango

//Arrayin içine yeni bir değer eklemek için kullandığımız metod push() , çıkarmak istediğimiz ise pop() 

//shift() methodu arrayin içinde ki ilk elemanı siler

const fruits2 = ["Banana", "Orange", "Apple", "Mango"];
fruits2.shift(); //burada banana silinmiş olur

//unshift() methodu ise arrayin başına yeni eleman ekler

const fruits3 = ["Banana", "Orange", "Apple", "Mango"];
fruits3.unshift("Lemon"); //Lemon eklenir ve index numarası  0 olur 


//concat() methodu olan bir arrayle yeni bir arrayi birleştirir 
// olan arrayi asla değiştirmez hep yeni bir array döndürür

const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];

const myChildren = myGirls.concat(myBoys); 


//arrayde alfabetik şekilde sort etmek istediğimizde sort() methodunu kullanırız

const fruit = ["Banana", "Orange", "Apple", "Mango"];
fruit.sort();

//arrayi ters döndürmek istediğimizde reverse() methodunu kullanırız.


//arrayda max değerini bulmak
function myArrayMax(arr) {
    let len = arr.length;
    let max = -Infinity;
    while (len--) {
      if (arr[len] > max) {
        max = arr[len];
      }
    }
    return max;
  }

  //Arrayde min değerini bulmak 
  function myArrayMin(arr) {
    let len = arr.length;
    let min = Infinity;
    while (len--) {
      if (arr[len] < min) {
        min = arr[len];
      }
    }
    return min;
  }
