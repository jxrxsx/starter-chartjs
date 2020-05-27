import React, { Component } from 'react';
import { Doughnut } from 'react-chartjs-2';

import './styles.css';

class Chart extends Component {

    constructor(props) {
        super(props);

        this.state = {
            chartData: {
                labels: ['Mestiço Zebu 665', 'Nelore 224', 'Industrial 60'],
                datasets: [
                    {
                        data: [665, 224, 60],
                        backgroundColor: [
                            'rgba(2, 95, 126, 1)',
                            'rgba(1, 120, 131, 1)',
                            'rgba(27, 151, 143, 1)'
                        ]
                    }
                ],
            }

        };

    }

    render() {

        return (
            <div className="container_mainChart">
                <div className="header">
                    <div className="header_info">
                        <h1>949</h1>
                        <p>Número de Animais - 2020</p>
                    </div>
                    <div className="header_info">
                        <h1>387</h1>
                        <p>Número de Animais - MTD</p>
                    </div>
                </div>
                <div className="doughnut_chart">
                    <Doughnut data={this.state.chartData}
                        width={500}
                        height={500}
                        options={
                            {
                                title: {
                                    display: true,
                                    text: 'Nª de Animais por Raça',
                                    fontSize: 25,
                                },
                                legend: {
                                    display: false,
                                    position: 'bottom',

                                },
                                tooltips: {
                                    enabled: true,
                                    mode: 'nearest'
                                }
                            }
                        }>

                    </Doughnut>
                </div>
            </div>
        );
    }
}

export default Chart;