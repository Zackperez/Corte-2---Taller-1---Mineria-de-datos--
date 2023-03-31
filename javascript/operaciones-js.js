// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function mostrar_respuesta() {
  id_usuario = document.getElementById("id_usuario").value;
  let resultados = document.getElementById("resultados_finales");
  let parrafo_resultados = document.createElement('p');
  axios.get('http://localhost:4000/respuesta_sbr/' + id_usuario)
      .then(function (response) {
          console.log(response);
          parrafo_resultados.innerHTML = response.data[0].Diagnostico_final;
          resultados.appendChild(parrafo_resultados);
      })
      .catch(function (error) {
          console.log(error);
      });
}