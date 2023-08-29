import React, { createContext, useEffect, useState } from "react";
import Busiheader from "./busiheader";
import Businessfeatures from "./businessfeatures";
import Busizero from "./busizero";
import Busiquestion from "./busiquestion";
import Section7 from "./section7";
import Footer from "../../home/homefile/footer";
const busistore = createContext();

function Business() {
  const [busi, setBusi] = useState();
  useEffect(() => {
    async function busiapi() {
      const res = await fetch(
        "https://cms.verified.network/api/business?populate=*"
      );
      const data = await res.json();
      setBusi(data);
    }
    busiapi();
  }, []);

  console.log(busi);
  return (
    busi && (
      <busistore.Provider value={{ busi }}>
        <div>
          <Busiheader></Busiheader>
          <Businessfeatures></Businessfeatures>
          <Busizero></Busizero>
          <Busiquestion></Busiquestion>
          <Section7></Section7>
          <Footer></Footer>
        </div>
      </busistore.Provider>
    )
  );
}

export default Business;
export { busistore };
