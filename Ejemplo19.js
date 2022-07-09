var num, cont=0;
while (cont<=5)
{
    num=parseint(prompt("Ingrese un numero: "));
    if(num%2==0)
    {
        cont=cont+1
        if (num%4==0)
        alert ("Numero multiplo de 4")
    }
}
document.write("Fin del programa");