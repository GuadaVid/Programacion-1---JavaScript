var nota,cont=1,suma=0;
while(cont<5)
{
    nota=parseInt(prompt("Ingrese nota: "));
    if(nota>=1 && nota<=10)
    {
        suma=suma+nota;
        cont=cont+1;
    }
    else
    alert(nota+"Nota Incorrecta");
    
}
document.write("La suma es: "+suma+"<br>");
document.write("La nota promedio es: "+suma/5);