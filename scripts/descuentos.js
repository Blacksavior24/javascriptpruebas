function Calculardescuento(){
    const input1 = document.getElementById("Inputproducto");
    const input2 = document.getElementById("Inputdescuento");
    const value1 = input1.value;
    const value2 = input2.value;
    const resultado =  ((value1*(100-value2))/100);
    if(resultado<0){
        resultado=resultado*-1;
    }
    alert(resultado);
    const salida = document.getElementById("Salida");
    const value3 = salida.value;
    salida = resultado;
}