import React, { useEffect, useState } from "react";
import RestaurantCard from "./Restaurantcard";
import Shimmer from "./Shimmer";



const Body = () => {
  const [searchInput, setSearchInput] = useState("");
  const [allRestaurant, setallRestaurant] = useState([]);
  const [filteredRestaurant , setFilteredRestaurant] = useState([]);


  function filterData(searchInput, allRestaurant) {
    return allRestaurant.filter((restaurant) => {
      return restaurant?.info?.name?.toLowerCase()?.includes(searchInput);
    });
  }

  useEffect(() => {
    getRestaurant();
  }, []);
   console.log("see all restaurant", allRestaurant);
  

  async function getRestaurant() {
    const res = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING")
    const json = await res.json("");
    console.log("abcd");
    setallRestaurant(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestaurant(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }

  console.log('render');
  console.log("filterrestaurant",filteredRestaurant);
  //early return 
// if(!allRestaurant) return null;
  

// if(filteredRestaurant?.length === 0) return <h1>No Matach Found</h1>

  // conditonal rendering 
  // if my restaurant has empty ==> show shimmer UI
  // if my restaurant has data ==> show actual UI 
  if( allRestaurant?.length === 0){
    return <Shimmer/>
  }
 
  // restaurants.length === 0 ? <Shimmer UI/> : Actual UI whole return statement 
  // return allRestaurant?.length === 0 ?
  //   (<Shimmer />)
  //   :
  return(
      <>
        <div className="search">
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
              const data = filterData(searchInput, allRestaurant);
              //update the state - restaurant
              setFilteredRestaurant(data);
            }}
          >Search</button>
        </div>
        <div className="body">
          {
            filteredRestaurant.map((restaurant) => {
              return (
                <RestaurantCard {...restaurant?.info} key={restaurant?.info.id} />
              );
            })
          }
        </div>

      </>
    );
}

export default Body;
