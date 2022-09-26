

let ProductoA = 'Torta'
let PrecioA = 2000
let StockA = 10

let ProductoB = 'Desayuno'
let PrecioB = 3000
let StockB = 5

let ProductoC = 'Picada'
let PrecioC = 4000
let StockC = 7

let precioTotal = 0


let opcion = prompt("Bienvenidos a pedidos Paki Cake, escriba lo que desea comprar:\n -Torta\n -Desayuno\n -Picada\n  ")

function producto(a, b){
    return a * b;
 }



alert("ingreso  "+ opcion + "  como opcion") 

alert("ingreso  "+ opcion + "  como opcion") 

while(opcion.toUpperCase() != 'S') {
    
    if(opcion.toUpperCase() == 'TORTA'){
        let cantidadProductoA = prompt("ingrese que cantidad de " + ProductoA + " desea comprar:")
        if(cantidadProductoA <= StockA){
            precioTorta = producto (cantidadProductoA, PrecioA)
            precioTotal = precioTotal + precioTorta

            alert("el precio es  " + precioTorta)
        }

        else{
            alert("Actualmente tenemos " + StockA + " unidades de este producto")
        }
    }
    else if(opcion.toUpperCase() == 'DESAYUNO'){
        let cantidadProductoB = parseInt(prompt("ingrese que cantidad de " + ProductoB + " desea comprar:"))
        if(cantidadProductoB <= StockB){
            precioDesayuno =  producto(cantidadProductoB , PrecioB)
            precioTotal = precioTotal + precioDesayuno
            alert("el precio es  " + precioDesayuno)
        }
        else{
            alert("Actualmente tenemos " + StockB + " unidades de este producto")
        }
    }
    else if(opcion.toUpperCase() == 'PICADA'){
        let cantidadProductoC = parseInt(prompt("ingrese que cantidad de " + ProductoC + " desea comprar:"))
        if(cantidadProductoC <= StockC){
            precioPicada = producto (cantidadProductoC , PrecioC)
            precioTotal = precioTotal + precioPicada
            alert("el precio es   " + precioPicada)
        }
        else{
            alert("Actualmente tenemos " + StockC + " unidades de este producto")
        }
    }
    else{
        alert("No tenemos ese producto a la venta")
    }
    opcion = prompt("Ingrese que producto quiere comprar: \n - Torta\n - Desayuno\n - Picada\n - Escriba 'S' para finalizar" )
}
if(precioTotal != 0){
    alert("El precio total a pagar es : "+ "$" + precioTotal)
}
else{
    alert("gracias por su visita")
    
}