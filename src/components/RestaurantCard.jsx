import { useContext } from "react";
import { CDN_URL } from "../utlis/contants";
import UserContext from "../utlis/UserContext";
const RestaurantCard = (props) => {
  const {
    name,
    cloudinaryImageId,
    cuisines,
    avgRatingString,
    costForTwo,
    sla,
  } = props?.resData?.info;

  const data = useContext(UserContext);

  return (
    <div className="res-card w-[18rem] h-96 p-3 my-4 mx-3 bg-slate-100 shadow rounded-lg">
      <img
        className="res-logo"
        alt="Gaurav Foods"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="text-xl font-semibold my-2 px-auto"> {name}</h3>
      <h4 className="text-xs my-1"> {cuisines.join(", ")}</h4>
      <div className="flex my-1">
        <h4 className="text-base">{avgRatingString + "  "}</h4>
        <svg
          className="w-4 h-5 text-green-700 mr-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 22 20"
        >
          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
        </svg>
      </div>
      <h4 className="font-medium"> {costForTwo}</h4>
      <h4 className="font-medium"> {sla.deliveryTime} min</h4>
      
    </div>
  );
};

// Higher Order components
// Input - RestaurantCard => RestaurantCardPromoted

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white p-2 m-2 rounded-lg">
          High Rated
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
