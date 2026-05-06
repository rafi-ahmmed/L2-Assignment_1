// * Solution-1

const filterEvenNumbers = (numOfArray: number[]): number[] => {
   const arrOfEvenNum = [];

   for (let num of numOfArray) {
      if (num % 2 === 0) {
         arrOfEvenNum.push(num);
      }
   }

   return arrOfEvenNum;
};

// * Solution-2

const reverseString = (word: string): string => {
   let revStringArray = [];
   let revLetter = '';
   for (let letter of word) {
      revStringArray.unshift(letter);
   }
   revLetter = revStringArray.join('');
   return revLetter;
};

// * Solution-3

type StringOrNumber = string | number;
const checkType = (value: StringOrNumber): string => {
   if (typeof value === 'string') {
      return 'String';
   } else if (typeof value === 'number') {
      return 'Number';
   }
};

const res = checkType("hhsd");
console.log(res);
