import React, { createContext, useEffect, useState } from "react";
import Busiheader from "./busiheader";
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

  return (
    busi && (
      <busistore.Provider value={{ busi }}>
        <div>
          <Busiheader></Busiheader>
        </div>
      </busistore.Provider>
    )
  );
}

export default Business;
export { busistore };
