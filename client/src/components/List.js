import React,{useState} from "react";
import "./List.css";
import ListItem from "./ListItem";

class List extends React.Component {
   

    componentDidMount(){
       
        fetch("http://localhost:5000/user/parkings", {
            method: "GET",
            headers: {
              "Content-Type": "application/json;charset=utf-8",
            },
          })
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
            
            });

    }


  render() {
    return (
      <div
        style={{ height: "100vh", overflowY: "scroll" }}
        className="ui container"
      >
        <h2>Parking in Jabalpur</h2>

        <div className="listItems ui  relaxed divided list ">
          <ListItem
            id="0"
            name="Chikna Parking"
            address=""
            fair={65}
            image="https://d2uqqhmijd5j2z.cloudfront.net/files/321814/gallery/Screenshot_2.jpg?1543927700"
            summary="The entrance to this lot is on 175 Jessie St and is across the street from two exit lanes of another garage."
          />
          <ListItem
            id="0"
            name="Chikna Parking"
            address=""
            fair={65}
            image="https://d2uqqhmijd5j2z.cloudfront.net/files/321814/gallery/Screenshot_2.jpg?1543927700"
            summary="The entrance to this lot is on 175 Jessie St and is across the street from two exit lanes of another garage."
          />{" "}
          <ListItem
            id="0"
            name="Chikna Parking"
            address=""
            fair={65}
            image="https://d2uqqhmijd5j2z.cloudfront.net/files/321814/gallery/Screenshot_2.jpg?1543927700"
            summary="The entrance to this lot is on 175 Jessie St and is across the street from two exit lanes of another garage."
          />
          <ListItem
            id="0"
            name="Chikna Parking"
            address=""
            fair={65}
            image="https://d2uqqhmijd5j2z.cloudfront.net/files/321814/gallery/Screenshot_2.jpg?1543927700"
            summary="The entrance to this lot is on 175 Jessie St and is across the street from two exit lanes of another garage."
          />
          <ListItem
            id="1"
            name="Bhaijaan Parking "
            address=""
            fair={50}
            image="https://d2uqqhmijd5j2z.cloudfront.net/files/44237/gallery/44237.jpeg"
            summary="The entrance to this lot is on 175 Jessie St and is across the street from two exit lanes of another garage."
          />
          <ListItem
            id="2"
            name="Pussy Parking"
            address=""
            fair={60}
            image="https://d2uqqhmijd5j2z.cloudfront.net/files/416387/gallery/33_1st_St.01.png?1591622942"
            summary="The entrance to this lot is on 175 Jessie St and is across the street from two exit lanes of another garage."
          />
          <ListItem
            id="3"
            name="Sadi Parking"
            address=""
            fair={40}
            image="https://d2uqqhmijd5j2z.cloudfront.net/files/322822/search_thumb/225_Bush_St.02.png?1544353392"
            summary="The entrance to this lot is on 175 Jessie St and is across the street from two exit lanes of another garage."
          />
          <ListItem
            id="4"
            name="Dashing Parking"
            address=""
            fair={55}
            image="https://i2-prod.manchestereveningnews.co.uk/incoming/article11742783.ece/ALTERNATES/s615/car-park.jpg"
            summary="The entrance to this lot is on 175 Jessie St and is across the street from two exit lanes of another garage."
          />
        </div>
      </div>
    );
  }
}

export default List;
