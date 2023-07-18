import React, { useContext } from "react";
import { busistore } from "./business";
import Indiheader from "../../individualsfile/indiheader";

function Busiheader() {
  const busiapi = useContext(busistore);

  let busiheader = busiapi.busi.data.attributes.hero;
  let headerheading = busiheader.heading.split("///");

  return (
    <div>
      <Indiheader
        hhb="linear-gradient(299deg, rgba(57, 220, 210, 0.30) 0%, rgba(193, 241, 238, 0.25) 61.38%, rgba(193, 241, 238, 0.40) 100%)"
        anew={busiheader.subheading}
        newage={headerheading[0]}
        span={
          <span
            style={{ color: "#08C0B5", fontWeight: 700, display: "inline" }}
          >
            {headerheading[1]}
          </span>
        }
        makes={busiheader.description}
        today={busiheader.pitch}
        pg={
          <a
            href={busiheader.palyStoreLink}
            className="d-flex justify-content-center align-items-center"
            style={{
              width: "10.5rem",
              height: "3.3125rem",
              borderRadius: "3.125rem",
              background: "#4E59E7",
              border: "none",
              color: "#FFF",
              fontFamily: "Geomanist,sans-serif",
              fontSize: "1.125rem",
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "1.875rem",
            }}
          >
            Sign Up
          </a>
        }
        pa={
          <a
            href={busiheader.appStoreLink}
            className="d-flex justify-content-center align-items-center ms-4"
            style={{
              width: "10.5rem",
              height: "3.3125rem",
              borderRadius: "3.125rem",
              background: "",
              border: "3px solid #4E59E7",
              color: "#000",
              fontFamily: "Geomanist,sans-serif",
              fontSize: "1.125rem",
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "1.875rem",
            }}
          >
            Explore
          </a>
        }
      ></Indiheader>
    </div>
  );
}

export default Busiheader;
