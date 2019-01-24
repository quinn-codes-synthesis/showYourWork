// Building a split pyramid of a given height

#include <stdio.h>
#include <cs50.h>

int num;
int main(void)
{


    // Prompt user for a number
    do
    {
        num = get_int("Pick a number between 1 and 23, inclusive: ");
    }
    while (num < 0 || num > 23);


    for (int i = 1; i <= num; i++)
    {
        // These two loops print out the left half of the pyramid
        for (int left_spaces = num - i; left_spaces > 0; left_spaces--)
        {
            printf(" ");
        }
        for (int left_blocks = i; left_blocks > 0; left_blocks--)
        {
            printf("#");
        }
        printf("  ");

        // Print right half of pyramid
        for (int right_blocks = i; right_blocks > 0; right_blocks--)
        {
            printf("#");
        }
        printf("\n");
    }
}