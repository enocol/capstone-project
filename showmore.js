const speaker = document.querySelectorAll(".speaker");
const showmorebtn = document.querySelector(".showmore");
console.log(showmorebtn);
const itemperload = 2;
let currentVisible = itemperload;

for (let i = 0; i < currentVisible; i++) {
  speaker[i].classList.add("visible");
}

showmorebtn.addEventListener("click", () => {
  for (let i = currentVisible; i < currentVisible + itemperload; i++) {
    if (speaker[i]) {
      speaker[i].classList.add("visible");
    }
  }
  showmorebtn.classList.add("btnInvisible");
});
