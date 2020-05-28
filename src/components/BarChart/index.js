import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';

import './styles.css';

class BarChart extends Component {

    constructor(props) {
        super(props);

        this.state = {
            chartData: {
                // precisa alterar o título
                labels: ['Mestiço Zebu 665', 'Nelore 224'],
                datasets: [
                    {
                        data: [665, 224, 60],
                        backgroundColor: [
                            // precisa alterar essas cores
                            'rgba(2, 12, 126, 1)',
                            'rgba(1, 120, 0, 1)',
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