// TODO-05: Convert this if to switch/case (You can add more options.)
// TODO BONUS: Use object lookup

const fruit: string = "asd".trim().toLowerCase();

if (fruit === "apple") {
	console.log("An apple a day keeps the doctor away.");
} else if (fruit === "banana") {
	console.log("Banana is good for potassium.");
} else if (fruit === "orange") {
	console.log("Oranges are full of vitamin C.");
} else {
	console.log("Unknown fruit.");
}

switch (fruit)
{
	case "apple":
		console.log("An apple a day keeps the doctor away.");
		break;
	case "banana":
		console.log("Banana is good for potassium.");
		break;
	case "orange":
		console.log("Oranges are full of vitamin C.");
		break;
	default:
		console.log("Unknown fruit.");
}

// แนวคิดของโจทย์นี้คือการเปลี่ยนโครงสร้างการควบคุมจาก if-else เป็น switch-case
// เราใช้ switch-case ทำให้โค้ดดูสะอาดตาและง่ายต่อการอ่านมากขึ้นเมื่อมีหลายเงื่อนไข
// โดยในแต่ละ case เราจะตรวจสอบค่าของตัวแปร fruit จะต้องตรงกันกับแต่ละ case ที่เรากำหนดไว้
// เพื่อให้แสดงข้อความที่กำหนดไว้ตามผลลัพธ์ของแต่ละ case