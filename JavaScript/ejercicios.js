/*SOLO EJERCICIOS*/

function CalculadoraEdad(){ 
    let nombre = prompt("¿Cuál es tu nombre?");
    let fechaNacimiento = IngresarFechaNacimiento("Cuándo naciste? YYYY-MM-DD");
    let edad = CalcularEdad(fechaNacimiento);
    const dialogo = document.getElementById('resultado');
    dialogo.innerHTML = `Hola ${nombre}, tienes ${edad} años!`;
}

function TirandoFruta(){
    const dialogo = document.getElementById('resultado');
    const frutas = ["banana", "manzana", "mandarina", "naranja", "pera", "melon", "sandia", "frutilla", "arandano", "ananana"];
    console.log("Acá ahy una lista con diez frutas:");
    for (let i = 0; i < frutas.length; i++)
    {
        console.log(`- ${frutas[i]}`);
    }
    let fruta = prompt("Ingresa el nombre de una fruta.");
    fruta = fruta.toLowerCase();
    let existe = false;
    for (let i = 0; i < frutas.length; i++)
    {
        if(fruta == frutas[i]){
            existe = true;
        }
    }
    if (existe)
    {
        dialogo.innerHTML = `Sí, tenemos ${fruta}!`;
    }
    else{
        dialogo.innerHTML = `No, no tenemos ${fruta}!`;
    }
    
}


/*EJERCICIO 3
    A. True
    B. False. Con los tres iguales o "comparador estricto", javascript no solo se fija los caracteres sino que también el tipo de dato
    C. 10.6 es del tipo de dato número / number. Todos estos se guardan como decimales, aunque sean enteros.
    D. Sí, es cierto. Podemos llegar a la conclusión de que javascript iguala a 1 con true/verdadero y a 0 con false/falso
*/

function yoObjeto()
{
    let ciudad = new Object();
    ciudad.nombre = prompt("Ingrese el nombre de la ciudad.");
    ciudad.fechaFundación = IngresarFechaNacimiento("Ingrese la fecha de fundación.");
    ciudad.poblacion = prompt("Ingrese la cantidad de habitantes.");
    ciudad.extension = prompt("Ingrese la extensión.");
    let informacion = "";
    const dialogo = document.getElementById('resultado');
    for (const propiedad in ciudad)
    {
        dialogo.innerHTML += `<p>${propiedad}: ${ciudad[propiedad]}</p>`;
    }
}

function dobleElementos(array)
{
    let array2 = array;
    for(let i = 0; i < array.length; i++)
    {
        array2[i] = array[i] * 2;
    }
    return array2;
}

function triangulo()
{
    let asteriscos = "";
    for(let i = 0; i < 5; i++)
    {
        asteriscos += "*"
        console.log(asteriscos);
    }
}

/*function piramide()
{
*/

function nombresConA()
{
    let nombres = prompt("Ingrese una lista de nombres separados por comas.");
    nombres = nombres.split(",");
    const dialogo = document.getElementById('resultado');
    dialogo.innerHTML += `<p>Los nombres que empiezan con A son:</p> <ul>`;
    for (let i = 0; i < nombres.length; i++)
    {
        if(nombres[i].charAt(0).toLowerCase() == 'a')
        {
            dialogo.innerHTML += `<li>${nombres[i]}</li>`;
        }
    }
    dialogo.innerHTML += `</ul>`;
}

function reemplazarPalabras() //reemplaza solo la primera vez que está la palabra, debería hacerlo todas las veces?
{
    const input = prompt("Ingrese un texto.");
    const aReemplazar = prompt("¿Qué palabra quiere cambiar?");
    const reemplazo = prompt("¿A qué la quiere cambiar?");
    const dialogo = document.getElementById('resultado');
    dialogo.innerHTML = `${input.replace(aReemplazar, reemplazo)}`;
}

function cortarTexto() //depende de si queres que se incluya o no el número de letra mencionado, hay que +1 a num para incluirlo
{
    let input = prompt("Ingrese un texto.");
    let num = prompt("ingrese un número.");
    const dialogo = document.getElementById('resultado');
    dialogo.innerHTML = `${input.substring(0, num)}`;    
}

stringSeparado();
function stringSeparado()
{
    let input = prompt("Ingrese una lista separada por comas.");
    let array = input.split(',');
    const dialogo = document.getElementById('resultado');
    dialogo.innerHTML += `<p>Elementos de la lista:</p> <ul>`;
    for (let i = 0; i < array.length; i++)
    {        
        dialogo.innerHTML += `<li>${array[i]}</li>`;
    }
    dialogo.innerHTML += `</ul>`;
}