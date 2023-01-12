import React, { useState } from "react";
import Card from "./Card";
 
import {restaurantList} from "../contants.js";

const Search = (setRestaurants) =>{
    const data = "";

    const [searchtxt,setSearchtxt]  = useState("");
    // if(searchtxt===""){
    //     setRestaurants(restaurantList);
    // }
     function filterData() {
        if(searchtxt != ""){
            console.log(restaurantList);
            setRestaurants(
                restaurantList.filter((e)=>{return(
                e.data.name.toLowerCase().includes(searchtxt)
            );})
    
            ) 
        }
        if(searchtxt == ""){
            setRestaurants(restaurantList)
        }
    }

    

    return(
      
        <div className="search-input-div">

        <input className="search-input" type="text" placeholder="Search" value={searchtxt} onChange={e=>{ setSearchtxt(e.target.value)}}  />

        <button className="search-btn" onClick={()=>{ filterData() }}>Search</button>
        
        </div>
        
    );
}

const Body = ()=>{
    const [restaurants,setRestaurants] = useState(restaurantList);

    return(
        <div className="body-container">

            {Search(setRestaurants)}
            <div className="cards-collection-div">

            {restaurants.map((restaurant)=>{
                return(
                    <Card key={restaurant.data.id} restaurant={restaurant.data} />
                );
            })}
             
            </div>
        </div>
    );
}

export default Body;