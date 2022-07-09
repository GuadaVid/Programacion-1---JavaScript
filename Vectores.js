var v=[],result,prom,num,pos;
cargar(v);
document.write("Valores del arreglo<br>");
mostrar(v);
result=sumar(v);
document.write("La suma es: "+result+"<br>");
prom=result/v.length;
document.write("El promedio es: "+prom.toFixed(2)+"<br>");
document.write("El valor mayor es: "+mayor(v)+"<br>");
document.write("El valor menor es: "+menor(v)+"<br>");
ordenar(v);
document.write("Vector ordenado<br>");
mostrar(v);
num=parseInt(prompt("Ingrese el valor a buscar: "));
document.write("Valor a buscar: "+num+"<br>");
pos=buscar(v,num);
if(pos!=-1)
    document.write(num+" se encuentra en la posicion: "+pos+"<br>");
else
    document.write(num+" NO se encuentra en el vector<br>");

function cargar(v)
{
    var num;
    num=parseInt(prompt("ingrese un numero: "));
    document.write("Valor ingresado: "+num+"<br>");
    while(num!=0)
    {
        v.push(num);
        num=parseInt(prompt("ingrese un numero: "));
        document.write("Valor ingresado: "+num+"<br>");
    }
}

function mostrar(v)
{
    var i;
    for(i=0;i<v.length;i++)
        document.write(v[i]+"-");
    document.write("<br>");
}

function sumar(v)
{
    var s=0;
    for(i=0;i<v.length;i++)
        s=s+v[i];
    return s;
}

function mayor(v)
{
    var may,i;
    may=v[0];
    for(i=0;i<v.length;i++)
        if(v[i]>may)
            may=v[i];
    return may;
}

function menor(v)
{
    var men,i;
    men=v[0];
    for(i=0;i<v.length;i++)
        if(v[i]<men)
            men=v[i];
    return men;
}

function ordenar(v)
{
    var i,j,aux;
    for(i=0;i<v.length-1;i++)
        for(j=i+1;j<v.length;j++)
            if(v[i]>v[j])
            {
                aux=v[i];
                v[i]=v[j];
                v[j]=aux;
            }
}

function buscar(v,n)
{
    var i=0;
    while(i<v.length && v[i]!=n)
        i++;
    if(i==v.length)
        return -1;
    else
        return i;
}