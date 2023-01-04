var search = function(nums, target) {
    return buscaBinaria(nums, 0, nums.length - 1, target);
};

function buscaBinaria(nums, inicio, fim, target) {
    
    if(inicio > fim) return -1;
    var meio = Math.floor((inicio + fim) / 2);
    if(nums[meio] == target) return meio;
    if(nums[meio] >= nums[inicio]) {
        //inicio ao meio está ordenado
        if(target >= nums[inicio] && target <= nums[meio]) {
            //target está entre inicio e meio
            return buscaBinaria(nums, inicio, meio - 1, target);
        } else {
            return buscaBinaria(nums, meio + 1, fim, target)
        }
    }
    else {
        //meio ao fim está ordenado
        if(target >= nums[meio] && target <= nums[fim]) {
            //target está entre inicio e meio
            return buscaBinaria(nums, meio+1, fim, target);
        } else {
            return buscaBinaria(nums, inicio, meio-1, target)
        }
    }
}

console.log(search([5,6,7,1,2,3,4], 3));
