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
            maintainAspectRatio: true,
            responsive: true,
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
                  barThickness: 40,
                  maxBarThickness: 80,
                  barPercentage: 1,
                  ticks: {
                    stepSize: 0.5,
                    beginAtZero: false,
                  }
                }
              ],
            },
            annotation: {
              annotations: [
                {
                  type: 'line',
                  mode: 'horizontal',
                  scaleID: 'y-axis-0',
                  value: 0.9,
                  borderColor: 'rgba(2, 95, 126, 1)',
                  borderWidth: 2,
                  borderDash: [4],
                  label: {
                    backgroundColor: 'rgba(0,0,0,0)',
                    fontColor: '#111111',
                    position: "left",
                    enabled: true,
                    content: '90%',
                  }
                },
                {
                  type: 'line',
                  mode: 'horizontal',
                  scaleID: 'y-axis-0',
                  value: 0.1,
                  borderColor: 'rgba(0,0,0,0)',
                  label: {
                    backgroundColor: 'rgba(0,0,0,0)',
                    fontColor: '#111111',
                    fontSize: 20,
                    position: "right",
                    enabled: true,
                    content: (this.props.chartData.datasets[0].data[0] * 100) + '%',
                  }
                }
              ]
            },
            plugins: {

              pieceLabel: {
                render: (args) => {
                  return args.value * 100 + '%';
                },
                fontColor: '#fff',
                fontStyle: 'bold',
                overlap: true,
                showActualPercentages: true,
              },
              datalabels: {
                align: 'end',
                rotation: -90,
                color: '#fff',
                font: {
                  size: 12,
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