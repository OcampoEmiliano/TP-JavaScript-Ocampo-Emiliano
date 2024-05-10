let numero1 = parseInt(prompt("ingrese el primer número"));
let numero2 = parseInt(prompt("ingrese el segundo número"));
let numero3 = parseInt(prompt("ingrese el tercer número"));

if (numero1 <= numero2 && numero1 <= numero3) {
    if (numero2 <= 3) {
    console.log (numero1)
    console.log (numero2)
    console.log (numero3)

}  else {
    console.log (numero1)
    console.log (numero3)
    console.log (numero2)
}
}
if (numero1 >= numero2 && numero2 <= numero3) {
    if (numero1 <= numero3) {
    console.log (numero2)
    console.log (numero1)
    console.log (numero3)
} else {
    console.log (numero2)
    console.log (numero3)
    console.log (numero1)
}
}
if (numero3 <= numero2 && numero1 >= numero3) {
    if (numero1 <= numero2) {
    console.log (numero3)
    console.log (numero1)
    console.log (numero2)
} else {
    console.log (numero3)
    console.log (numero2)
    console.log (numero1)
}
}