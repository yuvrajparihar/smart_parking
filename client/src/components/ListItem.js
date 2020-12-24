import React from 'react'
import { Link } from 'react-router-dom'
import './ListItem.css'

class ListItem  extends React.Component {
    render(){
        return (
               
                <div className='list-item item'  style={{alignItems:"center"}}>
                    <img className='ui image' src={this.props.image} alt='' style={{borderRadius:"5px"}}/>
                        
                    <Link to={`/description/${this.props.id}`} style={{color:'black',textDecoration:'none'}} className='content'>
                            <h3 style={{color:"#2e368f",fontWeight:"1000"}}>
                                {this.props.name}
                            </h3>
                            <div>
                            Damoh Naka
                            </div>
                            <h5 style={{marginTop:'10px'}}>
                                {`Fare : ₹ ${this.props.fare} /day`}
                            </h5>
                        </Link>
                </div>
                
        )
    }
}

export default ListItem
