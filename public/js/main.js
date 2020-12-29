// EXO 1

let phrase = 'Bonjour tout le monde      '
console.log(phrase.length);

// trim marche aussi
phrase = phrase.trimEnd()
console.log(phrase.length);

// slice cumulatif
// console.log(phrase.slice(-1));

// cibler l'élément
console.log(phrase.charAt(phrase.length -1));

// console.log(`${phrase.replace('Bonjour ', '')}`);

// let phraseNoBonjour = 'tout le monde'
// let bonjour = 'Bonjour '
// let phraseComplete = bonjour.concat(phraseNoBonjour);
// console.log(phraseComplete);

// console.log(`${phrase.substr(0, 7)} ${phrase.slice(8)}`);

phrase = phrase.replace('Bonjour ', "")
console.log(phrase);

// phrase = phrase.replace('tout le monde', '')
// console.log(phrase);

// console.log(`${phrase.replace(' tout le monde', '')}`);

let bonjour = "Bonjour "
phrase = bonjour.concat("", phrase)
console.log(phrase);

phrase = phrase.substring(0,8)
console.log(phrase);

// EXO 2

let phrase2 = "Ceci est une variable de type number !"
phrase2 = phrase2.replace("number", "string");
console.log(phrase2);

// EXO 3

let phrase3 = "Ceci est une variable de type NuMbEr ! Les numbers c'est trop bien Number numBer numbeR"
// phrase3 = phrase3.replace("NuMbEr","number").replace("Number","number").replace("numBer","number").replace("numbeR","number")
phrase3 = phrase3.replace(/number/ig, "number");
console.log(phrase3);