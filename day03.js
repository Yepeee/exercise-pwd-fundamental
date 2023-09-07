//EXERCISE DAY 3 GIT 

//Write a code to display the multiplication table of a given interger
// INPUT 
let a = 9
let hasil = "";
for (let i = 0; i <= 10; i++) {
    hasil = hasil + `${a}x${i}\n`
}
console.log(hasil)
//Write a code to check whether a string is a palindrome or not
//INPUT


//Write a code to convert centimeter to kilometer
// INPUT
let cm = 500000;
let km = (cm / 100000)
console.log(`${cm} centimeter adalah ${km} kilometer`)

//Write a code to format number as currency (IDR)
let saldoAtm = 20e7;
let saldoIDR = saldoAtm.toLocaleString('id', { style: 'currency', currency: 'IDR' })
//OUTPUT
console.log(saldoIDR)

//Write a code to capitalize the first letter of each word in a string
let x = "purwadhika"
let y = "surabaya"
let hasil1 = x.charAt(0).toUpperCase()
let hasil2 = y.charAt(0).toUpperCase()
//OUTPUT
console.log(`${hasil1}urwadhika ${hasil2}urabaya`)

//Write a code to reverse a string
let a1 = "surabaya";
let hasilReverse = a1.split('').reverse()
//OUTPUT
console.log(hasilReverse)


//SLIDE 2---------------------------
//Write a code to find the largest of two given integers
//INPUT
let bilangan1 = 12;
let bilangan2 = 12;
let terbesar = "";
if (bilangan1 > bilangan2) {
    terbesar += `bilangan terbesar adalah ${bilangan1}`
} else if (bilangan1 < bilangan2){
    terbesar += `bilangan terbesar adalah ${bilangan2}`
}else {
    terbesar += 'hasilnya adalah seri'
}
//OUTPUT
console.log(terbesar)

//Write a conditional statement to sort three numbers
let result = "";
for(let i = 1 ; i <= 3; i++ ){
result = result + i;
}
console.log(result)

//Write a code that shows 1 if the input is a string, 2 if the input is a number, and 3 for others data
//INPUT 

