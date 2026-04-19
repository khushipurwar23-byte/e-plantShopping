import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/CartSlice";
import Navbar from "./Navbar";

const plants = {
  Indoor: [
    {
      id: 1,
      name: "Snake Plant",
      price: 200,
      image: "https://via.placeholder.com/100",
    },
    {
      id: 2,
      name: "Peace Lily",
      price: 250,
      image: "https://via.placeholder.com/100",
    },
  ],
  Outdoor: [
    {
      id: 3,
      name: "Rose",
      price: 150,
      image: "https://via.placeholder.com/100",
    },
    {
      id: 4,
      name: "Tulip",
      price: 180,
      image: "https://via.placeholder.com/100",
    },
  ],
  Succulents: [
    {
      id: 5,
      name: "Aloe Vera",
      price: 100,
      image: "https://via.placeholder.com/100",
    },
    {
      id: 6,
      name: "Cactus",
      price: 120,
      image: "https://via.placeholder.com/100",
    },
  ],
};

function ProductList() {
  const dispatch = useDispatch();
  const [added, setAdded] = useState({});

  const handleAdd = (plant) => {
    dispatch(addItem(plant));
    setAdded({ ...added, [plant.id]: true });
  };

  return (
    <div>
      {/* ✅ REQUIRED NAVBAR */}
      <Navbar />

      <h2 style={{ textAlign: "center" }}>🌿 Our Plants</h2>

      {Object.keys(plants).map((category) => (
        <div key={category}>
          <h3>{category}</h3>

          <div style={{ display: "flex", gap: "20px" }}>
            {plants[category].map((plant) => (
              <div key={plant.id} style={{ border: "1px solid #ccc", padding: "10px" }}>
                
                {/* ✅ Thumbnail */}
                <img src={plant.image} alt={plant.name} />

                <h4>{plant.name}</h4>
                <p>₹{plant.price}</p>

                {/* ✅ Disable after add */}
                <button
                  onClick={() => handleAdd(plant)}
                  disabled={added[plant.id]}
                >
                  {added[plant.id] ? "Added" : "Add to Cart"}
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;