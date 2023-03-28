//substituir texto
let texto ="Estão chegando as provas"
console.log(texto.replace("provas","avaliações"))

//fixar o valor
let num = 223.455555
console.log(num.toFixed(2))

/* //caixa alert
alert("Olá, meu amigo!")

//caixa de confirmação
let teste =confirm("Você é um aluno?")
console.log(teste) 

//caixa de prompt
let texto1 =prompt("Digite seu nome")
console.log("O nome dela é:", texto1)
document.write("O nome dela é: ", texto1) */

//if
if(20 > 10){
    document.write("20 é maior!")
    document.write("<br><br>")
}

//if else
if(25 > 15){
    document.write("Número maior")
}else{
    document.write("Número menor")
}
document.write("<br><br>")

//if else declarando variavel
let numero = 10
if(numero > 10){
    document.write("O número é maior")
}else{
    document.write("O número é menor")
}
document.write("<br><br>")

//if else encadeado
//let idade = 18
/* let idade = prompt("Digite a sua idade")
if(idade <= 12){
    document.write("É UMA CRIANÇA")
}else if(idade <= 17){
    document.write("É UM ADOLESCENTE")
}else if(idade <= 30){
    document.write("É UM JOVEM ADULTO")
}else{
    document.write("É UM ADULTO EXPERIENTE")
} */

let idade = prompt("Digite a sua idade")
if(idade <= 17 && idade >= 13){
    document.write("Pode entrar na matine")
}else if(idade >= 18){
    document.write("Pode entrar na balada noturna")
}else{
    document.write("Não pode entrar")
}