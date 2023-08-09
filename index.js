const hambuger = document.querySelector(".hamburger");
const mobilemenu = document.querySelector(".mobile-menu");
const closebutton = document.querySelector(".closebutton");

hambuger.addEventListener("click", () => {
  mobilemenu.classList.add("visible-menu");
});

closebutton.addEventListener("click", () => {
  mobilemenu.classList.remove("visible-menu");
});
