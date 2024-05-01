$(document).ready(function(){

    $('#tel').mask('(00)00000-0000')
    $('#cpf').mask('000.000.000-00')
    $('#rg').mask('00.000.000-A')
    $('#cep').mask('00000-000')

    $('form').validate({
        rules:{
            nome:{
                required:true
            },
            email:{
                required:true,
                email:true
            },
            cpf:{
                required:true
            },
            rg:{
                required:true
            },
            cep:{
                required:true
            }
        },
        messages: {
            nome: 'Nome em branco',
            email: 'E-mail em branco',
            cpf: 'CPF inválido',
            rg:'RG inválido',
            cep:'CEP inválido'
        },
        submitHandler:function(form){
            console.log(form)
        },
        invalidHandler:function(evento, validador){
            let camposIncorretos=validador.numberOfInvalids();
            if (camposIncorretos){
                alert(`Corrija ${camposIncorretos} campos incorretos`)
            }
        }
    })
})