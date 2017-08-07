import React, { Component } from 'react';

export default class Temperature extends Component {

  displayFar(tmp){
    let s = document.getElementById('temp');
    s.innerHTML = tmp;
    s.className = "far";
  }

  displayCel(tmp){
    let s = document.getElementById('temp');
    s.innerHTML = tmp;
    s.className = "cel"
  }

  render(){
    return(
      <div className="temperature">
        <p><span id="temp" className="cel">{this.props.temperature.cel}</span><sup><span className="tempConv cel"  onClick={this.displayCel.bind(this,this.props.temperature.cel)}>°C</span> | <span className="tempConv far" onClick={this.displayFar.bind(this,this.props.temperature.far)}>°F</span></sup> ({this.props.temperature.condition}) </p>
      </div>
    );
  }
}
