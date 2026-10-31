// src/data.js
import Tomato from "./assets/tomato.webp";
import Milk from "./assets/milk.jpg";
import Rice from "./assets/rice.jpg";
import Groundnutoil from "./assets/groundnutoil.jpg";
import Chillipowder from "./assets/chillipowder.jpg";
import Turmericpowder from "./assets/turmericpowder.jpg";

export const farmers = [
  {
    id: "V-AURA-001",
    name: "Raja Farms",
    location: "Tamil Nadu",
    rating: 4.5,
    story: "We grow organic vegetables."
  },
  {
    id: "V-AURA-002",
    name: "Dairy Farm",
    location: "Kerala",
    rating: 4.3,
    story: "Fresh milk and dairy products."
  },
  {
    id: "V-AURA-003",
    name: "Spice Farm",
    location: "Karnataka",
    rating: 4.6,
    story: "Authentic spices & masalas."
  }
];

export const products = [
  // 🌱 PRIMARY
  {
    id: 1,
    name: "Fresh Tomatoes",
    price: 40,
    image: Tomato,
    category: "Vegetables",
    type: "primary",
    quantity: 50,
    unit: "kg",
    farmerId: "V-AURA-001"
  },
  {
    id: 2,
    name: "Raw Milk",
    price: 60,
    image: Milk,
    category: "Dairy",
    type: "primary",
    quantity: 30,
    unit: "liter",
    farmerId: "V-AURA-002"
  },

  // 🌾 SECONDARY
  {
    id: 3,
    name: "Rice",
    price: 70,
    image: Rice,
    category: "Grains",
    type: "secondary",
    quantity: 80,
    unit: "kg",
    farmerId: "V-AURA-001"
  },
  {
    id: 4,
    name: "Groundnut Oil",
    price: 180,
    image:Groundnutoil,
    category: "Oil",
    type: "secondary",
    quantity: 40,
    unit: "liter",
    farmerId: "V-AURA-002"
  },

  // 🌶 TERTIARY
  {
    id: 5,
    name: "Chilli Powder",
    price: 120,
    image: Chillipowder,
    category: "Spices",
    type: "tertiary",
    quantity: 25,
    unit: "packet",
    farmerId: "V-AURA-003"
  },
  {
    id: 6,
    name: "Turmeric Powder",
    price: 30,
    image: Turmericpowder,
    category: "Snacks",
    type: "tertiary",
    quantity: 70,
    unit: "packet",
    farmerId: "V-AURA-003"
  }
];