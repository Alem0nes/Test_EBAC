
let campoA = document.getElementById("campo-a");
let campoB = document.getElementById("campo-b");
let form = document.getElementById('formulario');
const error = document.getElementById('error')

form.addEventListener('submit',(e) => {
    e.preventDefault();

const valueA = parseInt(campoA.value);
const valueB = parseInt(campoB.value);

mensagemSucesso = `O número <b>${campoA.value}</b> é maior que o número <b>${campoB.value}</b>.\n Formulário enviado com sucesso!` 
mensagemFalue = `O número <b>${campoA.value}</b> não é menor que o número <b>${campoB.value}</b>, tente novamente!`

if (valueA > valueB) {
    const containerMensagemFalue = document.querySelector('.mensagemSucesso')
    containerMensagemFalue.innerHTML = mensagemFalue
    containerMensagemFalue.style.display = 'block'

} else {
    const containerMensagemSucesso =  document.querySelector('.mensagemSucesso')
    containerMensagemSucesso.innerHTML = mensagemSucesso 
    containerMensagemSucesso.style.display = 'block'

    campoA.value = ' '
    campoB.value = ' '
}
})




