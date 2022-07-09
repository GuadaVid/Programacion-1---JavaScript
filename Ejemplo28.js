var num, cont, pares=0, impares=0;
document.write("Numeros ingresados"+"<br>");
for (cont=1; cont<=10;cont++);
{
    num=parseInt(prompt("Ingrese un numero entero: "));
    document.write(num+"<br>");
    if (es_par (num)==true)
    pares++;
    else 
    impares++
}
document.write ("cantidad de pares"+pares+"<br>");
document.write ("cantidad de impares"+impares+"<br>");

function es_par(n)
{
    if (n%2==0)
    return true
    else
    return false
}