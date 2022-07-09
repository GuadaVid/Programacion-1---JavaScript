var gradosc,gradosf;
gradosc=parseInt(prompt("Ingrese los grados centigrados: "));
gradosf=fahrenheit(gradosc);
document.write("Grados C = "+gradosc+" equivalen a "+gradosf+" grados F"+"<br>");

function fahrenheit(gc)
{
    return 9/5*gc+32;
}