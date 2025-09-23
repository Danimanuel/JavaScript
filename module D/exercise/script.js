function carregar () {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var backg = document.getElementById('bg')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if( hora > 0 && hora < 12  ){
        //Bom Dia
        img.src = 'img/manha.jpg'
        backg.style.backgroundColor = "#C69C20" 
       } else if(hora >= 12 && hora <= 18){
        //Boa Tarde
        img.src = 'img/tarde.jpg'
        backg.style.backgroundColor = "#72360E"
    } else {
        // Boa Noite
        img.src = 'img/noite.jpg'
        backg.style.backgroundColor = "#131F76"
    }   
}

