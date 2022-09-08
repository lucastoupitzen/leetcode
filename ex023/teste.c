#include <stdio.h>
#include <stdlib.h>

void troca(int *a, int *b) {

    printf("O valor de a é: %i\n", *a);
    printf("O valor de b é: %i\n", *b);

    int auxiliar = *a;
    *a = *b;
    *b = auxiliar;

}


int main () {
    int a = 0;
    int b = 89;
    troca(&a, &b);
    printf("O valor de a é: %i\n", a);
    printf("O valor de b é: %i\n", b);
    
}