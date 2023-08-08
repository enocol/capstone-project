const section3 = document.querySelector(".section3");
const section3container = document.createElement("div");
section3.append(section3container);
section3container.className = "section3container";
const h3 = document.createElement("h3");
h3.className = "h3";
const div = document.createElement("div");

div.className = "speakers";
section3container.append(h3);
section3container.append(div);

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

const speakers = document.querySelector(".speakers");

speakers.append(div1, div2, div3, div4, div5, div6);
div1.className = "speaker speaker1";
div2.className = "speaker speaker2";
div3.className = "speaker speaker3";
div4.className = "speaker speaker4";
div5.className = "speaker speaker5";
div6.className = "speaker speaker6";

const item1 = document.querySelector(".speaker1");
const item2 = document.querySelector(".speaker2");
const item3 = document.querySelector(".speaker3");
const item4 = document.querySelector(".speaker4");
const item5 = document.querySelector(".speaker5");
const item6 = document.querySelector(".speaker6");

const spdiv1 = document.createElement("div");
const spdiv2 = document.createElement("div");
const spdiv3 = document.createElement("div");
const spdiv4 = document.createElement("div");
const spdiv5 = document.createElement("div");
const spdiv6 = document.createElement("div");

const sp1 = document.createElement("div");
const sp2 = document.createElement("div");
const sp3 = document.createElement("div");
const sp4 = document.createElement("div");
const sp5 = document.createElement("div");
const sp6 = document.createElement("div");

sp1.className = "content content1";
sp2.className = "content content2";
sp3.className = "content content3";
sp4.className = "content content4";
sp5.className = "content content5";
sp6.className = "content content6";

spdiv1.className = "image image1";
spdiv2.className = "image image2";
spdiv3.className = "image image3";
spdiv4.className = "image image4";
spdiv5.className = "image image5";
spdiv6.className = "image image6";

item1.append(spdiv1, sp1);
item2.append(spdiv2, sp2);
item3.append(spdiv3, sp3);
item4.append(spdiv4, sp4);
item5.append(spdiv5, sp5);
item6.append(spdiv6, sp6);

const speaker1 = document.querySelector(".speaker1");
