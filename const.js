//const değişkeni sürekli değişemez sabittir

const a  = 123;
// artık a değerinde bir değişken var ve bu değişkeni her yerde kullanabiliriz.
//fakat değişkene yeni bir isim veya numara atayamayız

//const la array oluşturalabiliyor
const cars = ["Audi" , "Volvo" , "Bmw"];

//bir tanımlı elementi değiştirebiliriz

cars[0] = "Toyota";

//arraye yeni bir element ekleyebiliriz
cars.push("Mercedes");

//fakar cars adında ki arrayi en baştan yaratamazsın
//bütün elementleri çıkarıp sonra pushlayabilirsin

//sabit objeler oluşturabiliriz mesela

const car = {type:"Fiat", model:"500",color:"pink"};

car.color = "white";

car.owner = "Simge";


const x = 2; //kabul
// x = 2; //değil
// var x = 2; //değil
// let x = 2; //değil
// const x = 2; //değil