function merge(vetor, vetorAux, inicio, meio, fim) {

    let posMeio, inicioVetor;
    posMeio = meio + 1;
    inicioVetor = inicio;
    
    for(var i = inicio; i <= fim; i++) {
        vetorAux[i] = vetor[i];
    }

    i = inicio;
    while(inicioVetor <= meio && posMeio <= fim) {
        if(vetorAux[inicioVetor] <= vetorAux[posMeio]) vetor[i++] = vetorAux[inicioVetor++];
        else vetor[i++] = vetorAux[posMeio++];
    }

    while(inicioVetor <= meio) vetor[i++] = vetorAux[inicioVetor++];
    while(posMeio <= fim) vetor[i++] = vetorAux[posMeio++];

    return vetor;

}


function sort(vetor, vetorAux, inicio, fim) {

    if(inicio >= fim) return;
    var meio = Math.floor((inicio + fim)/2);

    sort(vetor, vetorAux, inicio, meio);
    sort(vetor, vetorAux, meio + 1, fim);

    if(vetor[meio] <= vetor[meio + 1]) return;

    return merge(vetor, vetorAux, inicio, meio, fim);

}

function mergeSort(vetor) {
    let vetorAux = [];
    return sort(vetor, vetorAux, 0, vetor.length - 1);
}

console.log(mergeSort([3,4,7,1]));