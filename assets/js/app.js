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

const images=document.querySelectorAll(".images img")
console.log(images);
let i=0;

// const nextSlide = 

setInterval(() => {
  images[i].classList.remove("active");
  i++;
  if (i == images.length) {
    i = 0;
  }
  images[i].classList.add("active");
}, 3000);




// console.log(document.querySelector("#right").className);
// console.log(document.querySelector("#right").classList);