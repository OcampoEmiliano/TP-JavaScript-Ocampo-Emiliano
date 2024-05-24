let tasks = [];
let seleccion = 0;

function mostrarMenu() {
return parseInt(prompt(
   "¿qué opcion desea realizar?\n"+
    "1- agregar una tarea\n"+
    "2- borrar una tarea\n"+
    "3- listar las tareas\n"+
    "4- editar una tarea\n"+
    "0- salir"
))
}

function agregarTareas() {
tarea = prompt("¿qué tarea desea agregar?")
if (validacionNombre(tarea) == true) {
 tasks.push(tarea);
 alert("tarea agregada");
} else {
    alert("no se admiten espacios al principio o al final")
}
}
function listarTareas() {
    for (let i = 0; i < tasks.length; i++) {
        let lista = "lista de tareas\n";
        lista = lista.concat(tasks[i])+ "\n" ;
        alert(lista);
    }
}

function borrarTareas() {
    tarea = prompt("¿qué tarea desea borrar?")
    if (validacionNombre(tarea) == true) {
        if (tasks.indexOf(tarea) !== -1) {
    tasks.pop(tarea);
    alert("tarea borrada");
        } else {
            alert("no se encuentra")
        }
    } else {
        alert("no debe estar vacio y no se admiten espacios al principio o al final")
    }
}

function editarTarea() {
    tarea = prompt("¿qué tarea desea cambiar?")
    let nuevaTarea = prompt("¿qué tarea desea agregar?")
        if (validacionNombre(nuevaTarea) == false  || validacionNombre(tarea) == false) {     
            alert("no debe estar vacio y no se admiten espacios al principio o al final")
} else if (tasks.indexOf(tarea) !== -1) { 
            let indice = tasks.indexOf(tarea);
            tasks[indice] = nuevaTarea;
} else {
            alert("no se encuentra")  
    }
}

function validacionNombre(nombre) {
       let regex = /^\S(.*\S)?$/; 
       return regex.test(nombre) 
    } 

function main() {
do  {
    seleccion = mostrarMenu();
    switch (seleccion) {
        
        case 1:
            agregarTareas();
            break;
        case 2:
            borrarTareas();
            break;
        case 3:
            listarTareas();
            break;
        case 4:
            editarTarea()
            break;
        case 0:
            break;
            default:
            alert("opcion no valida");
            break;
    }
} while ( seleccion !== 0)
    alert("salir")
}
main();