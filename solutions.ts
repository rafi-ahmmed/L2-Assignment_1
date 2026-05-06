const filterEvenNumbers = (numOfArray: number[]): number[] => {
   const arrOfEvenNum = [];

   for (let num of numOfArray) {
      if (num % 2 === 0) {
         arrOfEvenNum.push(num);
      }
   }

   return arrOfEvenNum;
};

const reverseString = (word: string): string => {
   let revStringArray = [];
   let revLetter = '';
   for (let letter of word) {
      revStringArray.unshift(letter);
   }
   revLetter = revStringArray.join('');
   return revLetter;
};

type StringOrNumber = string | number;
const checkType = (value: StringOrNumber): string => {
   if (typeof value === 'string') {
      return 'String';
   } else {
      return 'Number';
   }
};

const getProperty = <T, K extends keyof T>(obj: T, key: K) => {
   return obj[key];
};

interface Book {
   title: string;
   author: string;
   publishedYear: number;
}

const toggleReadStatus = (bookObj: Book) => {
   const modifiedBookObj = {
      ...bookObj,
      isRead: true,
   };
   return modifiedBookObj;
};

class Person {
   name: string;
   age: number;
   constructor(name: string, age: number) {
      this.name = name, 
      this.age = age;
   }
}

class Student extends Person {
   grade: string;

   constructor(name: string, age: number, grade: string) {
      super(name, age);
      this.grade = grade;
   }

   getDetails() {
      return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
   }
}

const getIntersection = (arr1: number[], arr2: number[]): number[] => {
   const result = arr1.filter((num) => arr2.includes(num));

   return result;
};


