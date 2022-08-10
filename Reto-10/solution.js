const getCoins = change => {
    let coins = [50, 20, 10 ,5 ,2 ,1],
        result = new Array(coins.length).fill(0);

    coins.forEach((coin, index) => {
        coins.forEach((coins2, index2) => {
            if (change <= 0 || coins[index] > change) return;
            change -= coins[index];
            result[index]++
        })
    });

    return result.reverse();
}