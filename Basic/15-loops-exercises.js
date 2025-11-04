/*
Clase 30 - Ejercicios: Bucles
Vídeo: https://youtu.be/1glVfFxj8a4?t=12732
*/

// NOTA: Explora diferentes sintaxis de bucles para resolver los ejercicios

// 1. Crea un bucle que imprima los números del 1 al 20
let i=1
while(i<21){
    console.log(i)
    i++
}

// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado
let resul = 0
for(let j=1; j<101;j++){
resul+=j
}
console.log(resul)
// 3. Crea un bucle que imprima todos los números pares entre 1 y 50
i=1
while(i<51){
    if (i%2==0){
        console.log(i)
    }
    i++
}

// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola
let nombres=["Pepe", "Juan", "Jose", "María"]
for(let j=0;j<nombres.length;j++){
    console.log(nombres[j])
}

// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto
let texto="El perro de San Roque no tiene rabo"
let contador=0
for(let j=0;j<texto.length;j++){
    let texto2=texto.toLowerCase()
    if(texto2[j]==="a"|| texto2[j]==="e" || texto2[j]==="i"|| texto2[j]==="o"|| texto2[j]==="u"
        || texto2[j]==="á"|| texto2[j]==="é" || texto2[j]==="í"|| texto2[j]==="ó"|| texto2[j]==="ú"
    ){
        contador++
    }
}
console.log(`El texto: "${texto}" tiene ${contador} vocales.`)

// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto
let numeros=[2,3,10,10]
i=1
let producto=numeros[0]
do{
producto*=numeros[i]
i++
} while(i<numeros.length)
console.log(`El producto de "${numeros}" es: ${producto}`)

// 7. Escribe un bucle que imprima la tabla de multiplicar del 5
let tabla
for(let i=0;i<=10;i++){
    console.log(`5 x ${i} = ${5*i}`)
}

// 8. Usa un bucle para invertir una cadena de texto
let texto2="Hola se escribe con ache."
let textoInver=""
for(let i=(texto2.length-1);i>=0;i--){
    textoInver+=texto2[i]
}
console.log(textoInver)

// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci
i=1
let fibo=[0,1]
while(i<9){
    fibo.push(fibo[i]+fibo[i-1])
    i++
}
console.log(fibo)

// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10
let numeros2=[2,43,5,10,11,24,-4,-11,10000]
let numerosMayores=[]
i=0
while(i<numeros2.length){
    if(numeros2[i]>10){
        numerosMayores.push(numeros2[i])
    }
    i++
}
console.log(numerosMayores)