const fs = require('fs');
const crypto = require('crypto');
const input = fs.readFileSync('../input.txt', 'utf-8').trim();

function getAnswer(codeKey) {
	let indexFound = false;
	let codeIndex = 0;

	while (!indexFound) {
		const code = crypto.createHash('md5').update(input + codeIndex).digest('hex');
		if (code.indexOf(codeKey) == 0) {
			indexFound = true;
			break;
		}
		codeIndex++;
	}

	return codeIndex;
}

console.log('Code answer1 is ' + getAnswer('00000'));
console.log('Code answer2 is ' + getAnswer('000000'));
