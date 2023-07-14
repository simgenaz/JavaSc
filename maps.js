//Arrayi new Map() e geçirebiliriz
//map oluştur ve bu şekilde kullanabiliriz Map.set()


const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
  ]);
  //bu bir map oluşturmaktır

  //map e set() methoduyla eleman ekleyebiliriz

  //set() methodu olan map değerlerinide değiştirebilriz

  //get() -> mapten veri çekmek için
  //fruits.size; mapin size ını döndürür
  //delete() -> mapten element siler
  //has() -> eğer map içinde o değer varsa true yoksa false döndürür

  // Tüm değerleri döndürmek için
let text = "";
fruits.forEach (function(value, key) {
  text += key + ' = ' + value;
})

let text2 = "";
for (const x of fruits.entries()) {
  text2 += x;
}