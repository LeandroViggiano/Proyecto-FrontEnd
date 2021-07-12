let monthNames = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre','Octubre', 'Noviembre', 'Diciembre'];

let currentDate = new Date(); /*Usa la hora de la computadora como referencia */
let currentDay = currentDate.getDate(); /*Devuelve el día de la semana */
let monthNumber = currentDate.getMonth(); /*Devuelve un numero entre 0 y 11, 0 es enero y 11 es diciembre */
let currentYear = currentDate.getFullYear(); /*Devuelve el año actual */

/*Accedo a los elementos de html en estas variables */
let dates = document.getElementById('dates');/*Dia*/
let month = document.getElementById('month');/*Mes*/
let year = document.getElementById('year');/*Año*/

let prevMonthDOM = document.getElementById('prev-month');/*Flecha izquierda*/
let nextMonthDOM = document.getElementById('next-month'); /*Flecha derecha*/

month.textContent = monthNames[monthNumber]; /*Uso el elemento del array de la linea uno que está en la posición monthNumber*/
year.textContent = currentYear.toString(); /* Paso el entero year a un caracter alfanumérico*/

prevMonthDOM.addEventListener('click', ()=>lastMonth()); /*Al hacer click se llama a la función lastMonth() */
nextMonthDOM.addEventListener('click', ()=>nextMonth()); /*Al hacer click se llama a la función nextMonth() */


/*FUNCIONES --------------------------------------------------------------------------------------------*/
const writeMonth = (month) => {/*Función encargada de escribir los meses, recibe como parametros mes*/

    for(let i = startDay(); i>0;i--){ /*startDay dice que dia de la semana empieza el mes, la clase last days es para que los días del mes anterior se vean diferentes*/
        dates.innerHTML += ` <div class="calendar__date calendar__item calendar__last-days">
            ${getTotalDays(monthNumber-1)-(i-1)}  
        </div>`;
    }/*getTotalDays(monthNumber-1) es para indicar el mes anterior, y le restamos i-1 para que los dias anteriores aparezcan*/

    for(let i=1; i<=getTotalDays(month); i++){/*getTotalDays dice el total de día del mes*/
            if(i==currentDay && currentDate.getMonth()==monthNumber) { /*Comprovamos si el día es hoy, si el día es hoy se le agrega la clase today*/
                dates.innerHTML += ` <div class="calendar__date calendar__item ">${i}</div>`; /*se crea un div con las clases entre comillas con el contenido que valga i*/

        }else{
            dates.innerHTML += ` <div class="calendar__date calendar__item">${i}</div>`; /*se crea un div con las clases entre comillas con el contenido que valga i*/
        }
    }
}

const getTotalDays = month => { /*Función encargada para determinar la cantidad de días del mes*/
    if(month === -1) month = 11; /*Si mes es -1, mes va a valer 11*/

    if (month == 0 || month == 2 || month == 4 || month == 6 || month == 7 || month == 9 || month == 11) { /*Estos son los meses que tienen 31 dias*/
        return  31; /*Devuelve 31*/

    } else if (month == 3 || month == 5 || month == 8 || month == 10) { /*Estos son los meses que tienen 30 dias*/
        return 30; 

    } else {

        return isLeap() ? 29:28; /*? sirve para decir que si la función isLeap devuelve True, usa 29, si es falso devuelve el valor 28*/
    }
}

const isLeap = () => { /*Función para saber si el año es biciesto*/
    return ((currentYear % 100 !==0) && (currentYear % 4 === 0) || (currentYear % 400 === 0));
}

const startDay = () => { /*Función para saber que dia empieza el mes*/
    let start = new Date(currentYear, monthNumber, 1); /*Nueva fecha para saber que día es el dia 1 del mes*/
    return start.getDay(); /*Esto devuelve un numero del 0 al 6, 0 si es domingo o un 6 si es sabado */
}

const lastMonth = () => { /*Función que se encarga de dibujar el mes anterior*/
    if(monthNumber !== 0){ /*Comprobamos si estamos en el mes enero*/
        monthNumber--;
    }else{
        monthNumber = 11; /*Si monthnumber = 0 estamos en enero y debemos saltar a diciembre*/
        currentYear--; /*Al pasar de enero a diciembre, debemos restar un año*/
    }

    setNewDate(); /*Función que establece la nueva fecha*/
}

const nextMonth = () => { /*Función que se encarga de dibujar el mes siguiente*/
    if(monthNumber !== 11){ /*Comprobamos si estamos en el mes diciembre*/
        monthNumber++;
    }else{
        monthNumber = 0; /*Si monthnumber = 0 estamos en enero y debemos saltar a diciembre*/
        currentYear++; /*Al pasar de diciembre a enero, debemos sumar un año*/
    }

    setNewDate(); /*Función que establece la nueva fecha*/
}

const setNewDate = () => { /*Establece la nueva fecha cuando se mueve el calendario*/
    currentDate.setFullYear(currentYear,monthNumber,currentDay); /*Recibe los parametros año, mes y dia */
    month.textContent = monthNames[monthNumber]; /*para cambiar el nombre del mes que tenemos*/
    year.textContent = currentYear.toString(); /*Cambiar el año*/
    dates.textContent = ''; /*Vacia el mes actual, con esto evito que la agenda aparezca muchas veces en pantalla*/
    writeMonth(monthNumber); /*Cambie el mes cuando pasamos el mes*/
    if(i==currentDay && currentDate.getMonth()==monthNumber) { 
    
    }
}

writeMonth(monthNumber);