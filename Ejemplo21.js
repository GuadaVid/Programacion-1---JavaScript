var ventas,sueldo;
do
{
    ventas=parsefloat(prompt("Ingrese una venta -1 para terminar: "));
    if(ventas!=-1)
    {
        if(ventas>=0)
        {
            sueldo=ventas*9/100;
            alert ("El sueldo es:"+sueldo.toFixed(2));
        }
        else
        alert("venta incorrecta");
    }
}while(ventas!=-1);
document.write("Venta incorrecta");