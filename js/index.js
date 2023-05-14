const menu = document.querySelector(".menu");
const navbar = document.querySelector(".navbar");


menu.onclick = () => {
    event.preventDefault();
    navbar.classList.toggle("active");
}

document.addEventListener("click", function(e){
    if(!menu.contains(e.target) && !navbar.contains(e.target)){
        navbar.classList.remove("active");
        console.log("oke")
    }
})


