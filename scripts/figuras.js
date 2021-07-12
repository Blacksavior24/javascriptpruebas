// cuadrado, triangulo y circulo por defecto
//cuadrado, lado del cuadrado
console.group();
//const ladocuadrado = 4;
//console.log("El lado del cuadrado es "+ ladocuadrado+"cm");
function perimetrocuadrado(lado) {
    return lado*4+"cm";
}
function areacuadrado(lado) {
    return lado*lado+"cm^2";
}
console.groupEnd();
//triangulo, altura y lados 
console.group();
/*const ladotrianguloa = 3;
const ladotriangulobase = 4;
const ladotrianguloc = 5;
console.log("Los lados del triangulo son: "+ladotrianguloa +"cm,"+ladotriangulobase +"cm,"+ladotrianguloc +"cm");
*/
function perimetrotriangulo(a,b,c) {
    return a+b+c+"cm";
}
function areatriangulo(base,altura) {
    return (base*altura)/2+"cm^2";   
}
console.groupEnd();
//circulo, radio definido
console.group();
const pi = Math.PI;
function diametrocirculo(radio) {
    return radio*2+"cm";
}
function perimetrocirculo(radio) {
    return 2*pi*radio+"cm";
}
function areacirculo(radio) {
    return pi*radio*radio+"cm^2";
}

console.groupEnd();

//const, funciones y 
