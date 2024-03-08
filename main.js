let nombre = prompt("Ingrese su nombre:")

let camisa = 37000;
let pantalon = 55000;
let conjunto = 115000;
let falda = 38000;

alert ("Bienvenido " + nombre+ " a BOUTIQUE BLAZE" )

let pedir = prompt("¿Tenes decidida tu compra? Ingrese SI o NO")

if ((pedir === "no") || (pedir === "No  ") ||(pedir === "NO") ||(pedir === "nO")){
    alert ("Esperemos volverte a ver por aqui, muchas gracias por tu visita!");
}else {
    let orden = prompt ("Ingrese su pedido con los numeros de referencia: 1 (camisa), 2 (pantalon), 3 (conjunto), 4 (falda)");

switch (orden){
    case "1":
    alert ("Gracias por su pedido. El monto a pagar es de: $ " + camisa);
    break;
    agradecimiento ()


    case "2":
    alert ("Gracias por su pedido. El monto a pagar es de: $ " + pantalon);
    break;
    agradecimiento ()


    case "3":
    alert ("Gracias por su pedido. El monto a pagar es de: $ " + conjunto);
    break;
    agradecimiento ()


    case "4":
    alert ("Gracias por su pedido. El monto a pagar es de: $ " + falda);
    break;
    agradecimiento ()
}
}
function agradecimiento (){
    alert (nombre + ", ya procesamos tu compra. Pronto estaremos comunicandonos contigo")
}
