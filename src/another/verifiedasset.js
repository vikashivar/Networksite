import React from "react";
import Aboutheader1 from "../aboutfile/aboutheader1";
import Comheader1 from "../aboutfile/comheader1";

function Verifiedasset() {
  return (
    <div>
      <Aboutheader1
        title="Verified Assets"
        aboutbackground="linear-gradient(282deg, rgba(193, 241, 238, 0.30) 0%, rgba(107, 202, 255, 0.50) 61.46%)"
        comheader1={<Comheader1></Comheader1>}
        detail={
          <div
            className="mt-5 pt-2"
            style={{
              color: "#393939",
              textAlign: "center",
              fontFamily: "Geomanist,sans-serif",
              fontSize: "1.125rem",
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "1.875rem",
            }}
          >
            Browser investment assets on the Verifed Network ,Sign up to view
            details,
            <span className="d-md-block">
              make investments,and trade investments.
            </span>
          </div>
        }
      ></Aboutheader1>
      <div>
        <input
          type="search"
          style={{
            borderRadius: "1rem",
            border: "2px solid #DCE2FF",
            background: "#FFF",
          }}
        ></input>
        <input></input>
      </div>
    </div>
  );
}

export default Verifiedasset;
