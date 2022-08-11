const wrapGifts = gifts => {
    let wraps = new Array(2 + gifts.length).fill('');
    
    return wraps.map((wrap, index, array) => {
        (index === 0 || index === array.length - 1)
            ? wrap += '*'.repeat(gifts[0].length + 2)
            : wrap += `*${gifts[index - 1]}*`;
        return wrap;
    });
};