const mobMenu = document.querySelector(".mob-menu");
const h1 = document.querySelector("h1");
const p = document.querySelector("p");
const navImg = document.querySelector(".to .qwe");
const img = document.querySelector(".mob-menu img");

mobMenu.addEventListener("click", () => {
  if (mobMenu.classList.contains("open")) {
    h1.style.display = "block";
    p.style.display = "block";
    img.style.display = "block";
    mobMenu.classList.remove("open");
    navImg.style.transform = "rotate(0deg)";
  } else {
    h1.style.display = "none";
    p.style.display = "none";
    img.style.display = "none";
    mobMenu.classList.add("open");
    navImg.style.transform = "rotate(90deg)";
  }
});

const closeJennifer = document.querySelector(".popup_closed");
const butJennifer = document.querySelector("#Jennifer");
const popup = document.querySelector("#popup");
const body = document.querySelector("body");

butJennifer.addEventListener("click", (event) => {
  if (popup.classList.contains("opened")) {
    body.style.overflow = "auto";
    butJennifer.classList.remove("open");
    popup.style.transform = "translateY(-100%)";
    popup.classList.remove("opened");
  } else {
    popup.classList.add("popup_opened");
    popup.style.transform = "translateY(0%)";
    butJennifer.classList.add("open");
    body.style.overflow = "hidden";
    popup.classList.add("opened");
  }
});


closeJennifer.addEventListener("click", () => {
  popup.style.transform = "translateY(-100%)";
  popup.classList.remove("opened");
  body.style.overflow = "auto";
  butJennifer.classList.remove("open");
});

popup.addEventListener("click", () => {
  popup.style.transform = "translateY(-100%)";
  popup.classList.remove("opened");
  body.style.overflow = "auto";
  butJennifer.classList.remove("open");
});
