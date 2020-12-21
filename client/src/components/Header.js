import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

const Header=()=> {
    return (
        <div className='header'>
        <div className='ui pointing secondary menu'>
            <Link to='/' className='item'>
                <h3>Park here</h3>
            </Link>
            <div className='right menu'>
                <Link to='/host' className='item'>Host</Link>
                <Link to='/signIn' className='item'> SignUp</Link>
                <Link to='/signUp' className='item'>SignIn</Link>
            </div>
            </div>   
        </div>
    );
}
export default Header
