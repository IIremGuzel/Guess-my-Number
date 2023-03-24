"use strict";
let sayi = Math.floor(Math.random() * 20) + 1;
let score = 20;
let HighScore = 0;
//console.log("deger:" + sayi, typeof sayi);
//document.querySelector(".number").textContent = sayi;
document.querySelector(".check").addEventListener("click", function () {
  let tahmin = Number(document.querySelector(".guess").value);
  console.log(tahmin, typeof tahmin);
  if (!tahmin) {
    document.querySelector(".mesaj").textContent = "Sayi Giriniz..";
  } else {
    if (score > 0) {
      if (tahmin > sayi) {
        score--;
        document.querySelector(".score").textContent = score;
        document.querySelector(".mesaj").textContent = "Daha Küçük";
      } else if (tahmin < sayi) {
        score--;
        document.querySelector(".score").textContent = score;
        document.querySelector(".mesaj").textContent = "Daha Büyük";
      } else {
        document.querySelector(".number").textContent = tahmin;
        document.querySelector(".mesaj").textContent =
          "Tebrikler.. Buldunuz :D";
          document.querySelector('.number').style.width='50rem';
          document.querySelector(".number").style.background='rgb(208, 165, 21)';
        if (score > HighScore) {
          HighScore = score;
          document.querySelector(".highScore").textContent = HighScore;
        }
      }
    } else {
      document.querySelector(".mesaj").textContent =
        "Hakkınız Bitti.Kaybettiniz:(";
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {

  sayi = Math.floor(Math.random() * 20) + 1;
  score = 20;
  document.querySelector(".number").textContent = '?';
  document.querySelector(".number").style.width='15rem';
  document.querySelector(".number").style.background='#eee';
  //document.querySelector(".number").textContent = sayi;
  // document.querySelector(".highScore").textContent = HighScore;
  document.querySelector(".score").textContent = score;
  document.querySelector(".masaj").textContent = "Tahmin etmeye başla";
   Number(document.querySelector(".guess").value)='';

  
});
