const fs = require('fs');
const input = fs.readFileSync('../input.txt', 'utf-8').trim().split('\n');

const niceCount = input.reduce((counter, s) => {
	const badString = ['ab', 'cd', 'pq', 'xy'];
	let isNice = s.match(/[aeiou]/g)?.length >= 3 && s.match(/([a-z])\1/)?.length ? true : false;
	badString.forEach(bad => { if (s.includes(bad)) isNice = false; });

	return isNice ? ++counter : counter;
}, 0);

console.log(`There is a total of ${niceCount} nice strings!`);
