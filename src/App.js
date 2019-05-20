import React,{Component} from 'react';
import './App.css';
import AllDays from "./components/allDays";
import api_key from "./Api_Keys";
class App extends Component{
  state = {
    forecastData: []
  };
  async componentDidMount() {
    let data;
    await fetch(`https://api.apixu.com/v1/forecast.json?key=${api_key}&q=Kolkata&days=10`).then(x => x.json()).then(y =>data = y.forecast.forecastday);
    console.log(data);
    var arr = [];
    await data.forEach((x,ind) => arr.push( {'id':ind, "date":x.date, "max":x.day.maxtemp_c,"min":x.day.mintemp_c,"icon":x.day.condition.icon,"desc":x.day.condition.text}));
    this.setState({forecastData: arr});
    console.log(this.state.forecastData);
  }
  render () {
    return (
      <div className="App">
        <AllDays data={this.state.forecastData}/>
      </div>
    );
  }  
}

export default App;
