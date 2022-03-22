// Declara variáveis com os campos do formulário
const campoEmail = document.querySelector('#campo-email')
const campoMensagem = document.querySelector('#campo-mensagem')
const botaoEnviar = document.querySelector('.conteudo-botao')

const regexEmail = /^([a-zA-Z0-9.]{1,32})@([a-z0-9]{1,16})\.com$/

//função que é executada ao clicar no botão
function aoClicarBotao(){
    
    //Verifica se campo de mensagem está vazio
    if (campoMensagem.value === "") {
        alert('Erro! Campo de mensagem vazio. Escreva uma mensagem.')

        return
    }

    //Verifica se o email é válido
    const resultado = regexEmail.test(campoEmail.value)

    
    if (resultado === true) {
        const usuario = campoEmail.value.split('@')[0]
        
        alert('Obrigado pelo contato, ' + usuario + '!')
    } else {
        alert('Email digitado não é válido. Insira outro.')
    }
}

//Adicionando escutador de evento 'click' no botão enviar.
botaoEnviar.addEventListener('click', aoClicarBotao)
