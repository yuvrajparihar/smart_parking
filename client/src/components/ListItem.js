import React from 'react'
import { Link } from 'react-router-dom'
import './ListItem.css'

class ListItem  extends React.Component {
    render(){
        return (
               
                <div className='list-item item'>
                    <img className='ui image' src="https://i2-prod.manchestereveningnews.co.uk/incoming/article11742783.ece/ALTERNATES/s615/car-park.jpg" alt=''/>
                        
                        <Link to='/list/description' style={{color:'white'}} className='content'>
                            <h3>
                                Yuvraj car Parking
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
