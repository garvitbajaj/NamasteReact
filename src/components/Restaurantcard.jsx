import React from "react";
import { IMG_CDN_URL } from "./Contant";

const RestaurantCard = ({name,cloudinaryImageId,lastMileTravel,cuisines}) => {
    
   
// RestaurantList is JSON Data for displaying cards


    return (
        <div className="card">
                <img
                    src={IMG_CDN_URL+
                    cloudinaryImageId
                }     
                />
                <h1>{ name}</h1>
                <h2>{ cuisines.splice(0,1).join(",")}</h2>
                <h3>{ lastMileTravel} </h3>
            </div>
            
        
    );
}
export default RestaurantCard;