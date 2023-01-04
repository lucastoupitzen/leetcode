var longestValidParentheses = function(s) {

    var controle = false; // "(" true -> ")"  
    var respostasPossiveis = [0];
    var contador = 0;
    for(var i = 0; i < s.length; i++) {
        if(s[i] == "(" && !controle) {
            contador++;
            controle = !controle;
            continue;
        }
        if(s[i] == ")" && controle) {
            contador++;
            controle = !controle;
            continue;
        }
        if(controle) {
            contador = 0;
            i--;
            controle = !controle;
            continue;
        }
        if(!controle) {
            respostasPossiveis.push(contador);
            contador = 0;
            controle = !controle;
        }
    }
    if(contador % 2 != 0) contador--;
    respostasPossiveis.push(contador);

    respostasPossiveis.sort((a,b) => a - b);
    return respostasPossiveis.pop();
};

console.log(longestValidParentheses("())()("));