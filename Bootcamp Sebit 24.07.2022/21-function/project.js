/*
function hello() {
  console.log("Hello");
}

hello();
hello();
hello();
hello();
hello();
*/

//fonksiyonlara parametre gönderme: burada can ve boz default parametreler. eğer parametre göndermeden fonksiyonumuzu çağırırsak(line 20deki gibi) default parametrelerle fonksiyon çalışacaktır.

const canboz = function (ad = "can", soyad = "boz") {
  console.log(`Ad Soyad ${ad} ${soyad}`);
};

canboz("Kemal", "Doğukan");
canboz();

//Eski tipten arrowa hafif geçiş
const karealani = function (kenar) {
  return kenar * kenar;
};

let sonuc = karealani(6);
console.log(sonuc);

//Arrow function ilk yöntem
/*
const karealanim = (kenar) => {
  return kenar ** 2;
}; */

//Arrow Function tek parametre ise parametreyi paranteze almasak da oluyor: (burada prettier otomatik aldı), tek satır kodumuz varsa returne de ihtiyacımız yok otomatik return ediyor. ancak genelde ilk yöntemi kullanıyoruz karışıklık olmaması için.

const karealanim = (kenar) => kenar ** 2;
console.log(karealanim(7));

const stringDonus = () => "Burak";

console.log(stringDonus());
