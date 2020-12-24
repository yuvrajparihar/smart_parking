import React from 'react'
import {Router,Route,Switch } from 'react-router-dom'
import './App.css'
import Header from './Header'
import Home from './Home'
import Host from './Host'
import SignIn from './SignIn'
import SignUp from './SignUp'
import List from './List'
import ParkingDescription from './ParkingDescription'
import ConfirmBooking from './ConfirmBooking'
import history from '../history'
import SecondHome from './SecondHome'
import BookingDetails from './BookingDetails'


class App extends React.Component {
    render(){
        return(
            <div className='App'>
                <Router history={history}>
                <div>
                    <Header/>
                    <Switch>
                        <Route path='/' exact component={Home}/>
                        <Route path='/host' exact component={Host}/>
                        <Route path='/signIn' exact component={SignIn}/>
                        <Route path='/signUp' exact component={SignUp}/>
                        <Route path='/list' exact component={SecondHome}/>
                        <Route path='/description/:id' exact component={ParkingDescription}/>
                        <Route path='/bookingDetails/:id' exact component={BookingDetails}/>
                        <Route path='/confirmBooking' exact component={ConfirmBooking}/>
                        

                    </Switch>
                        
                </div> 
                </Router>   
            </div>
        );

    }
}

export default App
//https://s3.amazonaws.com/random-static.parkwhiz/videos/home-header-3.mp4