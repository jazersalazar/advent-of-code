const path = require('path');
const fs = require('fs');

const input = fs
	.readFileSync(path.join(__dirname, 'input.txt'), 'utf-8')
	.toString()
	.trim()
	.split('')

module.exports = input;
