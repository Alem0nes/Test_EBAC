alert = ("Para saber a litragem do seu tanque, digite os valores pedidos em centimetros")
var alt = Number.parseFloat(prompt("altura em cm"))
var larg = Number.parseFloat(prompt("largura em cm"))
var prof = Number.parseFloat(prompt("profundidade em cm"))
var litros = (alt*larg*prof)/1000
alert = litros + (" litros")

