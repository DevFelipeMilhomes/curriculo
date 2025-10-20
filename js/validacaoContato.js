
// variaveis relacionadas as formulário
const form = document.querySelector("#form")
const nome = document.querySelector("#idNome")
const email = document.querySelector("#idEmail")
const msg = document.querySelector("#idMsg")

//variaveis utilizadas para quandoo envio do formulário for um sucesso
const msgSucess = document.querySelector("div.msgSucess")
const sombreadoSUcess = document.querySelector("div.sombreado")
const personalizado = document.querySelector("#personalizado")

form.addEventListener("submit", (e)=>{
    e.preventDefault()

      // estas variaveis verificam se o conteudo dos campos esta vazio ou preenchido
      // retornado true ou false
      const nomeVazio = nome.value.trim() === "";
      const emailVazio = email.value.trim() === "";
      const msgVazio = msg.value.trim() === "";

      // esta função recebe como parametro um email que por meio de um regex irá verificar
      // se este email atende a todos os requisitos para ser um email válido
      // retornando true ou false
      function validarEmail(email) {

        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);

        }

        // mensagens de alert para cado problema de envio de formulário:
        if (nomeVazio && emailVazio && msgVazio) {
            alert("Por favor, preencha nome, email e mensagem.");
        } else if (nomeVazio && emailVazio) {
            alert("Por favor, preencha nome e email.");
        } else if (nomeVazio && msgVazio) {
            alert("Por favor, preencha nome e mensagem.");
        } else if (emailVazio && msgVazio) {    
            alert("Por favor, preencha email e mensagem.");
        }else if (nomeVazio) {
            console.log("click")
            alert("Por favor, preencha seu nome.");
        }else if (emailVazio) {
            alert("Por favor, preencha seu email.");
        }else if (msgVazio) {
            alert("Por favor, preencha sua mensagem.");
        } else if(!validarEmail(email.value.trim())){
            alert("Por favor, digite um email válido.")
        } else {

            // caso o formuláriio seja enviado com sucesso este codigo é executado.

            // esta linha personaliza o span com a mensagem "Obrigado Usuário", sendo a palavra "Usuário"
            // substituída pelo primeiro nome da pessoa com o metodo split.
            personalizado.textContent = "Obrigado " + nome.value.split(" ")[0]

            // o display é adicionado e removido após 5 segundos, tempo suficiente para que a mensagem de sucesso seja lida.
            sombreadoSUcess.classList.add("displayBlock")
            msgSucess.classList.add("display")

            setTimeout(()=>{
                sombreadoSUcess.classList.remove("displayBlock")
                msgSucess.classList.remove("display")
            }, 5000)

            // formulaŕio é resetado e os campos são limpados.
            form.reset()
        }
})