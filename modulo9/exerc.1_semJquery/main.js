const input = document.getElementById("new-task")
const ul = document.getElementById("list")

function addtask(){
    if(input.value === ''){
        alert('Adicione uma tarefa')
    }else{
        let li = document.createElement('li')
        li.innerHTML = input.value
        ul.appendChild(li)
        let span = document.createElement('span')
        span.innerHTML = '\u00d7'
        li.appendChild(span)
    }
input.value=''
}

ul.addEventListener('click', function(e){
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked');
    }else if(e.target.tagName === 'SPAN'){
        e.target.classList.toggle('checked')
    }
}, false)
