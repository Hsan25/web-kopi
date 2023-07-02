// import isLogin from "../form-login/main.js";

// side bar
const menu = document.querySelector(".menu");
const navbar = document.querySelector(".navbar");

//side bar toggle
menu.onclick = () => {
  event.preventDefault();
  navbar.classList.toggle("active");
};

//search toggle
const search = document.querySelector(".search");
const searchBox = document.querySelector(".search-box");
search.onclick = () => {
  event.preventDefault();
  searchBox.classList.toggle("active");
};

//list-product toggle
const btnProduct = document.querySelector(".btn-product");
const listProduct = document.querySelector(".shopping");
btnProduct.onclick = (e) => {
  e.preventDefault();
  listProduct.classList.toggle("active");
};

// showDetail product btn
//boxModal
const showDetail = document.querySelector(".showDetail");
const boxModal = document.querySelector(".modal");
const content = document.querySelector(".modal .container");
const closeModal = document.querySelector(".close-modal");


showDetail.onclick = (e) => {
  e.preventDefault();
  boxModal.style.display = "block";
};

document.addEventListener("click", function (e) {
    console.log(e.isTrusted)
  //sideBar
  if (!menu.contains(e.target) && !navbar.contains(e.target)) {
    
    navbar.classList.remove("active");
  }
  //searchBox
  if (!search.contains(e.target) && !searchBox.contains(e.target)) {
    searchBox.classList.remove("active");
  }
  //listProduct
  if (!btnProduct.contains(e.target) && !listProduct.contains(e.target)) {
    listProduct.classList.remove("active");
  }

  //boxModal
  if (closeModal.contains(e.target)) {
    e.preventDefault();
    boxModal.style.display = "none";
  }
});


// keadaan login
// if(true){
//   const name = document.querySelector(".name-user");
//   const userName = JSON.parse(localStorage.getItem("data"));

// }


