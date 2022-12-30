const dados = {
    1: "I",
    4: "IV",
    5: "V",
    9: "IX",
    10: "X",
    40: "XL",
    50: "L",
    90: "XC",
    100: "C",
    400: "CD",
    500: "D",
    900: "CM",
    1000: "M"
}

function retornaCorrespondente(num, casaDecimal) {
    if(num == 0) return;
    if(dados[num]) return dados[num];
    else {
        var unidadeSoma = 10**casaDecimal;
        return retornaCorrespondente(num - unidadeSoma, casaDecimal) + dados[unidadeSoma];
    }
}

var intToRoman = function(num) {
    if(num == 0) return "";
    const stringNum = `${num}`;
    const casaDecimal = stringNum.length - 1;
    const val = Math.floor(num / (10**casaDecimal)) * 10**casaDecimal;
    console.log(val)
    num -= val;
    return retornaCorrespondente(val, casaDecimal) + intToRoman(num);
    
};


console.log(intToRoman(3000))