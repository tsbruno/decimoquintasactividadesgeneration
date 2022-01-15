let arreglo = palabra.split("");

console.log(arreglo.reverse(). join(""))

function invertirPalabra(cadena) {

    let arreglo = cadena.split("");
    arreglo.reverse();
    
    let cadenaInvertida = arreglo.join("");

    return console.log(cadenaInvertida); 
}

invertirPalabra("Generation"); 
