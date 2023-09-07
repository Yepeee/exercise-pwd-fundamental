//EXERCISE DAY 3 GIT 

//Write a code to display the multiplication table of a given interger
// INPUT 
let a = 9
let hasil="";
for (let i =0 ; i <= 10 ; i++){
    hasil= hasil + `${a}x${i}\n`
}
console.log(hasil)
//Write a code to check whether a string is a palindrome or not
//INPUT


//Write a code to convert centimeter to kilometer
// INPUT
let cm=500000;
let km=(cm/100000)
console.log(`${cm} centimeter adalah ${km} kilometer`)

//Write a code to format number as currency (IDR)
let saldoAtm = 20e7;
let saldoIDR = saldoAtm.toLocaleString( 'id', {style : 'currency', currency:'IDR'})
//OUTPUT
console.log(saldoIDR)