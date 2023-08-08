const obj = {
  heading: "Festure Speakers",
  speakers: [
    {
      img: "./images/speakers/speaker_01.png",
      name: "Yochai Benkler",
      title:
        "Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School",
      role: "Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006",
    },
    {
      img: "./images/speakers/speaker_02.png",
      name: "SohYeong Noh",
      title: "Director of Art Centre Nabi and a board member of CC Korea",
      role: "As the main venue for new media art production in Korea, Nabi promotes cross-disciplinary collaboration and understanding among science technology, humanities, and the arts.",
    },
    {
      img: "./images/speakers/speaker_03.png",
      name: "Lila tretikov",
      title: "Executive Director of the Wikimedia Foundation",
      role: "Lila Tretikov is the Executive of the Wikimedia Foundation, the nonprofit organization that operates Wikipedia. Wikipedia is freely available in 290 languag-es and used by nearly half a billion people around the world every month.",
    },
    {
      img: "./images/speakers/speaker_04.png",
      name: "Kilnam Chon",
      title: "",
      role: "Kilnam Chon helped bring the internet to Asia and is an outspoken advocate for the open web and digital com-mons. In 2012. he was inducted into the inaugural class of the Internet Society’s (ISOC) Internet Hall of Fame",
    },
    {
      img: "./images/speakers/speaker_05.png",
      name: "Julia Leda",
      title: "President of Young Pirates of Europe",
      role: "European ingetration, political democracy and participation of youth through online as her major condern, Reda’s report outlining potential changes to EU copyright law was approved by the Parliament in July",
    },
    {
      img: "./images/speakers/speaker_06.png",
      name: "Ryan Merkley",
      title: "CEO of Creativve Commons, ex COO of the Mozilla Foundation",
      role: "Ryan had been leading open-source projects at the Mozilla Foundation such as the open-source move-ment",
    },
  ],
};
const h41 = document.createElement("h4");
const span1 = document.createElement("span");
const p1 = document.createElement("p");

const h42 = document.createElement("h4");
const span2 = document.createElement("span");
const p2 = document.createElement("p");

const h43 = document.createElement("h4");
const span3 = document.createElement("span");
const p3 = document.createElement("p");

const h44 = document.createElement("h4");
const span4 = document.createElement("span");
const p4 = document.createElement("p");

const h45 = document.createElement("h4");
const span5 = document.createElement("span");
const p5 = document.createElement("p");

const h46 = document.createElement("h4");
const span6 = document.createElement("span");
const p6 = document.createElement("p");

const heading = document.querySelector(".h3");
heading.innerText = obj.heading;

const img1 = document.querySelector(".image1");
img1.innerHTML = `<img src="" alt="" class="picture1">`;
const picture1 = document.querySelector(".picture1");
picture1.src = obj.speakers[0].img;

const img2 = document.querySelector(".image2");
img2.innerHTML = `<img src="" alt="" class="picture2">`;
const picture2 = document.querySelector(".picture2");
picture2.src = obj.speakers[1].img;

const img3 = document.querySelector(".image3");
img3.innerHTML = `<img src="" alt="" class="picture3">`;
const picture3 = document.querySelector(".picture3");
picture3.src = obj.speakers[2].img;

const img4 = document.querySelector(".image4");
img4.innerHTML = `<img src="" alt="" class="picture4">`;
const picture4 = document.querySelector(".picture4");
picture4.src = obj.speakers[3].img;

const img5 = document.querySelector(".image5");
img5.innerHTML = `<img src="" alt="" class="picture5">`;
const picture5 = document.querySelector(".picture5");
picture5.src = obj.speakers[4].img;

const img6 = document.querySelector(".image6");
img6.innerHTML = `<img src="" alt="" class="picture6">`;
const picture6 = document.querySelector(".picture6");
console.log("picture6", picture6);
picture6.src = obj.speakers[5].img;

const content1 = document.querySelector(".content1");
const content2 = document.querySelector(".content2");
const content3 = document.querySelector(".content3");
const content4 = document.querySelector(".content4");
const content5 = document.querySelector(".content5");
const content6 = document.querySelector(".content6");
content1.append(h41, span1, p1);
content2.append(h42, span2, p2);
content3.append(h43, span3, p2);
content4.append(h44, span4, p4);
content5.append(h45, span5, p5);
content6.append(h46, span6, p6);
