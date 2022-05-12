import { useEffect, useState } from "react";

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
        height: "100vh",
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
      <div>
        {plants.map((plant) => (
          <div
            style={{
              padding: 15,
              fontSize: 24,
              color: "green",
              borderRadius: 5,
              border: "2px solid green",
            }}
          >
            {plant.title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;

// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
