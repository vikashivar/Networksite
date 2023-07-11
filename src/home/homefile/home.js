import React, { useContext } from "react";
import Homeheader from "./homeheader";
import { homeapi } from "../../App";
import Headersection1 from "./headersection1";
import Homesection2 from "./homesection2";

function Home() {
  const hoemapi = useContext(homeapi);
  const notABank = hoemapi.home.data.attributes.hero.heading.split("///");
  console.log(notABank);

  return (
    <>
      <div>
        {" "}
        <Homeheader
          hhb=" linear-gradient(282deg, rgba(193, 241, 238, 0.50) 0%, #F1F4FF 72.92%, rgba(253, 206, 165, 0.00) 100%)"
          notABank0={notABank[0]}
          notABank1={notABank[1]}
          builtOn={hoemapi.home.data.attributes.hero.description}
          createYour={hoemapi.home.data.attributes.hero.pitch}
        ></Homeheader>
      </div>

      <div>
        <Headersection1></Headersection1>
        <Homesection2></Homesection2>
      </div>
    </>
  );
}

export default Home;
