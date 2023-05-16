let x = "";
const container = document.getElementById("container");
const navbar = document.querySelector("nav");

let text = document.querySelector(".text");

let adress = "";
const S1 = "./assets/image/premiere version/";
const S2 = "./assets/image/seconde version/";
const S3 = "./assets/image/troisieme version/";

///***********************Nav Button*****************///

IntroLi.addEventListener("click", () => {
  container.src = "./assets/image/intro.jpg";
  text.style.display = "none";
  VI.style.display = "none";
  VII.style.display = "none";
  VIII.style.display = "none";
  Info.style.display = "none";
  Intro.style.display = "block";
  next.style.display = "none";
  previous.style.display = "none";
});

V1.addEventListener("click", () => {
  adress = S1;
  container.src = "./assets/image/premiere version/0.jpg";
  text.style.display = "none";
  VI.style.display = "block";
  VII.style.display = "none";
  VIII.style.display = "none";
  Info.style.display = "none";
  Intro.style.display = "none";
  next.style.display = "block";
  previous.style.display = "block";
});

V2.addEventListener("click", () => {
  adress = S2;
  container.src = "./assets/image/seconde version/0.jpg";
  text.style.display = "none";
  VI.style.display = "none";
  VII.style.display = "block";
  VIII.style.display = "none";
  Info.style.display = "none";
  Intro.style.display = "none";
  next.style.display = "block";
  previous.style.display = "block";
});

V3.addEventListener("click", () => {
  adress = S3;
  container.src = "./assets/image/troisieme version/0.jpg";
  text.style.display = "none";
  VI.style.display = "none";
  VII.style.display = "none";
  VIII.style.display = "block";
  Info.style.display = "none";
  Intro.style.display = "none";
  next.style.display = "block";
  previous.style.display = "block";
});

InfoLi.addEventListener("click", () => {
  container.src = "./assets/image/info.jpg";
  text.style.display = "none";
  VI.style.display = "none";
  VII.style.display = "none";
  VIII.style.display = "none";
  Info.style.display = "block";
  Intro.style.display = "none";
  next.style.display = "none";
  previous.style.display = "none";
});

//********************* Next & Previous Button *********************/

next.addEventListener("click", () => {
  const y = x++;
  container.src = adress + y + ".jpg";
  if (y >= 20 && (adress == S2 || adress == S3)) {
    x = 0;
  } else if (y >= 14 && adress == S1) {
    x = 0;
  }
  console.log(x);
});

previous.addEventListener("click", () => {
  const y = x--;
  container.src = adress + y + ".jpg";
  if (y <= 0 && (adress == S2 || adress == S3)) {
    x = 20;
  } else if (y <= 0 && adress == S1) {
    x = 14;
  }
  console.log(x);
});
