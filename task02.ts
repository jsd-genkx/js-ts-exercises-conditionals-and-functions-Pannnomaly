// TODO-02: Use if/else to check if it's a number
// (hint: typeof or isNaN)

const userInput = 42;
// Try changing to "hello", 10, null, NaN

let isNumber = typeof userInput;

// Number.isNaN(userInput) ถ้า userInput เป็น NaN มันจะคืนค่า true แล้วเรา ! เพื่อให้เป็น false เพื่อให้เข้าเงื่อนไขสอง
// isNaN(userInput) แบบนี้ก็ได้เหมือนกัน ไม่ต้องมี Number
if (isNumber === "number" && !Number.isNaN(userInput))
{
    console.log(userInput + " is a " + isNumber);
    console.log(`The ${userInput} is a ${isNumber}`); // แบบ template literal
} else
{
     console.log(userInput + " is not a number");
     console.log(`The ${userInput} is not a number`); // แบบ template literal
}