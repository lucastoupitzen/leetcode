function substringCheck(subString) {
    
    for(var i = 0; i < subString.length; i++) {
        if(subString[i] != subString[(subString.length - 1) - i]) return false;
    }
    return true;
}


var longestPalindrome = function(s) {

    let respostasPossiveis = [];
    let indexMax = 0;
    let comprimentoMax = 0;
    for(var i = 0; i < s.length; i++) {
        for(var j = s.length - 1; j >= i; j--) {
            if(s[i] == s[j]) {
                //checar a substring nos dois sentidos
                if(substringCheck(s.substring(i,j+1))) {
                    respostasPossiveis.push(s.substring(i,j+1));
                    if(comprimentoMax < j - i + 1) {
                        comprimentoMax = j - i + 1;
                        indexMax = respostasPossiveis.length - 1;
                    }

                }
            }
        }
    }

    return respostasPossiveis[indexMax];
};

console.log(longestPalindrome("babad"));