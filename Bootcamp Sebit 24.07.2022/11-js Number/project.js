let yaricap = 15;
const piSayisi = 3.14;
let daireAlani = piSayisi * yaricap ** 2;
console.log(daireAlani);

let kalan = yaricap % 4;
console.log(kalan);

let sonuc = 6 * (15 - 4) ** 2;
console.log(sonuc);

//Sayı Arttırma:

let sayi = 13;

//sayi = sayi + 1;
//sayi++; önce sayıyı döndürüp sonra arttırır.
//++sayi; önce arttırıp sonra sayıyı döndürür.

let sayim = sayi++;
console.log("sayim", sayim);
let sayimyeni = ++sayi;
console.log("sayim yeni", sayimyeni);

//NaN Kullanımı:

console.log(15 / 4);
console.log(15 * "can");

let birlestirme = "Dersi " + sayi + " kez tekrar ettim";
console.log(birlestirme);
