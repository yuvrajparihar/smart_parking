import React from 'react'
import {Field,formValues,reduxForm} from 'redux-form'
import history from '../history'
import 'bootstrap/dist/css/bootstrap.min.css';


class Home extends React.Component {
    state={
        myLocation:{lat:null,long:null}}
    renderInput({input,meta}){
        return(
            <div className="cont">         
            <div className="input-group input-group-lg field" style={{width: "400px",display:"block" ,fontSize: "1.2em"}}>
            <input {...input} type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg"
            autoComplete='off' placeholder='location..'></input>
            <div className="ui error message">
            {meta.touched && meta.error}
            </div>
            </div>
            </div>

        )

    }
    onSubmit= async (formValues)=>{
        console.log(formValues)
        history.push('/list')
    }
    onLocationsubmit=() =>{
            window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ ...this.state.myLocation, lat: position.coords.latitude, long: position.coords.longitude }),
            err => { console.log(err.message); }
        )
        
    }
    render(){ 
            console.log(this.state)
        return (
            <div>
                <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui error form">
                    <Field name='location' component={this.renderInput}/>
                    <button  className="btn btn-info cont-button" style={{fontSize: "1.6em",backgroundColor: "rgb(245, 6, 6)",borderColor: "rgb(245, 6, 6)"}}>Search</button>
                </form>
                <button onClick={this.onLocationsubmit} className="btn btn-info cont-button2" style={{fontSize: "1.2em",backgroundColor: "rgb(245, 6, 6)",borderColor: "rgb(245, 6, 6)"}}>
                    Find Parkings Nearby
                    <i className='location arrow icon'></i>
                    </button>
        
            </div>
        )
    } 
}
const validate =formValues=>{
    const errors={}
    if(!formValues.location){
        errors.location='You must enter a location.'
    }
    return errors
    }


export default reduxForm({
 form:'home',
 validate:validate,
})(Home);
