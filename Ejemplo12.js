var num,cont=1,suma=0;
while(cont<=5)
{
    num=parseInt(prompt("Ingrese un numero entero: "));
    suma=suma+num;
    cont=cont+1;
}
document.write("La suma es: "+suma);