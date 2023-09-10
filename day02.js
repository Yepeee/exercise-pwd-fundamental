
//MINI EXERCISE : dapatkan nilai bulan dari date.getmonth , kemudian sebutkan nama bulannya apa 
//INPUT 
const getMonth = new Date("2023-1-06").getMonth();
let hasil1 = "";
if (getMonth === 0) {
    hasil1 += "januari"
} else if
    (getMonth === 1) {
    hasil1 += "februari"
} else if (getMonth === 2) {
    hasil1 += "maret"
}
else if (getMonth === 3) {
    hasil1 += "april"
}
else if (getMonth === 4) {
    hasil1 += "mei"
}
else if (getMonth === 5) {
    hasil1 += "juni"
}
else if (getMonth === 6) {
    hasil1 += "juli"
}
else if (getMonth === 7) {
    hasil1 += "agustus"
}
else if (getMonth === 8) {
    hasil1 += "september"
}
else if (getMonth === 9) {
    hasil1 += "oktober"
}
else if (getMonth === 10) {
    hasil1 += "november"
}
else if (getMonth === 11) {
    hasil1 += "desember"
} else {
    hasil1 += "Bukan termasuk bulan"
}
//OUTPUT 
console.log(hasil1)

//Memakai switch Case
let output;
switch (getMonth) {
    case 0:
        output = "Januari"
        break;
    case 1:
        output = "februari"
        break;
    case 2:
        output = "maret"
        break;
    case 3:
        output = "april"
        break;
    case 4:
        output = "mei"
        break;
    case 5:
        output = "juni"
        break;
    case 6:
        output = "juli"
        break;
    case 7:
        output = "agustus"
        break;
    case 8:
        output = "september"
        break;
    case 9:
        output = "oktober"
        break;
    case 10:
        output = "november"
        break;
    case 11:
        output = "desember"
        break;
    default:
        output = "tidak diketahui"
        break;
}

console.log(output)

//EXERCISE SLIDE PURWADHIKA =======================================================================================

//1. Write a code to convert celsius to fahrenheit
let celcius = 20;
let fahrenheit = (9/5) * celcius + 32;
console.log(fahrenheit)

//2.Write a code to check whether the number is odd or even
//menggunakan modulus agar bisa mengetahui jika dibagi bisa habis atau tidak
//INPUT
let angka = 1;
let hasil = "";
if (angka % 2 === 0) {
    hasil += "Genap"
} else {
    hasil += "ganjil"
}
console.log(hasil)


//3. Write a code to check whether the number is prime number or not
let bilangan = 2;
let prime = 0;
let result = "";
for (let i = 1; i <= bilangan; i++) {
    if (bilangan % i === 0) {
        prime++;

    }
}
if (prime == 2) {
    result = result + `${bilangan} adalah bilangan prima`
} else {
    result = result + `${bilangan} bukan bilangan prima`
}
console.log(result)

//4.Write a code to find the sum of the numbers 1 to N----------- mencoba menggunakan function
let x = 10;
let y = 0
function penjumlahanTotal(angka){
    for (let i = 0; i <= angka; i++){
        y += i;
    }
    return y;
}
console.log(penjumlahanTotal(x))
  
  
//5. Write a code to find factorial of a number.
const n = 4;
let faktorial = 1;

for (let i = 1; i <= n; i++) {
    console.log(i)
  faktorial *= i;
}
console.log(faktorial)


//6.Write a code to print the first N fibonacci numbers
//INPUT 
// program to generate fibonacci series up to n terms===== edit menggunakan array "2023-09-09"
let input =12;
let data = [0 , 1];
for (let index = 2; index <= input; index++){
    console.log(index)
    data[index] = data[index-1] + data[index-2]
}
console.log(data)

//FINISH