// creamos una constante math
const math ={};
//creamos una constante invertir numero
const invertirNumero = numero => {
    let invertido =0;
    while(numero !=0){
        invertido = 10 * invertido + numero %10
        numero = (Math.floor(numero / 10))
    }
    return invertido
};
//creamos una constante invertir numero como texto
/* toString:Para convertir un valor en una cadena de textp
split():Para dividir la cadea de texto en array
reverse:para invertir el orden de los elementos en un arreglo
join():Para unir el arreglo en una sola cadea de texto
*/
const invertirNumeroComoTexto = numero => {
    const numeroInvertidoComoTexto = numero.toString().split("").reverse().join("");
    return numeroInvertidoComoTexto;
};
// creamos una constante invertir texto
const invertirTexto = texto => {
    const splitText = texto.split('');
    const reversedText = splitText.reverse();
    const joinText = reversedText.join('');
};
//creamos una constante invertir arreglo
const invertirArreglo = arreglo => {
    const reverseObject = arreglo.reverse();
    return reverseObject;
};
/*la declaracion de la linea 36 y 37 se utiliza para obtener el tipo de datos de una variable y 
asignarlo a la variable dataType, si data es de tipo numerico "dataType" contendra una cadena de tipo numerico
*/
const conversionDatos = data => {
    let dataType = typeof data;
    let dataVar;
/*utilizamos el if-else para determinar si la condicion es falsa se ejecuta el codigo dentro de else hasta que ella
misma sea verdadera.
utilizamos el swith para tomar decisiones basadas en multiples casos
*/
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
//definimos las constantes para su funcionamiento
math.invertirNumero = invertirNumero;
math.invertirNumeroComoCadena = invertirNumeroComoTexto;
math.invertirTexto = invertirTexto,
math.invertirArreglo = invertirArreglo;
math.conversionDatos = conversionDatos;

module.exports = math;