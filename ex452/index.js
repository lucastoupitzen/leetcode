function merge(vetor, vetorAux, inicio, meio, fim) {

    let posMeio, inicioVetor;
    posMeio = meio + 1;
    inicioVetor = inicio;
    
    for(var i = inicio; i <= fim; i++) {
        vetorAux[i] = vetor[i];
    }

    i = inicio;
    while(inicioVetor <= meio && posMeio <= fim) {
        if(vetorAux[inicioVetor][1] <= vetorAux[posMeio][1]) vetor[i++] = vetorAux[inicioVetor++];
        else vetor[i++] = vetorAux[posMeio++];
    }

    while(inicioVetor <= meio) vetor[i++] = vetorAux[inicioVetor++];
    while(posMeio <= fim) vetor[i++] = vetorAux[posMeio++];

    return vetor;

}


function sort(vetor, vetorAux, inicio, fim) {

    if(inicio >= fim) return vetor;
    var meio = Math.floor((inicio + fim)/2);

    sort(vetor, vetorAux, inicio, meio);
    sort(vetor, vetorAux, meio + 1, fim);

    if(vetor[meio][1] <= vetor[meio + 1][1]) return vetor;

    return merge(vetor, vetorAux, inicio, meio, fim);

}

function mergeSort(vetor) {
    let vetorAux = [];
    return sort(vetor, vetorAux, 0, vetor.length - 1);
}

function verifyInOrOut(ballon1, ballon2) {
    if(ballon2[0] >= ballon1[0] && ballon2[0] <= ballon1[1]) return true;
    if(ballon2[1] >= ballon1[0] && ballon2[1] <= ballon1[1]) return true;
    return false;
}

var findMinArrowShots = function(points) {
    points = mergeSort(points);
    console.log(points);
    for(var i = 0; i < points.length; i++) {
        for(var j = points.length - 1; j > i; j--) {
            console.log(`${points[i]} <-> ${points[j]}`)
            if(verifyInOrOut(points[i], points[j]) || verifyInOrOut(points[j], points[i])) {
                points[i] = [Math.max(points[i][0], points[j][0]), Math.min(points[i][1], points[j][1])];
                points.splice(j,1);
                console.log(points);
            }
        }
    }
    
    return points.length;
};


console.log(findMinArrowShots([[1,2],[2,3],[3,4],[4,5]]));
