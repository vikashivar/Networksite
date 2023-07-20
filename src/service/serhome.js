import React, { useContext } from "react";
import { serstore } from "./service";
import Indiheader from "../individualsfile/indiheader";

function Serhome() {
  const service = useContext(serstore);
  let serheader = service.ser.data.attributes.hero;
  let headerheading = serheader.heading.split("///");
  console.log(service);

  return (
    <div>
      <Indiheader
        hhb="linear-gradient(308deg, rgba(135, 140, 166, 0.50) 0%, rgba(247, 247, 249, 0.13) 69.61%)"
        anew={serheader.subheading}
        newage={headerheading[0]}
        span={
          <span
            style={{ color: "#08C0B5", fontWeight: 700, display: "inline" }}
          >
            {headerheading[1]}
          </span>
        }
        makes={serheader.description}
        today={serheader.pitch}
        pg={
          <a
            href={serheader.palyStoreLink}
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
            href={serheader.appStoreLink}
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

export default Serhome;
