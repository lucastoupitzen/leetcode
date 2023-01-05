var maxArea = function(height) {
    let area = 0;
    let maxI = 0;
    for(var i = 0; i < height.length; i++) {
        if(height[i] <= maxI) continue;
        maxI = height[i];
        let maxJ = 0;
        for(var j = height.length - 1; j > i; j--) {
            if(height[j] <= maxJ) continue;
            let altura = Math.min(height[i], height[j]);
            let comprimento = j - i;
            area = Math.max(area, comprimento * altura);
            maxJ = height[j];
        }
    }
    return area;
};

var maxArea2 = function(height) {
    var left = 0;
    var right = height.length - 1;
    var area = 0;
    while(left < right) {
        let altura = Math.min(height[left], height[right]);
        let comprimento = right - left;
        area = Math.max(area, comprimento * altura);
        if(height[left] < height[right]) left++;
        else right--;
    }

    return area;
}
console.time("timer 1");
maxArea2([10,9,8,7,6,5,4,3,2,1]);
console.timeEnd("timer 1");