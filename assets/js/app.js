let burgerBtn = document.querySelector("#burger-menu");
let closeBtn = document.querySelector("#close-menu");
let headerMenu = document.querySelector("header #head-bottom ul");
burgerBtn.addEventListener("click", (e) => {
  headerMenu.style.transform = "translate(0)";
});
closeBtn.addEventListener("click", (e) => {
  headerMenu.style.transform = "translate(150%)";
});
// var swiper = new Swiper(".mySwiper.swiper1", {
//   slidesPerView: 5,
//   spaceBetween: 10,
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
//   breakpoints: {
//     500: {
//       slidesPerView: 2,
//       spaceBetween: 20,
//     },
//     768: {
//       slidesPerView: 4,
//       spaceBetween: 40,
//     },
//     1024: {
//       slidesPerView: 5,
//       spaceBetween: 10,
//     },
//   },
// });
// var swiper2 = new Swiper(".mySwiper.reviews", {
//   slidesPerView: 3,
//   spaceBetween: 30,
//   loop: true,
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
// });
