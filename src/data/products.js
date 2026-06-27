import pvc from "../assets/products/pvc-pipe.png";
import cpvc from "../assets/products/cpvc-pipe.png";
import hdpe from "../assets/products/hdpe-pipe.png";
import swr from "../assets/products/swr-pipe.png";
import tank from "../assets/products/water-tank.png";
import valve from "../assets/products/valve.png";

const products = [
  {
    id: 1,
    name: "PVC Pipe",
    category: "PVC PIPE",
    image: pvc,
    price: "₹120",
    description: "Premium quality PVC pipes for residential plumbing.",
  },
  {
    id: 2,
    name: "CPVC Pipe",
    category: "CPVC PIPE",
    image: cpvc,
    price: "₹180",
    description: "Heat resistant CPVC pipes for hot & cold water.",
  },
  {
    id: 3,
    name: "HDPE Pipe",
    category: "HDPE PIPE",
    image: hdpe,
    price: "₹320",
    description: "Heavy-duty industrial HDPE pipeline solutions.",
  },
  {
    id: 4,
    name: "SWR Pipe",
    category: "SWR PIPE",
    image: swr,
    price: "₹250",
    description: "Reliable drainage and waste-water pipe systems.",
  },
  {
    id: 5,
    name: "Water Tank",
    category: "WATER TANK",
    image: tank,
    price: "₹3500",
    description: "Premium multi-layer water storage tanks.",
  },
  {
    id: 6,
    name: "Ball Valve",
    category: "BALL VALVE",
    image: valve,
    price: "₹450",
    description: "High-quality brass ball valves for plumbing.",
  },
];

export default products;