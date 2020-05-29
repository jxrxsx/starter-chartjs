import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';
import 'chart.piecelabel.js';
import 'chartjs-plugin-datalabels';
import 'chartjs-plugin-annotation';

import BarChart from '../BarChart'


import './styles.css';

class BarChartContainer extends Component {

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
          <BarChart title="Conformidade Fábrica" chartData={this.state.chartData}/>
        </div>
        <div className="barChart_right">
          <BarChart title="Conformidade Trato" chartData={this.state.chartData}/>
        </div>
      </div>
    );
  }
}

export default BarChartContainer;