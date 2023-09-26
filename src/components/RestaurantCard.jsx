import { CDN_URL } from "../utlis/contants";
const RestaurantCard=(props)=>{
    const {name,cloudinaryImageId,cuisines,avgRatingString,costForTwo,sla}=props.resData
    return(
        <div className='res-card' >
            <img
            className='res-logo'
            alt="Gaurav Foods"
            src={CDN_URL+cloudinaryImageId}
            />
            <h3> {name}</h3>
            <h4> {cuisines.join(", ")}</h4>
            <h4> {avgRatingString} stars</h4>
            <h4> {costForTwo}</h4>
            <h4> {sla.deliveryTime} min</h4>
        </div>
    )
}

export default RestaurantCard;
