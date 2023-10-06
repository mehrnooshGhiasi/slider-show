// setTimeout(()=>{
//    alert("hi")
// }, 3000)

// let n=1;
// const hihi= setInterval(() => {
//   console.log("hi");
//   n++;
//   if (n == 5) {
//     clearInterval(hihi);
//   }
// }, 3000);

let i = 0;
const images = document.querySelectorAll(".images img");

const nextSlide = () => {
  images[i].classList.remove("active");
  i++;
  if (i == images.length) {
    i = 0;
  }
  images[i].classList.add("active");
};

const previouseSlide = () => {
  images[i].classList.remove("active");
  i--;
  if (i == -1) {
    i = images.length - 1;
  }
  images[i].classList.add("active");
};

const load = () => {
  setInterval(nextSlide, 3000);
  document
    .querySelector(".left-controller")
    .addEventListener("click", previouseSlide);

  document
    .querySelector(".right-controller")
    .addEventListener("click", nextSlide);
};

load();

// console.log(document.querySelector("#right").className);
// console.log(document.querySelector("#right").classList);
