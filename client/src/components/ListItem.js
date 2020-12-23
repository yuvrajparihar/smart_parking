import React from 'react'
import { Link } from 'react-router-dom'
import './ListItem.css'

class ListItem  extends React.Component {
    render(){
        return (
               
                <div className='list-item item'>
                    <img className='ui image' src={this.props.image} alt=''/>
                        
                    <Link to={`/list/description/${this.props.id}`} style={{color:'white',textDecoration:'none'}} className='content'>
                            <h3>
                                {this.props.name}
                            </h3>
                            <div>
                            Best place to park you vechicle at reasonable prices.
                            </div>
                        </Link>
                </div>
                
        )
    }
}

export default ListItem
