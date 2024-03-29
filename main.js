let totalCarrito = 0

class Producto{
    constructor(nombre, precio){
        this.nombre = nombre
        this.precio = precio
    }
}

let camisaLelu = new Producto("CAMISA LELU", 37000)
let camisaKira = new Producto("CAMISA KIRA", 35000)
let camisaLou = new Producto("CAMISA LOU", 37500)
let conjuntoBla = new Producto("CONJUNTO BLA", 123000)
let conjuntoLoui = new Producto("CONJUNTO LOUI", 115000)
let pantalonFlopy = new Producto("PANTALON FLOPY", 55000)
let pantalonCarol = new Producto("PANTALON CAROL", 115000)
let faldaRick = new Producto("FALDA RICK", 38000)
let remeraCandace = new Producto("REMERA CANDACE", 18000)
let shortBe = new Producto("SHORT BE", 25000)
let topTrinity = new Producto("TOP TRINITY", 28000)
let vestidoLauren = new Producto("VESTIDO LAUREN", 36000)
let vestidoPaul = new Producto("VESTIDO PAUL", 45000)
let vestidoSofi = new Producto("VESTIDO SOFI", 67000)
let vestidoMili = new Producto("VESTIDO MILI", 38000)
let vestidoCamelia = new Producto("VESTIDO CAMELIA", 25000)

const arrayRopa = [camisaLelu, camisaKira, camisaLou, conjuntoBla, conjuntoLoui, pantalonFlopy, pantalonCarol, faldaRick, remeraCandace, shortBe, topTrinity, vestidoLauren, vestidoPaul, vestidoSofi, vestidoMili, vestidoCamelia]

