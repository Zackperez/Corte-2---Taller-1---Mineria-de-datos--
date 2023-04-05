// Cuando cargue toda la página se ejecutará lo que esté dentro
const boton_limpiar = document.getElementById('boton-limpiar');
const campo_id = document.getElementById('consultar-id');


boton_limpiar.onclick = function (){
  campo_id.value = "";
}

function limpiar_campos(){

}
const tbody = document.getElementById('table-body');


document.addEventListener('DOMContentLoaded', function () {

  /* Se llena automaticamente la tabla */

  fetch('http://127.0.0.1:4000/mostrar_datos_tabla/')
    .then(response => response.json())
    .then(data => {
      data.forEach(datos => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
        <td>${datos.id}</td>
        <td>${datos.modelo}</td>
        <td>${datos.año}</td>
        <td>${datos.kilometraje}</td>
        <td>${datos.precio}</td>
      `;
        tbody.appendChild(tr);
      });
    });
})
// Fin del cargue de documentos

/* MODAL INSERTAR */
//Boton para abrir el modal
var btnModalInsertar = document.getElementById("btnModalInsertar");

// Target del modal
var modalInsertar = document.getElementById("targetModalInsertar");

// icono para cerrar el modal 
var span = document.getElementsByClassName("close-insertar")[0];

//Boton dentro del modal
const btnInsertarDatosModal = document.getElementById('btnInsertarDatosModal');

// When the user clicks the button, open the modal 
btnModalInsertar.onclick = function () {
  modalInsertar.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modalInsertar.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modalInsertar) {
    modalInsertar.style.display = "none";
  }
}

/* MODAL MODIFICAR */
//Boton para abrir el modal
var btnModalModificar = document.getElementById("btnModalModificar");

// Target del modal
var modalModificar = document.getElementById("targetModalModificar");

// icono para cerrar el modal 
var span = document.getElementsByClassName("close-modificar")[0];

//Boton dentro del modal
const btnModificarDatosModal = document.getElementById('btnModificarDatosModal');

// When the user clicks the button, open the modal 
btnModalModificar.onclick = function () {
  modalModificar.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modalModificar.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modalModificar) {
    modalModificar.style.display = "none";
  }
}

/* MODAL Eliminar */
//Boton para abrir el modal
var btnModalEliminar = document.getElementById("btnModalEliminar");

// Target del modal
var modalEliminar = document.getElementById("targetModalEliminar");

// icono para cerrar el modal 
var span = document.getElementsByClassName("close-eliminar")[0];

//Boton dentro del modal
const btnEliminarDatosModal = document.getElementById('btnEliminarDatosModal');

// When the user clicks the button, open the modal 
btnModalEliminar.onclick = function () {
  modalEliminar.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modalEliminar.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modalEliminar) {
    modalEliminar.style.display = "none";
  }
}

/* MODAL Consultar */
//Boton para abrir el modal
var btnModalConsultar = document.getElementById("btnModalConsultar");

// Target del modal
var modalConsultar = document.getElementById("targetModalConsultar");

// icono para cerrar el modal 
var span = document.getElementsByClassName("close-consultar")[0];

//Boton dentro del modal
const btnConsultarDatosModal = document.getElementById('boton-buscar');

// When the user clicks the button, open the modal 
btnModalConsultar.onclick = function () {
  modalConsultar.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modalConsultar.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modalConsultar) {
    modalConsultar.style.display = "none";
  }
}



function modificar_datos() {
  //"UPDATE proovedores SET Nombre =?, Celular = ?, Direccion = ?, Correo = ? WHERE idProveedor = ?";
  const modificarId = document.getElementById('modificar-id').value;
  const modificarModelo = document.getElementById('campo-modificar-modelo__combobox').value;
  const modificarAño = document.getElementById('campo-modificar-year__combobox').value;
  const modificarPrecio = document.getElementById('modificar-precio').value;
  const modificarKilometraje = document.getElementById('modificar-kilometraje').value;
  let formato_precio = Intl.NumberFormat("de-DE");
  let formato_kilometraje = Intl.NumberFormat("de-DE");

  if (modificarId == "" || modificarModelo == "" || modificarAño == "" || modificarPrecio == "" || modificarKilometraje == "") {
    alert("Asegurate que los campos no estén vacíos");
  } else {

    precio = formato_precio.format(modificarPrecio);
    kilometraje = formato_kilometraje.format(modificarKilometraje);

    const respuestas_preguntas = {
      modificarId: modificarId,
      modificarModelo: modificarModelo,
      modificarAño: modificarAño,
      modificarKilometraje: kilometraje + " km",
      modificarPrecio: "$ " + precio
    }

    axios({
      method: "POST",
      url: "http://127.0.0.1:4000/modificar_vehiculo",
      data: respuestas_preguntas,
    })
      .then(res =>
        console.log(res))
      .catch(err => console.log('Error:', err))
  }

}

function eliminar_datos() {
  const eliminarId = document.getElementById('eliminar-id').value;


  if (eliminarId == "") {
    alert("Asegurate que los campos no estén vacíos");
  } else {

    axios.delete("http://127.0.0.1:4000/eliminar_vehiculo/" + eliminarId)
      .then(res =>
        console.log(res))
      .catch(err => console.log('Error:', err))
  }

}

/* Botones */
btnModificarDatosModal.onclick = function () {
  modificar_datos();
}

btnEliminarDatosModal.onclick = function () {
  eliminar_datos();
}

btnConsultarDatosModal.onclick = function () {
  consultar_datos();
}


/* Funciones */

function insertar_valores() {
  const campo_modelo = document.getElementById('campo-modelo__combobox').value;
  const campo_año = document.getElementById('campo-year__combobox').value;
  const campo_kilometraje = document.getElementById("kilometraje").value;
  const campo_precio = document.getElementById("precio").value;
  let formato_precio = Intl.NumberFormat("de-DE");
  let formato_kilometraje = Intl.NumberFormat("de-DE");


  if (campo_kilometraje == "" || campo_precio == "") {
    alert("Asegurate que los campos no estén vacíos");
  } else {
    precio = formato_precio.format(campo_precio);
    kilometraje = formato_kilometraje.format(campo_kilometraje);


    const datos_insertar = {
      campo_modelo: campo_modelo,
      campo_año: campo_año,
      campo_kilometraje: kilometraje + " km",
      campo_precio: "$ " + precio
    }

    axios({
      method: "POST",
      url: "http://127.0.0.1:4000/insertar_datos/",
      data: datos_insertar
    })
      .then(res =>
        console.log(res))
      .catch(err => console.log('Error:', err))
  }
}

btnInsertarDatosModal.onclick = function(){
  insertar_valores();
}



function consultar_datos() {

  const consultarId = document.getElementById('consultar-id').value;
  const parrafo_resultados = document.getElementById('parrafo-resultados')
  const tbodyConsultar = document.getElementById('table-body-consultar');

  if (consultarId == "") {
    alert("Asegurate que los campos no estén vacíos");
  } else {

    axios.get('http://localhost:4000//mostrar_vehiculo/' + consultarId)
      .then(function (response) {
        console.log(response.data[0]);
        console.log(response.data[0][0]);
        const tr = document.createElement('tr');
        tr.innerHTML = `
        <td>${response.data[0][0]}</td>
        <td>${response.data[0][2]}</td>
        <td>${response.data[0][3]}</td>
        <td>${response.data[0][4]}</td>
        <td>${response.data[0][1]}</td>
      `;
        tbodyConsultar.appendChild(tr);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

}

