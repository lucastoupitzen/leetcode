var addTwoNumbers = function(l1, l2) {
    let lista1 = NodeListToArray(l1)
    let lista2 = NodeListToArray(l2)
    let num1 = ListaParaNumero(lista1)
    let num2 = ListaParaNumero(lista2)
    let soma = num1 + num2
    let listaSoma = NumeroParaLista(soma)
    let node = new NodeLista(0)
    let res = node;
    for(var i = 0; i < listaSoma.length; i++){
        let atual = new NodeLista(listaSoma[i])
        res.next = atual
        res = res.next
        
    }
    return node.next

};

function NodeListToArray(Nodelist) {
    var lista = []
    var atual = Nodelist.head
    while(Nodelist) {
        if(atual == null) {
            break
        }
        lista.push(atual.value)
        atual = atual.next
    }
    return lista
}

function ListaParaNumero(lista) {
    let numRetorno = 0
    for(var i = lista.length - 1; i >= 0; i--){
        numRetorno += lista[i]*(10**(i))
    }
    return numRetorno
}

function NumeroParaLista(num) {
    let lista = []
    let stringDoNumero = String(num)
    for(var i = 0; i < stringDoNumero.length; i++ ){
        lista[i] = stringDoNumero[stringDoNumero.length - (1 + i)]
    }
    return lista
}

// User defined class node
class NodeLista {
    // constructor
    constructor(element)
    {
        this.val = element;
        this.next = null
    }
}


const list1 = {
    head: {
        value: 2,
        next: {
            value: 4,                                           
            next: {
                value: 3,
                next: null
                }
            }
        }
    }
const list2 = {
    head: {
        value: 5,
        next: {
            value: 6,                                           
            next: {
                value: 4,
                next: null
                }
            }
        }
    }

console.log(addTwoNumbers(list1, list2))