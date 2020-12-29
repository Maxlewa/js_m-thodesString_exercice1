// EXO 1

let phrase = 'Bonjour tout le monde      '
console.log(`${phrase.length}`);

let phraseNoFinalSpace = phrase.trim()
// console.log(phraseNoFinalSpace);
console.log(`${phraseNoFinalSpace.length}`);

console.log(`${phraseNoFinalSpace.slice(-1)}`);

// console.log(`${phraseNoFinalSpace.replace('Bonjour ', '')}`);

// let phraseNoBonjour = 'tout le monde'
// let bonjour = 'Bonjour '
// let phraseComplete = bonjour.concat(phraseNoBonjour);
// console.log(phraseComplete);

console.log(`${phraseNoFinalSpace.substr(0, 7)} ${phraseNoFinalSpace.slice(8)}`);

console.log(`${phraseNoFinalSpace.replace(' tout le monde', '')}`);

// EXO 2

let phrase2 = "Ceci est une variable de type number !"
let phrase2new = phrase2.replace("number", "string");
console.log(phrase2new);

// EXO 3

let phrase3 = "Ceci est une variable de type NuMbEr ! Les numbers c'est trop bien Number numBer numbeR"
// let phrase3Lowercase = phrase3.toLowerCase();
let phrase3Lowercase = phrase3.replace("NuMbEr","number").replace("Number","number").replace("numBer","number").replace("numbeR","number")
console.log(phrase3Lowercase);