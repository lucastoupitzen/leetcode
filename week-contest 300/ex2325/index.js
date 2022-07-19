var decodeMessage = function(key, message) {
    const alfabeto = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

    let novaOrdem = []

    for(var i = 0; i < key.length; i++){
        if(key[i] != " ") {
            if(!foiComputado(key[i], novaOrdem)){
                novaOrdem.push(key[i])
            }
        } 
    }

    let respostaFinal = ""
    for(var i = 0; i < message.length; i++){
        if(message[i] == " "){
            respostaFinal += message[i]
        } else {
            var index = novaOrdem.indexOf(message[i])
            respostaFinal += alfabeto[index]
        }
        
    }

    return respostaFinal

};

function foiComputado(letra, lista){
    for(var j = 0; j < lista.length; j++){
        if(lista[j] == letra){
            return true
        }
    }
    return false
}

console.log(decodeMessage("eljuxhpwnyrdgtqkviszcfmabo", "zwx hnfx lqantp mnoeius ycgk vcnjrdb"))