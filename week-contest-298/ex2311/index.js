var longestSubsequence = function(s, k) {
    
    

};


function binarioParaDecimal(binario) {

    const numBinario = binario
    let numDecimal = 0

    let expoente = 0

    for(var i = numBinario.length - 1; i >= 0; i--){
        if(numBinario[i] === "1"){
            numDecimal += 2**(expoente)
        }
        expoente++
    }

    return numDecimal
}

function alteraBinario(binario) {

    let primeiro1
    for(var i = 0; i < binario.length; i++){
        primeiro1 = i
    }

    for(var i = primeiro1; i >= 0; i--){
        if(binario[i] === 0){
            binario[i + 1] = 0
            binario[i] = 1
            break
        }
    }

    return binario
}


console.log(binarioParaDecimal("001000"))