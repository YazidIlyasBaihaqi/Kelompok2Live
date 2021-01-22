function loginAuth(){
    const InpLogin = document.getElementById("InpLogin").value;
    const InpPassword = document.getElementById("InpPassword").value;
    const login = "admin";
    const password = "admin";
    if (InpLogin === login && InpPassword === password)
        window.location.replace("https://yazidilyasbaihaqi.github.io/Kelompok2Live/adminindex.html");
    else console.log("Login gagal")
}