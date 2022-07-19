var isValid = function(s) {
    let registro = {
        "(": ")",
        "[": "]",
        "{": "}"
    }
    let fila = []
    for(var i = 0; i < s.length; i++){
        if(s[i] == registro[fila[fila.length - 1]]){
            fila.splice(fila.length - 1, 1)
        } else {
            fila.push(s[i])
        }
    }
    if(fila.length != 0){
        return false
    } else {
        return true
    }
};

console.log(isValid("({(}))"))