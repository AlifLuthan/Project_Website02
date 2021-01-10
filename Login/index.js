function login() {
    let user = document.getElementById("username");
    let pass = document.getElementById("password");

    // console.log("username: " + user.value);
    // console.log("password: " + pass.value);
    if(user.value == "admin" && pass.value == "12345admin"){
        alert("Selamat Datang");
        window.location="Landingpage/index.html";
    }
    else{
        alert("Username atau Password salah");
    }
}