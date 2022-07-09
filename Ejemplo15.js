var nota,cont=1,suma=0;
do
{
nota=parseInt(prompt("Ingrese una nota: "));
if(nota>=1 && nota<=10)
{
    suma=suma+nota
    cont=cont=1
}
else
alert(nota+"nota incorrecta");
}
while(cont<=5)
document.write("La suma es: "+suma+"<br>");
document.write("La nota promedio es: "+suma/5);