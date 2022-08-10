export default function sumPairs(numbers, result) {
    // ¡Y no olvides compartir tu solución en redes!
    let newArray = numbers
        .map((n, index, array) => {
            for (let i = index + 1; i <= array.length - 1; i++){
                if ((n + array[i]) === result) {
                    return [n,array[i]];
                }
            }
        })

    let resultIndex = newArray.findIndex(n => n != undefined);

    if (resultIndex >= 0) {
        return newArray[resultIndex];
    }

    return null
}

console.log(sumPairs([3, 5, 7, 2], 10)); // [3, 7]
console.log(sumPairs([-3, -2, 7, -5], 10)); // null
console.log(sumPairs([2, 2, 3, 1], 4)); // [2, 2]
console.log(sumPairs([6, 7, 1, 2], 8)); // [6, 2]
console.log(sumPairs([0, 2, 2, 3, -1, 1, 5], 6)); // [1, 5]