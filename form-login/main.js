const inpt = document.querySelectorAll(".wrapper input");
const signUp = document.querySelector(".signUp");
const login = document.querySelector(".login");
const user = [];

if (
  window.location.href ==
  `http://${window.location.host}/form-login/signUp.html`
) {
  signUp.addEventListener("click", () => {
    if (inpt[0].value == "" || inpt[1].value == "") {
      return alert("mohon isi semua bidang!!");
    }

    if (window.localStorage.length != 0) {
      let x;
      const data = JSON.parse(localStorage.getItem("data"));
      data.forEach((a) => {
        if (a.name == inpt[0].value) {
          alert("username sudah ada, silahkan ganti username anda");
          x = true
          return;
        }
      });
      if(x){
        return;
      }
    }

    user.push({
      name: inpt[0].value,
      password: inpt[1].value,
    });

    alert("SignUp berhasil, silahkan login..");

    console.log(user);
    // data user terus di simpan di local storage.
    localStorage.setItem("data", JSON.stringify(user));
  });
}

if (
  window.location.href == `http://${window.location.host}/form-login/login.html`
) {
  login.addEventListener("click", () => {
    const data = JSON.parse(localStorage.getItem("data"));
    // jika input user kosong
    if (inpt[0].value == "" || inpt[1].value == "") {
      return alert("mohon isi semua bidang!!");
    }

    data.forEach((a) => {
      // jika input user tidak sesuai
      if (a.name != inpt[0].value || a.password != inpt[1].value) {
        return alert("password atau username salah");
      }
      if (a.name == inpt[0].value && a.password == inpt[1].value) {
        window.location.href = "http://192.168.101.148:5500/index.html";
        alert("Login Succes");
      }
    });

    console.log(data);
  });
}

// if(window.location.href == "http://192.168.101.148:5500/latihan/index.html"){

// }

// document.addEventListener("click" , function(e) {
//   e.preventDefault();
// })
