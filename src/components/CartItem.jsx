import { useSelector, useDispatch } from "react-redux";
import { increaseQty, decreaseQty, removeItem } from "../redux/CartSlice";

export default function CartItem({ setPage }) {
  const items = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div>
      <h2>🛒 Your Cart</h2>

      {items.length === 0 && <p>No items in cart</p>}

      {items.map((item) => (
        <div key={item.id} style={{ border: "1px solid gray", margin: "10px", padding: "10px" }}>
          <h3>{item.name}</h3>
          <p>Price: ${item.price}</p>

          <button onClick={() => dispatch(decreaseQty(item.id))}>-</button>
          {item.quantity}
          <button onClick={() => dispatch(increaseQty(item.id))}>+</button>

          <br /><br />

          <button onClick={() => dispatch(removeItem(item.id))}>
            Delete
          </button>
        </div>
      ))}

      <h3>Total: ${total}</h3>

      <button>Checkout (Coming Soon)</button>
      <button onClick={() => setPage("plants")}>Continue Shopping</button>
    </div>
  );
}