import React, { Component } from 'react';
import { Doughnut } from 'react-chartjs-2';
import 'chart.piecelabel.js';

import './styles.css';
import HeaderDoughnut from '../HeaderDoughnut';

class Chart extends Component {

  state = {
    chartData: {
      labels: ['Mestiço Zebu', 'Nelore', 'Industrial'],
      datasets: [
        {
          data: [665, 224, 60],
          backgroundColor: [
            'rgba(2, 95, 126, 1)',
            'rgba(1, 120, 131, 1)',
            'rgba(27, 151, 143, 1)'
          ],
        }
      ],
    }

  };

  render() {

    return (
      <>
        <HeaderDoughnut />
        <div className="container_mainChart">
          <div className="doughnut_chart">
            <Doughnut data={this.state.chartData}
              width={410}
              height={350}
              options={
                {
                  maintainAspectRatio: true,
                  responsive: true,
                  title: {
                    display: true,
                    text: 'Nª de Animais por Raça',
                    fontSize: 25,
                  },
                  legend: {
                    position: 'bottom'
                  },
                  tooltips: {
                    enabled: false,
                  },
                  pieceLabel: {
                    render: (args) => { return (args.label + " (" + args.value + ")") },
                    fontColor: 'black',
                    fontStyle: 'bold',
                    position: 'outside',
                    //   overlap: true
                  },
                  plugins: {
                    datalabels: {
                      color: '#eee',
                      fontWeight: 'bold',
                      value: 'percentage',
                      formatter: (value, ctx) => {
                        let sum = 0;
                        let dataArr = ctx.chart.data.datasets[0].data;
                        dataArr.map(data => {
                          sum += data;
                        });
                        if(window.innerWidth > 425) {
                          let percentage = (value * 100 / sum).toFixed(2) + "%";
                          return percentage;
                        } else {
                          return "";
                        }
                      },
                    }
                  }
                }
              }>

            </Doughnut>
          </div>
        </div>
      </>
    );
  }
}

export default Chart;