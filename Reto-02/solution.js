const listGifts = letter => {
    let regalosRepetidos = {};
    
    letter
        .split(' ')
        .filter(e => e != '')
        .forEach(regalo => {
            if(!regalo.includes('_')){
                regalosRepetidos[regalo] = regalosRepetidos[regalo] + 1 || 1;
            }
        });
        
    return regalosRepetidos
}