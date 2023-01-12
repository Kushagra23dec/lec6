import React from "react";
import {IMG_CDN_URL} from "../contants.js";
const Card = ({restaurant}) =>{
    //  console.log(restaurant.name);
    return(
        <div className="card-div">
        
        <img src={IMG_CDN_URL+restaurant.cloudinaryImageId}  />
        <h2>{restaurant.name}</h2>
        <h3>cuisines{restaurant.cuisines.join(", ")}</h3>
        <h4>Ratings = {restaurant.totalRatingsString}</h4>
         

        </div>
    );
}

export default Card;