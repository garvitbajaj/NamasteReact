import React, { useState } from "react";
import RestaurantCard from "./Restaurantcard";
import { restaurantList } from "./Contant";

const Body = () => {
    const [searchInput , setSearchInput] = useState("");
    const [restaurants , setRestaurants] = useState("restaurantList");


    function filterData(searchInput,restaurants){
      const filterData =  restaurants.filter((restaurant)=>{
        restaurant.data.name.includes(searchInput);
       })
       return filterData;
        }

    return (
        <>
        <div className="">
         <input 
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchInput}
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
         />
         <button 
          className="search-btn"
          onClick={() => {
            //need to filter data
            const data = filterData(searchInput,restaurants);
            //update the state - restaurant
            setRestaurants(data);
          }}
         >Search</button>
        </div>
         <div className="body">
            {
                restaurants.map((restaurant)=>{
                return <RestaurantCard {... restaurant.data } key={restaurant.data.id}/>
                })
            }
        </div>

        </>
    );
}

export default Body;
