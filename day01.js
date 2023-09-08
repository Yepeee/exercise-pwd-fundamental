// 1. Write a code to find area of rectangle
let panjang = 10;
let lebar = 15;
//PROCESS
//panjang*lebar
let luas = panjang * lebar;
//OUTPUT
console.log("luas persegi panjang >> ", luas);

//2.Write a code to find perimeter of rectangle
// 2* (panjang
let keliling = 2 * (panjang + lebar)
//OUTPUT
console.log("keliling persegi panjang >> ", keliling)


//3. Write a code to find diameter, circumference and area of a circle.
//INPUT
const r = 7;
const PI = Math.PI;
//PROCESS
//diameter : r * 2
let diameter = r * 2;
//keliling : 2 * PI * r
let keliling2 = 2 * PI * r
// luas PI * r * r
let luas2 = PI * Math.pow(r , 2)
//OUTPUT
console.log(`diameternya adalah ${diameter} kelilingnya adalah ${keliling2} dan luasnya adalah ${luas2}`)

//4. Write a code to find angles of triangle if two angles are given
//INPUT 
//process 180 - sudutA - sudutB = sudutC
const sudutA = 80;
const sudutB = 65;
const sudutC = 180 - sudutA - sudutB;
//OUTPUT
console.log("sudut ketiga adalah >> " , sudutC)

//5.Write a code to get difference between dates in days
//INPUT 
const date1 = new Date("2023-09-7");
const date2 = new Date("2023-09-20");
//process 
const selisihMili = date2.getTime() - date1.getTime();
console.log(selisihMili)
const selisih = Math.ceil(selisihMili / (1000 * 3600 * 24))
 //output
console.log("selisih harinya adalah >>", selisih)

//6. Write a code to convert days to years, months and days.
//input
const jumlahHari = 5000
//process
const tahun = Math.floor(jumlahHari / 365);
  const sisaHari = jumlahHari % 365;
  const bulan = Math.floor(sisaHari / 30);
  const hari = sisaHari % 30;
  //output
  console.log(`${jumlahHari} hari sama dengan ${tahun} tahun , ${bulan} bulan , dan ${hari} hari`);

//FINISH



