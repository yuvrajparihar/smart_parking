import React,{useState} from 'react'
import DatePicker from 'react-datepicker'
import date from 'date-and-time'
import 'react-datepicker/dist/react-datepicker.css'

class BookingDetails extends React.Component {
    state={startDate:new Date(),
           endDate:new Date() 
        }
    
    render(){

        
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
            <form>
                
            </form>

            
        </div>
    )
}
}

export default BookingDetails
