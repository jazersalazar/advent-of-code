const input = require('./file-reader');

const move_up = '(';
const move_down = ')';
let current_floor = 0;

for (let i = 0; i < input.length; i++) {
	if (input[i] === '(') 
		current_floor++;
	 else 
		current_floor--;
	
}

console.log(`Santa is currenly on floor ${current_floor}`);
