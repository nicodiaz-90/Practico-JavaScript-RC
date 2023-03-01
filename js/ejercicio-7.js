// Escribe un programa que pida 3 números y escriba en la pantalla el mayor de
// los tres.

let num_1 = parseInt(prompt("Ingrese un  numero"));
let num_2 = parseInt(prompt("Ingrese un  numero"));
let num_3 = parseInt(prompt("Ingrese un  numero"));

 if(num_1 > num_2 && num_1 > num_3){
            document.write(`El numero mas grande de los ingresados es ${num_1}`)
        } else if(num_2 > num_1 && num_2 > num_3){
            document.write(`El numero mas grande de los ingresados es ${num_2}`)
        } else{
            document.write(`El numero mas grande de los ingresados es ${num_3}`)
        }