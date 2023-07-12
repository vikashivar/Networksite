import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./home/homefile/home";
import "./home/homefile/homeheader.css";
import { createContext, useEffect, useState } from "react";
import "./home/homefile/headersection1.css";
import "./home/homefile/homesection2.css";
import "./home/homefile/homesection3.css";
import "./home/homefile/homesection4.css";
import "./home/homefile/homesection5.css";

const homeapi = createContext();

function App() {
  const [home, setHome] = useState();
  useEffect(() => {
    async function homeapii() {
      const res = await fetch(
        "https://cms.verified.network/api/homepage?populate=*"
      );
      const data = await res.json();
      return data;
    }
    homeapii().then((ee) => {
      setHome(ee);
    });
  }, []);

  return (
    home && (
      <homeapi.Provider value={{ home }}>
        <BrowserRouter>
          <div className="App">
            <Home></Home>
          </div>
        </BrowserRouter>
      </homeapi.Provider>
    )
  );
}

export default App;
export { homeapi };
