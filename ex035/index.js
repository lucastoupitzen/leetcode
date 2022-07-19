var searchInsert = function(nums, target) {
    for(var i = 0; i < nums.length; i++){
        if(nums[i] == target){
            return i
        }
        if(nums[i] > target){
            return i
        }
    }   
    return nums.length
}

lista = [1,2,3,4,5,7]

console.log(searchInsert(lista, 8))