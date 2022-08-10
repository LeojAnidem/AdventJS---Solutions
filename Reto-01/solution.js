const contarOvejas = ovejas => {
    return ovejas.filter(oveja => 
        oveja.name.toLowerCase().includes('n') 
        && oveja.name.toLowerCase().includes('a') 
        && oveja.color === 'rojo'
    );
}