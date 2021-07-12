// cuadrado, triangulo y circulo por defecto
//cuadrado, lado del cuadrado
console.group();
const ladocuadrado = 4;
console.log("El lado del cuadrado es "+ ladocuadrado+"cm");
const perimetrocuadrado = ladocuadrado*4;
console.log("El perimetro del cuadrado es "+ perimetrocuadrado+"cm");
const areacuadrado = ladocuadrado*ladocuadrado;
console.log("El area del cuadrado es "+ areacuadrado+"cm");
console.groupEnd();
//triangulo, altura y lados 
console.group();
const ladotrianguloa = 3;
const ladotriangulobase = 4;
const ladotrianguloc = 5;
console.log("Los lados del triangulo son: "+ladotrianguloa +"cm,"+ladotriangulobase +"cm,"+ladotrianguloc +"cm");
const perimetrotriangulo = ladotrianguloa+ladotriangulobase+ladotrianguloc;
console.log("El perimetro del triangulo es "+ perimetrotriangulo+"cm");
const alturatriangulo = 6;
console.log("La altura triangulo es "+ alturatriangulo+"cm");
const areatriangulo = (ladotriangulobase*alturatriangulo)/2;
console.log("El area del triangulo es "+ areatriangulo+"cm");
console.groupEnd();
//circulo, radio definido
console.group();
const pi = Math.PI;
const radiocirculo = 4;
console.log("El radio del circulo: "+radiocirculo +"cm");
const perimetrocirculo = 2*pi*radiocirculo;
console.log("El perimetro del circulo es "+ perimetrocirculo+"cm");
const areacirculo = pi*radiocirculo*radiocirculo;
console.log("El area del circulo es "+ areacirculo+"cm");
console.groupEnd();

//const, funciones y 
