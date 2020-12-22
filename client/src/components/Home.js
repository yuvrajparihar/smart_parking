import React from 'react'
import {Field,reduxForm} from 'redux-form'
import history from '../history'
import 'bootstrap/dist/css/bootstrap.min.css';

class Home extends React.Component {
    renderInput({input,meta}){
        return(
            <div className="cont">         
           <div class="input-group input-group-lg field" style={{width: "400px",display:"block" ,fontSize: "1.2em"}}>
            <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg"
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
    render(){
        return (
            
                <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui error form">
                    <Field name='location' component={this.renderInput}/>
                    <button type="button" class="btn btn-info cont-button" style={{fontSize: "1.6em",backgroundColor: "#0dcaf0"}}>Search</button>
                </form>
            
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
