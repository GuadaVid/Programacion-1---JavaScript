var vtas,suma=0,sueldo;
vtas=parseInt(prompt("Ingrese la ventas: "));
document.write("Venta: "+vtas+"<br>");
while(vtas!=-1) 
{
    if(vtas>=0)
    {
        sueldo=calcular(vtas);
        document.write("Sueldo del vededor: "+sueldo.toFixed(2)+"<br>");
        suma=suma+sueldo;
    }
    else
    {
        alert("Venta incorrecta");
    }
    vtas=parseInt(prompt("Ingrese la ventas: "));
    document.write("Venta: "+vtas+"<br>");
}
document.write("Total de sueldos a pagar: "+suma.toFixed(2)+"<br>");

function calcular(v)
{
    return 200+v*0.09;
}