var dolares, pesos;
pesos=parseFloat(prompt("Ingrese el monto de pesos "));
dolares=parseFloat(prompt("Ingrese el valor del dolar "));
document.write("Su conversion es: "+(pesos/dolares).toFixed(3));
