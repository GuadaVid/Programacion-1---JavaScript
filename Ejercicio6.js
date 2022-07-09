var num1, num2,num3;
num1=parseFloat(prompt("Ingrese un numero entero: "));
num2=parseFloat(prompt("Ingrese otro numero entero:"));
num3=parseFloat(prompt("Ingrese otro numero entero:"));
if(num1<num2 && num1<num3){
    document.write(num1+" es menor.");
}
else 
if(num2<num3 && num2<num1){
    document.write(num2+" es el menor.");
}
else
document.write(num3+" es el menor.");
