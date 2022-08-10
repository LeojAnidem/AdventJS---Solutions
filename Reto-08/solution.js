const maxProfit = prices => {
    let maxBenefit = 0;

    for(let i = 0; i < prices.length; i++){
        for(let j = i + 1; j < prices.length; j++){
            (prices[i] < prices[j] && j > i && (prices[j] - prices[i] > maxBenefit))
                ? maxBenefit = prices[j] - prices[i] : null
        }
    }

    if (maxBenefit <= 0) return -1;
    return maxBenefit;
}