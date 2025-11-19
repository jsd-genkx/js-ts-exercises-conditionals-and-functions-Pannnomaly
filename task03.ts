// TODO-03: Write if/else if to print:
// Password < 6 chars → "Too short"
// 6–10 chars → "Moderate"
// 11+ chars → "Strong"

const password:string = "12345678901";
const passwordLength = password.length;
// console.log(password);

if (passwordLength > 10)
{
    console.log(`Your password "${password}" is Strong!`);
} else if (passwordLength >= 6 && passwordLength <= 10)
{
    console.log(`Your password "${password}" is Moderate!`);
} else
{
    console.log(`Your password "${password}" is Too short!`);
}

// แนวความคิดของโจทย์นี้คือ ต้องการตรวจสอบความยาวของรหัสผ่าน (password) และจะแสดงข้อความว่า password ที่เราตั้งมานั้น มีความแข็งแรงขนาดไหน โดยมีเงื่อนไขดังนี้
// ถ้ารหัสผ่านมีความยาวน้อยกว่า 6 ตัวอักษร (default case) จะแสดงข้อความว่า "Too short"
// ถ้ารหัสผ่านมีความยาวระหว่าง 6 ถึง 10 ตัวอักษร (passwordLength >=6 && passwordLength <= 10 คือจะต้องอยู่ในช่วง 6-10 ตัวอักษรเท่านั้น) จะแสดงข้อความว่า "Moderate"
// ถ้ารหัสผ่านมีความยาวมากกว่า 10 ตัวอักษร จะแสดงข้อความว่า "Strong"
// ซึ่งถ้า password ของเราเข้าเงื่อนไขสักอันมันจะแสดงผลของ condition นั้นออกมา แต่ถ้ายังไม่ใช่แล้วยังอยู่ในเงื่อนไขอื่น มันก็จะไปตรวจสอบเงื่อนไขถัดไปเรื่อยๆ จนกว่าจะเจอเงื่อนไขที่ตรงกับ password ของเราที่ตั้งไว้