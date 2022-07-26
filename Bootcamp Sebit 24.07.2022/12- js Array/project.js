let isimler = ["can", "rıdvan", "elif"];
//console.log(isimler);

//isimler[1] = "osman";
//console.log(isimler);

let yaslar = [43, 5, 6, 30];
console.log(yaslar[3]);

let rastgele = ["can", "boz", 10, 15];
console.log(rastgele);

//Dizimin eleman sayısı:

console.log(rastgele.length);

//Dizi elemanlarının arasına eleman koyup stringe dönüştürme:
let tireli = isimler.join("-");
console.log(tireli);

let virgullu = isimler.join(", ");
console.log(virgullu);

let sira = isimler.indexOf("elif");
console.log(sira);

//Concatenation Metodu "ANA DİZİ DEĞİŞMİYOR!!! Yeni bir variable'a saklayabilirsin."

let eklenmis = isimler.concat(["osman", "merve"]);
console.log(eklenmis);
console.log(isimler);

//Push Metodu: "Concat methodunda ana dizi değişmezken burada değişiyor."

isimler.push("Leyla");
console.log(isimler);

//pop methodu: sondaki elemanı diziden çıkartır.

isimler.pop();
console.log(isimler);
