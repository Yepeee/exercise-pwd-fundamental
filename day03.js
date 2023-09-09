//EXERCISE DAY 3 GIT 

//1. Write a code to display the multiplication table of a given interger
// INPUT 
let a = 9
let hasil = "";
for (let i = 0; i <= 10; i++) {
    hasil = hasil + `${a}x${i}\n`
}
console.log(hasil)
// 2. Write a code to check whether a string is a palindrome or not
//INPUT 
let kata = "Malam"
let output2 = "";
let ex2 ="";
for (let i = kata.length; i >= 0; i--) {
    console.log(i)
    output2 += kata.charAt(i)
}
console.log(output2)
if (kata.toUpperCase() === output2.toUpperCase()) {
    ex2 = `${kata} adalah palindrome`
} else {
    ex2 = `${kata} bukan palindrome`
}
console.log(ex2)

//3. Write a code to convert centimeter to kilometer
// INPUT
let cm = 500000;
let km = (cm / 100000)
console.log(`${cm} centimeter adalah ${km} kilometer`)

//4. Write a code to format number as currency (IDR)
let saldoAtm = 20e7;
let saldoIDR = saldoAtm.toLocaleString('id', { style: 'currency', currency: 'IDR' })
//OUTPUT
console.log(saldoIDR)

//5. Write a code to remove the first occurrence of a given “search string” from a string
let string = " hello , world "
let output1 = string.replace("hello", "hel")
console.log(output1)

//6.Write a code to capitalize the first letter of each word in a string
let awal = "surabaya jakarta"
let swap = awal.charAt(0).toUpperCase() + awal.substring(1)
console.log(swap)

//7. Write a code to reverse a string
let kota = "Surabaya"
hasilLoop = "";
for (let i = kota.length; i >= 0; i--) {
    console.log(i)
    hasilLoop += kota.charAt(i)
}
console.log(hasilLoop)


//SLIDE 2---------------------------
//1. Write a code to swap the case of each character from string 
//Belom 

//2. Write a code to find the largest of two given integers
//INPUT
let bilangan1 = 12;
let bilangan2 = 12;
let terbesar = "";
if (bilangan1 > bilangan2) {
    terbesar += `bilangan terbesar adalah ${bilangan1}`
} else if (bilangan1 < bilangan2) {
    terbesar += `bilangan terbesar adalah ${bilangan2}`
} else {
    terbesar += 'hasilnya adalah seri'
}
//OUTPUT
console.log(terbesar)

//3. Write a conditional statement to sort three numbers
let result = "";
for (let i = 1; i <= 3; i++) {
    result = result + i;
}
console.log(result)

//4.Write a code that shows 1 if the input is a string, 2 if the input is a number, and 3 for others data
//INPUT 
let input = 12;
let xx = "";
if (typeof input === "string") {
    xx = xx + "tipe data string"
} else if (typeof input === "number") {
    xx = xx + "tipe data number"
} else if (typeof input === "boolean") {
    xx = xx + "tipe data boolean"
} else {
    "bukan termasuk data"
}
// OUTPUT
console.log(xx)

//5. Write a code to change every letter a into * from a string of input
let j = "lawan kita adalah pemain bola"
let sensor = j.replace(/a/g , "*")
//Output
console.log(sensor)


