let nome = window.document.getElementById("nome") //ACESSANDO O ELEMENTO PELO  ID
let email = document.querySelector("#email")
let assunto = document.querySelector("#assunto")

nome.style.width = "100%"
email.style.width = "100%"

function validaNome(){
    let txtNome = document.querySelector("#txtNome")
    if(nome.value.length < 3){
        txtNome.innerHTML = "Nome Inválido"
        txtNome.style.color = "red"
    }else{
        txtNome.innerHTML = "Nome Valido"
        txtNome.style.color = "blue"}
}

function validaEmail(){
    let txt = document.querySelector("#txtEmail")
    if(email.value.indexOf("@")== -1 || email.value.indexOf(".")== -1){
        txtEmail.innerHTML = "E-mail Inválido"
        txtEmail.style.color = "Red"
    }else{
        txtEmail.innerHTML = "E-mail valido"
        txtEmail.style.color = "Blue"
    }


}