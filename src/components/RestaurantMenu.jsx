import { useEffect, useState } from "react";

const RestaurantMenu = () => {
  const [Menu, setMenu] = useState("");

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=20.2942254&lng=85.744396&restaurantId=108586&catalog_qa=undefined&submitAction=ENTER",
    );
    const json = await data.json();
    console.log(
      json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
        ?.card?.itemCards,
    );
    setMenu(
      json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
        ?.card?.itemCards,
    );
  };

  return (
    <div>
      <div className="menu">
        <h1>Name of Restaurant</h1>
        <h2>Menu</h2>
        <ul>
          <li>Biryani</li>
          <li>Burger</li>
          <li>Diet Coke</li>
          <li>Samosa</li>
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
