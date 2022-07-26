//uygulama
//ürünlerin ham fiyatını verip vergili halinin toplamını bulan bir hesaplama yapın.

/* Function declaration ile

const urunSatis = function (urunler, vergi) {
  let toplam = 0;
  for (let i = 0; i < urunler.length; i++) {
    toplam += urunler[i] + urunler[i] * vergi;
  }
  return toplam;
};

console.log(urunSatis([10, 20, 30], 0.25));
*/

/* arrow function
const urunSatisArrow = (urunler, vergi) => {
  let toplam = 0;
  for (let i = 0; i < urunler.length; i++) {
    toplam += urunler[i] + urunler[i] * vergi;
  }
  return toplam;
};

console.log(urunSatisArrow([10, 20, 30], 0.25));

*/
