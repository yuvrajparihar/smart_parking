import React from 'react'
import { connect } from "react-redux";
import DatePicker from 'react-datepicker'
import date from 'date-and-time'
import 'react-datepicker/dist/react-datepicker.css'
import { addBooking } from '../actionCreator';

class BookingDetails extends React.Component {
    state={startDate:new Date(),
           endDate:new Date(),
           parking:null
        }
        
    componentDidMount(){
      const park_id=this.props.match.params.id;
        fetch("http://localhost:5000/user/parkingDetails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
     
      },
      body: JSON.stringify({ park_id:park_id }),
    })
      .then((response) => response.json())
      .then((data) => {
        this.setState({parking:data[0]})
        console.log(data)
      });

    }
    
    
    render(){
    const park_id=this.props.match.params.id;

        
    return (
        <div className='ui container'>
            <h4>Complete Your Parking Reservation</h4>
            <h2>Yuvraj Parking</h2>
            
            <div>
                <div >Start</div>
                <div>{date.format(new Date(), 'HH:mm')}</div>
                <DatePicker
                selected={this.state.startDate}
                onChange={date=>this.setState({startDate:date})}
                dateFormat='dd/MM/yyyy'
                minDate={new Date()}
                />
            </div>
            <div>
                <div>End</div>
                <div>{date.format(new Date(), 'HH:mm')}</div>
                <DatePicker
                selected={this.state.endDate}
                onChange={date=>this.setState({endDate:date})}
                dateFormat='dd/MM/yyyy'
                minDate={new Date()}/>
            </div>
            
            
        </div>
    )
}
}

export default connect(null,{addBooking})(BookingDetails)
