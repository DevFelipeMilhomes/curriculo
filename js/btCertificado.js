
const btCertify = document.querySelector(".btCertify")
const Certify = document.querySelector("aside.Certify")
const sombreado = document.querySelector("div.sombreado")
const btVoltar = document.querySelector("button.btVoltar")

// ao ser clicado os botões "btCertify" e "btVoltar" é adiconado e removido a classe "displayBlock"
// o que faz com que o display da tag aside que contem a classe "Certify" e a div que contem 
// a classe "sombreado", mude entre display block e none, o que faz com que o certificado apareça e desapareça.

btCertify.addEventListener("click", ()=>{

    Certify.classList.add("displayBlock")
    sombreado.classList.add("displayBlock")
})

btVoltar.addEventListener("click", ()=>{

    Certify.classList.remove("displayBlock")
    sombreado.classList.remove("displayBlock")

})