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
                <div className='item'>Host</div>
                <div className='item'> SignUp</div>
                <div className='item'>SignIn</div>
            </div>
            </div>   
        </div>
    );
}
export default Header
