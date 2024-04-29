/*const input = document.getElementById("new-task")
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
*/

$(document).ready(function(){

    $('#new-task').change(function(){
        let input = $(this).val() 
        $('ul').append('<li>' + input + '<i class="fas fa-check"></i> <i class="fas fa-trash"></i> </li>')
        $(this).val('')
    })

    $('ul').on('click','.fa-trash',function(){
        $(this).parent('li').fadeOut(400);
    })    
    
    $('ul').on('click','.fa-check',function(){
        $(this).parent('li').toggleClass('checked')
    })
})