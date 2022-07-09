var horas, precio,sueldo,total=0,cont;
for(cont=1;cont<=5;cont++)
{
    horas=parseInt(prompt("Ingrese las horas trabajadas: "));
    document.write("Horas: "+horas);
    precio=parseInt(prompt("Ingrese precio por hora trabajada: "));
    document.write("Horas: "+precio+"<br>");
    sueldo=calcular(horas,precio);
    document.write("Sueldo a cobrar: por el obrero "+cont+": "+sueldo+"<br>");
    total=total+sueldo;
}
document.write("Total a pagar: "+total+"<br>");


function calcular (hs,p)
{
    return p*hs;
}