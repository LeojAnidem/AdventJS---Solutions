const isValid = mail => {

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