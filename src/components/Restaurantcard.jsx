import React from "react";
import { ReactDOM } from "react";

const RestaurantCard = ({name,cloudinaryImageId,lastMileTravel,cuisines}) => {
    
   
// RestaurantList is JSON Data for displaying cards


    return (
        <div className="card">
                <img
                    src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+
                    cloudinaryImageId
                }
                    
                />
                <h1>{ name}</h1>
                <h2>{ cuisines.join(",")}</h2>
                <h3>{ lastMileTravel} </h3>
            </div>
        
    );
}
export default RestaurantCard;