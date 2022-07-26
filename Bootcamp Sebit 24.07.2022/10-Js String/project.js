// let email = "cnboz@hotmail.com";
let email = "cnboz@hotmail.com";
console.log(email);

//Birleştirme

let ad = "Zekeriya";
let soyad = "Duranel HHHH";
let adSoyad = ad + " " + soyad;

console.log(adSoyad);
console.log(adSoyad[0]);

//Karakter sayısı bulma

console.log(adSoyad.length);

//String Metodları:

console.log(adSoyad.toUpperCase());

let kucukAdSoyad = adSoyad.toLowerCase();
console.log(kucukAdSoyad);

//Kaçıncı indexte bulunduğu:

let index = adSoyad.indexOf("k");
console.log(index);

//lastindexof kullanımı (en son ne zaman karakter kullanılmış):

let indexLast = adSoyad.lastIndexOf("a");
console.log(indexLast);

//slice kullanımı:

let ilkIsim = adSoyad.slice(0, 8);
console.log(ilkIsim);

//replace kullanımı(ilk gördüğünü değiştirir):

let yerdegistir = adSoyad.replace(" ", "");
console.log(yerdegistir);

//eğer hepsini değiştireceksek replaceAll kullanmalıyız:

let yerdegistirAll = adSoyad.replaceAll(" ", "");
console.log(yerdegistirAll);
