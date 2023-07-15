import React, { useEffect, useState, createContext } from "react";
import Indiheader from "./indiheader";
import gp from "../home/homephoto/gp.png";
import ap from "../home/homephoto/ap.png";
import Indifeatures from "./indifeatures";
import Features from "./features";

const indistore = createContext();

function Individual() {
  const [indi, setIndi] = useState();
  useEffect(() => {
    async function api() {
      const res = await fetch(
        "https://cms.verified.network/api/indivisual?populate=*"
      );
      const data = await res.json();
      setIndi(data);
    }
    api();
  }, []);
  let indiheader;
  let headerheading;

  if (indi) {
    indiheader = indi?.data.attributes.hero;
    headerheading = indiheader?.heading.split("///");
  }
  return (
    indi && (
      <indistore.Provider value={{ indi }}>
        {" "}
        <div>
          <Indiheader
            hhb="linear-gradient(310deg, #DCD7FF 0%, #F5F1FF 86.17%, rgba(217, 199, 255, 0.00) 100%)"
            anew={indiheader.subheading}
            newage={headerheading[0]}
            span={
              <span
                style={{ color: "#8E5FF5", fontWeight: 700, display: "block" }}
              >
                {headerheading[1]}
              </span>
            }
            makes={indiheader.description}
            today={indiheader.pitch}
            playstorelink={indiheader.palyStoreLink}
            appstorelink={indiheader.appStoreLink}
            pg={
              <img
                src={gp}
                alt=""
                style={{ width: "8.20rem", height: "2.38rem" }}
              />
            }
            pa={
              <img
                src={ap}
                alt=""
                style={{ width: "7.62rem", height: "2.59rem" }}
              />
            }
            bcolor="#000"
            bborder="none"
          ></Indiheader>

          <Features></Features>
        </div>
      </indistore.Provider>
    )
  );
}

export default Individual;
export { indistore };
