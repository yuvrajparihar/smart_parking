import React from 'react'
import List from './List'
import Map from './Map'

class SecondHome extends React.Component {
    render(){
    return (
        <div style={{display:'flex'}}>
            <List/>
            <Map/>
        </div>
    )
    }
}
export default SecondHome
