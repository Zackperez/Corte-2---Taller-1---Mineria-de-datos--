// URL de la API pública
const endpoint = 'http://127.0.0.1:4000/get_user_info';

// GRAFICO 1 - Cantidad de carros según el modelo
fetch(endpoint)
  .then(response => response.json())
  .then(data => {

    console.log(data)
    // DATA A USAR
    const labels = data.map(item => item.modelo); // X
    const values = data.map(item => item.cantidad); //Y

    // Cantidad de carros según el modelo

    const ctx = document.getElementById('myChart').getContext('2d');
    const chart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: labels,
        datasets: [
          {
            label: 'Cantidad carros',
            data: values
          },
        ]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true,
            }
          }]
        }
      }
    });

  })
  .catch(error => {
    console.error(error);
  });


fetch('http://localhost:4000/mostrar_registros_tabla/')
  .then(response => response.json())
  .then(data => {
    const labels = [...new Set(data.map(v => v.año))];
    const modelos = [...new Set(data.map(v => v.modelo))];
    const datasets = modelos.map(modelo => {
      const datosModelo = labels.map(año => {
        const vehiculos = data.filter(v => v.modelo === modelo && v.año === año);
        return vehiculos.length;
      });
      return {
        label: modelo,
        data: datosModelo,
        backgroundColor: `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, 0.2)`,
        borderColor: `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, 1)`,
        borderWidth: 1
      };
    });
    const datos = {
      labels: labels,
      datasets: datasets
    };
    crearGrafica(datos);
  })
  .catch(error => console.error(error));

function crearGrafica(datos) {
  const ctx = document.getElementById('myChart3').getContext('2d');
  const myChart = new Chart(ctx, {
    type: 'bar',
    data: datos,
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}



// Conectar con la API y extraer los datos utilizando fetch
fetch('http://localhost:4000/mostrar_registros_tabla/')
  .then(response => response.json())
  .then(data => {
    console.log(data)
    const modelos = data.map(d => d.modelo);
    const años = data.map(d => d.año);
    const kilometrajes = data.map(d => d.kilometraje);
    const precios = data.map(d => d.precio);

    function obtenerKilometrajes(kilometrajes) {
      return kilometrajes.map(km => {
        var valorSinKm = km.replace("km", "");
        var kmFinal = Number(valorSinKm.replace(/\./g, ""));
        return kmFinal;
      });
    }

    function obtenerPrecios(precios) {
      return precios.map(p => {
        const valorSinDolar = p.replace("$", "");
        const precioFinal = Number(valorSinDolar.replace(/\./g, ""));
        return precioFinal;
      });
    }

    var p_nuevo = obtenerPrecios(precios) 

    var km_nuevo = obtenerKilometrajes(kilometrajes) 


    // Crear la gráfica de dispersión
    const ctx = document.getElementById('myChart4').getContext('2d');
    const scatterChart = new Chart(ctx, {
      type: 'scatter',
      data: {
        datasets: [{
          label: 'Precio vs Kilometraje',
          data: km_nuevo.map(function (x, i) {
            return {
              x: x,
              y: p_nuevo[i]
            };
          }),
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          pointBackgroundColor: años,
          pointRadius: 5,
          pointHoverRadius: 10
        }]
      },
      options: {
        scales: {
          xAxes: [{
            type: 'linear',
            position: 'bottom',
            scaleLabel: {
              display: true,
              labelString: 'Kilometraje'
            }
          }],
          yAxes: [{
            type: 'linear',
            scaleLabel: {
              display: true,
              labelString: 'Precio'
            }
          }]
        },
        legend: {
          display: false
        },
        tooltips: {
          callbacks: {
            label: function(tooltipItem, data) {
              return `Modelo: ${modelos[tooltipItem.index]} | Año: ${años[tooltipItem.index]} | Kilometraje: ${km_nuevo[tooltipItem.index]} | Precio: ${precios[tooltipItem.index]}`
            }
          }
        }
      }
    });
  })
  .catch(error => console.error(error));


  fetch('http://localhost:4000/mostrar_registros_tabla/')
  .then(response => response.json())
  .then(data => {
    // Obtener la cantidad de registros para cada modelo
    const modelos = {};
    data.forEach(d => {
      modelos[d.modelo] = modelos[d.modelo] ? modelos[d.modelo] + 1 : 1;
    });
    
    // Crear los arrays para los nombres y cantidades
    const nombresModelos = Object.keys(modelos);
    const cantidadesModelos = Object.values(modelos);

    // Crear la gráfica de pastel
    const ctx = document.getElementById('myChart5').getContext('2d');
    const pieChart = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: nombresModelos,
        datasets: [{
          data: cantidadesModelos,
          backgroundColor: [
            '#ff6384',
            '#36a2eb',
            '#cc65fe',
            '#ffce56',
            '#4bc0c0',
            '#9966ff',
            '#ffcc99'
          ]
        }]
      },
      options: {
        title: {
          display: true,
          text: 'Distribución de modelos'
        }
      }
    });
  })
  .catch(error => console.error(error));