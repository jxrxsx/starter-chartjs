import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';
import 'chart.piecelabel.js';
import 'chartjs-plugin-datalabels';


import './styles.css';

class BarChart extends Component {

  constructor(props) {
    super(props);

    this.state = {
      chartData: {
        labels: [''],
        datasets: [
          {
            label: ['YTD Fábrica'],
            maxBarThickness: 100,
            data: [0.9345],
            backgroundColor: [
              'rgba(101, 140, 25, 1)',
            ]
          },
          {
            label: ['MTD Fábrica'],
            maxBarThickness: 100,
            data: [0.9592],
            backgroundColor: [
              'rgba(215, 170, 6, 1)',
            ]
          },
          {
            label: '90%',
            backgroundColor: 'rgb(75, 192, 192)',
            data: 0.9
          }
        ],
      }

    };

  }

  render() {

    return (
      <div className="container_barChart">
        <div className="barChart_left">
          <Bar
            data={this.state.chartData}
            width={500}
            height={500}
            options={
              {
                // responsive: true,
                // maintainAspectRatio: true,
                title: {
                  display: true,
                  text: 'Conformidade Fábrica',
                  fontSize: 25,
                },
                legend: {
                  display: true,
                  position: 'top',
                  align: 'start',
                  labels: {
                    fontColor: '#111111',
                    fontSize: 10,
                    fontFamily: 'Helvetica',
                    usePointStyle: true,
                    boxWidth: 5,
                  }
                },
                tooltips: {
                  enabled: true,
                  mode: 'nearest',
                },
                scales: {
                  yAxes: [
                    {
                      ticks: {
                        callback: function (value) {
                          return value.toLocaleString('pt-BR', { style: 'percent', maximumSignificantDigits: 3 });
                        },
                        beginAtZero: true,
                        stepSize: 0.2,

                      },
                    },
                  ],
                  xAxes: [
                    {
                      ticks: {
                        stepSize: 0.5,
                        beginAtZero: false
                      }
                    }
                  ]
                },
                annotation: {
                  annotations: [{
                    type: 'line',
                    mode: 'horizontal',
                    scaleID: 'y-axis-0',
                    value: 0.9,
                    borderColor: 'rgb(75, 192, 192)',
                    borderWidth: 2,
                    borderDash: [4],
                  }]
                },
                plugins:{

                  pieceLabel: {
                    render: (args) => {
                      return args.value * 100 + '%';
                    },

                    fontColor: '#fff',

                    fontStyle: 'bold',

                    rotation: -90,

                    overlap: true,

                    showActualPercentages: true,
                  },
                  datalabels: {
                    align: 'end',
                    rotation: -90,
                    color: '#fff',
                    font: {
                      size: 15,
                    },
                    formatter: (value, context) => {
                      return value * 100 + '%';
                    }
                  }
                }
              }
            }>

          </Bar>
        </div>
        <div className="barChart_right">
          <Bar
            data={this.state.chartData}
            width={500}
            height={500}
            options={
              {
                title: {
                  display: true,
                  text: 'Conformidade Fábrica',
                  fontSize: 25,
                },
                legend: {
                  display: true,
                  position: 'top',
                  align: 'start',
                  labels: {
                    fontColor: '#111111',
                    fontSize: 10,
                    fontFamily: 'Helvetica',
                    usePointStyle: true,
                    boxWidth: 5,
                  }

                },
                tooltips: {
                  enabled: true,
                  mode: 'nearest'
                },
                scales: {
                  yAxes: [
                    {
                      ticks: {
                        callback: function (value) {
                          return value.toLocaleString('pt-BR', { style: 'percent', maximumSignificantDigits: 3 });
                        },
                        beginAtZero: true,
                        stepSize: 0.2,

                      },
                    },
                  ],
                  xAxes: [
                    {
                      ticks: {

                        stepSize: 0.5,
                        beginAtZero: false
                      }
                    }
                  ]
                },
                annotation: {
                  annotations: [{
                    type: 'line',
                    mode: 'horizontal',
                    scaleID: 'y-axis-0',
                    value: 0.9,
                    borderColor: 'rgb(75, 192, 192)',
                    borderWidth: 2,
                    borderDash: [4],
                  }]
                },
                plugins:{

                  pieceLabel: {
                    render: (args) => {
                      return args.value * 100 + '%';
                    },

                    fontColor: '#fff',

                    fontStyle: 'bold',

                    rotation: -90,

                    overlap: true,

                    showActualPercentages: true,
                  },
                  datalabels: {
                    align: 'end',
                    rotation: -90,
                    color: '#fff',
                    font: {
                      size: 15,
                    },
                    formatter: (value, context) => {
                      return value * 100 + '%';
                    }
                  }
                }
              }
            }>

          </Bar>
        </div>
      </div>
    );
  }
}

export default BarChart;