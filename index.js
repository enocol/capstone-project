const hambuger = document.querySelector(".hamburger");
const mobilemenu = document.querySelector(".mobile-menu");
const closebutton = document.querySelector(".closebutton");

hambuger.addEventListener("click", () => {
  mobilemenu.classList.add("visible-menu");
});

closebutton.addEventListener("click", () => {
  mobilemenu.classList.remove("visible-menu");
});

const section3 = document.querySelector(".section3");
const section3container = document.createElement("div");
section3.append(section3container);
section3container.className = "section3container";
const h3 = document.createElement("h3");
const div = document.createElement("div");
const h4 = document.createElement("h4");
const span = document.createElement("span");
const p = document.createElement("p");
div.className = "speakers";
section3container.append(h3);
section3container.append(div);
const speakers = document.querySelector(".speakers");
const div1 = document.createElement("div");
const div2 = document.createElement("div");
const div3 = document.createElement("div");
const div4 = document.createElement("div");
const div5 = document.createElement("div");
const div6 = document.createElement("div");
const speakerdiv1 = document.createElement("div");
const speakerdiv2 = document.createElement("div");
const speakerdiv3 = document.createElement("div");
const speakerdiv4 = document.createElement("div");
const speakerdiv5 = document.createElement("div");
const speakerdiv6 = document.createElement("div");
div1.className = "speaker speaker1";
div2.className = "speaker speaker2";
div3.className = "speaker speaker3";
div4.className = "speaker speaker3";
div5.className = "speaker speaker5";
div6.className = "speaker speaker6";

speakers.append(div1, div2, div3, div4, div5, div6);
const divs = document.querySelectorAll(".speaker");

for (let i = 0; i < divs.length; i += 1) {
  divs[i].className = `speaker-item speaker${i}`;
}

const item1 = document.querySelector(".speaker1");
const item2 = document.querySelector(".speaker2");
const item3 = document.querySelector(".speaker3");
const item4 = document.querySelector(".speaker4");
const item5 = document.querySelector(".speaker5");
console.log(item5);

const spdiv1 = document.createElement("div");
const spdiv2 = document.createElement("div");
const spdiv3 = document.createElement("div");
const spdiv4 = document.createElement("div");
const spdiv5 = document.createElement("div");

item1.append(spdiv1);
item2.append(spdiv2);
item3.append(spdiv3);
item4.append(spdiv4);
item5.append(spdiv5);

const speaker1 = document.querySelector(".speaker1");

const obj = [
  {
    speaker1: "./images/speakers/speaker_01.png",
  },
  {
    speaker2: "./images/speakers/speaker_02.png",
  },
];
