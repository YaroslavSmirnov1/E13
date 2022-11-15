// import { sum, multiply } from './math.js';
import * as math from './math.js';
import './style.css';


document.write('Hello, world!!!');

const multiply = (a) => a*8;

console.log('ES6 modules!');
console.log('math.sum = ' + math.sum(2, 3));
console.log('math.multiply = ' + math.multiply(5));
console.log('multiply = ' + multiply(5));
