// Iteration #1: Find the maximum

const greatestNumber = maxOfTwoNumbers (20,12);



function maxOfTwoNumbers(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}

console.log("The greatest number is : " + greatestNumber);

// Iteration #2: Find longest word

const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];
const largestWord = findLongestWord(words);

function findLongestWord(words) {
  if (words.length === 0) {
    return null;
  }

  let longestWord = words[0];

  for (let i = 1; i < words.length; i++) {
    if (words[i].length > longestWord.length) {
      longestWord = words[i];
    }
  }

  return longestWord;
}


console.log("The largest word is " + largestWord);


// Iteration #3: Calculate the sum

function sumNumbers(numbers) {
  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }

  return sum;
}

const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
const totalSum = sumNumbers(numbers);
console.log("The sum of all numbers is: " + totalSum);




// Iteration #3.1 Bonus:
function sum(mixedArr) {
  let total = 0;

  for (let i = 0; i < mixedArr.length; i++) {
    if (typeof mixedArr[i] === 'number') {
      total += mixedArr[i];
    } else if (typeof mixedArr[i] === 'string') {
      total += mixedArr[i].length;
    } else if (typeof mixedArr[i] === 'boolean') {
      total += mixedArr[i] ? 1 : 0;
    }
  }

  return total;
}

const mixedArr = [6, 12, 'miami', 1, true, 'barca', '200', 'lisboa', 8, 10];
const result = sum(mixedArr);
console.log("The sum is: " + result);




// Iteration #4: Calculate the average
function averageNumber(number) {
  if (number.length === 0) {
    return null; // Retorna null si el arreglo está vacío.
  }

  const sum = number.reduce((acc, current) => acc + current, 0);
  const average = sum / number.length;

  return average;
}

const number = [2, 6, 9, 10, 7, 4, 1, 9];
const average = averageNumber(number);
console.log("The average is: " + average);



// Level 2: Array of strings
function averageWordLength(words) {
  if (word.length === 0) {
    return null; // Retorna null si el arreglo está vacío.
  }

  const totalLength = word.reduce((acc, current) => acc + current.length, 0);
  const averages = totalLength / words.length;

  return average;
}

const word = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];
const averages = averageWordLength(words);
console.log("The average word length is: " + averages);

// Bonus - Iteration #4.1
function avg(arr) {
  if (arr.length === 0) {
    return null; // Retorna null si el arreglo está vacío.
  }

  const total = arr.reduce((acc, current) => {
    if (typeof current === 'number') {
      return acc + current;
    } else if (typeof current === 'string') {
      return acc + current.length;
    } else if (typeof current === 'boolean') {
      return acc + (current ? 1 : 0);
    }
    return acc;
  }, 0);

  const average = total / arr.length;

  return average;
}

const mixedArray = [6, 12, 'miami', 1, true, 'barca', '200', 'lisboa', 8, 10];
const results = avg(mixedArray);
console.log("The average is: " + results);


// Iteration #5: Unique arrays
function uniquifyArray(words) {
  const uniqueArray = [];

  for (let i = 0; i < wordss.length; i++) {
    if (uniqueArray.indexOf(wordss[i]) === -1) {
      uniqueArray.push(wordss[i]);
    }
  }

  return uniqueArray;
}

const wordss = [
  'crab',
  'poison',
  'contagious',
  'simple',
  'bring',
  'sharp',
  'playground',
  'poison',
  'communion',
  'simple',
  'bring'
];

const uniqueWords = uniquifyArray(wordss);
console.log(uniqueWords);




// Iteration #6: Find elements
function doesWordExist(wordArray, targetWord) {
  for (let i = 0; i < wordArray.length; i++) {
    if (wordArray[i] === targetWord) {
      return true; // La palabra se encontró en el arreglo.
    }
  }
  return false; // La palabra no se encontró en el arreglo.
}

const wording = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];
const wordToSearch = 'starting';
const wordExists = doesWordExist(wording, wordToSearch);

if (wordExists) {
  console.log("La palabra existe en el arreglo.");
} else {
  console.log("La palabra no existe en el arreglo.");
}



// Iteration #7: Count repetition
const wordsCount = [
  'machine',
  'matter',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'matter',
  'truth',
  'disobedience',
  'matter'
];

function howManyTimes() {}



