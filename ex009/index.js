var isPalindrome = function(x) {
    if(x < 0) return false
    let original = String(x)
    let inverso = ""
    for(var i = original.length - 1; i >= 0; i--){
        inverso += original[i]
    }
    if(inverso == original){
        return true
    } else {
        return false
    } 
};

console.log(isPalindrome(-121))