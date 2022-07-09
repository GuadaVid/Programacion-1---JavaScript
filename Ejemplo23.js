var c1,c2,per;
c1=parseInt(prompt("ingrese el cateto 1: "));
c2=parseInt(prompt("Ingrese el cateto 2: "));
perimetro=per(c1,c2)
document.write("el perimetro es: "+perimetro);

function per(c1,c2){
    var hipo;
    hipo=hipotenusa(c1,c2);
    return c1+c2+hipo;
}
function hipotenusa(c1,c2){
    return Math.sqrt(c1*c1 + c2*c2);
}