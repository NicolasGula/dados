// Se crean dos numeros 
let num1 = Math.floor(Math.random() * 6) + 1;
let num2 = Math.floor(Math.random() * 6) + 1;

//Cambia el numero de la imagen
let img1 = "images/dado" + num1 + ".png";
let img2 = "images/dado" + num2 + ".png";

//Aplicar el cambio de imagen
document.querySelector(".dice .img1").setAttribute("src", img1)
document.querySelector(".dice .img2").setAttribute("src", img2)

//Muestra en pantalla el ganador o si hay empate
if (num1 > num2) {
    document.querySelector(".result").innerHTML = "<p>JUGADOR 1 GANA!</p>"
} else if (num2 > num1) {
    document.querySelector(".result").innerHTML = "<p>JUGADOR 2 GANA!</p>"
} else if (num1 === num2) {
    document.querySelector(".result").innerHTML = "<p>EMPATE</p>"
}