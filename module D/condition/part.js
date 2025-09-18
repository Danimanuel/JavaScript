var idade = 67
console.log(`voçê tem ${idade} anos`)
if (idade < 16){
    console.log('Não pode votar')
} else if(idade < 18 || idade >= 67){
        console.log('voto opicional')
} else  {
    console.log('Voto obrigatório')
}