import React, { Component } from 'react';

class allDays extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showSingle: false,
      singleDayData: {},
      isClicked: false,
      prevId: null
    };
  }
  componentWillReceiveProps(){
    if (this.state.prevId) {
      document.getElementById(this.state.prevId).style.background = '#D3D3D3';
    }
    this.setState({showSingle: false});
  }

  handleDayClick = (day) => {
    this.setState({ ...this.state, prevId: `day${day.id}` });
    if (this.state.prevId) {
      document.getElementById(this.state.prevId).style.background = '#D3D3D3';
    }
    document.getElementById(`day${day.id}`).style.background = 'darkgrey';
    this.setState({
      showSingle: true,
      singleDayData: day,
      isClicked: !this.state.isClicked,
      prevId: `day${day.id}`,
    }, () => {
      this.scrollToSingleView();
    });
  }

  scrollToSingleView = () => {
    const element = document.getElementById('hourly1');
    element && element.scrollIntoView();
  }

  render() {
    return (
      <>

        <div className="allDays">
          {
            this.props.data.map(day => (
              // <div className="Day" key={day.id}>
              //   <NavLink to={'/day/' + day.date} activeStyle={{ 'color': '#76323F' }}>
              //     <div ><h4>{day.date}</h4> <h4>{day.desc}</h4> Max:{day.max} | Min: {day.min}</div><img src={day.icon} alt={day.desc} />
              //   </NavLink>
              // </div>
              <div className={this.state.isClicked ? 'Day' : 'Day'} key={day.id} id={`day${day.id}`} onClick={() => this.handleDayClick(day)}>
                <div>
                  <h4 className='dateSingle'>{day.date}</h4>
                  <h4>{day.desc}</h4>
                    Max:{day.max}&#8451; | Min: {day.min}&#8451;
                </div>
                <img src={day.icon} alt={day.desc} />
              </div>
            ))
          }
        </div>
        {/* ({this.state.showSingle && <SingleDay data={this.state.singleDayData}/>}) */}
        {this.state.showSingle && (
          <>
            <hr />
            <div className="hourly" id="hourly1">
              <h1 className='dateSingle'>{this.state.singleDayData.date}</h1>
              <h2>Avg. Sea Level Pressure : {this.state.singleDayData.allData.slp} mb</h2>
              <h2>Avg. Temp: {this.state.singleDayData.allData.temp} &#8451;</h2>
              <h2>Wind Speed: {this.state.singleDayData.allData.wind_spd} m/s</h2>
              <h2>Total Precipitation: {this.state.singleDayData.allData.precip} mm</h2>
              <h2>UV: {this.state.singleDayData.allData.uv}</h2>
            </div>
          </>
        )}
        {/* <Route path="/day/:date" exact strict render={
            ({ match }) => (
              <SingleDay date={match.params.date} data1={match} />
            )} />
        </Router> */}
      </>
    )
  }
}

export default allDays;