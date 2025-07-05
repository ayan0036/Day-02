 const path = require('path');
const fs = require('fs');
const math = require('./math');


const a = 12;
const b = 4;


const outputLines = [
  'Add (' + a + ' + ' + b + ') = ' + math.add(a, b),
  'Subtract (' + a + ' - ' + b + ') = ' + math.subtract(a, b),
  'Multiply (' + a + ' * ' + b + ') = ' + math.multiply(a, b),
  'Divide (' + a + ' / ' + b + ') = ' + math.divide(a, b)
];

const logFile = path.join(__dirname, 'log.txt');


fs.writeFileSync(logFile, outputLines.join('\n'), 'utf8');

const data = fs.readFileSync(logFile, 'utf8');
console.log('\n---------- log.txt CONTENT ----------');
console.log(data);
console.log('-------------------------------------');
