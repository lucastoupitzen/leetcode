var romanToInt = function(s) {
    let numRomano = s
    let valoresCaracteres = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000,
    }
    var numOutput = 0
    for(var i = numRomano.length - 1; i >= 0; i--){
        if(i == 0) {
            if(numRomano.length == 1){
                numOutput += valoresCaracteres[numRomano[0]]
            } else if (valoresCaracteres[numRomano[0]] >= valoresCaracteres[numRomano[1]]){
                numOutput += valoresCaracteres[numRomano[0]]
            }
        }
        else if(valoresCaracteres[numRomano[i - 1]] < valoresCaracteres[numRomano[i]]){
            numOutput += valoresCaracteres[numRomano[i]] - valoresCaracteres[numRomano[i - 1]]
            i--
        } else {
            numOutput += valoresCaracteres[numRomano[i]]
        }
    }
    return numOutput
    
};

console.log(romanToInt("D"))