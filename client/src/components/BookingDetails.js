import React,{useState} from 'react'
import Calender from './Calender'
import date from 'date-and-time'



class BookingDetails extends React.Component {
    
    render(){
        const now=new Date();
    return (
        <div className='ui container'>
            <h4>Complete Your Parking Reservation</h4>
            <h2>Yuvraj Parking</h2>
            <div>
                <div >Start</div>
                <div>{date.format(now, 'HH:mm')}</div>
                <Calender/>
            </div>
            <div>
                <div>End</div>
                <div>{date.format(now, 'HH:mm')}</div>
                <Calender/>
            </div>

            
        </div>
    )
}
}

export default BookingDetails
