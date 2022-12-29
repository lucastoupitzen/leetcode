#include <stdlib.h>
#include <stdio.h>

struct ListNode {
    int val;
    struct ListNode *next;
};

struct ListNode* ultimoElemento(struct ListNode** inicio) {
    struct ListNode *p = *inicio;
    if(p) {
        while(p -> next) {
            p = p -> next;
        }
    }
    return p;
}
 
void inserirLista(struct ListNode** inicio, int chave) {
    struct ListNode* novo;
    struct ListNode* ant;
    ant = ultimoElemento(inicio);
    novo = (struct ListNode*) malloc(sizeof(struct ListNode));
    novo -> val = chave;
    novo -> next = NULL;
    if(!ant) {
        *inicio = novo;
    }
    else{
        ant -> next = novo;
    }
}

struct ListNode* addTwoNumbers(struct ListNode* l1, struct ListNode* l2){

    struct ListNode* resultado = NULL;
    while(l1 || l2) {
        if(l1 && l2) {
            int chave = l1 -> val + l2 -> val;
            // printf("%i \n", chave);
            if(chave >= 10) {
                inserirLista(&resultado, chave % 10);
                if(l1 -> next) l1 -> next -> val += 1;
                else if(l2 -> next) l2 -> next -> val += 1;
                else inserirLista(&resultado, 1);
            } else inserirLista(&resultado, chave);

            l1 = l1 -> next;
            l2 = l2 -> next;
        }
        else if(l1) {
            if(l1 -> val >= 10) {
                inserirLista(&resultado, l1 -> val % 10);
                if(l1 -> next) l1 -> next -> val += 1;
                else inserirLista(&resultado, 1);
            }
            else inserirLista(&resultado, l1 -> val);
            l1 = l1 -> next;
        }
        else if(l2) {
            if(l2 -> val >= 10) {
                inserirLista(&resultado, l2 -> val % 10);
                if(l2 -> next) l2 -> next -> val += 1;
                else inserirLista(&resultado, 1);
            }
            else inserirLista(&resultado, l2 -> val);
            l2 = l2 -> next;
        }
    }
    return resultado;

}

void printar(struct ListNode* inicio) {
    if(inicio) {
        while(inicio) {
            printf("%d - ", inicio->val);
            inicio = inicio -> next;
        }
        
    }
}

int main() {
    struct ListNode* n1 = NULL;
    struct ListNode* n2 = NULL;
    struct ListNode* res = NULL;
    // inserirLista(&n1, 1);
    // for(int i = 0; i < 29; i++) inserirLista(&n1, 0);
    // inserirLista(&n1, 0);
    // inserirLista(&n1, 1);
    // inserirLista(&n2, 5);
    // inserirLista(&n2, 6);
    // inserirLista(&n2, 4);
    inserirLista(&n1, 2);
    inserirLista(&n1, 4);
    inserirLista(&n1, 3);
    inserirLista(&n2, 5);
    inserirLista(&n2, 6);
    inserirLista(&n2, 4);
    

    
    // printar(n1);
    res = addTwoNumbers(n1,n2);
    printar(res);
}