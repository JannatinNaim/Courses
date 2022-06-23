#include <stdio.h>
#include <cs50.h>

int main(void)
{
    long card;
    do
    {
        card = get_long("Card: ");
    }
    while (card < 0);

    int card_num_1 = card % 10;
    int card_num_2 = (card % 100) / 10;
    int card_num_3 = (card % 1000) / 100;
    int card_num_4 = (card % 10000) / 1000;
    int card_num_5 = (card % 100000) / 10000;
    int card_num_6 = (card % 1000000) / 100000;
    int card_num_7 = (card % 10000000) / 1000000;
    int card_num_8 = (card % 100000000) / 10000000;
    int card_num_9 = (card % 1000000000) / 100000000;
    int card_num_10 = (card % 10000000000) / 1000000000;
    int card_num_11 = (card % 100000000000) / 10000000000;
    int card_num_12 = (card % 1000000000000) / 100000000000;
    int card_num_13 = (card % 10000000000000) / 1000000000000;
    int card_num_14 = (card % 100000000000000) / 10000000000000;
    int card_num_15 = (card % 1000000000000000) / 100000000000000;
    int card_num_16 = (card % 10000000000000000) / 1000000000000000;

    // // Check all numbers.
    // printf(
    //     "%i\n%i\n%i\n%i\n%i\n%i\n%i\n%i\n%i\n%i\n%i\n%i\n%i\n%i\n%i\n%i\n",
    //     card_num_1,
    //     card_num_2,
    //     card_num_3,
    //     card_num_4,
    //     card_num_5,
    //     card_num_6,
    //     card_num_7,
    //     card_num_8,
    //     card_num_9,
    //     card_num_10,
    //     card_num_11,
    //     card_num_12,
    //     card_num_13,
    //     card_num_14,
    //     card_num_15,
    //     card_num_16
    // );

    card_num_2 *= 2;
    card_num_4 *= 2;
    card_num_6 *= 2;
    card_num_8 *= 2;
    card_num_10 *= 2;
    card_num_12 *= 2;
    card_num_14 *= 2;
    card_num_16 *= 2;

    // printf("--------------------------\n");

    // // Check all numbers.
    // printf(
    //     "%i\n%i\n%i\n%i\n%i\n%i\n%i\n%i\n%i\n%i\n%i\n%i\n%i\n%i\n%i\n%i\n",
    //     card_num_1,
    //     card_num_2,
    //     card_num_3,
    //     card_num_4,
    //     card_num_5,
    //     card_num_6,
    //     card_num_7,
    //     card_num_8,
    //     card_num_9,
    //     card_num_10,
    //     card_num_11,
    //     card_num_12,
    //     card_num_13,
    //     card_num_14,
    //     card_num_15,
    //     card_num_16
    // );

    int card_sum_2 = (card_num_2 / 10) + (card_num_2 % 10);
    int card_sum_4 = (card_num_4 / 10) + (card_num_4 % 10);
    int card_sum_6 = (card_num_6 / 10) + (card_num_6 % 10);
    int card_sum_8 = (card_num_8 / 10) + (card_num_8 % 10);
    int card_sum_10 = (card_num_10 / 10) + (card_num_10 % 10);
    int card_sum_12 = (card_num_12 / 10) + (card_num_12 % 10);
    int card_sum_14 = (card_num_14 / 10) + (card_num_14 % 10);
    int card_sum_16 = (card_num_16 / 10) + (card_num_16 % 10);

    // printf("--------------------------\n");

    // printf(
    //     "%i\n%i\n%i\n%i\n%i\n%i\n%i\n%i\n",
    //     card_sum_2,
    //     card_sum_4,
    //     card_sum_6,
    //     card_sum_8,
    //     card_sum_10,
    //     card_sum_12,
    //     card_sum_14,
    //     card_sum_16
    // );

    int sum = card_num_1 + card_sum_2 + card_num_3 + card_sum_4 + card_num_5 +
              card_sum_6 + card_num_7 + card_sum_8 + card_num_9 + card_sum_10 +
              card_num_11 + card_sum_12 + card_num_13 + card_sum_14 +
              card_num_15 + card_sum_16;

    // printf("--------------------------\n");

    // printf("SUM: %i\n", sum);

    if (sum % 10 != 0)
    {
        printf("INVALID\n");

        return 0;
    }

    int card_length = 1;
    long card_duplicate = card;

    while (card_duplicate >= 10)
    {
        card_duplicate /= 10;
        card_length += 1;
    }

    long card_start = card;
    while (card_start >= 100)
    {
        card_start /= 10;
    }

    // printf("--------------------------\n");

    // printf("%li\n", card_start);
    // printf("%i\n", card_length);

    // printf("--------------------------\n");

    if (card_length == 15 && (card_start == 34 || card_start == 37))
    {
        // American Express
        printf("AMEX\n");
    }
    else if (
        card_length == 16 &&
        (
            card_start == 51 ||
            card_start == 52 ||
            card_start == 53 ||
            card_start == 54 ||
            card_start == 55
        )
    )
    {
        // MasterCard
        printf("MASTERCARD\n");
    }
    else if ((card_length == 13 || card_length == 16) && card_start / 10 == 4)
    {
        // VISA
        printf("VISA\n");
    }
    else
    {
        printf("INVALID\n");
    }
}
