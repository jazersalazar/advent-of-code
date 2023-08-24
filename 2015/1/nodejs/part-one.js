const path = require('path');
const fs = require('fs');

const input = fs
	.readFileSync(path.join(__dirname, '../input.txt'), 'utf-8')
	.toString()
	.trim()
	.split('');

let current_floor = 0;
for (let i = 0; i < input.length; i++) {
	if (input[i] === '(') 
		current_floor++;
	 else 
		current_floor--;
	
}

console.log(`Santa is currenly on floor ${current_floor}`);
