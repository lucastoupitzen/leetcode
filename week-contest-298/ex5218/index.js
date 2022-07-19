var minimumNumbers = function(num, k) {
    let listaFinalK = []
    let candidatos = k

    while(candidatos <= num){
        listaFinalK.push(candidatos)
        candidatos += 10
    }
    let resultado = combinationSum(listaFinalK, num)
    if(resultado.length === 0) return -1
    console.log(resultado[0])
    let menorComprimento = resultado[0].length
    for(var z = 0; z < resultado.length; z++){
        if(resultado[z].length < menorComprimento){
            menorComprimento = resultado[z].length
        }
    }
    return menorComprimento
};

var combinationSum = function(candidates, target) {

    let resultado = []
    candidates.sort((a,b) => a-b)

    const combiantionTree = function(i, candidates, target, lista){

        if(target < 0) return
        if(target === 0){
            resultado.push(lista.slice())
            return
        }

        for(var j = i; j < candidates.length; j++){
            if(candidates[j] != 0){
                lista.push(candidates[j])
                combiantionTree(j, candidates, target - candidates[j], lista)
                lista.pop()
            } else continue

        }
    }

    combiantionTree(0, candidates, target, [])
    return resultado
}


console.log(minimumNumbers(2100, 0))