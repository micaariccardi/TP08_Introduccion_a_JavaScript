/*SOLO EJERCICIOS*/

function CalculadoraEdad(){ 
    let nombre = prompt("¿Cuál es tu nombre?");
    let fechaNacimiento = ingresarFechaNacimiento();
    let edad = CalcularEdad(fechaNacimiento);{
    const dialogo = document.getElementById('resultado')
    dialogo.innerHTML = `Hola ${nombre}, tienes ${edad} años!`
}
}