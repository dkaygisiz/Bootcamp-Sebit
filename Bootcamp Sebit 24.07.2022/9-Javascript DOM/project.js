/* İlk Yöntem
const button = document.querySelector("button");
*/

/* İkinci Yöntem
const button = document.querySelector("#buttonId");
*/

/*Üçüncü Yöntem
const button = document.querySelector(".buttonClass");
*/

/*Direkt Id ile Çekme Yöntemi
const button = document.getElementById("buttonId");
*/
/* className ile Çekme
const button = document.getElementsByClassName("buttonClass")[0];
*/

/* Tetikleme İlk Yöntemi
const button = document.getElementById("buttonId");

button.addEventListener("click", () => {
  console.log("Tıklandı");
});

*/
/* İkinci Yöntem, html dosyasında ilgili elemente onclick="add()" eventi ekleyerek. Angular'da daha çok bu yöntemi kullanacağız.
 */
function add() {
  console.log("Tıklandı");
}

const liElemanlari = document.querySelectorAll("li");
console.log(liElemanlari);

liElemanlari.forEach((eleman) => {
  eleman.addEventListener("click", (e) => {
    //console.log("Tıklandı");
    //console.log(e.target);
    //console.log(e);
    e.target.style.color = "blue";
  });
});

const ulDegerlerim = document.querySelector("ul");
console.log(ulDegerlerim);

//ulDegerlerim.remove();
/*
liElemanlari.forEach((eleman) => {
  eleman.addEventListener("click", (e) => {
    e.target.remove();
  });
});
*/

//Element Oluşturma

//append sona eleman ekler.
//prepend başa eleman ekler.
const liElemanim = document.createElement("li");

liElemanim.textContent = "Javascript";

/* step 1:
ul etiketini seç

step 2:
li oluştur(oluşturduk)

step 3:
buttona tıkladığımızda bunu ekleyelim. */

const button = document.getElementById("buttonId");
button.addEventListener("click", () => {
  const liElemanim = document.createElement("li");
  liElemanim.textContent = "Javascript";
  ulDegerlerim.append(liElemanim);
});
