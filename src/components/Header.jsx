import { LOGO_URL } from "../utlis/contants";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utlis/useOnlineStatus";
import UserContext from "../utlis/UserContext";

const Header = () => {
  const [btnName, setbtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const data = useContext(UserContext);

  return (
    <div className=" header  flex flex-row p-5 bg-green-100  mx-auto">
      <div className="logo-container basis-1/4">
        <img className="logo w-20" src={LOGO_URL} />
      </div>
      <div className="nav-items  basis-3/4 ">
        <ul className=" flex  justify-between">
          <li>Online status:{onlineStatus ? "🟢" : "🔴"}</li>

          <li className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
            <Link to="/">Home</Link>
          </li>

          <li className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
            <Link to="/about">About us</Link>
          </li>

          <li className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
            <Link to="/contact">Contact us</Link>
          </li>

          <li className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
            <Link to="/grocery">Grocery</Link>
          </li>

          <button
            className="login text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            onClick={() => {
              btnName === "Login" ? setbtnName("Logout") : setbtnName("Login");
            }}
          >
            {btnName}
          </button>
          <li className="px-2 font-bold">{data?.loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
