// import Chart from '/node_modules/chart.js';

$(document).ready(function() {
  console.log('ready');
  var concepts = $('#conceptChart');
  var projects = $('#projectChart');

  var conceptChart = new Chart(concepts, {
    type: 'horizontalBar',
    data: {
      labels: ['Active and Operating', 'Planning/Developing', 'Completed/Terminated'],
      datasets: [{
        label: "none",
        data: [5, 3, 1],
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
        enabled: false,
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

  var projectChart = new Chart(projects, {
    type: 'horizontalBar',
    data: {
      labels: ['Pre-Pilot', 'Pilot', 'Post-Pilot'],
      datasets: [{
        label: "Planning/Developing",
        data: [1, 1, 4],
        backgroundColor: [
          '#243d87', '#243d87', '#243d87'
        ],
        borderColor: [
          '#243d87', '#243d87', '#243d87'
        ],
        borderWidth: 1
      }, {
        label: "Active and Operating",
        data: [4, 6, 1],
        backgroundColor: [
          '#0f6fc6', '#0f6fc6', '#0f6fc6'
        ],
        borderColor: [
          '#0f6fc6', '#0f6fc6', '#0f6fc6'
        ],
        borderWidth: 1
      }, {
        label: "Completed/Terminated",
        data: [4, 1, 0],
        backgroundColor: [
          '#bfbfbf', '#bfbfbf', '#bfbfbf'
        ],
        borderColor: [
          '#bfbfbf', '#bfbfbf', '#bfbfbf'
        ],
        borderWidth: 1
      }]
    },
    options: {
      maintainAspectRatio: false,
      legend: {
        display: true,
      },
      tooltips: {
        enabled: false,
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
          stacked: true,
          ticks: {
            beginAtZero: true,
            fontSize: 16,
            fontFamily: 'raleway',

          }
        }],
        xAxes: [{
          stacked: true,
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