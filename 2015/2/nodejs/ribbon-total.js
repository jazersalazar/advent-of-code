const path = require('path');
const fs = require('fs');
const input = fs.readFileSync(path.join(__dirname, '../input.txt'), 'utf-8').split('\n');

const ft_total = input.reduce((total, _lwh) => {
	const [l, w, h] = _lwh.split('x').map(Number).sort((a, b) => a - b);
	console.log(l, w, h);
	return total + (l + l + w + w) + (l * w * h);
}, 0);

console.log(`We need to order ${ft_total} feet of ribbon!`);
