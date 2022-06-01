// Prints two right angled pyramids.

#include <stdio.h>
#include <cs50.h>

int main(void)
{
    // Prompt use for a valid number between 1 and 8 inclusive.
    int n;
    do
    {
        n = get_int("Height: ");
    }
    while (n < 1 || n > 8);

    // Print rows.
    for (int i = 0; i < n; i++)
    {
        // Print the begining spaces for each row.
        for (int j = 0; j < n - i - 1; j++)
        {
            printf(" ");
        }

        // Print hashes as pyramid.
        for (int j = 0; j <= i; j++)
        {
            printf("#");
        }

        // Space between.
        printf("  ");

        // Ending hashes.
        for (int j = 0; j <= i; j++)
        {
            printf("#");
        }

        // Next row.
        printf("\n");
    }
}
