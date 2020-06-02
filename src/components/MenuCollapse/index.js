import React from 'react';

import {BsList} from 'react-icons/bs'

import './styles.css'

class MenuCollapse extends React.Component {
  state = {
    collapse: true
  }

  toggleCollapse = () => {
    this.setState({collapse: !this.state.collapse})
  }

  render () {
    return (
      <div id="menu-hamburger" align="right">
        <BsList onClick={this.toggleCollapse}/>
        <div id="menu-collapsed" style={this.state.collapse ? {opacity: 0, visibility: 'hidden'} : {opacity: 1, visibility: 'visible'}}>
          <ul id="menu-collapsed-options">
            <li><a href="#">INICIO</a></li>
            <li className="active"><a href="#">DASHBOARD</a></li>
            <li><a href="#">ECONOMICO</a></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default MenuCollapse;