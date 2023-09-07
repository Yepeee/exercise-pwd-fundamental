//Exercise : memeriksa angka ganjil atau genap 
//input
let angka = 1;
if (angka % 2 === 0) {
    console.log("Genap")
} else {
    console.log("Ganjil")
}

// dapatkan nilai bulan dari date.getmonth , kemudian sebutkan nama bulannya apa 
//INPUT 2023-09-06

const getMonth = new Date("2023-12-06").getMonth();
if (getMonth === 0) {
    console.log("januari")
} else if
    (getMonth === 1) {
    console.log("februari")
} else if (getMonth === 2) {
    console.log("maret")
}
else if (getMonth === 3) {
    console.log("april")
}
else if (getMonth === 4) {
    console.log("mei")
}
else if (getMonth === 5) {
    console.log("juni")
}
else if (getMonth === 6) {
    console.log("juli")
}
else if (getMonth === 7) {
    console.log("agustus")
}
else if (getMonth === 8) {
    console.log("september")
}
else if (getMonth === 9) {
    console.log("oktober")
}
else if (getMonth === 10) {
    console.log("november")
}
else if (getMonth === 11) {
    console.log("desember")
}

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



// Write a code to convert celsius to fahrenheit-----------PR

//input
// let suhuCelsius = 25;
// let suhuFahrenheit;
// if (suhuCelsius !== undefined) {
//     suhuFahrenheit = (suhuCelsius * 9 / 5) + 32;
//     console.log(suhuCelsius + " derajat Celsius setara dengan " + suhuFahrenheit + " derajat Fahrenheit.");
// } else {
//     console.log("Silakan masukkan suhu dalam Celsius.");
// }



// //Write a code to check whether the number is prime number or not---PR
let bilangan = 2;
let pembagi = 0;
let result = ""
for (let i = 1; i <= bilangan; i++) {
    if (bilangan % i === 0) {
        pembagi++;

    }
}
if (pembagi == 2) {
    result = result + `${bilangan} adalah bilangan prima`
} else {
    result = result + `${bilangan} bukan bilangan prima`
}
console.log(result)

//Write a code to find the sum of the numbers 1 to N

//Write a code to find factorial of a number.
// let angkaA = 6;
// let sum = 1
// for (let i = 1; i < angkaA; i++) {
//     console.log(i)
//     sum *= i
// }
// console.log(sum)

//Write a code to print the first N fibonacci numbers

