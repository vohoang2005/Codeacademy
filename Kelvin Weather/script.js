//kelvin is the temperature. 
var kelvin = 0;
//this is the celsius temperature. 
const celsius = kelvin -273;
//calculating Fahrenheit
let fahrenheit = celsius * (9/5) + 32;
let newton = celsius * (33 / 100);
//rounded fahrenheit
fahrenheit = Math.floor(fahrenheit);
newton = Math.floor(newton);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
console.log(`The temperature is ${newton} degrees Newton.`)