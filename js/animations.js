
// variaveis que armazenam os links de navegação do menu principal
const link1 = document.querySelector("#link1")
const link2 = document.querySelector("#link2")
const link3 = document.querySelector("#link3")
const link4 = document.querySelector("#link4")

const body = document.querySelector("body")

window.addEventListener("DOMContentLoaded",()=>{

    // toda vez que a pagina é recarregado é verificado qual o id da tag body
    // para que a classe "marcado" seja adicionado no link do body em questão
    // para que seja marcado que o site está naquela pagina

    // primeiro é removido a classe de todos os links para garantir que a classe 
    // esteja presente em apenas 1 link de navegação
    link1ModeBlack.classList.remove("marcado")
    link2ModeBlack.classList.remove("marcado")
    link3ModeBlack.classList.remove("marcado")
    link4ModeBlack.classList.remove("marcado")
    link1Menu.classList.remove("marcado")
    link2Menu.classList.remove("marcado")
    link3Menu.classList.remove("marcado")
    link4Menu.classList.remove("marcado")

    if(body.id==1){
        link1ModeBlack.classList.add("marcado")
        link1Menu.classList.add("marcado")
    }
    if(body.id==2){
        link2ModeBlack.classList.add("marcado")
        link2Menu.classList.add("marcado")
    }
    if(body.id==3){
        link3ModeBlack.classList.add("marcado")
        link3Menu.classList.add("marcado")
    }
    if(body.id==4){
        link4ModeBlack.classList.add("marcado")
        link4Menu.classList.add("marcado")
    }

    // como o conteúdo da primeira pagina: "Sobre mim" é um tanto extenso opitei por 
    // diminuir o numero de linhas do grid nas paginas que não seja a primeira,
    // pois se isso não fosse feito, o footer ficaria muito distante do main
    // nas demais paginas.
    if(body.id != 1){
        body.classList.add("gridRows")
    }
})

// variaveis que aramazenam o menu e a div que o contem
const menu = document.querySelector("div.menuResponsive")
const btMenu = document.querySelector("div.menu")

// links do menu de navegação para dispositivos menores.
const link1Menu = document.querySelector("div > a#link1")
const link2Menu = document.querySelector("div > a#link2")
const link3Menu = document.querySelector("div > a#link3")
const link4Menu = document.querySelector("div > a#link4")

// o item "menu" é utilizado para verificar se o menu esta aberto ou fechado
// sendo 0 fechado e 1 aberto
localStorage.setItem("menu", 0)


btMenu.addEventListener("click", ()=>{
    // caso o menu esteja fechado é adicionado a classe "abrirMenu",
    // que contem uma animação para cada link.
    if(localStorage.getItem("menu")==0){

        link1Menu.classList.add("abrirMenu")
        link2Menu.classList.add("abrirMenu")
        link3Menu.classList.add("abrirMenu")
        link4Menu.classList.add("abrirMenu")

        localStorage.setItem("menu", 1)

    } else {

        link1Menu.classList.add("fecharMenu")
        link2Menu.classList.add("fecharMenu")
        link3Menu.classList.add("fecharMenu")
        link4Menu.classList.add("fecharMenu")

        localStorage.setItem("menu", 0)
        
        // após 0.4 segundos as classe abrir e fechar menu são removidas
        // para que seja possivel abrir e fechalas novamenete
        setTimeout(()=>{
        link1Menu.classList.remove("fecharMenu")
        link2Menu.classList.remove("fecharMenu")
        link3Menu.classList.remove("fecharMenu")
        link4Menu.classList.remove("fecharMenu")

        link1Menu.classList.remove("abrirMenu")
        link2Menu.classList.remove("abrirMenu")
        link3Menu.classList.remove("abrirMenu")
        link4Menu.classList.remove("abrirMenu")
        }, 400)
    }

    
})
