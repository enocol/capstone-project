document.addEventListener("DOMContentLoaded", () => {
  const speaker = document.querySelectorAll(".speaker");
  console.log(speaker);
  const showmorebtn = document.querySelector(".showmore");
  const itemperload = 2;
  const currentVisible = itemperload;

  for (let i = 0; i < currentVisible; i += 1) {
    speaker[i].classList.add("visible");
  }

  showmorebtn.addEventListener("click", () => {
    for (
      let i = currentVisible;
      i <= currentVisible + itemperload + 1;
      i += 1
    ) {
      if (speaker[i]) {
        speaker[i].classList.add("visible");
      }
    }
    showmorebtn.classList.add("btnInvisible");
  });
});
