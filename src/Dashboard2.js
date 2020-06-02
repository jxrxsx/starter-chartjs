import React from 'react';
import './Dashboard2.css';

import MainChart from './components/MainChart';
import BarChartContainer from './components/BarChartContainer';
import Table from './components/Table';

import { BsList, BsCheckAll } from 'react-icons/bs';


class Dashboard2 extends React.Component {
  state = {
    displayUL: 'flex'
  }

  toggleCollapse = () => {
    if(this.state.displayUL === 'flex') {
      this.setState({ displayUL: 'none' });
    } else {
      this.setState({ displayUL: 'flex'})
    }
    let menu = document.querySelector('#menu-options')
    menu.style.display = this.state.displayUL;
  }

  render() {
    return (
      <div className="container">
        <div className="menu">
          <div id="hamburger" onClick={this.toggleCollapse} align="right"><BsList /></div>
          <ul id="menu-options" align="center">
            <li><a href="#">INICIO</a></li>
            <li className="active"><a href="#">DASHBOARD</a></li>
            <li><a href="#">ECONOMICO</a></li>
          </ul>
        </div>
        <div className="dashboard-container">
          <main className="charts">
            <MainChart />
            <BarChartContainer />
          </main>
          <div className="table-container" align="center">
            <Table />
          </div>
        </div>
        <div></div>
        <footer className="footer">
          <p>SMT Bovinos de Corte</p>
          <p>Contato: (19) 2105-5005 <strong>21/05/2020</strong></p>
        </footer>
      </div>
    );
  }
}

export default Dashboard2;
