import RestaurantCard from "./RestaurantCard";
import { useState ,useEffect} from "react";
import resObj from "../utlis/mockData";

const Body=()=>{
    const [listresObj,setlistresObj]=useState(resObj)

    useEffect(()=>{
        fetchData()
    },[])

    const  fetchData=async()=>{
        const data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.7333148&lng=76.7794179&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const json=await data.json()
        console.log(json)
    };

    return(
        <div className='body' >
            <div className='filter'>
                <button className="filter-btn" onClick={()=>{
                    setlistresObj(listresObj.filter((res)=>(res.avgRating>4)))
                }}>
                    Top rated Restaurant
                </button>
            </div>
            <div className='res-container'>
                {listresObj.map((restaurant) => (
                    <RestaurantCard key={restaurant.id} resData={restaurant}  />
                ))
                }
            </div>

        </div>
    );
}

export default Body