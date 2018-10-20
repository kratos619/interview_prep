#include <stdio.h>
#include <stdlib.h>

int main()
{

    //const char haystack = "TutorialsPoint";
   //const char neeedle = "Point";


    char* my_strstr(const char* hystack , const char* needle){
        //printf("The haystack string is: %s\n", hystack);
        //printf("The needle string is: %s\n", needle);
        if(hystack == NULL || needle == NULL){
            return 0;
        }
        while(hystack != '\0' ){
                //printf("The haystack string is: %s\n", hystack);
            if(*hystack == *needle){
                const char *h = hystack;
                const char *n = needle;
                while(*n != '\0' && *h == *n){
                    h++;
                    n++;
                    //printf("The needle ptr string is: %s\n", n);
                    //printf("The haystack ptr string is: %s\n", h);
                }
                if(*n == '\0'){
                    return (char*) hystack;
                   // printf("The needle conversion string is: %s\n", haystack);
                }
            }
            hystack++;
        }
        return NULL;
    }
    char *ret;

   ret = my_strstr("gauravpal", "gau");

   printf("The substring is: %s\n", ret);
    return 0;
}
