function loginAuth(){
    const InpLogin = document.getElementById("InpLogin").value;
    const InpPassword = document.getElementById("InpPassword").value;
    const login = "NurulFikri";
    const password = "pemweb2020";
    if (InpLogin === login && InpPassword === password)
        window.location.replace("index.html");
    else alert ("Login gagal")
}

function redirect(){
    alert ("test")
    windows.location="/index.html"
}