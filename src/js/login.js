function loginAuth(){
    const InpLogin = document.getElementById("InpLogin").value;
    const InpPassword = document.getElementById("InpPassword").value;
    const login = "admin";
    const password = "admin";
    if (InpLogin === login && InpPassword === password)
        alert("Login berhasil");
    else alert ("Login gagal")
}