// Escribe un programa que pida dos números y escriba en la pantalla cual es el
// mayor.

let numero1 = parseInt(prompt("Ingrese un  numero"));
let numero2 = parseInt(prompt("Ingrese un  numero"));

if(numero1 > numero2){
    document.write(`El numero ${numero1} es mayor que ${numero2}`)
    }else{
        document.write(`El numero ${numero2} es mayor que ${numero1}`)
    }
