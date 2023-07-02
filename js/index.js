
// side bar
const menu = document.querySelector(".menu");
const navbar = document.querySelector(".navbar");

//side bar toggle
menu.onclick = () => {
    event.preventDefault();
    navbar.classList.toggle("active");
}

const search = document.querySelector(".search");
const searchBox = document.querySelector(".search-box");
search.onclick = () => {
    event.preventDefault();
    searchBox.classList.toggle("active");
}

document.addEventListener("click", function(e){
    if(!menu.contains(e.target) && !navbar.contains(e.target)){
        navbar.classList.remove("active");
  
    }
    if(!search.contains(e.target) && !searchBox.contains(e.target)){
        searchBox.classList.remove("active");
    }



})


