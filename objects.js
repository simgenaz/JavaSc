//objeler
//Bir araba modeli düşünelim bu arabanın model ismi yılı rengi vs bulunuyor
//Tüm arabalar aynı özellikleri taşır fakat özellik değerleri arabaya göre değişebilir

let car = "Fiat";

//nesneler değişkendir fakar nesnelerin bir çok değeri olabilir

const carr = {type:"Fiat",model: "500", color:"white"};

const person = {
    fName: "Simge",
    lName: "Naz",
    age: 25 ,
    eyeColor: "brown"
};

//person objesi oluşturduktan sonra bu objelere şu şekilde ulaşabiliriz

person.fName;
person.lName;
person.age;
person.eyeColor;

//veya şu şekilde
person["lName"];

//farklı bir person oluşturalım

const person2 ={
    fName: "Ali",
    lName: "Bayik",
    age: 35,
    ownCar: true,
    fullName: function(){
        return this.fName + " " + this.lName;
    }
};

//buradaki this objesi persondaki fname i ifade etmektedir.

//methodlara ulaşırken 

name = person.fName();
name = person2.fName;
//eğer parantez kullanılmadan bu method çağırılırsa return ettiği değer değil fonksiyon olucaktır.

x = new String();
y = new Number();
z = new Boolean();

//new kullandığımızda orada yeni bir obje oluşturduğumuz anlamına gelmektedir.
