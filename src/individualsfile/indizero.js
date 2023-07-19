import React, { useContext } from "react";
import { indistore } from "./individual";

function Indizero(props) {
  const api = useContext(indistore);

  return (
    <div className="pt-5">
      <div className="mx-5 mb-5">
        <div className="pricing mt-3">
          {props.pricing[0]}
          <span style={{ color: props.color }}>{props.pricing[1]}</span>
        </div>
        <div className="zerobalance mt-3">{props.zerobalance}</div>
      </div>

      <div className="d-flex justify-content-lg-between justify-content-evenly align-items-center flex-lg-nowrap flex-wrap mx-5 px-xl-5 ">
        {props.zero.map((a, b) => {
          return (
            <div
              key={b}
              className="d-flex flex-column jusify-content-center align-items-center py-5 px-3 mx-xl-0 mx-4 mb-5 "
              style={{
                borderRadius: a.borderradius,
                border: a.border,
                boxShadow: a.boxshadow,
                background: a.background,
                width: "19.75rem",
                height: a.heading,
              }}
            >
              <div className="atitle mb-4 pb-2" style={{ color: a.titlecolor }}>
                {" "}
                {a.title}
              </div>
              <div
                className="aheading mb-4 pb-2"
                style={{ color: a.titlecolor }}
              >
                {a.heading}
              </div>
              <div
                className="adownload d-flex justify-content-center align-items-center "
                style={{
                  border: a.adownloadborder,
                  width: "14.75rem",
                  height: "3.0625rem",
                  background: a.abackground,
                }}
              >
                <span>Download App</span>
              </div>
              <div className=" pt-2">
                {a.right.map((aa, bb) => {
                  return (
                    <div className="d-flex mt-4" key={bb}>
                      <div>
                        <img
                          src={aa.rightimg}
                          style={{ width: "1.25rem", height: "1.25rem" }}
                        ></img>
                      </div>

                      <div
                        className="righttitle ms-2 ps-1"
                        style={{ color: aa.color }}
                      >
                        {aa.title}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Indizero;
