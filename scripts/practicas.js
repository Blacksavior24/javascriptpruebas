//var nombre = "Edward";


//function saymyname(meow){
//    console.log(meow);
//}



/*function saludo(name,last,nickname) {
    name = name;
    last = last;
    nickname = nickname;
    let complete = name+" "+last;
    console.log("Mi nombre es "+complete+" pero prefiero que me digas "+nickname+".");
}
*/

const typeofsuscrip = ["Free","Basic","Expert","Expert+"];


function res() {
    let rpta = prompt("Qué tipo eres?:")
    if(rpta == typeofsuscrip[0])
        alert("Todo free");
    else if(rpta == typeofsuscrip[1])
        alert("Casi todo");
    else if(rpta == typeofsuscrip[2])
        alert("puedes tomar todo");
    else if(rpta == typeofsuscrip[3])
        alert("Dos personas");
    else{
        alert("ninguno");
    }
}


