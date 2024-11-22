function login() {
    // Kullanıcı adı ve şifreyi al
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var warningAlert =document.getElementById("warning")
    // Basit bir kontrol, gerçek uygulamada sunucu tarafında yapılmalıdır
    if (username === "berkay" && password === "123") {
        // Başarılıysa index.html'e yönlendir
        window.location.href = "menü.html";
    
    } else {
        // Hatalı giriş
        warningAlert.style.visibility = "visible";
    }
}