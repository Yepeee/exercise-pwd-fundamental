//tuliskan code untuk menemukan luas dan keliling persegi panjang 
let panjang = 10;
let lebar = 15;

//PROCESS
//panjang*lebar
let luas = panjang * lebar;
//OUTPUT
console.log("luas persegi panjang >> ", luas);

//PROCESS
// 2* (panjang+lebar)
let keliling = 2 * (panjang + lebar)
//OUTPUT
console.log("keliling persegi panjang >> ", keliling)


//Tuliskan kode untuk mencari diameter, keliling, dan luas lingkaran-----------------
//INPUT

const r = 7;
const PI = Math.PI;
//PROCESS
//diameter : r * 2
let diameter = r * 2;
//OUTPUT
console.log("diameter lingkaran adalah >> ", diameter)

//keliling : 2 * PI * r
let keliling2 = 2 * PI * r
//OUTPUT
console.log("Keliling lingkaran adalah >>" , keliling2)

// luas PI * r * r
let luas2 = PI * Math.pow(r , 2)
console.log("luas lingkaran adalah >> " , luas2)


// Tulis kode untuk mencari sudut segitiga jika diberikan dua sudut
//INPUT 
//process 180 - sudutA - sudutB = sudutC
const sudutA = 80;
const sudutB = 65;
const sudutC = 180 - sudutA - sudutB;
//OUTPUT
console.log("sudut ketiga adalah >> " , sudutC)

//Tulis kode untuk mendapatkan perbedaan antara tanggal dalam hari
//INPUT 
const date1 = new Date("2023-09-7");
const date2 = new Date("2023-09-20");

//process 
const selisihMili = date2.getTime() - date1.getTime();
console.log(selisihMili)
const selisih = Math.floor(selisihMili / (1000 * 3600 * 24))
 //output
console.log("selisih harinya adalah >>", selisih)

//Tulis kode untuk mengubah hari menjadi tahun, bulan, dan hari
//input
const jumlahHari = 5000
//process
const tahun = Math.floor(jumlahHari / 365);
  const sisaHari = jumlahHari % 365;
  const bulan = Math.floor(sisaHari / 30);
  const hari = sisaHari % 30;
  //output
  console.log(`${jumlahHari} hari sama dengan ${tahun} tahun , ${bulan} bulan , dan ${hari} hari`);

