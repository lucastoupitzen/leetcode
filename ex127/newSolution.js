function possibleConections(word, wordList) {
    let output = [];
    for(var i = 0; i < wordList.length; i++) {
        var sameLetters = 0;
        for(var j = 0; j < word.length; j++) {
            if(word[j] == wordList[i][j]) sameLetters++;
        }
        if(sameLetters >= word.length - 1) output.push(wordList[i]);
    }
    return output;
}

var ladderLength = function(beginWord, endWord, wordList) {
    const fila = [beginWord];
    let dist = 0;
    while(fila.length > 0) {
        dist++;
        let controlFila = fila.length;
        while(controlFila--) {
            let word = fila.shift();
            let connections = possibleConections(word, wordList);
            for(var i = 0; i < connections.length; i++) {
                if(connections[i] == endWord) {
                    return dist + 1;
                }
                fila.push(connections[i]);
                wordList.splice(wordList.indexOf(connections[i]), 1);
            }
        }
    }
    return 0;
};

console.log(ladderLength("hit", "cog", ["hot","dot","dog","lot","log","cog"]));