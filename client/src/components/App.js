import React,{useEffect} from 'react'
import {Router,Route,Switch } from 'react-router-dom'
import './App.css'
import Header from './Header'
import Home from './Home'
import Host from './Host'
import SignIn from './SignIn'
import SignUp from './SignUp'
import ParkingDescription from './ParkingDescription'
import ConfirmBooking from './ConfirmBooking'
import history from '../history'
import SecondHome from './SecondHome'
import BookingDetails from './BookingDetails'
import HostSignIn from './HostSignIn'
import HostSignUp from './HostSignUP'
import PreviousBooking from './PreviousBooking'


function App() {
        
        return(
            <div className='App'>
                <Router history={history}>
                <div>
                    <Header/>
                    <Switch>
                        <Route path='/' exact component={Home}/>
                        <Route path='/hostsignin' exact component={HostSignIn}/>
                        <Route path='/hostsignup' exact component={HostSignUp}/>
                        <Route path='/signIn' exact component={SignIn}/>
                        <Route path='/signUp' exact component={SignUp}/>
                        <Route path='/list' exact component={SecondHome}/>
                        <Route path='/description/:id' exact component={ParkingDescription}/>
                        <Route path='/bookingDetails/:id' exact component={BookingDetails}/>
                        <Route path='/confirmBooking' exact component={ConfirmBooking}/>
                        <Route path='/previousBookings' exact component={PreviousBooking}/>
                    </Switch>
                        
                </div> 
                </Router>   
            </div>
        );

    
}

export default App
//https://s3.amazonaws.com/random-static.parkwhiz/videos/home-header-3.mp4