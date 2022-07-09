var nota,suma=0, cont=0;
nota=parseint(prompt("Ingrese una nota: "));

while(nota!=0)
{
    if(nota>=1 && nota<=10)
    {
    suma=suma+nota;
    cont=cont+1;
    }
    else 
    alert (nota+ " es incorrecta");
    nota=parseint(prompt("Ingrese una nota: "));
}
if(cont!=0)
{
    document.write("La suma es: "+suma);
    document.write("La nota promedio es: "+suma/cont);
}
else 
document.write("No se ingresaron notas");
