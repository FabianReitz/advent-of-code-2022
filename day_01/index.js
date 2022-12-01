import fs from 'fs';

const input = fs.readFileSync('input.txt', 'utf8');

const caloriesPerElf = input.split('\n\n').map((elf) =>
  elf
    // Split the string into an array of strings
    .split('\n')
    // Make an array of arrays of numbers
    .map((string) => Number(string))
    // Sum the array of numbers
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0)
);

// Get the biggest value in the array
const answer = Math.max(...caloriesPerElf);

console.log(`The answer is ${answer}`);
