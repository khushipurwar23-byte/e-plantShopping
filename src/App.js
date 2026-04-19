import React, { useState } from "react";
import ProductList from "./components/ProductList";
import Navbar from "./components/Navbar";

function App() {
  const [showProducts, setShowProducts] = useState(false);

  // ✅ REQUIRED FUNCTION
  const handleGetStartedClick = () => {
    setShowProducts(true);
  };

  return (
    <div>
      <Navbar />

      {!showProducts ? (
        <div style={{ textAlign: "center", marginTop: "100px" }}>
          <h1>🌿 Paradise Nursery</h1>
          <p>Welcome to the best plant shop 🌱</p>

          {/* ✅ Button using required function */}
          <button onClick={handleGetStartedClick}>
            Get Started
          </button>
        </div>
      ) : (
        <ProductList />
      )}
    </div>
  );
}

export default App;