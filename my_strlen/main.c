#include <stdio.h>
#include <stdlib.h>

int main()
{
    size_t my_strlen(const char* str){
        if(str == NULL){
            return 0;
        }
    int length = 0;
    const char *ch = str;

    while(*ch != '\0'){
        length++;
        ch++;
    }
    return length;
    }

    int len = my_strlen("hello world");
    printf("length is %lu /n",len);
    //return 0;
}
