import React, { Component } from 'react';

class Location extends Component {
  render(){
    return(
      <div className="location">
        <p>{this.props.location.city}, {this.props.location.country} </p>
      </div>
    );
  }
}

export default Location;
