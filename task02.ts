// TODO-02: Use if/else to check if it's a number
// (hint: typeof or isNaN)

const userInput = NaN;
// Try changing to "hello", 10, null, NaN

let isNumber = typeof userInput;

if (isNumber === "number")
{
    console.log(userInput + " is a " + isNumber);
} else
{
     console.log(userInput + " is not a number, it's a " + isNumber);
}