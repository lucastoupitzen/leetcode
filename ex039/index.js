var combinationSum = function(candidates, target) {
    let resultado = []
    let candidatos = candidates.sort((a,b) => a - b)
    for(var i = 0; i < candidatos.length; i++){
        let lista = []
        let controle = candidatos[i]
        let targetMutavel = target - candidatos[i]
        lista.push(candidatos[i])
        var inicial = 0
        for(var j = 0; j < candidatos.length; j++){
            if(ehDivisivel(targetMutavel, candidatos[j])){
                let multiplo = targetMutavel/candidatos[j]
                if(multiplo >= 0){
                    for(var t = 0; t < multiplo; t++){
                        lista.push(candidatos[j])
                    }
                    resultado.push(lista)
                    lista = []
                    lista.push(candidatos[i])
                    controle = candidatos[i]
                    targetMutavel = target - candidatos[i]
                }

            }
            controle += candidatos[j]
            if(controle < target){
                lista.push(candidatos[j])
                targetMutavel -= candidatos[j]
            } else if (controle > target){
                lista = []
                lista.push(candidatos[i])
                targetMutavel = target - candidatos[i]
                controle = candidatos[i]
                inicial++
                j = inicial - 1
            } else {
                lista.push(candidatos[j])
                resultado.push(lista)
                inicial = 0
            }
        }
    }
    // ordena as listas dentro do resultado
    for(var k = 0; k < resultado.length; k++){
        resultado[k].sort((a,b) => a - b)
        for(var p = 0; p < resultado.length; p++){
            if(resultado[k].toString() == resultado[p].toString() && p != k){
                resultado.splice(p, 1)
            }
        }
    }
    return resultado

};

function ehDivisivel(target, num){
    if(target % num === 0){
        return true
    }
}

console.log(combinationSum([1,2], 10))