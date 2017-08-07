import React, { Component } from 'react';
import Temperature from './Components/Temperature';
import Location from './Components/Location';
import Icon from './Components/Icon';
import {weatherIcons} from './Components/Icons';
import './App.css';

const locAPI = 'http://freegeoip.net/json/';
const something = '9f776fd0e5697a425dbf98f7843dc282';
let tempAPI;
class App extends Component {

  constructor(){
    super();
    this.state = {
      location: {
        city: '',
        country: ''
      },
      temperature: {
        id: '0',
        cel: '0.0',
        far: '0.0',
        condition: ''
      }
    }
  }

  generateLocation(res){
    tempAPI = "http://api.openweathermap.org/data/2.5/weather?lat=" + res.latitude + "&lon=" + res.longitude + "&units=metric&appid="+something;
    this.setState({
      location: {
        city: res.city,
        country: res.country_name
      }
    });
    this.getTemperature();
  }

  generateIcon(id){
    let prefix = 'wi wi-';
    let icon = weatherIcons[id].icon;
    if (!(id > 699 && id < 800) && !(id > 899 && id < 1000)) {
      icon = 'day-' + icon;
    }
    return icon = prefix + icon;
  }

  getLocation(){
    fetch(locAPI)
    .then((res) => res.json())
    .then(res => {
      this.generateLocation(res)
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  getTemperature(){
    fetch(tempAPI)
    .then((res) => res.json())
    .then(res => {
      this.setState({
        temperature: {
          icon: this.generateIcon(res.weather[0].id),
          cel: res.main.temp,
          far: (res.main.temp * 1.8) + 32,
          condition: res.weather[0].main
        }
      })
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  componentWillMount(){
    this.getLocation();
  }

  componentDidMount(){
    this.getLocation();
  }

  render() {
    return (
      <div className="App">
        <Icon icon={this.state.temperature.icon}/>
        <Temperature temperature={this.state.temperature} />
        <Location location={this.state.location} />
      </div>
    );
  }
}

export default App;
