var isValid = function(s) {
    let parentesesCorreto = true
    let colchetesCorreto = true
    let chavesCorreto = true
    let apareceuParenteses = false
    let apareceuColchetes = false
    let apareceuChaves = false
    let ordem = []
    for(var i =0; i < s.length; i++){
        if(s[i] == "("){
            ordem.push(s[i])
            apareceuParenteses = true
            parentesesCorreto = false
            let contaCasas = 0
            for(var j = i + 1; j < s.length; j++){
                if(s[j] == ")"){
                    if(contaCasas % 2 == 0){
                        parentesesCorreto = true
                    }
                } else {
                    contaCasas++
                }
            }
            if(parentesesCorreto == false){
                return false
            }
        } else if(s[i] == ")") {
            if(apareceuParenteses == false && ordem[ordem.length - 1] != "("){
                return false
            } else {
                ordem.splice(ordem.length - 1, 1)
            }
        }
        if(s[i] == "["){
            ordem.push(s[i])
            apareceuColchetes = true
            colchetesCorreto = false
            let contaCasas = 0
            for(var j = i + 1; j < s.length; j++){
                if(s[j] == "]"){
                    if(contaCasas % 2 == 0){
                        colchetesCorreto = true
                    }
                } else {
                    contaCasas++
                }
            }
            if(colchetesCorreto == false){
                return false
            } else {
                ordem.splice(ordem.length - 1, 1)
            }
        } else if(s[i] == "]" && ordem[ordem.length - 1] != "[") {
            if(apareceuColchetes == false){
                return false
            } else {
                ordem.splice(ordem.length - 1, 1)
            }
        }
        if(s[i] == "{"){
            ordem.push(s[i])
            apareceuChaves = true
            chavesCorreto = false
            let contaCasas = 0
            for(var j = i + 1; j < s.length; j++){
                if(s[j] == "}"){
                    if(contaCasas % 2 == 0){
                        chavesCorreto = true
                    }
                } else {
                    contaCasas++
                }
            }
            if(chavesCorreto == false){
                return false
            }
        }else if(s[i] == "}") {
            if(apareceuChaves == false && ordem[ordem.length - 1] != "{"){
                return false
            } else {
                ordem.splice(ordem.length - 1, 1)
            }
        }
        

    }
    if(parentesesCorreto === true && colchetesCorreto === true && chavesCorreto === true){
        return true
    } else {
        return false
    }
};

console.log(isValid("[[]]"))