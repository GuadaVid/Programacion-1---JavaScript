var base, altura;
base=parseInt(prompt("Ingrese la base del rectangulo: "));
altura=parseInt(prompt("Ingrese la altura del rectangulo: "));
sup=superficie(base,altura)
per=perimetro(base,altura)

document.write("El perimetro es: "+per+"<br>");
document.write("La superficie es: "+sup);


function superficie(b,a)
{
    return b*a;

}
function perimetro(b,a)
{
    return (2*b)+(2*a);
}