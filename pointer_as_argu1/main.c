#include <stdio.h>
#include <stdlib.h>

int main()
{
    int value =10;
    int *int_ptr = &value;
    some_function(int_ptr);
    printf("%d",value);

        void some_function(int *some_ptr){
        some_ptr = (int*) malloc(sizeof(int));
        *some_ptr = 1000;
    }
    //printf("Hello world!\n");

    return 0;
}
