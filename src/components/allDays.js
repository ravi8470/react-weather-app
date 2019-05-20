import React from 'react';
import {BrowserRouter as Router, NavLink, Route} from 'react-router-dom'
import SingleDay from './singleDay'
function allDays(props){
    return (
        <>
        <h1> My Weather App </h1>
        <Router>
        <div className="allDays">
        {
            props.data.map(day =>(
                <div className="Day">
                <NavLink to={'/day/' + day.date} key={day.id} activeStyle={{'color': '#76323F'}}>
                    <div ><h4>{day.date}</h4> <h4>{day.desc}</h4> Max:{day.max} | Min: {day.min}</div><img src={day.icon} alt={day.desc}/>
                </NavLink>
                </div>

            ))
        }
        </div>
        <Route path="/day/:date" exact strict render={
            ({match})=>(
          <SingleDay date={match.params.date} />
        )}/>
        </Router>
        </>
    )
}

export default allDays;