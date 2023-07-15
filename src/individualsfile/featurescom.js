import React from "react";
import { Link } from "react-router-dom";
import Group from "./indiphoto/Group.png";
import bright from "./indiphoto/bright.png";
import ga from "./indiphoto/ga.png";

function Featurescom(props) {
  return (
    <div>
      {props.datalist1.map((a) => {
        return (
          <div className="mx-5" style={{ marginTop: "7rem" }}>
            <div className="featureheading">
              {a?.heading0}
              <span style={{ color: "#8e5ff5", fontWeight: "700" }}>
                {a.heading1}
              </span>{" "}
              {a.heading2}
            </div>
            <div
              className={`${a.direction} d-flex justify-content-between mt-5 pt-3`}
            >
              <img
                src={ga}
                style={{
                  maxWidth: a.maxwidth,
                  maxHeight: a.maxheight,
                  width: "100%",
                  height: "100%",
                }}
              ></img>
              <div style={{ width: "30rem", marginTop: "9%" }}>
                <div className="featuresubheadign">
                  <span style={{ fontWeight: 700 }}>{a.subheading1}</span>
                  {a.subheading2}
                </div>
                <div className="d-flex mt-5">
                  <div>
                    <img
                      src={bright}
                      alt=""
                      style={{ width: "1.68rem", height: "1.68" }}
                    />
                  </div>
                  <div className="feature ms-3 ">{a.detail}</div>
                </div>
                <Link
                  className="d-flex align-items-center mt-4"
                  style={{ marginLeft: "41px" }}
                >
                  <div
                    style={{
                      color: "#8E5FF5",
                      fontFamily: "Geomanist,sans-serif",
                      fontSize: "1.125rem",
                      fontStyle: "normal",
                      fontWeight: 400,
                      lineHeight: "1.625rem",
                    }}
                  >
                    Try it out
                  </div>
                  <img
                    className="ms-3"
                    src={Group}
                    style={{ width: "1.0156rem", height: "0.72rem" }}
                  />
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Featurescom;
