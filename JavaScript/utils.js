/*Funciones para que funcionen los ejercicios */

/*1*/
function IngresarFechaNacimiento(mensaje){
    let valido = false;
    let nacimiento;
    do{
        nacimiento = prompt(mensaje);
        valido = ValidarFechaNacimiento(nacimiento);
    }
    while(!valido);
    return nacimiento;
}

function ValidarFechaNacimiento(fecha){
    const diasEnMes = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const fechaArray = fecha.split('-');
    const date = new Date();
    const hoy = [date.getFullYear, date.getMonth, date.getDate];
    if (fechaArray[0] <= 0 || (fechaArray[1] < 1 || fechaArray[1] > 12) || (fechaArray[2] < 1 || fechaArray[2] > diasEnMes[fechaArray[1]-1] ))
        return false;
    else if (fechaArray[0] > hoy[0])
        return false;
    else if (fechaArray[0] == hoy[0] && fechaArray[1] > hoy[1])
        return false;
    else if (fechaArray[0] == hoy[0] && fechaArray[1] == hoy[1] && fechaArray[2] > hoy[2])
        return false;
    else if (fechaArray[1] = 2 && fechaArray[2] == 29)
        return EsBisiesto(fechaArray[0]);
    
    return true;
}

function EsBisiesto(year){ 
    if(year%4 != 0)
        return false;
    if (year%4 == 0 && year%100 != 0)
        return true;
    if(year%100 == 0 && year%400 == 0)
        return true;    
    return false;
}

function CalcularEdad(fecha)
{
    const fechaNacimiento = fecha.split("-");
    const date = new Date();
    const hoy = [date.getFullYear, date.getMonth, date.getDate];
    edad = hoy[0] - fechaNacimiento[0];
    if (fechaNacimiento[1] > hoy[1])
        edad--;
    if(fechaNacimiento[1] == hoy[1] && fechaNacimiento[2] > hoy[2])
        edad--;
    return edad;
}


