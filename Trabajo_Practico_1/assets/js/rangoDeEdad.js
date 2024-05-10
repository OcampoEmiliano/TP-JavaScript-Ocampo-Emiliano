let edad = parseInt(prompt("ingrese la edad"));
if (edad >= 0 && edad <= 12) {
    console.log("la persona es un niño")
} else if (edad >= 13 && edad <= 19) {
    console.log("la persona es un adolescente")
} else if (edad >= 20 && edad <= 59) {
    console.log("la persona es un adulto")
}else if (edad >= 60 && edad <= 120) {
    console.log("la persona es un anciano")
} else {
    console.log("la edad ingresada no es valida")
}