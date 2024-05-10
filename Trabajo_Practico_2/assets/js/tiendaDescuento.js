let cantidad = parseInt(prompt("ingrese la cantidad de articulos iguales a comprar"));
let precioTotal = parseInt(prompt("ingrese el precio de la compra"));
if (isNaN(cantidad) || isNaN(precioTotal)) {
    console.log("la cantidad ingresada no es un número")
} else if (cantidad < 1 || precioTotal < 1) {
    console.log("la cantidad ingresada no es valida")
} else {
    if (cantidad >= 10 && precioTotal > 20000) {
let precioDescuento = precioTotal * 0.85
console.log("se aplica descuento del 15%")
console.log("el precio total es " + precioDescuento.toFixed(2));
    } else {
        switch (true) {
            case cantidad < 10 :
                console.log("no se alcanzo la cantidad de productos")
                break;
            case precioTotal <= 20000 :
                console.log("no supero el precio minimo")
                break;
            default:
                console.log("no se alcanzo ningun requisito")
                break;
        }
    }
}