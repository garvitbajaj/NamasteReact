import React from "react";
import { useParams } from "react-router-dom";


const RestaurantMenu = () => {
//how to read a dynamic params 
    // now here we do Destructuring on the fly 
    const { id } = useParams();

    // const params = useParams();
    // const {id} = params;
    // console.log(params);

    return (

        <div className="restaurant-menu">
            <h1>Restaurant id: {id}</h1>
            <h1>Vishal Juice vatika </h1>
        </div>

    );
}

export default RestaurantMenu;