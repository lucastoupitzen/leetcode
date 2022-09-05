#include <stdio.h>
#include <stdbool.h>

double findMedianSortedArrays(int* nums1, int nums1Size, int* nums2, int nums2Size){

    bool isPar;
    int posMeio = (nums1Size + nums2Size) / 2;
    if((nums1Size + nums2Size) % 2 == 0){
            isPar = true;
    } else {
        isPar = false;
    }

    int contador = 0;
    double anterior, atual;
    int i = 0;
    int j = 0;
    while( i < nums1Size || j < nums2Size) {

        if(i < nums1Size && j < nums2Size){
            if(nums1[i] < nums2[j]){
                atual = nums1[i];
                i++;
            }
            else {
                atual = nums2[j];
                j++;
            }
        } else if( j < nums2Size) {
            atual = nums2[j];
            j++;
        } else {
            atual = nums1[i];
            i++;
        }
        if(isPar && contador == posMeio) {
            return((anterior + atual) / 2);
        } 
        if(!isPar && contador == posMeio) {
            return(atual);
        }
        contador++;
        anterior = atual;
    }

    return(0);


}

int main () {
    int array1[] = {1,7};
    int array2[] = {6,8};
    printf("Resultado %f\n", findMedianSortedArrays(array1, 2, array2, 2));

}