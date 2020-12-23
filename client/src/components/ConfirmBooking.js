import React from 'react'
import  Modal from './Modal'
import history from "../history";
import { Link } from 'react-router-dom';


class ConfirmBooking extends React.Component{
    renderActions(){
        
        return(
            <React.Fragment>
            <button className='ui button negative'>Book</button>
            <Link to='/list/description' className='ui button'>Cancel</Link>
            </React.Fragment>
        );
    }
    render(){
        return (
            <div>
            <Modal title='Confirm Booking' 
            content="Are you sure you want to book a slot?"
            actions={this.renderActions()}
            onDismiss={()=>history.push('/list/description')}
            />
            </div>
        )
    }
    
}

export default ConfirmBooking
