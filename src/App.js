import React from 'react';
import './App.css';

import MainChart from './components/MainChart/';
import BarChart from './components/BarChart/';


function App() {
  return (
    <div className="App">
      <main className="charts">
        <MainChart />
        <BarChart />
      </main>
      <aside className="table">
        {/* <Table /> */}
      </aside>
    </div>
  );
}

export default App;
