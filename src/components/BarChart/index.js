import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';

import './styles.css';

class BarChart extends Component {

    constructor(props) {
        super(props);

        this.state = {
            chartData: {
                // precisa alterar o título
                labels: ['', ''],
                datasets: [
                    {
                        data: [0.9345, 0.9592],
                        backgroundColor: [
                            // precisa alterar essas cores
                            'rgba(101, 140, 25, 1)',
                            'rgba(215, 170, 6, 1)',
                        ]
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
                                title: {
                                    display: true,
                                    text: 'Conformidade Fábrica',
                                    fontSize: 25,
                                },
                                legend: {
                                    display: false,
                                    position: 'bottom',

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
                                            barPercentage: 0.4,
                                            threshold: 0.9,

                                        },
                                    ],
                                    xAxes: [
                                        {
                                            barPercentage: 0.4
                                        }
                                    ]
                                },
                            }
                        }>

                    </Bar>
                </div>
                <div className="barChart_right">
                    <Bar
                        data={this.state.chartData}
                        width={500}
                        height={500}
                        //inserir o formato de legenda da imagem
                        options={
                            {
                                title: {
                                    display: true,
                                    text: 'Conformidade Trato',
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

                    </Bar>
                </div>
            </div>
        );
    }
}

export default BarChart;