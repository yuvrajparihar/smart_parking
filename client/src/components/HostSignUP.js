import React, { useState } from "react";
import { NavLink as Link} from "react-router-dom";
import history from '../history'
function SignUp() {
    
    const [user, setNote] = useState({
      username: "",
      password: "",
      confirmPassword: ""
    });
  
    function handleChange(event) {
      const { name, value } = event.target;
  
      setNote((prevNote) => {
        return {
          ...prevNote,
          [name]: value,
        };
      });
    }
    const [matchPass, setPass]= useState("");
  
    function signUp(event) {
     
      event.preventDefault();
     if(user.password===user.confirmPassword){
      fetch("http://localhost:5000/auth/host/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify({ email: user.username, password: user.password }),
      })
        .then((response) => response.json())
        .then((data) => {
          if(data.response=="alreadyRegistered"){
            console.log(data)
            setPass("User is already registered");
          }
          else{
            console.log(data)
            window.sessionStorage.setItem("type", "host");
            window.sessionStorage.setItem("email",data.userData.email_id );
            window.sessionStorage.setItem("isSignedIn","yes");
            // const accessToken = data.token;
            // window.sessionStorage.setItem("jwtToken",accessToken);
          //  history.push("/home");
          }
        });
     }
     else{
       setPass("Password doesn't match");
     }
  
    
    }
    
    
    
      return ( 
       <div>
        {/* <Header /> */}
           <div className="signin">
           <h3 className="sign">
                Sign Up
           </h3>
         <form>
           <input  name="username" onClick={()=>{setPass("")}}  onChange={handleChange} className="input" type="email" placeholder="Email" />
           <input  name="password" onClick={()=>{setPass("")}} onChange={handleChange} className="input" type="password" placeholder="Password" />
           <input  name="confirmPassword" onClick={()=>{setPass("")}} onChange={handleChange} className="input confirm" type="password" placeholder="Confirm Password" />
           <p className="match">{matchPass}</p>
           <button onClick={signUp} className="button signupbutton" >Sign Up</button>
           <p className="or">or</p>
  
           <a className="google" href="https://my-keeper-server.herokuapp.com/auth/google"><div>
            <img className="x" src="google.png" alt="GOOGLE" />
            <p className="x bold"> Google</p>
          </div></a>
  
           <br/>
         </form>
         </div>
         {/* <Footer/> */}
       </div>
          
      )
}

export default SignUp
