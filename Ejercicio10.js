var num, mayor, menor, cont=1;
while(cont<=10)
{
    num=parseInt(prompt("Ingrese un numero: "));
    document.write(num+"<br>");
    if(cont==1)
    {
        menor=num;
        mayor=num;
    }
    else
    {
        if(num<menor)
        menor=num;
        if(num>mayor)
        mayor=num;
    }
    cont=cont+1
}
document.write("El mayor es: "+mayor+"<br>");
document.write("El menor es: "+menor);