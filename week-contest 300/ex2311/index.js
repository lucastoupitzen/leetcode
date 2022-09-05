var longestSubsequence = function(s, k) {

    var expoente = 0
    var contador = 0
    var controle = 0
    var despreza1 = false
    for(var i = s.length; i >= 1; i--){
        if(s[i - 1] == "1" && despreza1 == false){
            controle += 2**expoente
            if(controle > k) {
                despreza1 = true
            } else {
                contador++
            }
            
        } else if (s[i - 1] == "0") {
            contador++
        }
        expoente++
    }

    return contador
    
};

console.log(longestSubsequence("1001010", 5))