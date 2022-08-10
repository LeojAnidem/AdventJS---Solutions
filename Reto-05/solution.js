const daysToXmas = date => {
    const xMax = new Date('Dec 25, 2021'),
        oneDay = 1000 * 60 * 60 * 24; 
    
    return Math.ceil((xMax - date)/oneDay);
}