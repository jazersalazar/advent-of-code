const fs = require('fs');
const input = fs.readFileSync('../input.txt', 'utf-8').split('\n');

const ribbon_total = input.reduce((total, _lwh) => {
	const [l, w, h] = _lwh.split('x').map(Number).sort((a, b) => a - b);

	return total + (l + l + w + w) + (l * w * h);
}, 0);
console.log(`We need to order ${ribbon_total} feet of ribbon!`);

const wrapper_total = input.reduce((total, _lwh) => {
	const [l, w, h] = _lwh.split('x');
	const side = [(l * w), (w * h), (h * l)];
	side.forEach((e) => total += 2 * e);
	total += Math.min(...side);

	return total;
}, 0);
console.log(`We need to order ${wrapper_total} sqft of wrapping paper!`);
