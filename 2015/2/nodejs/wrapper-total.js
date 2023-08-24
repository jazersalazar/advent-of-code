const path = require('path');
const fs = require('fs');
const readline = require('readline');

const fileStream = fs.createReadStream(path.join(__dirname, '../input.txt'));

const rl = readline.createInterface({
	input: fileStream,
	crlfDelay: Infinity
});

let sqft_total = 0;
rl.on('line', (line) => {
	const [l, w, h] = line.split('x');
	const side = [(l * w), (w * h), (h * l)];
	
	side.forEach((e) => sqft_total += 2 * e);
	sqft_total += Math.min(...side);
});

rl.on('close', () => {
	console.log(`We need to order ${sqft_total} sqft of wapping paper!`);
});
