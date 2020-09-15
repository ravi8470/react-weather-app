import React, { Component } from 'react';
import ExtraData from "./hourly";
import { api_key_openweather } from "../Api_Keys";

class SingleDay extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: props.data
    }
  }
  componentDidUpdate() {
    console.log(this.props)
    this.setState({data: this.props.data})
  }

  setDayData = async () => {
    console.log('setDayData called');
    let datax = {};
    // await fetch(`https://api.apixu.com/v1/forecast.json?key=${api_key}&q=Kolkata&dt=` + this.props.date, { mode: 'cors' })
    // .then(x => x.json())
    // .then(y => datax = y.forecast.forecastday[0].day);
    // await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=40.12&lon=-96.66&appid=${api_key_openweather}`)
    // .then( x => x.json())
    // .then(y => console.log(y));
    return datax;
  }
  render() {
    return (
      <ExtraData data={this.state.data} />
    );
  }
}

export default SingleDay;