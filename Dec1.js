const fs = require('fs');
const readline = require('readline');

async function processLineByLine() {
  const fileStream = fs.createReadStream('Dec1_input.txt');

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });
  let sum = 0;
  for await (const line of rl) {
    let res = getNumbers(line);
    sum+=res;
  }
  console.log(sum);
}
processLineByLine();


function getNumbers(str) {
  let i = 0;
  let j = str.length;
  let firstDigit = 0;
  let lastDigit = 0;

  while (i < j) {
    if (!isNaN(str[i])) {
      firstDigit = str[i];
      break;
    } else {
      i++;
    }
  }

  while (i <= j) {
    if (isNaN(str[j])) {
      j--;
    } else {
      lastDigit = str[j];
      break;
    }
  }
  return +(firstDigit+lastDigit)
}
