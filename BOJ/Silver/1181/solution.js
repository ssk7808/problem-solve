const fs = require('fs');
const input = fs
  .readFileSync(
    '/Users/sanggyo/Desktop/problem-solve/BOJ/Silver/1181/input.txt',
  )
  .toString()
  .trim()
  .split('\n');
const N = Number(input[0]);
input.shift();
const set = new Set(input);
const words = [...set];
let dict = {};
words.forEach((word) => {
  if (dict[word.length]) dict[word.length].push(word);
  else dict[word.length] = [word];
});

Object.values(dict).forEach((arr) => arr.sort());

Object.values(dict).forEach((arr) => arr.forEach((el) => console.log(el)));
