let number = 10000.56;

console.log(number.toLocaleString());

var number2 = 1000 // floating point example
console.log(number2.toLocaleString(undefined, {maximumFractionDigits:4})); // "1,234.57"


function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}


function formatNumber (num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
}
 
print(formatNumber(2665));      // 2,665
print(formatNumber(102665));    // 102,665
print(formatNumber(111102665)); // 111,102,665


var number3 = 3500;
 
console.log(new Intl.NumberFormat().format(number3));
// → '3,500' if in US English locale


var foo = 5000;
console.log(foo.numberFormat(2)); // us format: 5,000.00
console.log(foo.numberFormat(2, ',', '.')); // european format: 5.000,00
