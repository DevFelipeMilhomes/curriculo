
// as variáveis abaixo armazenam os valores de tags que seus conteúdos são palavras.
const p = document.querySelectorAll("p")
const h1 = document.querySelectorAll("h1")
const h2 = document.querySelectorAll("h2")
const spanDestaque = document.querySelectorAll("span.destaque")
const label = document.querySelectorAll("label")

// tags de campos gerais.
const section = document.querySelectorAll(".section")
const footer = document.querySelector("footer")

// tags de links.
const linkExterno = document.querySelectorAll("a.linkExterno")
const linkFooter = document.querySelectorAll("a.footer")
const link1ModeBlack = document.querySelector("#link1")
const link2ModeBlack = document.querySelector("#link2")
const link3ModeBlack = document.querySelector("#link3")
const link4ModeBlack = document.querySelector("#link4")
// apesar de ter o mesmo id, as quatro variaveis abaixo são do menu que é visivel apenas em dispositivos menores.
// o seletor ">" garante que as variaveis abaixo pegem apenas o link dos menus, já que 
// são filhos diretos de uma div, sendo um seletor mais especifico que os das variaveis acima.
const link1MenuBlack = document.querySelector("div > a#link1")
const link2MenuBlack = document.querySelector("div > a#link2")
const link3MenuBlack = document.querySelector("div > a#link3")
const link4MenuBlack = document.querySelector("div > a#link4")

// tags de digitação de mensagens.
const inputText = document.querySelectorAll('input[type="text"]')
const textArea = document.querySelectorAll("textarea")


// tags de imagens.
const imgSettings = document.querySelector(".imgSettings")
const menuBlack = document.querySelector("img.menu")

// tags dos botões de mode claro e escuro
// em que "iconMode" é o retangulo com os cantos arredondados em que os botões estão inseridos.
const iconMode = document.querySelector(".iconMode")
const btBlack = document.querySelector("#btBlack")
const btWhite = document.querySelector("#btWhite")
//botão da div que contem a imagem de configurações.
const btModoEscu = document.querySelector(".btModoEscu")

// tags da lista não ordenada.
const li = document.querySelectorAll("li")
const ul = document.querySelectorAll("ul")


// a variavel clicado é inicializada como false toda vez que a pagina recarrega.
// ela marca se a imagem das configurações foi clicada ou não, sendo possivel 
// identificar se as configurações estão "abertas" ou não.
let clicado = false

// o evento é acionado quando a div que contem a imagens de configurações é clicado.
btModoEscu.addEventListener("click", ()=>{
    if(clicado!=false){

        // caso a div já tenha sido clicada, este código é executando, removendo a classe 
        // "exibirMode" para que quando a div for clicada novamente ela possa ser adicionada
        // denovo.
        iconMode.classList.remove("exibirMode")

        // a classe "rotateSettings" é adiciona e removida após 1 segundo, apenas para fazer 
        // a animação da engrenagem rotacionando ao ser clicado 
        imgSettings.classList.add("rotateSettings")
        setTimeout(()=>{
            imgSettings.classList.remove("rotateSettings")
        }, 1000)

        // e por fim é adicionado a classe "esconderMode", que faz o oposto da classe "exibirMode" .
        iconMode.classList.add("esconderMode")

        // a variavel "clicado" é definida como false para marcar que o "botão de configurações" está fechado.
        clicado = false

    } else {
        //o código abaixo faz justamente o contrário do código acima.
        imgSettings.classList.add("rotateSettings")

        setTimeout(()=>{
            imgSettings.classList.remove("rotateSettings")
        }, 1000)

        iconMode.classList.add("exibirMode")

        iconMode.classList.remove("esconderMode")

        clicado = true
    }

    
})

