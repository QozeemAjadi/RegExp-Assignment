// Exercise 1
//1.1  car and cat

let texts = "I put my car in a car"
let regExp = /car | cat/  ///ca[rt]/ this is a shorter way of writing the pattern
let result2 = regExp.test("bar cat")
console.log(result2)

console.log("##################1")

// 1.2 pop and prop
let words = "There are two words, Pop and Prop"
let output = /pr?op/i // /pop prop/i
output = output.test(words)
console.log(output)

console.log("##################2")

// 1.3 ferret, ferry, and ferrari
let exp2 = "ferret, ferry, ferrari"
let regEx = /ferr(et|y|ari)/ //or /(ferret | ferry | ferrari)/
console.log(regEx.test(exp2))

console.log("##################3")

// 1.4 Any word ending in ious
let exp3 = "Jane loves her room because it's spacious but precious seldom visit her"
let regExp3 = /\w+ious\b/
// regExp3 = regExp3.test
console.log(regExp3.test(exp3))


console.log("##################4") 

let myArr =[" This is book.",
            "This book,",
            "I love it because",
            "It has alot of beneficial content in it  ",
            "I would buy it;",
            "if I am an engineer:"
          ]
 
let regExp4 = /\s[.,;:]/ig
console.log(regExp4.test(myArr))

console.log("##################5")


// 1.6 A word longer than six letters
let longLetters = "people, Olalekan, Variable, beneficial, judiciary Olalekan Olalekan"
let regExp5 = /\b\w{7,}\b/
// let results = longLetters.replace("Olalekan", "valuable")
console.log(regExp5.test(longLetters))
// console.log(results)

console.log("##################6")

// 1.7 A word without the letter e (or E)
let exp6 = "pat, sand, set, Energy, cook, seat"
const regExp6 = /\b[^\WeE]+\b/i
console.log(regExp6.test(exp6))

console.log("##################7")

// Exercise 2
// replacing all the dialogue quotes with double quotes,
// while keeping the single quotes used in contractions like aren’t.

let story = `Jane stared at the unopened materials on her desk, overwhelmed by its bulkiness. 'I can't finish it,' she sighed. 
JUde glanced over and smirked, teasingly asking, 'Aren't you coming to our group reading meeting tonight?' 
Her determination ignited, and she picked up the book, ready to conquer its pages before the gathering.`
let regularExp = /'([^']+)'/igm;
let alteredStory = story.replace(regularExp, '"$1"')
console.log(alteredStory)


console.log("##################8")

// Exercise 3
// Write an expression that matches only JavaScript-style numbers.
const checkNumbers= [
  "891",
  "-75",
  "+0.8",
  "7.",
  ".9",
  "2.51e-4",
  "7E10",
  ".",
];

let checkNumbersExp = /^[+\-]?\d+(\.\d*)?([eE][+\-]?\d+)?$/;
checkNumbers.forEach((num) => {
  const outputs = checkNumbersExp.test(num);
  console.log(`"${num}" is a valid JavaScript number: ${outputs}`);
});