function solucao(beginWord, endWord, wordList) {
    if(wordList.indexOf(endWord) == -1) return 0;
    if(beginWord == endWord) return 0;
    if(beginWord.length == 1) return 2;
    let dados = {};
    let respostasPossiveis = [];
    for(var j = 0; j < wordList.length; j++) {
        let palavra = wordList[j];
        dados[palavra] = [0, false];
        for(var i = 0; i < beginWord.length; i++) {
            if(beginWord[i] == palavra[i]) dados[palavra]++;
        }
        if(dados[palavra] == beginWord.length - 1) {
            let newList = [...wordList];
            newList.splice(j,1);
            var sol = solucao(palavra, endWord, newList);
            if(sol != -1) respostasPossiveis.push(1 + sol);
        }
    }
    if(respostasPossiveis.length > 0) {
        respostasPossiveis.sort((a,b) => a - b);
        return respostasPossiveis[0];
    }    
    return -1;
}

var ladderLength = function(beginWord, endWord, wordList) {
    if(wordList.indexOf(endWord) == -1) return 0;
    if(beginWord == endWord) return 0;
    if(beginWord.length == 1) return 2;
    if(wordList.indexOf(beginWord) != -1) {
        wordList.splice(wordList.indexOf(beginWord), 1);  
    }
    var res = solucao(beginWord, endWord, wordList);
    if(res > 0) return res + 1
    return 0;
};
                    