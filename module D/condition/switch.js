var agora = new Date()
var diaSem = agora.getDay()
//console.log(`${diaSem}`)

switch(diaSem){

    case 0:
        console.log('domingo')
        break
    
    case 1:
        console.log('Segunda-geira')
        break
    
    case 2:
        console.log('Terça-feira')
        break
    case 3:
        console.log('Quarta-feira') 
        break
    
    case 4:
        console.log('Quinta-feira')    
        break

    case 5:
        console.log('Sexta-feira')
        break
        
    case 6:
        console.log('Sabado')
        break     

    default:
        console.log('Error, valor não encontrado')
        break

}