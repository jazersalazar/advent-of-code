const fs = require('fs');
const input = fs.readFileSync('../input.txt', 'utf-8').trim().split('\n');

const parseCommand = _command => {
	let command = _command.match(/(toggle|turn on|turn off) (\d+),(\d+) through (\d+),(\d+)/);
	// Add + sign before the variable to typecast it as integer
	return {action: command[1], x1: +command[2], y1: +command[3], x2: +command[4], y2: +command[5]};
};

// Initialize 1000x1000 multidimensional array with 0
const GRID_BASE = 1000;
// Declare it this way so that it wont reference the parent array
let lights = Array(GRID_BASE).fill().map(() => Array(GRID_BASE).fill(0));
input.forEach(command => {
	const {action, x1, y1, x2, y2} = parseCommand(command);
	for(let x = x1; x <= x2; x++) {
		for(let y = y1; y <= y2; y++) {
			if (action === 'toggle') lights[x][y] = lights[x][y] ? 0 : 1;
			if (action === 'turn on') lights[x][y] = 1;
			if (action === 'turn off') lights[x][y] = 0;
		}
	}
});

// Count lit lights
let litCount = 0;
lights.forEach(light => { 
	light.forEach(state => { 
		if(state === 1) litCount++; 
	});
});
console.log(`There is ${litCount} lights that are lit!`);
