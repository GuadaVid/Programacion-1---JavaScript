var nota, cont=0,suma=0;
do
{
    nota=parseint(prompt("Ingrese una nota: "));
    if(nota>=1 && nota<=10)
    {
    suma=suma+nota;
    cont=cont+1;
    }
    else 
    alert (nota+ " es incorrecta");
}while (nota!=0);
if(cont!=0)
{
    document.write("La suma es: "+suma);
    document.write("La nota promedio es: "+suma/cont);
}
else 
document.write("No se ingresaron notas");