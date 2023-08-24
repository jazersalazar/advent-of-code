const fs = require('fs');
const input = fs.readFileSync('../input.txt', 'utf-8').split('\n');

const ribbonTotal = input.reduce((total, lwh) => {
	const [l, w, h] = lwh.split('x').map(Number).sort((a, b) => a - b);

	return total + (l + l + w + w) + (l * w * h);
}, 0);
console.log(`We need to order ${ribbonTotal} feet of ribbon!`);

const wrapperTotal = input.reduce((total, lwh) => {
	const [l, w, h] = lwh.split('x');
	const side = [(l * w), (w * h), (h * l)];
	side.forEach((e) => total += 2 * e);
	total += Math.min(...side);

	return total;
}, 0);
console.log(`We need to order ${wrapperTotal} sqft of wrapping paper!`);
