var lengthOfLongestSubstring = function(s) {
    let lista = []
    for(var i = 0; i < s.length; i++){
        let memoria = ''
        memoria += s[i]
        for(var j = i + 1; j < s.length; j++){
            if(confere(s[j], memoria)){
                memoria += s[j]
                if(j == s.length - 1){
                    //para a analise
                    i = s.length
                }
            } else {
                break
            }
        }
        lista.push(memoria)
    }
    
    let comprimento = 0
    for(var j = 0; j < lista.length; j++){
        if(lista[j].length > comprimento){
            comprimento = lista[j].length
        }
    }
    return comprimento
};

function confere(letra, palavra){
    for(var i = 0; i < palavra.length; i++){
        if(palavra[i] === letra){
            return false
        }
    }
    return true
}

console.log(lengthOfLongestSubstring("oklopk"))