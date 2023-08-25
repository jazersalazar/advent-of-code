const fs = require('fs');
const input = fs.readFileSync('../input.txt', 'utf-8').trim().split('');

function getCoor(coor, move) {
	if (move === '>') coor.x++;
	else if (move === '<') coor.x--;
	else if (move === '^') coor.y++;
	else coor.y--;

	return coor;
}

function getHouses(coor, houses) {
	if (typeof houses[coor.x] == 'undefined') houses[coor.x] = {};
	if (typeof houses[coor.x][coor.y] === 'undefined') {
		houses[coor.x][coor.y] = 0;
	}
	houses[coor.x][coor.y]++;

	return houses;
}

function countDistinct(obj) {
	let distinctCount = 0;
	for (const key in obj) distinctCount += Object.keys(obj[key]).length

	return distinctCount;
}

let lySantaCoor = {x: 0, y: 0};
let santaCoor = {x: 0, y: 0};
let roboCoor = {x: 0, y: 0};

const lyHousesCoor = input.reduce((houses, move, index) => {
	let coor = getCoor(lySantaCoor, move);
	return getHouses(coor, houses); 
}, {0: {0: 1}});

const lyHouseCount = countDistinct(lyHousesCoor);
console.log(`Santa delivered his presents in ${lyHouseCount} houses last year`);


const housesCoor = input.reduce((houses, move, index) => {
	let coor = getCoor(index % 2 == 0 ? santaCoor : roboCoor, move);
	return getHouses(coor, houses); 
}, {0: {0: 1}});

const houseCount = countDistinct(housesCoor);
console.log(`Santa and Robo-Santa delivered their presents in ${houseCount} houses`);
