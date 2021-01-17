const fs = require('fs');
const invoices = JSON.parse(fs.readFileSync('./invoices.json'));

console.log(invoices);
