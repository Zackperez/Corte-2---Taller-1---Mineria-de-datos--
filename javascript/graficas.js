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
            label: 'Dataset 1',
            data: Utils.numbers(NUMBER_CFG),
            borderColor: Utils.CHART_COLORS.red,
            backgroundColor: Utils.transparentize(Utils.CHART_COLORS.red, 0.5),
          },
          {
            label: 'Dataset 2',
            data: Utils.numbers(NUMBER_CFG),
            borderColor: Utils.CHART_COLORS.blue,
            backgroundColor: Utils.transparentize(Utils.CHART_COLORS.blue, 0.5),
          }
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

  // GRAFICO 2 - Cantidad de carros publicados según su año
const cant_carros_por_ano = "http://127.0.0.1:4000/cant_carros_por_ano";


  fetch(cant_carros_por_ano)
  .then(response => response.json())
  .then(data => {

    console.log(data)
    // DATA A USAR
    const labels = data.map(item => item.año); // X
    const values = data.map(item => item.cantidad); //Y

    // Cantidad de carros según el modelo

    const ctx = document.getElementById('myChart2').getContext('2d');
    const chart = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: labels,
        datasets: [{
          label: 'Cantidad',
          backgroundColor: 'rgba(0, 99, 2, 0.2)',
          borderColor: 'rgba(0, 99, 132, 1)',
          borderWidth: 1,
          data: values,
        }]
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

  // GRAFICO 3 - PRECIO SEGÚN EL KILOMETRAJE

  const precio_km = "http://127.0.0.1:4000/precio_segun_km";


  fetch(precio_km)
  .then(response => response.json())
  .then(data => {

    console.log(data)
    // DATA A USAR
    const values2 = data.map(item => item.precio); // X
    const values = data.map(item => item.kilometraje); //Y
    const labels = data.map(item => item.año); //Y



    const datico = {
      labels: labels,
      datasets: [
        {
          label: 'Dataset 1',
          data: values
        },
        {
          label: 'Dataset 2',
          data: values2
        }
      ]
    };

    // Cantidad de carros según el modelo

    const ctx3 = document.getElementById('myChart3').getContext('2d');
    const chart3 = new Chart(ctx3, {
      type: 'line',
      data: datico,
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
      type: 'bar',
      data: {
        labels: labels,
        datasets: [{
          label: 'Cantidad',
          backgroundColor: 'rgba(0, 99, 132, 0.2)',
          borderColor: 'rgba(0, 99, 132, 1)',
          borderWidth: 1,
          data: values,
        }]
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