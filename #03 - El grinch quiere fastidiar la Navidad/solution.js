/*
    El Grinch está abriendo las cartas que iban a Santa Claus y las está dejando hechas 
    un lío. 😱
    
    - Las cartas son una cadena de texto que incluyen regalos y paréntesis ().
    - Para saber si una carta es válida ✅, debes comprobar que los paréntesis cierran 
    correctamente y que, además, no vayan vacíos.
    
    ¡Pero ojo! Porque el Grinch ha dejado llaves { y corchetes [ dentro de los paréntesis 
    que hacen que no sean válidas. Por suerte sólo los ha dejado en medio de los 
    paréntesis...

    Ejemplos:
    "bici coche (balón) bici coche peluche" // -> ✅
    "(muñeca) consola bici" // ✅

    "bici coche (balón bici coche" // -> ❌
    "peluche (bici [coche) bici coche balón" // -> ❌
    "(peluche {) bici" // -> ❌
    "() bici" // ❌
*/

export default function isValid(mail) {
    // ¡No dejes que el Grinch gane!

    const checkParenthesis = letter => {
        if (letter[0] === '(' && letter[letter.length -1] === ')' && letter.length > 2){
            let newLetter = letter.split('');
            newLetter.shift();
            newLetter.pop();
            newLetter = newLetter.join('');
            return checkParenthesis(newLetter);
        }
        else if (/^[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/.test(letter)){
            return true;
        }
        return false;
    }

    return mail
        .split(' ')
        .map(letter => checkParenthesis(letter))
        .reduce((sum, next) => sum && next, true);
}

console.log(isValid("bici coche (balón) bici coche peluche")); //true
console.log(isValid("(sd) consola bici muñeca")); //true
console.log(isValid('(((a)))')); // true

console.log(isValid("bici coche (balón bici coche")); //false
console.log(isValid("peluche (bici [coche) bici coche balón")); //false
console.log(isValid("(peluche {) bici")); //false
console.log(isValid("() bici")); //false
