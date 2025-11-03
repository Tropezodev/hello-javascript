/*
Clase 28 - Ejercicios: Estructuras
Vídeo: https://youtu.be/1glVfFxj8a4?t=11451
*/

// 1. Crea un array que almacene cinco animales
let miArray = ["Conejo", "Perro", "Caballo", "Gato", "Gallina"]
console.log(miArray)
// 2. Añade dos más. Uno al principio y otro al final
miArray.unshift("León")
miArray.push("Cebra")
console.log(miArray)
// 3. Elimina el que se encuentra en tercera posición
miArray.splice(2, 1)
console.log(miArray)
// 4. Crea un set que almacene cinco libros
let miSet = new Set(["Libro1", "Libro2", "Libro3", "Libro4", "Libro5"])
console.log(miSet)
// 5. Añade dos más. Uno de ellos repetido
miSet.add("Libro6")
miSet.add("Libro1")
console.log(miSet)
// 6. Elimina uno concreto a tu elección
miSet.delete("Libro3")
console.log(miSet)
// 7. Crea un mapa que asocie el número del mes a su nombre
let miMap = new Map([
    [1, "Enero"], [2, "Febrero"], [3, "Marzo"], [4, "Abril"], [5, "Mayo"],
    [6, "Junio"], [7, "Julio"], [8, "Agosto"], [9, "Septiembre"], [10, "Octubre"], [11, "Noviembre"], [12, "Diciembre"],
])
console.log(miMap)
// 8. Comprueba si el mes número 5 existe en el map e imprime su valor
console.log(miMap.has(5))
console.log(miMap.get(5))
// 9. Añade al mapa una clave con un array que almacene los meses de verano
let verano = ["junio", "Julio", "Agosto", "Septiembre"]
miMap.set("verano", verano)
console.log(miMap.get("verano"))
// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map
let miArray2 = ["Jamón", "Pan", "tomate"]
console.log(miArray2)
let miSet2 = new Set(miArray2)
console.log(miSet2)
let miMap2 = new Map()
miMap2.set("Bocadillo",miSet2)
console.log(miMap2)
miMap2.get("Bocadillo").add("Tomate")
console.log(miMap2)