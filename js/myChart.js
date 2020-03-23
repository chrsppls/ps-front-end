// import Chart from '/node_modules/chart.js';

$(document).ready(function() {
  console.log('ready');
  var ctx = $('#myChart');
  // var Chart = require('./node_modules/chart.js/dist/Chart.js')
  var myChart = new Chart(ctx, {
    type: 'horizontalBar',
    data: {
      labels: ['Commercially-Ready', 'Pilot-Ready', 'Planning/Developing'],
      datasets: [{
        label: "none",
        data: [0, 1, 2],
        backgroundColor: [
          '#243d87',
          '#0f6fc6',
          '#009dd9',

        ],
        borderColor: [
          '#243d87',
          '#0f6fc6',
          '#009dd9',

        ],
        borderWidth: 1
      }]
    },
    options: {
      maintainAspectRatio: false,
      legend: {
        display: false
      },
      tooltips: {
        callbacks: {
          label: function(tooltipItem) {
            return tooltipItem.yLabel;
          }
        }
      },
      title: {
        display: false,
        text: "Concept Maturity",
        position: "left"
      },
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true,
            fontSize: 16,
            fontFamily: 'raleway',

          }
        }],
        xAxes: [{
          ticks: {
            beginAtZero: true,
            precision: 0,
            suggestedMax: 3,
            fontSize: 16,
            fontFamily: 'raleway',
            // stepSize: 2,
          }
        }]
      }
    }
  });
});