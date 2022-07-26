for (let i = 0; i < 10; i++) {
  console.log(i);
}
//eğer burada i'yi dışarıda tamamlamış olsaydık bu döngüden 10 olarak çıkacaktı.

let adSoyad = ["can", "tuce", "elif"];

for (let i = 0; i < adSoyad.length; i++) {
  console.log(adSoyad[i]);
}

//Angular ngFor atası: burada deger yerine herhangi bir değişken kullanılabilir.
const degerler = [10, 20, 30, 40, 50];

for (let deger of degerler) {
  console.log(deger);
}