// Iteration #8: Bonus
const matrix = [
  [8, 2, 22, 97, 38, 15, 0, 40, 0, 75, 4, 5, 7, 78, 52, 12, 50, 77, 91, 8],
  [49, 49, 99, 40, 17, 81, 18, 57, 60, 87, 17, 40, 98, 43, 69, 48, 4, 56, 62, 0],
  [81, 49, 31, 73, 55, 79, 14, 29, 93, 71, 40, 67, 53, 88, 30, 3, 49, 13, 36, 65],
  [52, 70, 95, 23, 4, 60, 11, 42, 69, 24, 68, 56, 1, 32, 56, 71, 37, 2, 36, 91],
  [22, 31, 16, 71, 51, 67, 63, 89, 41, 92, 36, 54, 22, 40, 40, 28, 66, 33, 13, 80],
  [24, 47, 32, 60, 99, 3, 45, 2, 44, 75, 33, 53, 78, 36, 84, 20, 35, 17, 12, 50],
  [32, 98, 81, 28, 64, 23, 67, 10, 26, 38, 40, 67, 59, 54, 70, 66, 18, 38, 64, 70],
  [67, 26, 20, 68, 2, 62, 12, 20, 95, 63, 94, 39, 63, 8, 40, 91, 66, 49, 94, 21],
  [24, 55, 58, 5, 66, 73, 99, 26, 97, 17, 78, 78, 96, 83, 14, 88, 34, 89, 63, 72],
  [21, 36, 23, 9, 75, 0, 76, 44, 20, 45, 35, 14, 0, 61, 33, 97, 34, 31, 33, 95],
  [78, 17, 53, 28, 22, 75, 31, 67, 15, 94, 3, 80, 4, 62, 16, 14, 9, 53, 56, 92],
  [16, 39, 5, 42, 96, 35, 31, 47, 55, 58, 88, 24, 0, 17, 54, 24, 36, 29, 85, 57],
  [86, 56, 0, 48, 35, 71, 89, 7, 5, 44, 44, 37, 44, 60, 21, 58, 51, 54, 17, 58],
  [19, 80, 81, 68, 5, 94, 47, 69, 28, 73, 92, 13, 86, 52, 17, 77, 4, 89, 55, 40],
  [4, 52, 8, 83, 97, 35, 99, 16, 7, 97, 57, 32, 16, 26, 26, 79, 33, 27, 98, 66],
  [88, 36, 68, 87, 57, 62, 20, 72, 3, 46, 33, 67, 46, 55, 12, 32, 63, 93, 53, 69],
  [4, 42, 16, 73, 38, 25, 39, 11, 24, 94, 72, 18, 8, 46, 29, 32, 40, 62, 76, 36],
  [20, 69, 36, 41, 72, 30, 23, 88, 34, 62, 99, 69, 82, 67, 59, 85, 74, 4, 36, 16],
  [20, 73, 35, 29, 78, 31, 90, 1, 74, 31, 49, 71, 48, 86, 81, 16, 23, 57, 5, 54],
  [1, 70, 54, 71, 83, 51, 54, 69, 16, 92, 33, 48, 61, 43, 52, 1, 89, 19, 67, 48]
];

const greatest = greatestProduct(matrix);
console.log("The greatest product of four adjacent numbers is: " + greatest);

function greatestProduct(matrix) {
  const numRows = matrix.length;
  const numCols = matrix[0].length;
  let maxProduct = 0;

  for (let row = 0; row < numRows; row++) {
    for (let col = 0; col < numCols; col++) {

      if (col + 3 < numCols) {
        const product = matrix[row][col] * matrix[row][col + 1] * matrix[row][col + 2] * matrix[row][col + 3];
        maxProduct = Math.max(maxProduct, product);
      }


      if (row + 3 < numRows) {
        const product = matrix[row][col] * matrix[row + 1][col] * matrix[row + 2][col] * matrix[row + 3][col];
        maxProduct = Math.max(maxProduct, product);
      }


      if (row + 3 < numRows && col + 3 < numCols) {
        const product = matrix[row][col] * matrix[row + 1][col + 1] * matrix[row + 2][col + 2] * matrix[row + 3][col + 3];
        maxProduct = Math.max(maxProduct, product);
      }

      if (row + 3 < numRows && col - 3 >= 0) {
        const product = matrix[row][col] * matrix[row + 1][col - 1] * matrix[row + 2][col - 2] * matrix[row + 3][col - 3];
        maxProduct = Math.max(maxProduct, product);
      }
    }
  }

  return maxProduct;
}


