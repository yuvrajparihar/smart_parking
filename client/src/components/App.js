import React from 'react'
import { BrowserRouter,Route,Switch } from 'react-router-dom'
import './App.css'
import Header from './Header'
import Home from './Home'
import Host from './Host'
import SignIn from './SignIn'
import SignUp from './SignUp'


class App extends React.Component {
    render(){
        return(
            <div className='App'>
                <BrowserRouter>
                <div className='ui container'>
                    <Header/>
                    <Switch>
                        <Route path='/' exact component={Home}/>
                        <Route path='/host' exact component={Host}/>
                        <Route path='/signIn' exact component={SignIn}/>
                        <Route path='/signUp' exact component={SignUp}/>
                    </Switch>
                        
                </div> 
                </BrowserRouter>   
            </div>
        );

    }
}

export default App
