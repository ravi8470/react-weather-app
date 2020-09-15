import React, { Component } from 'react';
import { weatherbit_api_key } from "./Api_Keys";
import './App.css';
import AllDays from "./components/allDays";
import Select from 'react-select';
import { cities } from './components/cities';

class App extends Component {
  state = {
    forecastData: [],
    currentCity: 'Kolkata'
  };

  async componentDidMount() {
    this.getForecast();
  }

  getForecast = async (city = null) => {
    let data;
    if (!city) {
      city = 'Kolkata'
    }
    // await fetch(`https://api.apixu.com/v1/forecast.json?key=${api_key}&q=Kolkata&days=10`).then(x => x.json()).then(y =>data = y.forecast.forecastday);
    // console.log(data);
    var arr = [];
    // await data.forEach((x,ind) => arr.push( {'id':ind, "date":x.date, "max":x.day.maxtemp_c,"min":x.day.mintemp_c,"icon":x.day.condition.icon,"desc":x.day.condition.text}));
    // await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=22.57&lon=88.36&appid=${api_key_openweather}&exclude=current,hourly,minutely`).then(x => x.json())
    // .then(y => console.log(y))
    // let openweathermapURL = `https://api.openweathermap.org/data/2.5/forecast?q=kolkata&appid=${api_key_openweather}&units=metric`;
    let weatherbitURL = `https://api.weatherbit.io/v2.0/forecast/daily?key=${weatherbit_api_key}&days=7&city=${city}`;
    await fetch(weatherbitURL)
      .then(x => x.json())
      .then(y => {
        // data = y.list.filter((x, i) => i < 14 && (i+1) % 8 === 0);
        data = y.data;
        data && data.forEach((x, ind) => arr.push({
          // id: ind,
          // date: x.dt_txt,
          // max: x.main.temp_max,
          // min: x.main.temp_min,
          // icon: `http://openweathermap.org/img/w/${x.weather[0].icon}.png`,
          // desc: x.weather[0].description
          id: ind,
          date: x.datetime,
          max: x.max_temp,
          min: x.min_temp,
          icon: `https://www.weatherbit.io/static/img/icons/${x.weather.icon}.png`,
          desc: x.weather.description,
          allData: x,
        }));
        this.setState({ forecastData: arr });
      });
  }

  onInputChange = (valObj) => {
    this.setState({ currentCity: valObj.value });
    this.getForecast(valObj.value);
  }

  render() {
    return (
      <div className="App">
        <h1> My Weather App </h1>
        <div className='selectCustom'>
          <Select
            className="basic-single"
            classNamePrefix="select"
            isSearchable={true}
            defaultValue={cities[0]}
            name="color"
            onChange={(val) => this.onInputChange(val)}
            options={cities}
          />
        </div>
        <h2 className='currentCity'> Current City: {this.state.currentCity} </h2>
        <AllDays data={this.state.forecastData} />
      </div>
    );
  }
}

export default App;
