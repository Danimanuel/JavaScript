function verificar() {
    var data = new Date()
    var ano =  data.getFullYear()
    var fano = document.getElementById('tano')
    var res = document.getElementById('res')

    if(fano.value.length == 0 || Number(fano.value) > ano){
        alert('[ERRO] Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.style.width = '250px'
        img.style.height = '300px'
        img.style.borderRadius = '100%'
        img.setAttribute('id', 'foto')

        if(fsex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade < 10){
                // criança
                img.setAttribute('src', 'img/bebe-homen.jpg')
            }else if (idade < 21){
                // jovem
                img.setAttribute('src', 'img/adolescente-homen.jpg')
            } else if (idade < 50){
                // Adulto 
                img.setAttribute('src', 'img/adulto-homem.jpg')
            }else {
                // Idoso
                img.setAttribute('src', 'img/idoso-homen.jpg')
            }
        }else if (fsex[1].checked){
            genero = 'Mulher'
            if(idade >= 0 && idade < 10){
                // criança
                img.setAttribute('src', 'img/bebe-mulher.jpg')
            }else if (idade < 21){
                // jovem
                img.setAttribute('src', 'img/jovem-mulher.jpg')
            } else if (idade < 50){
                // Adulto 
                img.setAttribute('src', 'img/adulto-mulher.jpg')
            }else {
                // Idoso
                img.setAttribute('src', 'img/idosa-mulher.jpg')
            }
        }
        res.style.textAlign ='center'
        res.innerHTML = `Detetamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }

} 