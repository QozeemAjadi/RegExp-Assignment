// Exercise 1
//1.1  car and cat

let texts = "My car color is the color of the cat"
let regExp = /car | cat/  ///ca[rt]/ this is a shorter way of writing the pattern
let result2 = regExp.test("car cat")
console.log(result2)

console.log("##################1")

// 1.2 pop and prop
let words = "These are two separate words, Pop and Prop"
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
let exp3 = "Akin love his sister because she is always gracious and victorious"
let regExp3 = /\w+ious\b/
// regExp3 = regExp3.test
console.log(regExp3.test(exp3))


console.log("##################4") 

let myArr =[" This is a pencil .",
            "This pencil,",
            "I like it because",
            "I can write alot of content with it  ",
            "I will get it;",
            "if I see a bookshop:"
          ]
 
let regExp4 = /\s[.,;:]/ig
console.log(regExp4.test(myArr))

console.log("##################5")


// 1.6 A word longer than six letters
let longLetters = "people, Olalekan, Variable, beneficial, judiciary Olalekan Olalekan"
let regExp5 = /\b\w{7,}\b/
// let results = longLetters.replace("Olalekan", "variable")
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

let story =  `Akin gazed at the delicious food of on the table, feeling discourage 
            by its sheer volume. He coughout and thought, "I don't think I can finish this."
          Ade looked at him and asked, "can you join us for a play tonight?"
          Akin answered, and he walked towards them.
let regularExp = /'([^']+)'/igm;
let alteredStory = story.replace(regularExp, '"$1"')
console.log(alteredStory)


console.log("##################8")

// Exercise 3
// Write an expression that matches only JavaScript-style numbers.
const checkNumbers= [
  "761",
  "-47",
  "+5.9",
  "2.",
  ".3",
  "4.51a-8",
  "4B60",
  ".",
];

let checkNumbersExp = /^[+\-]?\d+(\.\d*)?([eE][+\-]?\d+)?$/;
checkNumbers.forEach((num) => {
  const outputs = checkNumbersExp.test(num);
  console.log(`"${num}" is a valid JavaScript number: ${outputs}`);
});
