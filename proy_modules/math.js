const math ={};

const invertirNumero = numero => {
    let invertido =0;
    while(numero !=0){
        invertido = 10 * invertido + numero %10
        numero = (Math.floor(numero / 10))
    }
    return invertido
};

const invertirNumeroComoTexto = numero => {
    const numeroInvertidoComoTexto = numero.toString().split("").reverse().join("");
    return numeroInvertidoComoTexto;
};

const invertirTexto = texto => {
    const splitText = texto.split('');
    const reversedText = splitText.reverse();
    const joinText = reversedText.join('');
};

const invertirArreglo = arreglo => {
    const reverseObject = arreglo.reverse();
    return reverseObject;
};

const conversionDatos = data => {
    let dataType = typeof data;
    let dataVar;

    if (data === ''|| data === null || data === undefined || data.length === 0) {
        dataVar = 'el valor ingresado esta vacio o incorrecto';
    }else {
        console.log(`el valor ingresado es de tipo: ${dataType}, con valor de: ${data}`);
        switch (dataType) {
            case 'number':
                dataVar = invertirNumero(data);
                break;
            case 'string':
                dataVar = invertirTexto(data);
                break;
            case 'object':
                dataVar = invertirArreglo(data);
                break;
            default:
                dataVar = 'El valor ingresado no se puede convertir';
        }
    }
    return dataVar;
}

math.invertirNumero = invertirNumero;
math.invertirNumeroComoCadena = invertirNumeroComoTexto;
math.invertirTexto = invertirTexto,
math.invertirArreglo = invertirArreglo;
math.conversionDatos = conversionDatos;

module.exports = math;