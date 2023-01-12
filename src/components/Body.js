import React, { useState } from "react";
import Card from "./Card"; 
import {restaurantList} from "../contants.js";

 
    function filterData(searchtxt) {
        if(searchtxt != ""){             
           return restaurantList.filter((e)=>{return(
                    e.data.name.toLowerCase().includes(searchtxt.toLowerCase())
                    );})
                    
                    
                }
        
            return restaurantList;
         
    }
 
    
    const Body = ()=>{
        const [restaurants,setRestaurants] = useState(restaurantList);
        const [searchtxt,setSearchtxt]  = useState("");

        return(
        <div className="body-container">

            <div className="search-input-div">

            <input className="search-input" type="text" placeholder="Search" value={searchtxt} onChange={e=>{ setSearchtxt(e.target.value)}}  />

            <button className="search-btn" onClick={()=>{ 
                const data = filterData(searchtxt)
                setRestaurants(data)
                 }}>Search</button>

            </div>

            <div className="cards-collection-div">

            {restaurants.map((restaurant)=>{
                return(
                    <Card key={restaurant.data.id} {...restaurant.data} />
                );
            })}
             
            </div>
        </div>
    );
}

export default Body;