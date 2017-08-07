import React, { Component } from 'react';

class Icon extends Component {
  render(){
    return(
      <div className="icon">
        <p><i className={this.props.icon}></i></p>
      </div>
    );
  }
}

export default Icon;
