let listaUsario = [];

function datosUsuario () {
    let valorNumeroDatos =  numeroDatos ();

    //trae los datos a js y los agrega a la
    for (let i = 1; i < (valorNumeroDatos + 1); i++){
        let id = i;
        let dato = inputDatoUsiario = document.getElementById(id);
        let valueDato = parseInt(dato.value);

        let aggElemento = listaUsario.push(valueDato);
    }
}

function Mediana () {
    //borrar datos del array 
    listaUsario = [];

    datosUsuario ();
    let aux2 = 0;
    const order = listaUsario.sort((a,b)=> a - b);
    if(order.length%2==0){
        aux2 = (order[aux-1] + order[aux])/2;
    }
    else{
        const value = parseInt(aux);
        aux2 = order[aux];
    };
    const value2 = aux2;
    const resultado = document.getElementById("resultado");
    resultado.innerText = "La mediana es: " + value2;
}

function numeroDatos () {
    //saber cuantos input son
    const inputNumeroDatos = document.getElementById("numeroDatos");
    const value = parseInt(inputNumeroDatos.value);
    return value;
}

function aggInput () {
    //eliminar todos los elementos hijos del padre; 
    var elemento = document.getElementById("aggInputs");
    while (elemento.firstChild) {
      elemento.removeChild(elemento.firstChild);
    };
    //quitar respuesta
    const resultado = document.getElementById("resultado");
    resultado.innerText = "";

    //colocar los imput
    let valorNumeroDatos =  numeroDatos ();

   for(let i = 1; i < (valorNumeroDatos + 1); i++ ) {
        
        var direccion = '<label for="' + i + '">dato: </label> <input id="' + i + '"type="number"></input>';
        let input1 = document.getElementById("aggInputs");
        input1.insertAdjacentHTML('beforeend', direccion);
    }
    let button = document.getElementById("aggInputs");
    button.insertAdjacentHTML('beforeend', '<button type="button"onclick="Mediana()">Calcular</button>');
}

