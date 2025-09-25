function calcular() {

var num1 = document.getElementById('n1')
var num2 = document.getElementById('n2')
var res = document.getElementById('res')

if(num1.value === "" || num1.value === null){
    alert('[ERRO] valor indefinido, preencha para poder continuar')
} else if(num2.value === "" || num2.value === null ){
    alert('[ERRO] Preencha todos os campos para poder continuar')

} else {
    var mu 
    var fim = Number(num2.value)
    for(var i = Number(num1.value); i <= 12 ; i++){
        mu = i * fim 
        res.innerHTML += `${i} x ${fim} = ${mu} <br>`
    }  


}




}