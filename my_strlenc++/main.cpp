#include <iostream>

using namespace std;

int main()
{
    my_strlen(const char* str){
    int length = 0;
    const char *ch = str;
    cout << ch;
    while(*ch != "\0"){
        length++;
        ch++;
    }
    return length;
    }
    char name[] = "gaurav";
    int len = my_strlen(name);
    cout << len;
    return 0;
}
