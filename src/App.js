import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./home/homefile/home";
import "./home/homefile/homeheader.css";
import { createContext, useEffect, useState } from "react";
import "./home/homefile/headersection1.css";
import "./home/homefile/homesection2.css";
import "./home/homefile/homesection3.css";
import "./home/homefile/homesection4.css";
import "./home/homefile/homesection5.css";
import "./home/homefile/homesection6.css";
import "./home/homefile/homesection7.css";
import "./home/homefile/footer.css";
import "./individualsfile/indiheader.css";
import Individual from "./individualsfile/individual";
import "./individualsfile/indifeatures.css";
import "./individualsfile/indizero.css";
import "./individualsfile/question.css";
import Business from "./business/businessfile/business";
import Service from "./service/service";
import About from "./aboutfile/about";
import "./aboutfile/about.css";
import Careers from "./aboutfile/carreers";
import Jobdetails from "./aboutfile/jobdetails";
import Contactus from "./another/contactus";
import "./another/anotherfile.css";
import Verifiedasset from "./another/verifiedasset";
import "./another/verifiedasset.css";
import Assetdetail from "./another/assetdetail";
import Helpdesk from "./helpdesk/helpdesk";
import "./helpdesk/helpdesk.css";
import "./someextrafiles/forum.css";
import Forum from "./someextrafiles/forum";
import "./someextrafiles/operators.css";
import Operators from "./someextrafiles/operators";
import Pp from "./pp";
import Helpdeskarticle from "./helpdesk/helpdeskarticle";
import Developers from "./someextrafiles/developers";
import Investors from "./someextrafiles/investors";
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
          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route
              path="/individual"
              element={<Individual></Individual>}
            ></Route>
            <Route path="/business" element={<Business></Business>}></Route>
            <Route path="/service" element={<Service></Service>}></Route>
            <Route path="/About" element={<About></About>}></Route>
            <Route path="/career" element={<Careers></Careers>}></Route>
            <Route
              path="careers/job"
              element={<Jobdetails></Jobdetails>}
            ></Route>
            <Route path="/contact" element={<Contactus></Contactus>}></Route>
            <Route
              path="/assets"
              element={<Verifiedasset></Verifiedasset>}
            ></Route>
            <Route
              path="/assets/detail"
              element={<Assetdetail></Assetdetail>}
            ></Route>
            <Route path="helpdesk" element={<Helpdesk></Helpdesk>}></Route>
            <Route path="/forum" element={<Forum></Forum>}></Route>
            <Route path="operators" element={<Operators></Operators>}></Route>
            <Route
              path="/hepldestarticles"
              element={<Helpdeskarticle></Helpdeskarticle>}
            ></Route>
            <Route
              path="developers"
              element={<Developers></Developers>}
            ></Route>
            <Route path="investors" element={<Investors></Investors>}></Route>
          </Routes>
        </BrowserRouter>
      </homeapi.Provider>
    )
  );
}

export default App;
export { homeapi };
