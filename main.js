// console.log("merhaba");

const menuBtn = document.getElementById("menu-btn");
const navbar = document.getElementById("navbar");
const closeBtn = document.getElementById("close-btn");

// menü butonuna basınca menünün açılmasını sağlayan olay dinleyicisi
menuBtn.addEventListener("click", () => {
  navbar.classList.remove("hidden");
});

// kapat butonuna basınca menünün kapanmasını sağlayan olay dinleyicisi

closeBtn.addEventListener("click", () => {
  navbar.classList.add("hidden");
});
