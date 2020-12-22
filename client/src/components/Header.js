import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header=()=> {
    return (
        <div className="navbar" style={{backgroundColor: " rgba(108,117,125,0.3)", padding:"16px 32px"}}>
            <Link to='/' className='item'>
                <h1>Park here</h1>
            </Link>
            <div className='right'>
                <Link to='/host' className='item'>Host</Link>
                <Link to='/signIn' className='item'> SignUp</Link>
                <Link to='/signUp' className='item'>SignIn</Link>
            </div>
            </div>   
    );
}
export default Header
