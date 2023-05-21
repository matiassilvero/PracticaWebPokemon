//solo con colocar function ya podemos crear una funcion, no hace falta la variable
for (let index = 0; index < 10; index++) {
    console.log(index);
}

function saludar(){
    var user = document.getElementById("txtUser").value;
    var pass = document.getElementById("txtPass").value;
    alert("Te damos la bienvenida " + user);
    console.log("Tu password no es secreta, mira: "+ pass);
}
function sumar(){
    //es solo para practicar la funcion de suma, por eso usamos los datos de saludar()
    var n1 = parseInt(document.getElementById("txtUser").value);
    var n2 = parseInt(document.getElementById("txtPass").value);
    alert("El resultado de la suma es: " + (n1+n2));
}