let number = 10000.56;

console.log(number.toLocaleString());

var number2 = 1000 // floating point example
console.log(number2.toLocaleString(undefined, {maximumFractionDigits:4})); // "1,234.57"


function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}