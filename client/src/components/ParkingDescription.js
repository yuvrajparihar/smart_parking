import React from 'react'
import { Link } from 'react-router-dom'
import Map  from './Map'


class ParkingDescripition extends React.Component {
   
    componentDidMount(){
     
       const park_id=this.props.match.params.id;
        fetch("http://localhost:5000/user/parkingDetails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
     
      },
      body: JSON.stringify({ park_id:park_id }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
      });

    }

    render(){
        const {id}=this.props.match.params;
        return (
            <div className='ui container'>
                <div  className='ui grid'>
                    <div className='seven wide column'>
                        
                        <div style={{width:'100%'}} className='ui card'>
                            <div className='content'>
                                <h2>Yuvraj Parking </h2>
                                Damoh Naka
                                <h4>Fare : ₹ 100 </h4>
                                
                            </div>
                            <div className='content'>
                                <h4>About This Facility</h4>
                                <img style={{height:'250px',width:'100%'}} src="https://d2uqqhmijd5j2z.cloudfront.net/files/44237/gallery/44237.jpeg" alt=''></img>
                                <div className='ui small feed'>
                                    <div className='event'>
                                        <div className='summary'>
                                        The entrance to this lot is on 175 Jessie St and is across the street from two exit lanes of another garage.
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div  className='extra button'>
                            <Link to={`/bookingDetails/${id}`}>
                            <button  className='ui primary button'>
                            BOOK NOW
                            </button> 
                            </Link>
                            </div>
                                  
                                
                        </div>
                        
                        
                    </div>
                    <div className='nine wide column'>
                        <Map/>    
                    </div>

                </div>
                
            </div>
        )
    }  
}

export default ParkingDescripition
