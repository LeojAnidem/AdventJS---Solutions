const sumPairs = (numbers, result) => {
    let newArray = numbers
        .map((n, index, array) => {
            for (let i = index + 1; i <= array.length - 1; i++){
                if ((n + array[i]) === result) {
                    return [n,array[i]];
                }
            }
        });

    let resultIndex = newArray.findIndex(n => n != undefined);

    if (resultIndex >= 0) {
        return newArray[resultIndex];
    }

    return null
}