function comprar(){
    let opciones = parseInt(prompt(`Pulse 1 si desea llevar un ${arrayRopa[0].nombre} por $${arrayRopa[0].precio}\nPulse 2 si desea llevar un ${arrayRopa[1].nombre} por $${arrayRopa[1].precio}\nPulse 3 si desea llevar un ${arrayRopa[2].nombre} por $${arrayRopa[2].precio}\nPulse 4 si desea llevar un ${arrayRopa[3].nombre} por $${arrayRopa[3].precio}\nPulse 5 si desea llevar un ${arrayRopa[4].nombre} por $${arrayRopa[4].precio}\nPulse 6 si desea llevar un ${arrayRopa[5].nombre} por $${arrayRopa[5].precio}\nPulse 7 si desea llevar un ${arrayRopa[6].nombre} por $${arrayRopa[6].precio}\nPulse 8 si desea llevar un ${arrayRopa[7].nombre} por $${arrayRopa[7].precio}\nPulse 9 si desea llevar un ${arrayRopa[8].nombre} por $${arrayRopa[8].precio}\nPulse 10 si desea llevar un ${arrayRopa[9].nombre} por $${arrayRopa[9].precio}\nPulse 11 si desea llevar un ${arrayRopa[10].nombre} por $${arrayRopa[10].precio}\nPulse 12 si desea llevar un ${arrayRopa[11].nombre} por $${arrayRopa[11].precio}\nPulse 13 si desea llevar un ${arrayRopa[12].nombre} por $${arrayRopa[12].precio}\nPulse 14 si desea llevar un ${arrayRopa[13].nombre} por $${arrayRopa[13].precio}\nPulse 15 si desea llevar un ${arrayRopa[14].nombre} por $${arrayRopa[14].precio}\nPulse 16 si desea filtrar por precio más bajo`))
    
    while (opciones < 1 || opciones > 16){
        opciones = parseInt(prompt(`Pulse 1 si desea llevar un ${arrayRopa[0].nombre} por $${arrayRopa[0].precio}\nPulse 2 si desea llevar un ${arrayRopa[1].nombre} por $${arrayRopa[1].precio}\nPulse 3 si desea llevar un ${arrayRopa[2].nombre} por $${arrayRopa[2].precio}\nPulse 4 si desea llevar un ${arrayRopa[3].nombre} por $${arrayRopa[3].precio}\nPulse 5 si desea llevar un ${arrayRopa[4].nombre} por $${arrayRopa[4].precio}\nPulse 6 si desea llevar un ${arrayRopa[5].nombre} por $${arrayRopa[5].precio}\nPulse 7 si desea llevar un ${arrayRopa[6].nombre} por $${arrayRopa[6].precio}\nPulse 8 si desea llevar un ${arrayRopa[7].nombre} por $${arrayRopa[7].precio}\nPulse 9 si desea llevar un ${arrayRopa[8].nombre} por $${arrayRopa[8].precio}\nPulse 10 si desea llevar un ${arrayRopa[9].nombre} por $${arrayRopa[9].precio}\nPulse 11 si desea llevar un ${arrayRopa[10].nombre} por $${arrayRopa[10].precio}\nPulse 12 si desea llevar un ${arrayRopa[11].nombre} por $${arrayRopa[11].precio}\nPulse 13 si desea llevar un ${arrayRopa[12].nombre} por $${arrayRopa[12].precio}\nPulse 14 si desea llevar un ${arrayRopa[13].nombre} por $${arrayRopa[13].precio}\nPulse 15 si desea llevar un ${arrayRopa[14].nombre} por $${arrayRopa[14].precio}\nPulse 16 si desea filtrar por precio más bajo`))
    }
    let productoElegido;
    if (opciones == 1){
        productoElegido = arrayRopa[0]
        totalCarrito += arrayRopa[0].precio 
    }
    else if (opciones == 2){
        productoElegido = arrayRopa[1]
        totalCarrito += arrayRopa[1].precio
    }
    else if (opciones == 3){
        productoElegido = arrayRopa[2]
        totalCarrito += arrayRopa[2].precio
    }
    else if (opciones == 4){
        productoElegido = arrayRopa[3]
        totalCarrito += arrayRopa[3].precio
    }
    else if (opciones == 5){
        productoElegido = arrayRopa[4]
        totalCarrito += arrayRopa[4].precio
    }
    else if (opciones == 6){
        productoElegido = arrayRopa[5]
        totalCarrito += arrayRopa[5].precio
    }
    else if (opciones == 7){
        productoElegido = arrayRopa[6]
        totalCarrito += arrayRopa[6].precio
    }
    else if (opciones == 8){
        productoElegido = arrayRopa[7]
        totalCarrito += arrayRopa[7].precio
    }
    else if (opciones == 9){
        productoElegido = arrayRopa[8]
        totalCarrito += arrayRopa[8].precio
    }
    else if (opciones == 10){
        productoElegido = arrayRopa[9]
        totalCarrito += arrayRopa[9].precio
    }
    else if (opciones == 11){
        productoElegido = arrayRopa[10]
        totalCarrito += arrayRopa[10].precio
    }
    else if (opciones == 12){
        productoElegido = arrayRopa[11]
        totalCarrito += arrayRopa[11].precio
    }
    else if (opciones == 13){
        productoElegido = arrayRopa[12]
        totalCarrito += arrayRopa[12].precio
    }
    else if (opciones == 14){
        productoElegido = arrayRopa[13]
        totalCarrito += arrayRopa[13].precio
    }
    else if (opciones == 15){
        productoElegido = arrayRopa[14]
        totalCarrito += arrayRopa[14].precio
    }
    else if (opciones == 16){
        arrayRopa.sort((a,b) => a.precio - b.precio)
        opciones = parseInt(prompt(`Pulse 1 si desea llevar un ${arrayRopa[0].nombre} por $${arrayRopa[0].precio}\nPulse 2 si desea llevar un ${arrayRopa[1].nombre} por $${arrayRopa[1].precio}\nPulse 3 si desea llevar un ${arrayRopa[2].nombre} por $${arrayRopa[2].precio}\nPulse 4 si desea llevar un ${arrayRopa[3].nombre} por $${arrayRopa[3].precio}\nPulse 5 si desea llevar un ${arrayRopa[4].nombre} por $${arrayRopa[4].precio}\nPulse 6 si desea llevar un ${arrayRopa[5].nombre} por $${arrayRopa[5].precio}\nPulse 7 si desea llevar un ${arrayRopa[6].nombre} por $${arrayRopa[6].precio}\nPulse 8 si desea llevar un ${arrayRopa[7].nombre} por $${arrayRopa[7].precio}\nPulse 9 si desea llevar un ${arrayRopa[8].nombre} por $${arrayRopa[8].precio}\nPulse 10 si desea llevar un ${arrayRopa[9].nombre} por $${arrayRopa[9].precio}\nPulse 11 si desea llevar un ${arrayRopa[10].nombre} por $${arrayRopa[10].precio}\nPulse 12 si desea llevar un ${arrayRopa[11].nombre} por $${arrayRopa[11].precio}\nPulse 13 si desea llevar un ${arrayRopa[12].nombre} por $${arrayRopa[12].precio}\nPulse 14 si desea llevar un ${arrayRopa[13].nombre} por $${arrayRopa[13].precio}\nPulse 15 si desea llevar un ${arrayRopa[14].nombre} por $${arrayRopa[14].precio}`))
        while (opciones < 1 || opciones > 16){
            opciones = parseInt(prompt(`Pulse 1 si desea llevar un ${arrayRopa[0].nombre} por $${arrayRopa[0].precio}\nPulse 2 si desea llevar un ${arrayRopa[1].nombre} por $${arrayRopa[1].precio}\nPulse 3 si desea llevar un ${arrayRopa[2].nombre} por $${arrayRopa[2].precio}\nPulse 4 si desea llevar un ${arrayRopa[3].nombre} por $${arrayRopa[3].precio}\nPulse 5 si desea llevar un ${arrayRopa[4].nombre} por $${arrayRopa[4].precio}\nPulse 6 si desea llevar un ${arrayRopa[5].nombre} por $${arrayRopa[5].precio}\nPulse 7 si desea llevar un ${arrayRopa[6].nombre} por $${arrayRopa[6].precio}\nPulse 8 si desea llevar un ${arrayRopa[7].nombre} por $${arrayRopa[7].precio}\nPulse 9 si desea llevar un ${arrayRopa[8].nombre} por $${arrayRopa[8].precio}\nPulse 10 si desea llevar un ${arrayRopa[9].nombre} por $${arrayRopa[9].precio}\nPulse 11 si desea llevar un ${arrayRopa[10].nombre} por $${arrayRopa[10].precio}\nPulse 12 si desea llevar un ${arrayRopa[11].nombre} por $${arrayRopa[11].precio}\nPulse 13 si desea llevar un ${arrayRopa[12].nombre} por $${arrayRopa[12].precio}\nPulse 14 si desea llevar un ${arrayRopa[13].nombre} por $${arrayRopa[13].precio}\nPulse 15 si desea llevar un ${arrayRopa[14].nombre} por $${arrayRopa[14].precio}`))
        }
        if (opciones == 1){
            productoElegido = arrayRopa[0]
            totalCarrito += arrayRopa[0].precio 
        }
        else if (opciones == 2){
            productoElegido = arrayRopa[1]
            totalCarrito += arrayRopa[1].precio
        }
        else if (opciones == 3){
            productoElegido = arrayRopa[2]
            totalCarrito += arrayRopa[2].precio
        }
        else if (opciones == 4){
            productoElegido = arrayRopa[3]
            totalCarrito += arrayRopa[3].precio
        }
        else if (opciones == 5){
            productoElegido = arrayRopa[4]
            totalCarrito += arrayRopa[4].precio
        }
        else if (opciones == 6){
            productoElegido = arrayRopa[5]
            totalCarrito += arrayRopa[5].precio
        }
        else if (opciones == 7){
            productoElegido = arrayRopa[6]
            totalCarrito += arrayRopa[6].precio
        }
        else if (opciones == 8){
            productoElegido = arrayRopa[7]
            totalCarrito += arrayRopa[7].precio
        }
        else if (opciones == 9){
            productoElegido = arrayRopa[8]
            totalCarrito += arrayRopa[8].precio
        }
        else if (opciones == 10){
            productoElegido = arrayRopa[9]
            totalCarrito += arrayRopa[9].precio
        }
        else if (opciones == 11){
            productoElegido = arrayRopa[10]
            totalCarrito += arrayRopa[10].precio
        }
        else if (opciones == 12){
            productoElegido = arrayRopa[11]
            totalCarrito += arrayRopa[11].precio
        }
        else if (opciones == 13){
            productoElegido = arrayRopa[12]
            totalCarrito += arrayRopa[12].precio
        }
        else if (opciones == 14){
            productoElegido = arrayRopa[13]
            totalCarrito += arrayRopa[13].precio
        }
        else if (opciones == 15){
            productoElegido = arrayRopa[14]
            totalCarrito += arrayRopa[14].precio
        }
    }
    let confirmacion = confirm(`Usted eligió ${productoElegido.nombre} y cuesta $${productoElegido.precio}, desea agregarlo al carrito?`)
    if (confirmacion == true){
        let confirmacion2 = confirm("El producto se agregó al carrito, desea comprar algo más?")
        if (confirmacion2 == true){
            comprar()
        } else{
            let confirmacion3 = confirm(`El total es de ${totalCarrito}, desea realizar el pago?`)
            if (confirmacion3 == true){
                alert("Gracias por su compra")
            } else{
                alert("Ok, nos vemos pronto!")
            }
        }
    } else{
        let confirmacion4 = confirm("Va a continuar comprando?")
        if (confirmacion4 == true){
            comprar()
        } else{
            alert("Ok, nos vemos pronto!")
        }
    }
}

comprar()