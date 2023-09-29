import { useEffect ,useState} from "react";
const useRestaurantMenuInfo=(resId)=>{

  const [Menu,setMenu]=useState([])
    useEffect(() => {
      fetchMenu();
    }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=20.2942254&lng=85.744396&restaurantId=" +
        resId +
        "&catalog_qa=undefined&submitAction=ENTER",
    );
    const json = await data.json();

    setMenu(json?.data?.cards);
}
    return Menu
}

export default useRestaurantMenuInfo;