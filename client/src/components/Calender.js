import React,{useState} from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';

function Calender() {
    const now=new Date();
    const [value, onChange] = useState(new Date());
    console.log(value)
    return (
        <div>
            <Calendar
        onChange={onChange}
        value={value}
        minDate={now}
        />
           
        </div>
    )
}

export default Calender
