var nota;
nota=parseFloat(prompt("Ingrese la nota del examen: "));

if(nota<=10 && nota>=1){

if(nota==10)
document.write(nota+" el resultado es EXCELENTE");

else
 if (nota<10 && nota>=8)
document.write(nota+" el resultado es MUY BUENO");

else
if (nota<8 && nota>=6)
document.write(nota+" el resultado es BUENO");

else
if (nota<6 && nota>=4)
document.write(nota+" el resultado es REGULAR");

else
if (nota<4 && nota>=1)
document.write(nota+" el resultado es MALO");
}
else
document.write(nota+" el resultado es INCORRECTO");

