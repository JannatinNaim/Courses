// Prints a pyramid of size user requested.

#include <stdio.h>
#include <cs50.h>

int main(void)
{
    // Height of the pyramid.
    int n;
    // Continue asking for a valid number between 1 and 8 inclusive.
    do
    {
        n = get_int("Height: ");
    } while (n < 1 || n > 8);

    // Print each row of the pyramid.
    for (int i = 0; i < n; i++)
    {
        // NOTE: This works too.
        // for (int j = n - 1; j > i; j--) printf(" ");

        // Print spaces before the pyramid.
        for (int j = 0; j < n - i - 1; j++)
        {
            printf(" ");
        }
        // Print hashes after the pyramid.
        for (int j = 0; j <= i; j++)
        {
            printf("#");
        }
        // Go to next row.
        printf("\n");
    }
}
