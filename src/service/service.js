import React, { createContext, useEffect, useState } from "react";
import Serhome from "./serhome";
import Servicefeature from "./servicefeature";
import Question from "../individualsfile/question";

import Section7b from "./section7b";
import Footer from "../home/homefile/footer";

const serstore = createContext();
function Service() {
  const [ser, setSer] = useState();
  useEffect(() => {
    async function api() {
      const re = await fetch(
        "https://cms.verified.network/api/service?populate=*"
      );
      const data = await re.json();
      setSer(data);
    }
    api();
  }, []);
  console.log(ser?.data?.attributes?.faqs);

  return (
    ser && (
      <serstore.Provider value={{ ser }}>
        <div>
          <Serhome></Serhome>
          <Servicefeature></Servicefeature>
          <div style={{ background: "rgba(80, 91, 232,0.029)" }}>
            <Question
              question={ser?.data?.attributes?.faqs}
              color={"#4e59e7"}
            ></Question>
          </div>
          <Section7b></Section7b>
          <Footer></Footer>
        </div>
      </serstore.Provider>
    )
  );
}

export default Service;
export { serstore };
