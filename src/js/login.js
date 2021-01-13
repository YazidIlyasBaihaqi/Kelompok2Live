function loginAuth(){
    const InpLogin = document.getElementById("InpLogin").value;
    const InpPassword = document.getElementById("InpPassword").value;
    const login = "admin";
    const password = "admin";
    if (InpLogin === login && InpPassword === password)
        console.log("Login berhasil");
    else console.log("Login gagal")
}