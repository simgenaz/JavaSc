//eventler örnek olarak şu şekildedir
//html sayfasında yükleme bitti
//html sayfasındaki input değeri değişti
//html sayfasındaki butona tıklandı

// <Element event = "some JavaScript"></Element>

//şimdi ki örnekte onclick attribute button elementine ekleniyor


<button onclick="document.getElementById('demo').innerHTML=Date()">The time is?</button>
//yukarıdaki örnekte öğenin içerğini id = "demo" ile değiştirir
//alttaki örnekte kod kendi öğesinin içeriğini değiştirir this.innerHTML kullanarak

// <button onclick="this.innerHTML = Date()">The time is?</button>

//eventlerde function çağırabiliyorsun 
// <button onclick = "displayDate()"> The time is? </button>

//Genellikle kullanılan html eventleri
onchange , onclick , onmouseover , onmouseout , onkeydown , onload 