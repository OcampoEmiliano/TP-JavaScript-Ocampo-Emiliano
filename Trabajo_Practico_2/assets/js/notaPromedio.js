let nota1 = parseInt(prompt("ingrese la primer nota del alumno"));
let nota2 = parseInt(prompt("ingrese la segunda nota del alumno"));
let nota3 = parseInt(prompt("ingrese la tercera nota del alumno"));
let promedio = ((nota1 + nota2 + nota3) / 3)

if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
    alert("una nota ingresada no es un número")
} else if (nota1 <= 0 || nota2 <= 0 || nota3 <= 0) {
    alert("la nota ingresada no es un número valido")
}else {
if (promedio == 10) {
    console.log("Sobresaliente") 
} else if (promedio >= 8 && promedio <= 9) {
    console.log("Muy Buena")
} else if (promedio >= 6 && promedio <= 7){
    console.log("Buena")
} else if (promedio >= 4 && promedio <= 5) {
    console.log("Regular")
} else if (promedio >= 1 && promedio <= 3) {
    console.log("Insuficiente")
} else {
    console.log ("promedio no valido")
}
}





