const card = document.querySelectorAll(".card");
const icon = document.querySelectorAll(".card a");
const span = document.querySelectorAll("span");

icon.forEach((a, i) => {
  a.onclick = (e) => {
    event.preventDefault();
    console.log("A");
    span[i].classList.toggle("active");
    card[i].classList.toggle("active");
    icon[i].classList.toggle("active");
  };
});

document.addEventListener("click", function (e) {
  icon.forEach((a, i) => {
    console.log(e.target);
    if (!icon[i].contains(e.target)) {
      console.log("oke");
      span[i].classList.remove("active");
      card[i].classList.remove("active");
      icon[i].classList.remove("active");
    }
  });
});
