const fs = require('fs');
const coords = fs.readFileSync('../input.txt', 'utf-8').trim().split('');
const santaCoords = coords.filter((item, index) => index % 2 === 0);
const roboCoords = coords.filter((item, index) => index % 2 === 1);
const traverse = directions => {
	let locations = ['0,0'];
	let currPos = {x: 0, y: 0};

	directions.forEach(direction => {
		if (direction === '^') currPos.y++;
		if (direction === 'v') currPos.y--;
		if (direction === '>') currPos.x++;
		if (direction === '<') currPos.x--;

		locations.push(`${currPos.x},${currPos.y}`);
	});

	return locations;
};
console.log('Santa visted a total of ' + (new Set(traverse(coords)).size) + ' houses last year!');
console.log('Santa and RoboSanta visted a total of ' + (new Set(traverse(santaCoords).concat(traverse(roboCoords))).size) + ' houses this year!');
