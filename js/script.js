function criarconta() {
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    
    localStorage.setItem('username', username)
    localStorage.setItem('email', email)
    localStorage.setItem('password', password)
}
function auth() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    var email_certo = localStorage.getItem("email")
    var password_certa = localStorage.getItem("password")

    if (email_certo == email && password_certa == password){
        alert ("Entrou")
    }
    else {
        alert("Senha ou email incorreto")
    }
}