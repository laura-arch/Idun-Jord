import { useEffect, useState } from "react";
import logo from "./../logo.png";
import "./../App.css";

const App = () => {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    const fetchPlants = async () => {
      const response = await fetch("http://localhost:8000/plants/");
      const result = await response.json(response);
      setPlants(result);
    };
    fetchPlants();
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
        Idun & Jörd
      </h1>
      {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMmo4NGpL_-MhE3TxT2gpWurHla6r5a7_sPw&usqp=CAU"></img> */}
      <img src={logo} className="App-logo" alt="logo" />
      <div>
        {plants.map((plant) => (
          <a href={plant.name} target="_blank">
            <div
              key={plant.name}
              style={{
                padding: 15,
                fontSize: 24,
                color: "green",
                borderRadius: 5,
                border: "2px solid green",
              }}
            >
              <img height="150px" src={plant.image}></img>
              {plant.name} - £{plant.price}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default App;
