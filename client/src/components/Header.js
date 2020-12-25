import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header=()=> {
    return (
        <div className="navbar" style={{backgroundColor: "grey", padding:"10px 32px"}}>
            <Link style={{textDecoration:'none'}} to='/' className='item'>
                <h1><img src="https://cdn.iconscout.com/icon/free/png-512/p-6-675564.png" height="50px" className="grayscale"/>
               <span style={{color:'white'}}>ark</span>Here</h1>
            </Link>
            <div className='right'>
                <Link style={{textDecoration:'none',fontWeight:"500"}} to='/hostsignin' className='item'>Host</Link>
                <Link style={{textDecoration:'none',fontWeight:"500"}} to='/signUp' className='item'> SignUp</Link>
                <Link style={{textDecoration:'none',fontWeight:"500"}} to='/signIn' className='item'>SignIn</Link>
            </div>
            </div>   
    );
}
export default Header
