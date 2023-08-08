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
h41.className = "h41 name";
span1.className = "span1 title ";
p1.className = "p1 role";

const h42 = document.createElement("h4");
const span2 = document.createElement("span");
const p2 = document.createElement("p");
h42.className = "h42 name";
span2.className = "span2 title ";
p2.className = "p2 role";

const h43 = document.createElement("h4");
const span3 = document.createElement("span");
const p3 = document.createElement("p");
h43.className = "h43 name";
span3.className = "span3 title ";
p3.className = "p3 role";

const h44 = document.createElement("h4");
const span4 = document.createElement("span");
const p4 = document.createElement("p");
h44.className = "h44 name";
span4.className = "span4 title ";
p4.className = "p4 role";

const h45 = document.createElement("h4");
const span5 = document.createElement("span");
const p5 = document.createElement("p");
h45.className = "h45 name";
span5.className = "span5 title ";
p5.className = "p5 role";

const h46 = document.createElement("h4");
const span6 = document.createElement("span");
const p6 = document.createElement("p");
h46.className = "h46 name";
span6.className = "span6 title ";
p6.className = "p6 role";

const heading = document.querySelector(".h3");
heading.innerText = obj.heading;

const img1 = document.querySelector(".image1");
img1.innerHTML = `<img src="" alt="" class="picture1 picture">`;
const picture1 = document.querySelector(".picture1");
picture1.src = obj.speakers[0].img;

const img2 = document.querySelector(".image2");
img2.innerHTML = `<img src="" alt="" class="picture2 picture">`;
const picture2 = document.querySelector(".picture2");
picture2.src = obj.speakers[1].img;

const img3 = document.querySelector(".image3");
img3.innerHTML = `<img src="" alt="" class="picture3 picture">`;
const picture3 = document.querySelector(".picture3");
picture3.src = obj.speakers[2].img;

const img4 = document.querySelector(".image4");
img4.innerHTML = `<img src="" alt="" class="picture4 picture">`;
const picture4 = document.querySelector(".picture4");
picture4.src = obj.speakers[3].img;

const img5 = document.querySelector(".image5");
img5.innerHTML = `<img src="" alt="" class="picture5 picture">`;
const picture5 = document.querySelector(".picture5");
picture5.src = obj.speakers[4].img;

const img6 = document.querySelector(".image6");
img6.innerHTML = `<img src="" alt="" class="picture6 picture">`;
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
content3.append(h43, span3, p3);
content4.append(h44, span4, p4);
content5.append(h45, span5, p5);
content6.append(h46, span6, p6);

const name1 = document.querySelector(".h41");
const name2 = document.querySelector(".h42");
const name3 = document.querySelector(".h43");
const name4 = document.querySelector(".h44");
const name5 = document.querySelector(".h45");
const name6 = document.querySelector(".h46");

name1.innerText = obj.speakers[0].name;
name2.innerText = obj.speakers[1].name;
name3.innerText = obj.speakers[2].name;
name4.innerText = obj.speakers[3].name;
name5.innerText = obj.speakers[4].name;
name6.innerText = obj.speakers[5].name;

const title1 = document.querySelector(".span1");
const title2 = document.querySelector(".span2");
const title3 = document.querySelector(".span3");
const title4 = document.querySelector(".span4");
const title5 = document.querySelector(".span5");
const title6 = document.querySelector(".span6");

title1.innerText = obj.speakers[0].title;
title2.innerText = obj.speakers[1].title;
title3.innerText = obj.speakers[2].title;
title4.innerText = obj.speakers[3].title;
title5.innerText = obj.speakers[4].title;
title6.innerText = obj.speakers[5].title;

const role1 = document.querySelector(".p1");
const role2 = document.querySelector(".p2");
const role3 = document.querySelector(".p3");
const role4 = document.querySelector(".p4");
const role5 = document.querySelector(".p5");
const role6 = document.querySelector(".p6");

role1.innerText = obj.speakers[0].role;
role2.innerText = obj.speakers[1].role;
role3.innerText = obj.speakers[2].role;
role4.innerText = obj.speakers[3].role;
role5.innerText = obj.speakers[4].role;
role6.innerText = obj.speakers[5].role;
