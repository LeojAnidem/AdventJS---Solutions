/*
    Con la emoción, ya estamos empezando a contar los días del calendario]
    hasta el 25 de diciembre 📆.

    Para ayudar a esto, vamos a crear una función que pasándole una instancia
    de Date nos diga el número de días que faltan.

    Veamos unos ejemplos:
    const date1 = new Date('Dec 1, 2021')
    daysToXmas(date1) // 24

    const date2 = new Date('Dec 24, 2021 00:00:01')
    daysToXmas(date2) // 1

    const date3 = new Date('Dec 24, 2021 23:59:59')
    daysToXmas(date3) // 1
    
    const date4 = new Date("December 20, 2021 03:24:00")
    daysToXmas(date4) // 5
*/

function daysToXmas(date) {
    // ¡Y no olvides compartir tu solución en redes
    const xMax = new Date('Dec 25, 2021');
    const oneDay = 1000 * 60 * 60 * 24; 
    
    return Math.ceil((xMax - date)/oneDay);
}

const date1 = new Date('Dec 24, 2021 23:59:59');
console.log(daysToXmas(date1));


