var radio,sup,longitud;
radio=parseInt(prompt("Ingrese el radio: "));
sup=Math.PI*radio*radio;
longitud=2*Math.PI*radio;
document.write("PI-"+Math.PI+"<br>");
document.write("La superficie es: "+Math.round(sup)+"<br>");
document.write("La longitud es: "+longitud+toFixed(2)+"<br>");S