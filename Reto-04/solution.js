const createXmasTree = height => {
    if (height >= 1 && height <= 100){
        let tronco = '#',
            hoja = '*',
            fondo = '_',
            arbol = '',
            iteratorHojas = 1,
            iteratorFondo = height - 1,
            i = 0;

        do{
            arbol +=  `${fondo.repeat(iteratorFondo)}${hoja.repeat(iteratorHojas)}${fondo.repeat(iteratorFondo)}\n`;
            
            iteratorHojas += 2;
            iteratorFondo -= 1;

            i++;
        }while (i != height);
        
        arbol += `${fondo.repeat(height-1)}${tronco}${fondo.repeat(height-1)}\n`;
        arbol += `${fondo.repeat(height-1)}${tronco}${fondo.repeat(height-1)}`;

        return arbol;
    }

    return '';
}