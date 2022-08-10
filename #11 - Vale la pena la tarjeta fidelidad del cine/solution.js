const shouldBuyFidelity = times => {
    const 
        TICKET = 12,
        FIDELITY_CARD = 250,
        DISCOUNT = 0.75,
        priceWithoutCard = TICKET * times;
    ;
    let priceWithCard = FIDELITY_CARD;
    
    for (let exponent = 1; exponent < times + 1; exponent++) {
        priceWithCard += TICKET * (DISCOUNT ** exponent);
    }

    if (priceWithCard < priceWithoutCard ) return true;

    return false;
};

console.log(shouldBuyFidelity(24));
console.log(shouldBuyFidelity(100));