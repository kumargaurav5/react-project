import { useSelector } from "react-redux";
import IteamList from "./IteamList";

const Cart = () => {
  const cartItems=useSelector((store)=>store.cart.items)
  {console.log(cartItems)}
  return (
    <div className="text-center m-5 p-5">
      <h1 className="text-2xl font-bold">Cart</h1>


      <div>
        <IteamList iteams={cartItems}/>
      </div>
    </div>

  );
};
export default Cart;
