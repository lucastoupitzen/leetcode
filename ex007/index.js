var reverse = function(x) {
    let neg = false;
    if(x < 0) {
        neg = true;
        x = -1 * x;
    }
    let xStr = `${x}`;
    let resp = "";
    for(var i = xStr.length - 1; i >= 0; i--){
        resp += xStr[i];
    }
    x = parseInt(resp, 10);
    console.log(x)
    if(x > (-2)**31 && x < (2**31) - 1){
        if(neg) return "-" + resp;
        return resp;
    }
    return 0;
    
};

reverse(321);