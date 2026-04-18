import { useState } from "react";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import CartItem from "./components/CartItem";
import AboutUs from "./components/AboutUs";
import "./App.css";

function App() {
  const [page, setPage] = useState("home");

  return (
    <>
      <Navbar setPage={setPage} />

      {page === "home" && (
        <div className="home">
          <h1>🌿 Paradise Nursery</h1>
          <button onClick={() => setPage("plants")}>Get Started</button>
        </div>
      )}

      {page === "about" && <AboutUs />}
      {page === "plants" && <ProductList />}
      {page === "cart" && <CartItem setPage={setPage} />}
    </>
  );
}

export default App;