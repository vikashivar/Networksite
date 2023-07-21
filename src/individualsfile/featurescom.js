import React from "react";
import { Link } from "react-router-dom";
import bright from "./indiphoto/bright.png";
import ga from "./indiphoto/ga.png";

function Featurescom(props) {
  return (
    <div className="mb-5">
      <div className="mx-lg-5" style={{ marginTop: "7rem" }}>
        <div className="featureheading">
          {props.datalist[0]?.heading0}
          <span style={{ color: props.color, fontWeight: "700" }}>
            {props.datalist[0]?.heading1}
          </span>{" "}
          {props.datalist[0]?.heading2}
        </div>
        {props.datalist.map((a, b) => {
          return (
            <div
              key={b}
              className={` d-flex justify-content-between align-items-center ${a.direction} mt-5 pt-3`}
            >
              <img
                className="mt-lg-0 mt-4"
                src={a.img}
                style={{
                  maxWidth: a.maxwidth,
                  maxHeight: a.maxheight,
                  width: "100%",
                  height: "100%",
                }}
              ></img>
              <div style={{ width: "30rem", marginTop: "9%" }}>
                <div className="featuresubheadign">
                  <span className="" style={{ fontWeight: 700 }}>
                    {a.subheading1}
                  </span>
                  <span className="">{a.subheading2}</span>
                </div>
                <div className="mt-5">
                  {a.detail.map((aa, bb) => {
                    return (
                      <div key={bb} className="d-flex ">
                        <div>
                          <img
                            src={bright}
                            alt=""
                            style={{ width: "1.68rem", height: "1.68" }}
                          />
                        </div>
                        <div className="feature ms-3 ">{aa}</div>
                      </div>
                    );
                  })}
                </div>
                <Link
                  className="d-flex align-items-center mt-4"
                  style={{ marginLeft: "41px" }}
                >
                  <div
                    style={{
                      color: props.color,
                      fontFamily: "Geomanist,sans-serif",
                      fontSize: "1.125rem",
                      fontStyle: "normal",
                      fontWeight: 400,
                      lineHeight: "1.625rem",
                    }}
                  >
                    Try it out
                  </div>
                  {props.arrow}
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Featurescom;
