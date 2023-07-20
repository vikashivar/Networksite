import React, { createContext, useEffect, useState } from "react";
import Serhome from "./serhome";

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

  return (
    ser && (
      <serstore.Provider value={{ ser }}>
        <div>
          <Serhome></Serhome>
        </div>
      </serstore.Provider>
    )
  );
}

export default Service;
export { serstore };
