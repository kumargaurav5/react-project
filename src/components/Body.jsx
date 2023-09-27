import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./shimmer";

const Body = () => {
  const [listresObj, setlistresObj] = useState([]);
  const [fillistresObj, setfillistresObj] = useState([]);
  const [searchText, setsearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.7333148&lng=76.7794179&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
    );
    const jsondata = await data.json();
    // console.log(
    //   jsondata?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
    //     ?.restaurants,
    // );
    setlistresObj(
      jsondata?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants,
    );
    setfillistresObj(
      jsondata?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants,
    );
  };

  return listresObj.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setsearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              const filterres = listresObj.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase()),
              );
              setfillistresObj(filterres);
            }}
          >
            Search
          </button>
        </div>

        <button
          className="filter-btn"
          onClick={() => {
            setfillistresObj(fillistresObj.filter((res) => res?.info?.avgRating > 4));
          }}
        >
          Top rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {fillistresObj.map((restaurant) => (
          <RestaurantCard key={restaurant?.info?.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
