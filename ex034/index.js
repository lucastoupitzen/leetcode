var searchRange = function(nums, target) {
    return buscaBinaria(nums, target, 0, nums.length - 1);
};

function buscaBinaria(nums, target, inicio, fim) {
    if(inicio > fim) return [-1,-1];
    let meio = Math.floor((inicio + fim) / 2);
    if(nums[meio] == target) {
        //algo especial
        var aux = meio;
        let resp = []
        while(nums[aux] == target) {
            resp[0] = aux;
            aux--;
        }
        aux = meio;
        while(nums[aux] == target) {
            resp[1] = aux;
            aux++;
        }
        return resp;
    }
    if(nums[meio] > target) return buscaBinaria(nums, target, inicio, meio - 1);
    if(nums[meio] < target) return buscaBinaria(nums, target, meio + 1, fim);
}

console.log(searchRange([5,7,7,8,8,8,10], 11));