const fs = require('fs');
const input = fs.readFileSync('../input.txt', 'utf-8').split('\n');


const niceCount = input.reduce((counter, s) => {
	const badString = ['ab', 'cd', 'pq', 'xy'];
	let isNice = s.match(/[aeiou]/g)?.length >= 3 && s.match(/([a-z])\1/)?.length ? true : false;
	badString.forEach(bad => { if (s.includes(bad)) isNice = false; });

	return isNice ? ++counter : counter;
}, 0);
console.log(`There is a total of ${niceCount} nice strings!`);

const newNiceCount = input.reduce((counter, s) => {
	let isNice = s.match(/([a-z][a-z]).*\1/)?.length && s.match(/([a-z])[a-z]\1/)?.length ? true : false;

	return isNice ? ++counter : counter;
}, 0);

console.log(`There is a total of ${newNiceCount} nice strings with new model!`);
