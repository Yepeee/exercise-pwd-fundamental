//1. Create a function that can create a triangle pattern according to the height we provide like the folllowing
// Mendefinisikan tinggi segitiga

/**2. Create a function that can loop the number of times according to the input we provide, and will 
replace multiples of ú with "Fizz", multiples of ü with "Buzz", multiples of ú and ü with 
"FizzBuzz"
 *  */


//3. Create a function to calculate Body Mass Index (BMI)
//INPUT 
let berat = 51;
let tinggi = 160 ;
function hasilnya(weight, height) {
    let output = weight / (height/100)**2 ;
    if (output <= 18.5) {
        output =  `Less weight`
    } else if (output >= 18.6 && output <= 24.9) {
        output =  ` ideal`
    } else if (output >= 25.0 && output <= 29.9) {
        output = `overweight`
    } else if (output >= 30.0 && output <= 39.9) {
        output =`very overweight`
    } else {
        output = `obesity`
    } return output;
}
console.log(hasilnya(berat, tinggi))

//4.  Write a function to remove all odd numbers in an array and return a new array that contains even numbers only]
take = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
function genap(data) {
    var angkaGenap = [];
    for (let i = 0; i <= data.length; i++) {
        if (data[i] % 2 == 0)
            angkaGenap.push(i)
    } return angkaGenap
}
console.log(genap(take))

//5. Write a function to split a string and convert it into an array of words
let kota = "Aku Adalah Manusia Biasa "
function split(data) {
    hasil = data.split(" ")
    return hasil;
}
console.log(split(kota))