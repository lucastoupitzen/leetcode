#include <stdio.h>

void corrigeOrdem(int* nums, int indice, int numsSize, int* k) {
    for(int i = indice; i < numsSize - 1; i++){
        nums[i] = nums[i + 1];
    }
    *k = *k - 1;
}

int removeDuplicates(int* nums, int numsSize){
    int atual = nums[0];
    int k = numsSize;
    for(int i = 1; i < numsSize; i++){
        if(nums[i] == atual) {
            corrigeOrdem(nums, i, numsSize, &k);
            numsSize--;
            i--;
        }
        atual = nums[i];
    }

    return(k);

}



int main() {
    int nums[] = {0,0,1,1,1,2,2,3,3,4};
    int resposta = removeDuplicates(nums, 10);
    for(int i = 0; i < 10; i++){
        printf("%i ", nums[i]);
        
    }
    printf("\n%i ", resposta);
}