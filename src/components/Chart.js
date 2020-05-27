import React, { Component } from 'react';
import { Bar, Doughnut } from 'react-chartjs-2';

class Chart extends Component {

    constructor (props) {
        super(props);

        this.state = {
            chartData: {
                labels: ['Mestiço Zebu 665', 'Nelore 224', 'Industrial 60'],
                datasets: [
                    {
                        data: [ 665, 224, 60 ],
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

    render () {
        
        return (
            <div className="chart">
               <Doughnut data={this.state.chartData} 
               options={
                {
                    title: { 
                        display: true,
                        text: 'Nª de Animais por Raça',
                        fontSize: 25,
                    },
                    legend: {
                        display: true,
                        position: 'bottom',
                    },
                    maintainAspectRatio: true
                }
               }>

               </Doughnut>
            </div>
        );
    }
}

export default Chart;