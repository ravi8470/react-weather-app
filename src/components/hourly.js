import React from 'react';

function Hourly(props){
  console.log('hourly',props)
    return (
        <div className="hourly">
            <h1>{props.data.date}</h1>
            <h2>Avg. Sea Level Pressure : {props.data.allData.slp} mb</h2>
            <h2>Avg. Temp: {props.data.allData.temp} C</h2>
            <h2>Wind Speed: {props.data.allData.wind_spd} m/s</h2>
            <h2>Total Precipitation: {props.data.allData.precip} mm</h2>
            <h2>UV: {props.data.allData.uv}</h2>
        </div>
    )
}

export default Hourly;