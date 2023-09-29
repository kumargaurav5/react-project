import { useEffect, useState } from "react";
import Shimmer from "./shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenuInfo from "../utlis/useRestaurantMenuInfo";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const Menu = useRestaurantMenuInfo(resId)


  if (Menu.length === 0) {
    return <Shimmer/>;
  }

  const { name } = Menu[0]?.card?.card?.info;
  const items =
    Menu[2]?.groupedCard?.cardGroupMap.REGULAR.cards[1]?.card?.card.itemCards;
  if (items === undefined) {
    return <h1>No Recommend Iteam</h1>;
  }

  return (
    <div>
      <div className="menu">
        <h1>{name}</h1>
        <h2>Menu</h2>
        <ul>
          {items.map((iteam) => (
            <li key={iteam.card.info.id}>
              {iteam.card.info.name} - Rs {iteam.card.info.price / 100 || iteam.card.info.defaultPrice/100}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
