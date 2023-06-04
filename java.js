function saludar(nombre) {
    alert("Bienvenido " + nombre)
}

let nombreIngresado = prompt("Ingrese su nombre")
saludar(nombreIngresado)


let total = 0
let mensaje = "Ingrese servicio que desea: \n1 - Admision ($8000)\n2 - Psicologia ($5000)\n3 - Psiquiatria ($7000)\n4 - Trabajo social ($4000)\n5 - Cuánto debo pagar\n6 - Finalizar compra\n0 - Salir"
let opcion

do {
    opcion = Number(prompt(mensaje))
    if (opcion === 1) {
        alert("Turno de admisión agregado al carrito")
        total = total + 8000
    }   else if (opcion === 2) {
        alert("Turno de psicologia agregado al carrito")
        total = total + 5000
    }   else if (opcion === 3) {
        alert("Turno de psiquiatría agregado al carrito")
        total = total + 7000
    }   else if (opcion === 4) {
        alert("Turno de trabajo social agregado al carrito")
        total = total + 4000
    }   else if (opcion === 5) {
        alert("El total a abonar es " + total)
    }   else if (opcion === 6) {
        alert(validarTotal(total))
    }
}   while (opcion !== 0)

alert("Muchas gracias por su visita")

function validarTotal(total) {
    if (total === 0) {
    return "Primero debes agregar algún servicio"
}   else {
    return "Muchas gracias por su compra"}
}