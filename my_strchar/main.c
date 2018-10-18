#include <stdio.h>
#include <stdlib.h>

int main()
{
    my_strchar(const char *str, int c){
    if(str == NULL){
        return 0;
    }

    while(*str != '\0'){
        if(*str == c){
            return (char*) str;
        }
        str++
    }
    return NULL;

    }
    //printf("Hello world!\n");
    return 0;
}
