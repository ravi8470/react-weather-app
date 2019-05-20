import React from 'react';

function Hourly(props){
    return (
        <div className="hourly">
            <h1>{props.date}</h1>
            <h2>Avg. Humidity : {props.addInfo.avghumidity}</h2>
            <h2>Avg. Temp: {props.addInfo.avgtemp_c} C</h2>
            <h2>Max Wind Speed: {props.addInfo.maxwind_kph} kph</h2>
            <h2>Total Precipitation: {props.addInfo.totalprecip_in} in</h2>
            <h2>UV: {props.addInfo.uv}</h2>
        </div>
    )
}
    
export default Hourly;