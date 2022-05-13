import { useEffect, useState } from "react";
import logo from "./../logo.png";
import "./../styles/App.css";

<link rel="stylesheet" href="./../App.css"></link>;

const Plant = () => {
  const [plant, setPlant] = useState([]);

  useEffect(() => {
    const fetchPlant = async () => {
      const response = await fetch("http://localhost:8000/plants/Aloe%20Vera/");
      console.log("running");
      console.log(response);
      const result = await response.json(response);
      setPlant(result);
    };
    fetchPlant();
  }, []);

  return (
    <div className="app-content">
      <h1 className="main-heading">{plant.name}</h1>
      <img className="main-image" src={plant.image}></img>
    </div>
  );
};

export default Plant;
