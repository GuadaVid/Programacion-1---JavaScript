var A=[],B=[],C=[],cant,pe;
cant=parseInt(prompt("Ingrese la cantidad de valores: "));
document.write("Cantidad de valores: "+cant+"<br>");
document.write("Carga de elementos de A<br>");
cargar(A,cant);
document.write("Carga de elementos de B<br>");
cargar(B,cant);
document.write("Valores del vector A<br>");
mostrar(A)
document.write("Valores del vector B<br>");
mostrar(B)
sumar(A,B,C);
document.write("Vector suma<br>");
mostrar(C);
pe=producto_escalar(A,B);
document.write("El producto escalar es: "+pe+"<br>");

function cargar(V,N)
{
    var cont,num;
    for(cont=1;cont<=N;cont++)
    {
        num=parseInt(prompt("Ingrese un entero: "));
        V.push(num);
    }
}

function mostrar(V)
{
    var i;
    for(i=0;i<V.length;i++)
        document.write(V[i]+"-");
    document.write("<br>");
}

function sumar(A,B,C)
{
    var i;
    for(i=0;i<A.length;i++)
        C.push(A[i]+B[i]);
}

function producto_escalar(A,B)
{
    var i,suma=0;
    for(i=0;i<A.length;i++)
        suma=suma+A[i]*B[i];
    return suma;
}