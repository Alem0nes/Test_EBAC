
let campoA = document.getElementById("campo-a");
let campoB = document.getElementById("campo-b");
let form = document.getElementById('formulario');
const error = document.getElementById('error')

form.addEventListener('submit',(e) => {
    e.preventDefault();

    let messages = []

const valueA = parseInt(campoA.value);
const valueB = parseInt(campoB.value);

if (valueA > valueB) {
    messages.push('numero incorreto')
} else {
    messages.push('numero correto')
}

    if (messages.length > 0) {
        error.innerText = messages.join(', ');
    }
})




