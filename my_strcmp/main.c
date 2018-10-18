#include <stdio.h>
#include <stdlib.h>

int main()
{
    int my_strcmp (const char* str1, const char* str2){
        if(str1 == NULL && str2 == NULL ){
            return 0;
        }

        const char *ch1  = str1;
        const char *ch2  = str2;



        while( *ch1 == '\0' && *ch2 == '\0'){
            if(*ch1 == *ch2){
                    printf(ch1);
            printf(ch2);
                return 1;
            }else{
                return 0;
            }
            ch1++;
            ch2++;
        }
    }


    int result = my_strcmp("gaurav", "gaurav");
     printf("my_strcmp(str1, str2) = %d\n", result);


    return 0;
}
