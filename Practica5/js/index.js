let formulario = document.getElementById("formulario");
let nombre = document.getElementById("nombre");
let fecha = document.getElementById("fecha");
let descripcion = document.getElementById("descripcion");
let listaTareas = document.getElementById('listaTareas')
let btnGuardar = document.getElementById("btnGuardar");

let formularioEditar = document.getElementById("formularioEditar");
let nombreEditar = document.getElementById("nombreEditar");
let fechaEditar = document.getElementById("fechaEditar");
let descripcionEditar = document.getElementById("descripcionEditar");

let tareas = [];

// Funcion que manda los datos en forma de arreglo e imprime en consola
let agregarDatos = () => {
    tareas.push({
        nombre: nombre.value,
        fecha: fecha.value,
        descripcion: descripcion.value
    })
    console.log(tareas);
}

// Funcion para cerrar el modal al apretar el boton
let cerrarModal = () => {
    btnGuardar.setAttribute("data-bs-dismiss", "modal");
    btnGuardar.click();
}

// Funcion para resetar los campos del formulario despues de guardar
let resetearFormulario = () => {
    nombre.value = '';
    fecha.value = '';
    descripcion.value = '';
}

// Funcion para reenderizar los datos que estan en memoria
let mostrarTareas = () => {
    listaTareas.innerHTML = "";
    tareas.forEach((tarea, indice)=>{
        listaTareas.innerHTML += `
        <div class='row' id=${indice}>
            <div class='box col-3 border p-3'>
                <strong>${tarea.nombre}</strong>
            </div>
            <div class='col-2 border p-3'>
                <strong>${tarea.fecha}</strong>
            </div>
            <div class='box col-3 border p-3'>
                <strong>${tarea.descripcion}</strong>
            </div>
            <div class='col-2 border p-3 text-center'>
                <button class='btn btn-success' onClick="editarTarea(${indice});" data-bs-toggle="modal" data-bs-target="#exampleModalEditar">
                <i class="bi bi-pencil"></i> Editar </button>
            </div>
            <div class='col-2 border p-3 text-center'>
                <button class='btn btn-danger' onClick="borrarTarea(this,${indice});">
                <i class="bi bi-trash"></i> Borrar </button>
            </div>
        </div>
        `;
    });
}

formulario.addEventListener("submit", (e)=>{
    e.preventDefault();
    agregarDatos();
    cerrarModal();
    resetearFormulario();
    mostrarTareas();
})

formularioEditar.addEventListener("submit", (e)=>{
    e.preventDefault();
    let indice = idTarea.value;
    tareas [indice].nombre = nombreEditar.value;
    tareas [indice].fecha = fechaEditar.value;
    tareas [indice].descripcion = descripcionEditar.value;
    cerrarModalEditar();
    mostrarTareas();
})

let borrarTarea = (boton, indice) => {
    if(confirm("¿Estas seguro de eliminar este registro?")){
        boton.parentElement.parentElement.remove();
        tareas.splice(indice,1);
    }
}

let editarTarea = (indice) => {
    nombreEditar.value = tareas[indice].nombre;
    fechaEditar.value = tareas[indice].fecha;
    descripcionEditar.value = tareas[indice].descripcion;
    idTarea.value = indice;
}

// Funcion para cerrar el modalEditar y guardar los cambios al apretar el boton
let cerrarModalEditar = () => {
    btnGuardarEditar.setAttribute("data-bs-dismiss", "modal");
    btnGuardarEditar.click();
}