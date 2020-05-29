import React, { Component } from 'react';
import * as ChartAnnotation from 'chartjs-plugin-annotation';
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
                    },
                    {
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
                        plugins={[ChartAnnotation]}
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

                                        },
                                    ],
                                    xAxes: [
                                        {
                                            barPercentage: 0.8
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
                                    borderWidth: 1,
                                    borderDash: [4]
                                  }]
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
                        plugins={[ChartAnnotation]}
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
                                },
                                annotation: {
                                  annotations: [
                                    {
                                      type: "line",
                                      mode: "vertical",
                                      scaleID: "x-axis-0",
                                      borderColor: "red",
                                      label: {
                                        content: "",
                                        enabled: true,
                                        position: "top"
                                      }
                                    }
                                  ]
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