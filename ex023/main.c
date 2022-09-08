/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     struct ListNode *next;
 * };
 */

#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

typedef struct  estr{
     int val;
     struct estr* next;
} ListNode;

ListNode* buscar(ListNode* pInicial, int valorBuscado, ListNode ** ant) {
    
    ListNode* noAtual = pInicial;
    *ant = NULL;
    while(noAtual != NULL) {
        if(noAtual -> val >= valorBuscado) {
            return(NULL);
        } else {
            *ant = noAtual;
            noAtual = noAtual -> next;
        }
    }
    return(NULL);

}

bool inserir(ListNode** pInicial, int valorInserido) {

    ListNode* anterior;
    ListNode* novoNo;
    // a função dessa etapa é atualizar o valor de anterior
    novoNo = buscar(*pInicial, valorInserido, &anterior);
    //criação do novo nó
    novoNo = (ListNode*) malloc(sizeof(ListNode));
    if(!*pInicial) {
        //primeiro item da lista
        *pInicial = novoNo;
        novoNo -> val = valorInserido;
        novoNo -> next = NULL;
        return(true);
    }
    if(!anterior) {
        //inserido na primeira posição
        novoNo -> val = valorInserido;
        novoNo -> next = *pInicial;
        *pInicial = novoNo;
        return(true);
    }
    //meio ou final da lista
    novoNo -> val = valorInserido;
    novoNo -> next = anterior -> next;
    anterior -> next = novoNo;
    return(true);

}


struct ListNode* mergeKLists(struct ListNode** lists, int listsSize){

    ListNode* resp = NULL;

    int i;
    for(i = 0; i < listsSize; i++) {
        ListNode* atual = lists[i];
        while(atual)
        {
            inserir(&resp, atual -> val);
            atual = atual -> next;
        }
        
    }

    return(resp);


}

int main() {



}