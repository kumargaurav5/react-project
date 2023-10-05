import { useEffect, useState } from "react";
import ShimmerMenu from "./ShimmerMenu";
import { useParams } from "react-router-dom";
import useRestaurantMenuInfo from "../utlis/useRestaurantMenuInfo";
import RestaurantCategory from "./Restaurantcategory";
import SkimmerUl from "./shimmer";

const RestaurantMenu = () => {
  const [showIndex,setshowIndex]=useState(0)
  const { resId } = useParams(); 
  const Menu = useRestaurantMenuInfo(resId);

  if (Menu.length === 0) {
    return <ShimmerMenu />;
  }
  const { name, cuisines, costForTwoMessage } = Menu[0]?.card?.card?.info;
  const items =
    Menu[2]?.groupedCard?.cardGroupMap.REGULAR.cards[1]?.card?.card.itemCards;
  const categories = Menu[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
    (c) =>
      c.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
  );

  return (
    <div className="text-center ">
      <h1 className="font-bold my-5 text-2xl">{name}</h1>
      <p className="font-bold">
        {cuisines.join(" ")} - {costForTwoMessage}
      </p>
      {/* categories accordian */}
      {categories.map((category, index) => (
        <RestaurantCategory key={index} data={category?.card?.card} 
        show={index===showIndex ? true:false}
        setshowIndex={()=>setshowIndex(index)} 
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
