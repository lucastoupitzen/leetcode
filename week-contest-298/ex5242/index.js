var greatestLetter = function(s) {
    let original = s
    let minusculaTotal = s.toLowerCase()
    let listaCandidatos = []
    for(var i = 0; i < original.length; i++){     
        for(var t = i + 1; t < original.length; t++){
            if(original[t] == original[i].toUpperCase() && original[t] != original[i]){
                listaCandidatos.push(original[t])
            }
        }
    }
    let maior = ""
    for(var j = 0; j < listaCandidatos.length; j++){
        if(listaCandidatos[j] > maior){
            maior = listaCandidatos[j]
        }
    }
    return maior
};

console.log(greatestLetter("arRAzFif"))