import { useEffect, useState } from "react";
import axios from "axios";
import logo from "./../logo.png";
import "./../App.css";

const Plant = () => {
  const [plant, setPlant] = useState([]);

  // ////////

  useEffect(() => {
    axios({
      method: "get",
      url: `http://localhost:8000/plants/1`,
    })
      .then((response) => {
        // Console logging the data
        console.log(`response:`);
        console.log(response.data);

        setPlant(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // ////////

  useEffect(() => {
    const fetchPlant = async () => {
      const response = await fetch("http://localhost:8000/plants/2");
      console.log("response");
      console.log(response);
      const result = await response.json(response);
      console.log("result");
      console.log(result);
      setPlant(result);
    };
    fetchPlant();
  }, []);

  // ////////

  console.log("plant:");
  console.log(plant);

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
        Your Plant
      </h1>

      <p>{plant.image}</p>
      {/* <p>{plant}</p> */}
      <img src={plant.image}></img>
      <div>
        {plant ? (
          plant.map((x) => (
            <div key="hello" className="dog-profile">
              <img className="dog-image" alt="Dog" src={x.image}></img>
              <h1>{x.name}</h1>
              <h2>Category: {x.category}</h2>
            </div>
          ))
        ) : (
          <p>Loading</p>
        )}

        {/* {plant.map((plant) => (
          <a href="" target="_blank">
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
            </div>
          </a>
        ))} */}
      </div>
    </div>
  );
};

export default Plant;
