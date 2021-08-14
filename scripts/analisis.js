const salariosPer = peru.map(
    function(personita){
        return personita.salary;
    }
);

const salariosPerSorted = salariosPer.sort(
    function(a,b){
        return a - b;
    }
);

function par(numero){
    return (numero %2 === 0);
}

function mediana(lista){
    const mitad = parseInt(lista.length/2);
    if (par(lista.length)) {
        return (lista[mitad-1]+lista[mitad])/2;
    }
    else{
        return lista[mitad];
    }
}
//corte
const splicestart = (salariosPerSorted.length*90)/100;
const splicecount = salariosPerSorted.length-splicestart;

//ahora solo del top 10
const salariosPertop = salariosPerSorted.splice(splicestart,splicecount);

const medianageneral = mediana(salariosPerSorted);
const medianatop = mediana(salariosPertop);
alert(salariosPer.length);
alert(salariosPerSorted);

console.log({
    medianageneral,
    medianatop
}); 