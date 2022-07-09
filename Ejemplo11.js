var n1, n2, oper;
n1=parseInt(prompt("Ingrese el primer entero: "));
n2=parseInt(prompt("Ingrese el segundo entero: "));
oper=prompt("Ingrese la operacion (+,-,*,/): ");
switch(oper)
{
    case '+':
        document.write("La suma es: "+(n1+n2));
        break;
    case '-':
        document.write("La resta es: "+(n1-n2));
        break;
    case '*':
        document.write("El producto es: "+n1*n2);
        break;
    case '/':
            if (n2!=0)
            document.write("El cociente es: "+n1/n2);
        else
        document.write("No se puede dividir por cero")
        break;
    default:
        document.write("Operacion incorrecta");
}