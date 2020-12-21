import React from 'react'
import {Field,reduxForm} from 'redux-form'


class Home extends React.Component {
    renderInput({input,meta}){
        console.log(meta.error)
        return(
            <div className='field'>
            <input {...input} autoComplete='off' placeholder='location..'/>
            <div className="ui error message">
            {meta.touched && meta.error}
            </div>
            </div>
        )
    }
    onSubmit(formValues){
        console.log(formValues)
    }
    render(){
        return (
            
                <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui error form">
                    <Field name='location' component={this.renderInput}/>
                    <button className='ui primary button'>Search</button>
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
