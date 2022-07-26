const sifre = "asdadasdasdasdadsada!321";

if (sifre.length > 12) {
  console.log("şifre güçlü");
} else if (sifre.length >= 8 && sifre.length <= 12) {
  console.log("sifre yeterli");
} else {
  console.log("sifreyi yeniden giriniz");
}
