var convert = function(s, numRows) {
    
    var controle = 0
    var resultado = ""
    var numMagico = (2*numRows - 2)
    if(numMagico === 0) return s 
    while(controle < numRows){
        for(var i = 0; i < s.length; i++){
            var resto = (i % numMagico)
            if(resto === controle || resto === numMagico - controle) {
                resultado += s[i]
            }
        }
        controle++
    }

    return resultado
    
};

console.log(convert("A", 1));