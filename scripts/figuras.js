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
    return (a+b+c)+"cm";
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
    return 2*radio*pi+"cm";
}
function areacirculo(radio) {
    return radio*radio*pi+"cm^2";
}

console.groupEnd();

//const, funciones
//Cal cuadrado
function CalcPeriCuadr(){
    const input =document.getElementById("InputCuadrado");
    const value = input.value;
    const perimetroc = perimetrocuadrado(value);
    alert(perimetroc);
}

function CalcAreaCuadr(){
    const input =document.getElementById("InputCuadrado");
    const value = input.value;
    const areac = areacuadrado(value);
    alert(areac);    
}
//cal triangulo
function CalcPeriTriang(){
    const inputa =document.getElementById("InputTrianguloA");
    const valuea = parseInt(inputa.value);
    const inputbase =document.getElementById("InputTrianguloBase");
    const valuebase = parseInt(inputbase.value);
    const inputc =document.getElementById("InputTrianguloC");
    const valuec = parseInt(inputc.value);
    const perimetrot = perimetrotriangulo(valuea,valuebase,valuec);
    alert(perimetrot);
}

function CalcAreaTriang(){
    const inputbase =document.getElementById("InputTrianguloBase");
    const valuebase = inputbase.value;
    const inputaltura =document.getElementById("InputTrianguloAltura");
    const valuealtura = inputaltura.value;
    
    const areat = areatriangulo(valuebase,valuealtura);
    alert(areat);
}
// cal circulo
function CalcDiametro() {
    const radio = document.getElementById("InputCirculo");
    alert(diametrocirculo(radio.value));
}

function CalcPeriCirc(){
    const radio =document.getElementById("InputCirculo");
    alert(perimetrocirculo(radio.value));
}

function CalcAreaCirc(){
    const radio =document.getElementById("InputCirculo");
    alert(areacirculo(radio.value));    
}
