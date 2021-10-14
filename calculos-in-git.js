function calcularMayorEdad(vectorEdad){
    let mayorNumero = 0;
    for (let i=0; i < vectorEdad.lenght; i++ ){
        if (vectorEdad[i] > mayorNumero){
            mayorNumero = vectorEdad[i];
        }
    }
    return mayorNumero;
}

function calcularMenorEdad(vectorEdad){
    let menorNumero = vectorEdad[0];
    for (let i=0; i < vectorEdad.lenght; i++ ){
        if (vectorEdad[i] < menorNumero){
            menorNumero = vectorEdad[i];
        }
    }
    return menorNumero;
}

function calcularPromedioEdad(vectorEdad){
    let acumuladorEdad = 0;
    for (let i=0; i < vectorEdad.lenght; i++ ){
        acumuladorEdad += vectorEdad[i];
    }
    let promedioVector = acumuladorEdad / vectorEdad.lenght;
    Number(promedioVector);
    return promedioVector.toFixed(2);
}
