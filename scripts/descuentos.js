function Calculardescuento(){
    const input1 = document.getElementById("Inputproducto");
    const input2 = document.getElementById("Inputdescuento");
    const value1 = input1.value;
    const value2 = input2.value;
    const resultado =  ((value1*(100-value2))/100);
    if(resultado<0){
        resultado=resultado*-1;
    }
    //alert(resultado);
    const salida = document.getElementById("Salida");
    salida.innerHTML = "Tú precio con descuento son: s/." + resultado;
}
function Coupon(){
    const Coupon = document.getElementById("coupon");
    /*const radioboton = document.createElement("input");
    radioboton.setAttribute("type","radio");
    const opciones = document.createTextNode(coupons);
    const radioboton = document.createElement("Input");
    Coupon.appendChild(radioboton);
    const opcionesval = radioboton.value;
    */
    const inputcupon = document.getElementById("Inputcupon");
    const coupons = inputcupon.value;

    let descuento;
    switch (coupons) {
        case "abecedario":
            descuento = 15;
            break;
        
        case "descuento":
            descuento = 30;
            break;
        
        case "gratis":
            descuento = 100;
            break;
        
    }
    const input1 = document.getElementById("Inputproducto");
    const value1 = input1.value;

    const resultado =  ((value1*(100-descuento))/100);
    
    const salida = document.getElementById("Salida");
    salida.innerHTML = "Tú precio con descuento son: s/." + resultado;
}