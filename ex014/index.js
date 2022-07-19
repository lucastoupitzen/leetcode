var longestCommonPrefix = function(strs) {
    const primeiraPalavra = strs[0]
    var memoria = ""
    if(strs.length == 1){
        return primeiraPalavra
    }
    for(var i = 0; i < primeiraPalavra.length; i++){
        var pedacoPalavra = primeiraPalavra.substring(0, primeiraPalavra.length - i)
        var comprimentoPedaco = pedacoPalavra.length
        for(var j = 1; j < strs.length; j++){
                if(pedacoPalavra.length > strs[j].length) {
                    memoria = ''
                    break
                }
                if(strs[j].substring(0, comprimentoPedaco) == pedacoPalavra){
                    memoria = pedacoPalavra
                } else {
                    memoria = ""
                    break
                }
            }
        if(j == strs.length) {
            break
        }
        }
        
    return memoria
}
    
console.log(longestCommonPrefix(["fav", "fad", "fen", ""]))