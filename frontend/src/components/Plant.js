import { useEffect, useState } from "react";
import logo from "./../logo.png";
import "./../App.css";

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
    <div
      style={{
        min_height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        alignItems: "center",
        backgroundColor: "lightgreen",
      }}
    >
      <h1
        style={{
          fontSize: 44,
          color: "green",
          fontWeight: "bold",
        }}
      >
        {plant.name}
      </h1>

      <img src={plant.image}></img>
    </div>
  );
};

export default Plant;