// o evento abaixo ocorre quando o botão com a imagem de uma lua é clicado.
btBlack.addEventListener("click", ()=>{

    // o modo claro deixa de estar como marcado e é a vez do modo escuro.
    btWhite.classList.remove("marcadoSun")
    btBlack.classList.add("marcadoMoon")

    // as imagens do sol e da lua passam a ser da cor branca, por que o fundo em que elas estão fica na cor preta.
    btWhite.setAttribute("src","img/sun_white.png")
    btBlack.setAttribute("src","img/moon_white.png")

    // mudança do fundo
    iconMode.classList.add("Black")

    // mudaça da cor da imagem do simbolo de configurações  para se adequar ao tema escuro.
    imgSettings.setAttribute("src","img/settings_black.png")

    // mudaça da cor da imagem do simbolo do menu para se adequar ao tema escuro.
    menuBlack.setAttribute("src","img/menu_black.png")

    // é adicionado a classe "modeBlack para os links de navegação normais e os do menu, junto tambem da tag footer".
    link1ModeBlack.classList.add("modeBlack")
    link2ModeBlack.classList.add("modeBlack")
    link3ModeBlack.classList.add("modeBlack")
    link4ModeBlack.classList.add("modeBlack")
    footer.classList.add("modeBlack")
    link1MenuBlack.classList.add("modeBlack")
    link2MenuBlack.classList.add("modeBlack")
    link3MenuBlack.classList.add("modeBlack")
    link4MenuBlack.classList.add("modeBlack")


    // abaixo é adicionado a classe "modeBlack" as variaveis que possuem varios elementos
    // já que são coleções por eles conterem todos os elementos ta tag em questão.
    for(const elemento of p){
        elemento.classList.add("modeBlack")
    }
    for(const elemento of h1){
        elemento.classList.add("modeBlack")
    }
    for(const elemento of h2){
        elemento.classList.add("modeBlack")
    }
    for(const elemento of section){
        elemento.classList.add("modeBlack")
    }
    for(const elemento of spanDestaque){
        elemento.classList.add("modeBlack")
    }
    for(const elemento of linkExterno){
        elemento.classList.add("modeBlack")
    }
    for(const elemento of label){
        elemento.classList.add("modeBlack")
    }
    for(const elemento of inputText){
        elemento.classList.add("modeBlack")
    }
    for(const elemento of textArea){
        elemento.classList.add("modeBlack")
    }
    for(const elemento of li){
        elemento.classList.add("modeBlack")
    }
    for(const elemento of ul){
        elemento.classList.add("modeBlack")
    }
    for(const elemento of linkFooter){
        elemento.classList.add("modeBlack")
    }

    localStorage.setItem("mode", "black")
})

// basicamentes o funcionamento do código abaixo é o mesmo do acima, apenas removendo a classe "modeBlack"
// e mudando as imagens para se adequarem ao tema claro
btWhite.addEventListener("click", ()=>{

    btWhite.classList.add("marcadoSun")
    btBlack.classList.remove("marcadoMoon")

    btWhite.setAttribute("src","img/sun_black.png")
    btBlack.setAttribute("src","img/moon_black.png")

    iconMode.classList.remove("Black")

    imgSettings.setAttribute("src","img/settings_white.png")

    menuBlack.setAttribute("src","img/menu_white.png")

    link1ModeBlack.classList.remove("modeBlack")
    link2ModeBlack.classList.remove("modeBlack")
    link3ModeBlack.classList.remove("modeBlack")
    link4ModeBlack.classList.remove("modeBlack")
    footer.classList.remove("modeBlack")
    link1MenuBlack.classList.remove("modeBlack")
    link2MenuBlack.classList.remove("modeBlack")
    link3MenuBlack.classList.remove("modeBlack")
    link4MenuBlack.classList.remove("modeBlack")

    for(const elemento of p){
        elemento.classList.remove("modeBlack")
    }
    for(const elemento of h1){
        elemento.classList.remove("modeBlack")
    }
    for(const elemento of h2){
        elemento.classList.remove("modeBlack")
    }
    for(const elemento of section){
        elemento.classList.remove("modeBlack")
    }
    for(const elemento of spanDestaque){
        elemento.classList.remove("modeBlack")
    }
    for(const elemento of linkExterno){
        elemento.classList.remove("modeBlack")
    }
    for(const elemento of label){
        elemento.classList.remove("modeBlack")
    }
    for(const elemento of inputText){
        elemento.classList.remove("modeBlack")
    }
    for(const elemento of textArea){
        elemento.classList.remove("modeBlack")
    }
    for(const elemento of li){
        elemento.classList.remove("modeBlack")
    }
    for(const elemento of ul){
        elemento.classList.remove("modeBlack")
    }
    for(const elemento of linkFooter){
        elemento.classList.remove("modeBlack")
    }

    localStorage.setItem("mode", "white")
})


