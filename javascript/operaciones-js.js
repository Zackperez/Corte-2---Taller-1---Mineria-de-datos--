document.addEventListener('DOMContentLoaded', function () {
  const tbody = document.querySelector('table tbody');

  fetch('http://127.0.0.1:4000/mostrar_datos_tabla/')
    .then(response => response.json())
    .then(data => {
      const tbody = document.getElementById('table-body');
      data.forEach(datos => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
        <td>${datos.id}</td>
        <td>${datos.año}</td>
        <td>${datos.modelo}</td>
        <td>${datos.kilometraje}</td>
        <td>${datos.precio}</td>
      `;
        tbody.appendChild(tr);
      });
    });
})

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function () {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

const boton = document.getElementById("btn_consultar");

/*boton.onclick = function () {
  mostrar_respuesta();
}

function mostrar_respuesta() {

}*/

const boton_modal = document.getElementById('boton-modal');

function mostrar_valores() {
  const campo_modelo = document.getElementById("modelo").value;
  const campo_año = document.getElementById("año").value;
  const campo_kilometraje = document.getElementById("kilometraje").value;
  const campo_precio = document.getElementById("precio").value;

  precio = new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(campo_precio);
  
  const datos_insertar = {
    campo_modelo: campo_modelo,
    campo_año: campo_año,
    campo_kilometraje: campo_kilometraje+" km",
    campo_precio: "$ "+precio
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

boton_modal.onclick = function () {
  mostrar_valores()
}
