export const addBooking=(id)=>{
    return({
        type:'ADD_BOOKING',
        payload:{
            id:id
        }
    })

}