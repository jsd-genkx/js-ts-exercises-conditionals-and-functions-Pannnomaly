// TODO-04: Write if/else if to check and print:
// Divisible by both 3 and 5 → "FizzBuzz"
// Divisible by only 3 → "Fizz"
// Divisible by only 5 → "Buzz"
// Otherwise → "Not divisible by 3 or 5"

// TODO BONUS: Rewrite with if

const num:number = 0;
// console.log(num);

if (num === 0) // guard เช็คกัน 0
{
    console.log(`${num} is 0 ไม่เอา ไม่หารสิอุนเตอ\n`);
} else if (num % 3 === 0 && num % 5 === 0) // condition เยอะและซ้อนทับกัน (ในนี้คือต้องหารทั้ง 3 และ 5 ลงตัว) เราให้ความสำคัญมากที่สุด
{
    console.log(`${num} => FizzBuzz\n`);
} else if (num % 3 === 0) // ความสำคัญเท่าๆ กันกับ mod 5
{
    console.log(`${num} => Fizz\n`);
} else if (num % 5 === 0)
{
    console.log(`${num} => Buzz\n`);
} else 
{
    console.log(`${num} => Not divisible by 3 or 5\n`);
}

checkAndPrint(num);

// แนวความคิดของโจทย์นี้คือ ต้องการตรวจสอบว่า ตัวเลขที่รับเข้ามานั้น สามารถหารด้วย 3 และ 5, 3, 5 หรือหารไม่ได้เลยหรือไม่ โดยมีเงื่อนไขดังนี้
// ถ้าตัวเลขนั้นสามารถหารด้วย 3 และ 5 ลงตัว (num % 3 === 0 && num % 5 === 0) จะให้แสดงข้อความว่า "FizzBuzz"
// ถ้าตัวเลขนั้นสามารถหารด้วย 3 ลงตัว (num % 3 === 0) จะให้แสดงข้อความว่า "Fizz"
// ถ้าตัวเลขนั้นสามารถหารด้วย 5 ลงตัว (num % 5 === 0) จะให้แสดงข้อความว่า "Buzz"
// ถ้าตัวเลขนั้นไม่สามารถหารด้วย 3 หรือ 5 ลงตัวเลย (กรณีอื่นๆ นอกเหนือจากข้างบน) จะให้แสดงข้อความว่า "Not divisible by 3 or 5"
// ซึ่งถ้า num ของเราเข้าเงื่อนไขสักอันมันจะแสดงผลของ condition นั้นออกมา แต่ถ้ายังไม่ใช่ แล้วยังอยู่ในเงื่อนไขอื่น มันก็จะไปตรวจสอบเงื่อนไขถัดไปเรื่อยๆ จนกว่าจะเจอเงื่อนไขที่ตรงกับ num ที่ตั้งไว้

// Bonus
function checkAndPrint (inputNumber:number)
{
    if (num === 0)
    {
        console.log(`Bonus: ${num} is 0 ไม่เอา ไม่หารสิอุนเตอ`);
        return
    }
    if (num % 3 === 0 && num % 5 === 0)
    {
        console.log(`Bonus: ${num} => FizzBuzz`);
        return;
    }
    if (num % 3 === 0)
    {
        console.log(`Bonus: ${num} => Fizz`);
        return;
    }
    if (num % 5 === 0)
    {
        console.log(`Bonus: ${num} => Buzz`);
        return;
    }
    if (!((num % 3 === 0 && num % 5 === 0) && (num % 3 === 0) && num % 5 === 0))
    {
        console.log(`Bonus: ${num} => Not divisible by 3 or 5`);
        return;
    }
}

// โบนัสเป็นแบบใช้ if ล้วน เลยมีแนวคิดแบบนี้คือ ใช้ return เพื่อออกจากฟังก์ชันทันทีเมื่อเงื่อนไขใดเงื่อนไขหนึ่งเป็นจริง
// ซึ่งจะช่วยลดการใช้งาน else if และ else ซึ่งทำให้โค้ดดูสะอาดและเข้าใจง่ายขึ้น
// โดยแต่ละเงื่อนไขจะตรวจสอบแยกกันและถ้าเงื่อนไขใดเป็นจริง มันจะแสดงผลลัพธ์ที่เกี่ยวข้องแล้วจบการทำงานของฟังก์ชันทันที