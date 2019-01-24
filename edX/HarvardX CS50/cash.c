// program will convert a user-provided dollar amount into an amount of change, using the least number of coins possible

#include <stdio.h>
#include <cs50.h>
#include <math.h>

int main(void)
{
    // prompt user for a valid float
    float give_change;
    do
    {
        give_change = get_float("Change required: ");
    }
    while (give_change < 0.0000000);

    // convert user input into an integer representing cents
    float converted_change = give_change * 100;
    converted_change = rintf(converted_change);

    // calculate change that can be made with quarters and iterate n for number of coins
    int n = 0;
    while (converted_change - 25 >= 0)
    {
        n++;
        converted_change -= 25;
    }

    // do the same with dimes
    while (converted_change - 10 >= 0)
    {
        n++;
        converted_change -= 10;
    }

    // and now with nickels
    while (converted_change - 5 >= 0)
    {
        n++;
        converted_change -= 5;
    }

    // and finally with pennies
    while (converted_change - 1 >= 0)
    {
        n++;
        converted_change -= 1;
    }

    // print number of coins used to make the change
    printf("%i\n", n);
}