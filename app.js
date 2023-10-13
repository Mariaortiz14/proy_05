require("colors");

const math = require('./proy_modules/math.js');

const main = async () => {
    console.clear ();
    console.log ('holaaa sena'.blue);
    
    const numeros = [1, 2, 800, 912, 1000, 1273, 2811];
    for (const numero of numeros){
        const invertidoComoNumero = math.invertirNumero(numero);
        const invertidoComoCadena = math.invertirNumeroComoCadena(numero);
        console.log("Elnumero '%s' es '%s' invertido como numero, y '$s' como cadena",
        numero , invertidoComoNumero, invertidoComoCadena );
    }

    const textos = ['hola sena', 'ficha 2798618', 'Analisis y desarrollo de software']
    for ( const texto of textos) {
        const textoInvertido = math.invertirTexto(texto);
        console.log("el texto '$s' se invierte como'$s'", texto, textoInvertido);

    }

    const datos =[1234567,'ADSO 2798618',[2798618, 'ADSO'] ]
    for (let dato of datos){
        const datoConvertido = math.conversionDatos(dato);
        console.log(`El resultadode la conversion es: ${datoConvertido}`);
    }
}

main ();
