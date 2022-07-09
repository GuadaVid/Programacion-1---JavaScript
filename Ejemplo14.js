var nota, cont, suma=0;
for(cont=1;cont<=5;cont=cont+1);
{
    nota=parseint(promp("Ingrese la nota: "));
    if (nota>=1 && nota<=10)
    suma=suma+nota;
    else
    alert(nota+"es incorrecta");
}
document.write("La suma es: "+suma+"<br>");
document.write("La nota promedio es: "+suma/5);