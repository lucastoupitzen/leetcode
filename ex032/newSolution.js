/*
pilha = [-1]
max = 6

*/

var longestValidParentheses = function(s) {
    
    let pilha = [-1];
    let max = 0;

    for(var i = 0; i < s.length; i++) {
        if(s[i] == "(") pilha.push(i);
        else {
            pilha.pop();
            if(pilha.length == 0) pilha.push(i);
            else {
                let len = i - pilha[pilha.length - 1];
                max = Math.max(max, len);
            }
        }
    }

    return max;
}

console.log(longestValidParentheses("()(())"));