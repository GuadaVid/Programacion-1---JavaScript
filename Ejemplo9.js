var num;
num=parseFloat(prompt("Ingrese un numero real: "))
if(num>0){
    document.write(num+" es positivo");
}
else 
    if (num<0)
    document.write(num+" es negativo");
else
    document.write("el numero es cero.");
