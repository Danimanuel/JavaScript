function contador() {
var inicio = document.getElementById('inicio')
var fim = document.getElementById('fim')
var salto = document.getElementById('salto')
var res = document.getElementById('res')

var end = Number(fim.value)
var jump = Number(salto.value)

if(inicio.value === "" || inicio.value === null) {

alert('[ERRO] Campo não preenchido')

}else if( fim.value === "" || fim.value === null){

        alert("[ERRO] Preencha todos os Campos")
} else if(salto.value === "" || salto.value === null) {
    alert("[ERRO] Campo não preenchido correctamente")
}else {

  for(var i = Number(inicio.value); i <= end; i += jump ) {
    res.innerHTML += `  ${i} &nbsp;`

}
}
    

  




}