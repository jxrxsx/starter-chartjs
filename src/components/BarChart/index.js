import React from 'react';
import { Bar } from 'react-chartjs-2';

// import { Container } from './styles';

class BarChart extends React.Component {

  render() {
    return (
      <Bar
            data={this.props.chartData}
            width={500}
            height={500}
            options={
              {
                // responsive: true,
                maintainAspectRatio: true,
                title: {
                  display: true,
                  text: this.props.title,
                  fontSize: 20,
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
    );
  }
}

export default BarChart;