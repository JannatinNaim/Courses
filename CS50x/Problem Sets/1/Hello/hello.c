// Greets a user with a name.

#include <stdio.h>
#include <cs50.h>

int main(void)
{
    // Get user's name.
    string user_name = get_string("What is your name? ");

    // Greet user with his name.
    printf("Hello, %s!\n", user_name);
}