// o código abaixo verifica qual valor salvo no item "mode", para que mesmo se o usuário saia do site
// ou mesmo mude de página clicando em por exemplo "Formação", as configurações de que mode ele estava
// não se percam, sendo salvas pelo navegador.
if(localStorage.getItem("mode") == "black"){
    
    btWhite.classList.remove("marcadoSun")
    btBlack.classList.add("marcadoMoon")

    btWhite.setAttribute("src","img/sun_white.png")
    btBlack.setAttribute("src","img/moon_white.png")

    iconMode.classList.add("Black")

    imgSettings.setAttribute("src","img/settings_black.png")

    menuBlack.setAttribute("src","img/menu_black.png")

    link1ModeBlack.classList.add("modeBlack")
    link2ModeBlack.classList.add("modeBlack")
    link3ModeBlack.classList.add("modeBlack")
    link4ModeBlack.classList.add("modeBlack")
    footer.classList.add("modeBlack")
    link1MenuBlack.classList.add("modeBlack")
    link2MenuBlack.classList.add("modeBlack")
    link3MenuBlack.classList.add("modeBlack")
    link4MenuBlack.classList.add("modeBlack")
    

    for(const elemento of p){
        elemento.classList.add("modeBlack")
    }
    for(const elemento of h1){
        elemento.classList.add("modeBlack")
    }
    for(const elemento of h2){
        elemento.classList.add("modeBlack")
    }
    for(const elemento of section){
        elemento.classList.add("modeBlack")
    }
    for(const elemento of spanDestaque){
        elemento.classList.add("modeBlack")
    }
    for(const elemento of linkExterno){
        elemento.classList.add("modeBlack")
    }
    for(const elemento of label){
        elemento.classList.add("modeBlack")
    }
    for(const elemento of inputText){
        elemento.classList.add("modeBlack")
    }
    for(const elemento of textArea){
        elemento.classList.add("modeBlack")
    }
    for(const elemento of li){
        elemento.classList.add("modeBlack")
    }
    for(const elemento of ul){
        elemento.classList.add("modeBlack")
    }
    for(const elemento of linkFooter){
        elemento.classList.add("modeBlack")
    }
} else {

    btWhite.classList.add("marcadoSun")
    btBlack.classList.remove("marcadoMoon")

    btWhite.setAttribute("src","img/sun_black.png")
    btBlack.setAttribute("src","img/moon_black.png")

    iconMode.classList.remove("Black")

    imgSettings.setAttribute("src","img/settings_white.png")

    menuBlack.setAttribute("src","img/menu_white.png")

    link1ModeBlack.classList.remove("modeBlack")
    link2ModeBlack.classList.remove("modeBlack")
    link3ModeBlack.classList.remove("modeBlack")
    link4ModeBlack.classList.remove("modeBlack")
    footer.classList.remove("modeBlack")
    link1MenuBlack.classList.remove("modeBlack")
    link2MenuBlack.classList.remove("modeBlack")
    link3MenuBlack.classList.remove("modeBlack")
    link4MenuBlack.classList.remove("modeBlack")

    for(const elemento of p){
        elemento.classList.remove("modeBlack")
    }
    for(const elemento of h1){
        elemento.classList.remove("modeBlack")
    }
    for(const elemento of h2){
        elemento.classList.remove("modeBlack")
    }
    for(const elemento of section){
        elemento.classList.remove("modeBlack")
    }
    for(const elemento of spanDestaque){
        elemento.classList.remove("modeBlack")
    }
    for(const elemento of linkExterno){
        elemento.classList.remove("modeBlack")
    }
    for(const elemento of label){
        elemento.classList.remove("modeBlack")
    }
    for(const elemento of inputText){
        elemento.classList.remove("modeBlack")
    }
    for(const elemento of textArea){
        elemento.classList.remove("modeBlack")
    }
    for(const elemento of li){
        elemento.classList.remove("modeBlack")
    }
    for(const elemento of ul){
        elemento.classList.remove("modeBlack")
    }
    for(const elemento of linkFooter){
        elemento.classList.remove("modeBlack")
    }

    localStorage.setItem("mode", "white")
}
