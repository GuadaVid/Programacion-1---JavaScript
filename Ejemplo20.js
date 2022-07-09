var num, negativo=0, positivo=0, cont, ceros=0;

for (cont=1;cont<=10;cont=cont+1)
{
    num=parseint(prompt("Ingrese un numero: "));
    document.write(num+"<br>");
    if (num>0)
    positivo=positivo+1;

    else if (num<0)
    negativo=negativo+1;
    else 
    ceros=ceros+1;
}
document.write("cantidad de positivos: "+positivo);
document.write("cantidad de negativos: "+negativo);
document.write("cantidad de ceros: "+ceros);
