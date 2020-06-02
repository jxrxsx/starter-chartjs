import React from 'react';
import './Dashboard2.css';

import MainChart from './components/MainChart';
import BarChartContainer from './components/BarChartContainer';
import Table from './components/Table';

import MenuCollapse from './components/MenuCollapse'
import Menu from './components/Menu'

class Dashboard2 extends React.Component {
  state = {
    displayUL: 'flex',
    width: window.innerWidth
  }

  componentDidMount = () => {

    window.addEventListener('resize', this.handleResize);
  }

  handleResize = () => {
    this.setState({ width: window.innerWidth})
  }

  componentWillUnmount = () => {
    window.removeEventListener('resize');
  }
  render() {
    return (
      <div className="container">
        {this.state.width < 1000 ?
          <MenuCollapse />
          :
          <Menu />
        }
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
