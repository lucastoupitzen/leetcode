#include <stdio.h>
#include <string.h>
#include <math.h>
#include <stdlib.h>


int devolveIntCorrespondente(char num){

    char algarismosStr[10] = {'0','1','2','3','4','5','6','7','8','9'};
    int algarismosInt[10] = {0,1,2,3,4,5,6,7,8,9};

    for(int i = 0; i < 10; i++){
        if(algarismosStr[i] == num){
            return(algarismosInt[i]);
        }
    }
    
    return(-1);
}

int multiply(char* num1, char * num2){


    int tamanhoNum1 = strlen(num1);
    int tamanhoNum2 = strlen(num2);

    int num1ToInt[tamanhoNum1];
    int num2ToInt[tamanhoNum2]; 

    //transforma num1 em um array de inteiros
    for(int j = 0; j < tamanhoNum1; j++){
        num1ToInt[j] = devolveIntCorrespondente(num1[j]);
    }
    //transforma num2 em um array de inteiros
    for(int j = 0; j < tamanhoNum2; j++){
        num2ToInt[j] = devolveIntCorrespondente(num2[j]);
    }

    int resultado = 0;
    int expoenteBase10 = 0;
    for(int i = tamanhoNum2 - 1; i >= 0; i--) {
        for(int j = tamanhoNum1 - 1; j >= 0; j--){
            resultado += num1ToInt[j] * num2ToInt[i] * pow(10, expoenteBase10);
            expoenteBase10++;
        }
        expoenteBase10 = (tamanhoNum2 - 1) - i;
    }

    return(resultado);
}

int main() {

    char num1[] = "8";
    char num2[] = "24";

    printf("%i\n", multiply(num1, num2));

}