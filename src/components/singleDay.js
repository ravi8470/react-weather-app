import React,{Component} from 'react';
import ExtraData from "./hourly";
import api_key from "../Api_Keys";
class SingleDay extends Component {
    state ={
        date: '',
        data:{}
    }
    async componentDidMount(){
        console.log('componentDidMount');
        let datax = await this.setDayData();
        this.setState({date: this.props.date, data: datax});
    }
    async componentDidUpdate(){
        console.log('componentDidUpdate');
        if(this.state.date !== this.props.date){
            let p = await this.setDayData();
            this.setState({date: this.props.date, data: p});
        }
    }
    setDayData = async () => {
        console.log('setDayData called');
        let datax = {};
        await fetch(`https://api.apixu.com/v1/forecast.json?key=${api_key}&q=Kolkata&dt=`+this.props.date).then(x => x.json()).then(y => datax = y.forecast.forecastday[0].day);
        return datax;
    }
    render(){
        return (
            <ExtraData addInfo={this.state.data} date={this.state.date}/>
        );
    }
}

export default SingleDay;