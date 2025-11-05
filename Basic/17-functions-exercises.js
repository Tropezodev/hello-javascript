/*
Clase 32 - Ejercicios: Funciones
Vídeo: https://youtu.be/1glVfFxj8a4?t=14146
*/

// NOTA: Explora diferentes sintaxis de funciones para resolver los ejercicios

// 1. Crea una función que reciba dos números y devuelva su suma
const suma = (a, b) => a + b
console.log(suma(2, 4))

// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos
function buscarMayor(arrayNum) {
    let numeroMayor = arrayNum[0]
    for (let i = 1; i < arrayNum.length; i++) {
        numeroMayor = arrayNum[i] >= numeroMayor ? arrayNum[i] : numeroMayor
    }
    return numeroMayor
}

let numeros = [2, 5, 21, 4, 9, 0]
console.log(buscarMayor(numeros))
//****Versión moderna con Math.max y con el operador Spread
const buscarMayor2 = (arrayNum) => Math.max(...arrayNum) // Operador Spread "..." expande el array en elemento individuales
console.log(buscarMayor2(numeros))

// 3. Crea una función que reciba un string y devuelva el número de vocales que contiene
function contarVocales(texto) {
    let numVocales = 0
    let minusculas = texto.toLowerCase()
    for (let i = 0; i < minusculas.length; i++) {
        if (minusculas[i] == "a" || minusculas[i] == "á" || minusculas[i] == "e" || minusculas[i] == "é"
            || minusculas[i] == "i" || minusculas[i] == "í" || minusculas[i] == "o" || minusculas[i] == "ó"
            || minusculas[i] == "u" || minusculas[i] == "ú") {
            numVocales++
        }
    }
    return console.log(`El texto "${texto}" tiene ${numVocales} vocales en total.`)
}
let texto = "Garantía adicional? NO tengo nada que perder"
contarVocales(texto)
//****Versión moderna con expresiones regulares
function contarVocales2(texto) {
    const numVocales = (texto.match(/[aeiouáéíóú]/gi) || []).length;
    //match devuelve un array con las coincidencias de la expresión regular [aeiouáéíóú]
    //los cochetes "[]" se usan para buscar coincidencias con cualquier carácter dentro del conjunto, no con la secuencia exacta (que sería sin los corchetes)
    //"gi" son banderas en la expresión regular: la "g" hace una búsqueda global (todas las apariciones) y la "i" búsqueda insensible a mayúsculas
    //se maneja el caso de que no haya vocales con el "|| []", porque match devolvería "null" y el .length daría error
    console.log(`El texto "${texto}" tiene ${numVocales} vocales en total.`);
}
contarVocales2(texto)

// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas
function textoMayus(textos) {
    let mayus = []
    for (texto of textos) {
        mayus.push(texto.toUpperCase())
    }
    return mayus
}
let textos = ["Pepe", "pepo", "JUAN", "jOse", "dopamina"]
console.log(textoMayus(textos))
//****Versión moderna en arrowFunction
const textoMayus2 = textos => textos.map(texto => texto.toUpperCase())
//la función ".map" crea un nuevo array con los resultados de aplicar una función a cada elemento
console.log(textoMayus2(textos))

// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario
const esPrimo = numero => {
    if (numero<=1) return false
    for (let i=2; i<=Math.sqrt(numero); i++){
        //El rango se limita a Raiz cuadrada del número para optimizarlo
        if (numero % i === 0) return false
    }
    return true
}
console.log(esPrimo(4))

// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos


// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares

// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado

// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso

// 10. Crea una función que calcule el factorial de un número dado