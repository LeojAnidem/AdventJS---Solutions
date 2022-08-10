const groupBy = (collection, it) => {
    let obj = {},
        modifyer;

    collection
        .map(n => {
            (typeof it === 'string') ? modifyer = n[it] : modifyer = it(n);
            (obj[modifyer]) ? obj[modifyer].push(n) : obj[modifyer] = [n];
        });

    return obj;
}