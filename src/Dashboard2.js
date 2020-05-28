import React from 'react';
import './Dashboard2.css';

import MainChart from './components/MainChart';
import BarChart from './components/BarChart';
import Table from './components/Table';


function Dashboard2() {
  return (
    <div className="dashboard-container">
      <main className="charts">
        <MainChart />
        <BarChart />
      </main>
      <aside className="table-container">
        <Table />
      </aside>
    </div>
  );
}

export default Dashboard2;
