function possibleMutations(startGene, bank) {
    let resp = [];
    let mutations = ["A", "G", "C", "T"];
    let gene = startGene;
    for(var i = 0; i < startGene.length; i++) {
        startGene = gene;
        for(var j = 0; j < mutations.length; j++) {
            startGene = startGene.substring(0, i) + mutations[j] + startGene.substring(i + 1);
            if(startGene == gene) continue;
            if(bank.indexOf(startGene) != -1) resp.push(startGene);
        }
    }
    return resp;
}

var minMutation = function(startGene, endGene, bank) {
    if(bank.length == 0) return -1;
    let fila = [startGene];
    let resp = 0;
    while(fila.length > 0) {
        resp++;
        var control = fila.length;
        while(control--) {
            let gene = fila.shift();
            let possibleTransf = possibleMutations(gene, bank);
            for(var i = 0; i < possibleTransf.length; i++) {
                if(possibleTransf[i] == endGene) return resp;
                fila.push(possibleTransf[i]);
                bank.splice(bank.indexOf(possibleTransf[i]), 1);
            }
        }
    } 
    return -1;
};

console.log(minMutation("AAAAAAAA","CCCCCCCC", ["AAAAAAAA","AAAAAAAC","AAAAAACC","AAAAACCC","AAAACCCC","AACACCCC","ACCACCCC","ACCCCCCC","CCCCCCCA","CCCCCCCC"]));