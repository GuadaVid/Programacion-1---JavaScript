var Lado1, Lado2, Lado3;
Lado1=parseFloat(prompt("Ingrese el lado de un triangulo: "));
Lado2=parseFloat(prompt("Ingrese el 2do lado de un triangulo: "));
Lado3=parseFloat(prompt("Ingrese el 3er lado de un triangulo: "));

if(Lado1==Lado2 && Lado2==Lado3)
document.write("Es un triangulo EQUILATERO.");

else
if (Lado1!=Lado2 && Lado2!=Lado3 && Lado1!=Lado3)
document.write("Es un triangulo ESCALENO.");

else 
document.write("Esun triangulo ISOCELES.");