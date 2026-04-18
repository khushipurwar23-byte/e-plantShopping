import { useSelector } from "react-redux";

export default function Navbar({ setPage }) {
  const cartCount = useSelector((state) =>
    state.cart.cartItems.reduce((total, item) => total + item.quantity, 0)
  );

  return (
    <div style={styles.navbar}>
      <h2 style={{ cursor: "pointer" }} onClick={() => setPage("home")}>
        🌿 Paradise Nursery
      </h2>

      <div>
        <button onClick={() => setPage("home")}>Home</button>
        <button onClick={() => setPage("plants")}>Plants</button>
        <button onClick={() => setPage("cart")}>
        <button onClick={() => setPage("about")}>About</button>
          🛒 Cart ({cartCount})
        </button>
      </div>
    </div>
  );
}

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    padding: "15px",
    background: "green",
    color: "white",
  },
};