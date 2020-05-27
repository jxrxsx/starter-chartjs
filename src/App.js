import React from 'react';
import './App.css';

import MainChart from './components/MainChart/';
import BarChart from './components/BarChart/';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MainChart />
        <BarChart />
      </header>
    </div>
  );
}

export default App;
