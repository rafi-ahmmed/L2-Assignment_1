# 🧠 Generics: Reusable এবং Strictly Typed Code লেখার শক্তিশালী উপায় 

## Introduction
TypeScript-এর Generics এমন একটি ফিচার, যার মাধ্যমে আমরা এমন কোড লিখতে পারি যেটা একবার লিখে বারবার ব্যবহার করা যায় (reusable) এবং একই সাথে strict type safety বজায় থাকে। এছাড়াও Generics ব্যবহার করে আমরা runtime-এ না, বরং compile time-এই type অনুযায়ী data handle করতে পারি। এটি ডেভেলপারদের জন্য টাইপ সেফটি এবং ফ্লেক্সিবিলিটির মধ্যে একটি চমৎকার ভারসাম্য তৈরি করে।

## Body

### কেন Generics প্রয়োজন?
সাধারণত, আমরা যখন এমন কোনো ফাংশন লিখি যা বিভিন্ন ধরনের ডাটা নিতে পারে, তখন আমরা হয়তো প্রতিটি টাইপের জন্য আলাদা ফাংশন লিখি, অথবা `any` টাইপ ব্যবহার করি। কিন্তু `any` ব্যবহার করলে আমরা TypeScript-এর মূল সুবিধা—অর্থাৎ টাইপ সেফটি—হারিয়ে ফেলি। Generics এই সমস্যার সমাধান দেয়।

### উদাহরণ: Basic Generic Function
Generics ব্যবহার করে আমরা একটি মাত্র ফাংশন দিয়েই সব টাইপ হ্যান্ডেল করতে পারি। নিচে একটি উদাহরণ দেওয়া হলো:

```typescript
// <T> হলো একটি টাইপ প্যারামিটার
function identity<T>(arg: T): T {
    return arg;
}

// ব্যবহার:
const stringOutput = identity<string>("Hello TypeScript"); // T এখানে string
const numberOutput = identity<number>(100);               // T এখানে number

console.log(stringOutput);
console.log(numberOutput);