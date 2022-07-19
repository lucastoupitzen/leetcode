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
            lista.push(candidates[j])
            combiantionTree(j, candidates, target - candidates[j], lista)
            lista.pop()
        }
    }

    combiantionTree(0, candidates, target, [])
    return resultado
}

console.log(combinationSum([2,3,5], 10))