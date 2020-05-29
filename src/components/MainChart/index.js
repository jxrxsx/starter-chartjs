import React, { Component } from 'react';
import { Doughnut } from 'react-chartjs-2';
import 'chart.piecelabel.js';

import './styles.css';
import HeaderDoughnut from '../HeaderDoughnut';

class Chart extends Component {

  state = {
      chartData: {
          labels: ['Mestiço Zebu 665', 'Nelore 224', 'Industrial 60'],
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
                        width={350}
                        height={350}
                        options={
                            {
                                title: {
                                  display: true,
                                  text: 'Nª de Animais por Raça',
                                  fontSize: 25,
                                },
                                legend: {
                                  position: 'top',
                                  fullWidth: true,
                                },
                                tooltips: {
                                    enabled: true,
                                    mode: 'nearest'
                                },
                                responsive: true,
                                maintainAspectRatio: true,
                                pieceLabel: {
                                  render: 'value',
                                  fontColor: 'white',
                                  fontStyle: 'bold',
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