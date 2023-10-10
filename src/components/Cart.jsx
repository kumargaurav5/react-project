import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utlis/cartSlice";
import IteamList from "./IteamList";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems)
  const dispatch = useDispatch();

  const handleClearCart=()=>{
    dispatch(clearCart())
  }
  return (
    <div className="text-center m-5 p-5">
      <h1 className="text-2xl font-bold">Cart</h1>
      <div className="w-9/12 m-auto">
        <button className="p-2 m-2 bg-black text-white rounded-lg"
        onClick={handleClearCart}
        >Clear Cart</button>
        <IteamList iteams={cartItems} />
      </div>
    </div>
  );
};
export default Cart;
