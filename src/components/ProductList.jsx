import { useDispatch } from "react-redux";
import { addToCart } from "../redux/CartSlice";
import { useState } from "react";

const plants = [
  { id: 1, name: "Aloe Vera", price: 10, category: "Succulent" },
  { id: 2, name: "Snake Plant", price: 15, category: "Indoor" },
  { id: 3, name: "Peace Lily", price: 20, category: "Flowering" },
  { id: 4, name: "Cactus", price: 12, category: "Succulent" },
  { id: 5, name: "Fern", price: 18, category: "Indoor" },
  { id: 6, name: "Rose", price: 25, category: "Flowering" },
];

export default function ProductList() {
  const dispatch = useDispatch();
  const [added, setAdded] = useState([]);

  return (
    <div>
      <h2>Plants</h2>

      {plants.map((plant) => (
        <div key={plant.id} style={{ border: "1px solid #ccc", padding: "10px", margin: "10px" }}>
          <h3>{plant.name}</h3>
          <p>Category: {plant.category}</p>
          <p>Price: ${plant.price}</p>

          <button
            disabled={added.includes(plant.id)}
            onClick={() => {
              dispatch(addToCart(plant));
              setAdded([...added, plant.id]);
            }}
          >
            {added.includes(plant.id) ? "Added" : "Add to Cart"}
          </button>
        </div>
      ))}
    </div>
  );
}