import React, { useContext } from "react";
import Homeheader from "./homeheader";
import { homeapi } from "../../App";

function Home() {
  const hoemapi = useContext(homeapi);
  const notABank = hoemapi.home.data.attributes.hero.heading.split("///");
  console.log(notABank);

  return (
    <>
      <Homeheader
        hhb=" linear-gradient(282deg, rgba(193, 241, 238, 0.50) 0%, #F1F4FF 72.92%, rgba(253, 206, 165, 0.00) 100%)"
        notABank0={notABank[0]}
        notABank1={notABank[1]}
        builtOn={hoemapi.home.data.attributes.hero.description}
        createYour={hoemapi.home.data.attributes.hero.pitch}
      ></Homeheader>
    </>
  );
}

export default Home;
