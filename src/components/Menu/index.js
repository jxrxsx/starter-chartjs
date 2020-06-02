import React from 'react';

import './styles.css';

function Menu() {
  return (
    <div id="menu">
      <ul id="menu-options">
        <li><a href="#">INICIO</a></li>
        <li className="active"><a href="#">DASHBOARD</a></li>
        <li><a href="#">ECONOMICO</a></li>
      </ul>
    </div>
  );
}

export default Menu;