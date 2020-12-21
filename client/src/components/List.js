import React from 'react'
import './List.css'
import ListItem from './ListItem'
import Map from './Map'


class List extends React.Component {
    
    render(){
        return (
            <div >
                <h2>Parking near Vijay Nagar</h2>
                    <div className='ui grid'>
                            <div className='eight wide column'>
                                <div className='listItems ui  relaxed divided list '>
                                    <ListItem/>
                                    <ListItem/>
                                    <ListItem/>
                                    <ListItem/>
                                    <ListItem/>    
                                </div> 
                            </div>
                            <div className='eight wide column'>
                               <Map/>
                            </div>
                    </div>
            </div>
        )

    }
    
}

export default List
