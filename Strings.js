//Stringler 0 veya daha fazla karakterden oluşabilir

let text = "Simge naz";

// tek tırnak veya çift tırnak kullanabiliriz

let carName = "Volvo";
let carName2 = 'Bmw';

//iç içe tırnak kullabiliriz

let answer = "Its ok.";
let answer2 = "She said 'its ok.'";

//stringin uzunluğunu bulmak için lentgh uzantısını kullanabiliriz

let catName = "British";
let length = catName.length;

//Stringler sadece tırnak içinde yazılır tırnak dışı yazıldığında Jscript bunu kabul etmez 

// örnek : let text = "Benim ismim " Simge " memnun oldum ";


//Stringleri new diye tanımlayarak oluşturabiliriz

let y = new String("John");


//Stringlerde 3 tane ayırmak için method bulunur
//1 - slice(Start,end)
//2 - substring(start , end)
//3 - substr(start, length)

let text4 = "Apple, Banana, Kiwi";
let part = text4.slice(7, 13);

let str = "Apple, Banana, Kiwi";
let part2 = str.substring(7, 13);

//slice ve substr benzer methodlardır. fakat substr yazılan yerden sonra bütün stringi silecektir

//eğer parametre eksiden başlıyorsa stringin pozisyonu sondan başa doğru gider.

let str2 = "Apple, Banana, Kiwi";
let part3 = str2.substr(-4);

//String methodları olarak bir adette replace() methodu bulunur.
//bu değiştirmek istediğimiz şeyler için kullanılır mesela

let text5 = "Please visit Microsoft and Microsoft!";
let newText = text.replace("Microsoft", "W3Schools");

//ayrı olarak replaceAll() methodu bulunur bu istediğüimiz stringdeki tüm her şeyi istediklerimizle değişir

let text6 = "I love cats. Cats are very easy to love. Cats are very popular."
text6 = text6.replaceAll("Cats","Dogs");
text6 = text6.replaceAll("cats","dogs");

//toUpperCase() ve toLowerCase() methodları bulunmakta
//istediğimiz stringleri büyük harfe veya küçüğe dönüştürür


//String karakterlerini ayırmak için üç metod bulunur
//1 - charAt(position)
//2 - charCodeAt(postion)
//Property access []

let text7 = "HELLO WORLD";
let char = text7.charAt(0); //0. indexteki harfi döndürür

let text8 = "HELLO WORLD";
let char2 = text8.charCodeAt(0); 

let textt = "HELLO WORLD";
let char3 = textt[0];


//Stringi ayırmak için kullandığımız metod ise split() dir

text.split(",")    
text.split(" ")    
text.split("|") 

//Stringler arasında arama yapmak yada istediğimizi bulmak için kullandığımız metod indexOf() dur

let textt2 = "Please locate where 'locate' occurs!";
let index = textt2.indexOf("locate");  //locate kelimesi kaçınca indexte olduğunu söyler

//search()

let textt3 = "Please locate where 'locate' occurs!";
textt3.search("locate");

//search() ve indexOf() aynı parametreyi almayı kabul ederler fakat aynı metod değillerdir

//includes() metodu true veya false döndürür string içinde varsa true yoksa false

let x = "Hello world, welcome to the universe.";
x.includes("world"); //world kelimesi geçtiği için return true olucaktır

//startsWith() ve endsWith() true veya false döndürür


//Stringlerde back-ticks kullanmak daha yaygın bunu şu şekilde kullanabiliriz
let a = `Hello World!`;
let b = `He's often called "Johnny"`;


//Interpolation bunu şu şekilde kullanırız ${...}

let firstName = "John";
let lastName = "Doe";

let c = `Welcome ${firstName}, ${lastName}!`;


//içlerine string yazmamıza izin verilir
let price = 10;
let VAT = 0.25;
let total = `Total: ${(price * (1 + VAT)).toFixed(2)}`;







