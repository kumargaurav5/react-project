import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { useState, useEffect } from "react";
import SkimmerUl from "./shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utlis/useOnlineStatus";

const Body = () => {
  const [listresObj, setlistresObj] = useState([]);

  const [fillistresObj, setfillistresObj] = useState([]);
  const [searchText, setsearchText] = useState("");
  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
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

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) {
    return <h1>offline</h1>;
  }

  return listresObj.length === 0 ? (
    <SkimmerUl />
  ) : (
    <div className="body mx-auto bg-[#f0f0f0]">
      <div className="filter flex py-5 justify-center ">
        <div className="search flex  w-5/12">
          <input
            type="text"
            className="search-box bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-5/6 pl-10 p-2 mx-5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            id="search"
            value={searchText}
            onChange={(e) => {
              setsearchText(e.target.value);
            }}
          />
          <button
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
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
          className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2 text-center mr-2 mb-2"
          onClick={() => {
            setfillistresObj(
              listresObj.filter((res) => res?.info?.avgRating > 4),
            );
          }}
        >
          Top rated Restaurant
        </button>
      </div>
      <div className=" ">
        <div className="res-container   mx-5 pr-2   flex  flex-wrap ">
          {fillistresObj.map((restaurant) => (
            <Link
              key={restaurant?.info?.id}
              to={"restaurant/" + restaurant?.info?.id}
            >
              {
                /* if the restaurant is Promoted show Promoted else not */
                restaurant?.info?.avgRating > 4.2 ? (
                  <RestaurantCardPromoted resData={restaurant} />
                ) : (
                  <RestaurantCard resData={restaurant} />
                )
              }
              {console.log()}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Body;
