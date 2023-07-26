import React, { useContext, useState } from "react";
import { careerdata } from "./carreers";
import group from "./group11.png";
import filter from "./filter.png";
import cross from "./cross.png";

function Carreersection2() {
  const [fil, setFil] = useState(true);

  const car = useContext(careerdata);

  function filterhum() {
    setFil(!fil);
  }

  console.log(car.careers.data.attributes.jobInfo[0]);
  return (
    <div className=" mx-md-0 mx-sm-4">
      <div
        className="d-md-none d-block"
        style={{
          color: "#393939",
          fontFamily: "Geomanist,sans-serif",
          fontSize: "2.5rem",
          fontStyle: "normal",
          fontWeight: 400,
          lineHeight: "normal",
          marginBottom: "3rem",
        }}
      >
        Open <span style={{ fontWeight: 700 }}> Positions</span>
      </div>
      <div
        className="filterwidth "
        style={{
          background: "rgba(80, 91, 232, 0.03)",
          borderRadius: "18px",
        }}
      >
        <div className="pt-2">
          <section>
            {" "}
            <div className="d-flex justify-content-between align-items-center px-4 mx-2 py-4">
              {" "}
              <div
                className=" "
                style={{
                  color: "#393939",

                  fontFamily: "Geomanist,sans-serif",
                  fontSize: "1.5rem",
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "normal",
                }}
              >
                Filter by
              </div>
              <div className="d-md-none d-block">
                <img
                  onClick={filterhum}
                  src={fil ? filter : cross}
                  style={{
                    width: fil ? "1.02rem" : "0.625rem",
                    height: fil ? "0.75rem" : "0.625",
                  }}
                ></img>
              </div>
            </div>
          </section>
          <section className={`d-md-block d-${fil ? "none" : "block"}`}>
            <div
              style={{
                borderBottom: " 2px solid rgba(57, 57, 57, 0.1)",
              }}
            ></div>
            <div className="px-4 mx-2 pt-4 mt-3">
              <div className="d-flex justify-content-between ">
                <div className="depart">Department</div>

                <img
                  src={group}
                  style={{ width: "0.74rem", height: "0.5rem" }}
                />
              </div>
              <div className="d-flex mt-4 pt-1 align-items-center">
                <input
                  type="checkbox"
                  style={{
                    width: "1.875rem",
                    height: "1.875rem",
                    color: "rgba(57,57,57,1)",
                  }}
                ></input>
                <div className="accou">Accounts</div>
              </div>
              <div className="d-flex mt-4 align-items-center">
                <input
                  type="checkbox"
                  style={{
                    width: "1.875rem",
                    height: "1.875rem",
                    color: "rgba(57,57,57,1)",
                  }}
                ></input>
                <div className="accou">Engineering</div>
              </div>
              <div className="d-flex mt-4 align-items-center">
                <input
                  type="checkbox"
                  style={{
                    width: "1.875rem",
                    height: "1.875rem",
                    color: "rgba(57,57,57,1)",
                  }}
                ></input>
                <div className="accou">Product</div>
              </div>
            </div>
            {/* ======================== */}
            <div className="px-4 mx-2 pt-4 mt-3">
              <div className="d-flex justify-content-between ">
                <div className="depart">Location</div>

                <img
                  src={group}
                  style={{ width: "0.74rem", height: "0.5rem" }}
                />
              </div>
              <div className="d-flex mt-4 pt-1 align-items-center">
                <input
                  type="checkbox"
                  style={{
                    width: "1.875rem",
                    height: "1.875rem",
                    color: "rgba(57,57,57,1)",
                  }}
                ></input>
                <div className="accou">India</div>
              </div>
              <div className="d-flex mt-4 align-items-center">
                <input
                  type="checkbox"
                  style={{
                    width: "1.875rem",
                    height: "1.875rem",
                    color: "rgba(57,57,57,1)",
                  }}
                ></input>
                <div className="accou">Switzerland</div>
              </div>
              <div className="d-flex mt-4 align-items-center">
                <input
                  type="checkbox"
                  style={{
                    width: "1.875rem",
                    height: "1.875rem",
                    color: "rgba(57,57,57,1)",
                  }}
                ></input>
                <div className="accou">United States</div>
              </div>
              <div className="d-flex mt-4 align-items-center">
                <input
                  type="checkbox"
                  style={{
                    width: "1.875rem",
                    height: "1.875rem",
                    color: "rgba(57,57,57,1)",
                  }}
                ></input>
                <div className="accou">Remote</div>
              </div>
            </div>
            <div
              className="mt-4 pt-3"
              style={{
                borderBottom: " 2px solid rgba(57, 57, 57, 0.1)",
              }}
            ></div>
            {/* --------------------- */}
            <div className="px-4 mx-2 pt-4 mt-3 pb-4 ">
              <div className="d-flex justify-content-between ">
                <div className="depart">Type</div>

                <img
                  src={group}
                  style={{ width: "0.74rem", height: "0.5rem" }}
                />
              </div>
              <div className="d-flex mt-4 pt-1 align-items-center">
                <input
                  type="checkbox"
                  style={{
                    width: "1.875rem",
                    height: "1.875rem",
                    color: "rgba(57,57,57,1)",
                  }}
                ></input>
                <div className="accou">Full time</div>
              </div>
              <div className="d-flex mt-4 align-items-center">
                <input
                  type="checkbox"
                  style={{
                    width: "1.875rem",
                    height: "1.875rem",
                    color: "rgba(57,57,57,1)",
                  }}
                ></input>
                <div className="accou">Part time</div>
              </div>
              <div className="d-flex mt-4 align-items-center pb-3">
                <input
                  type="checkbox"
                  style={{
                    width: "1.875rem",
                    height: "1.875rem",
                    color: "rgba(57,57,57,1)",
                  }}
                ></input>
                <div className="accou">Internship</div>
              </div>
            </div>
          </section>
          {/* ----------------------------- */}
        </div>
      </div>
    </div>
  );
}

export default Carreersection2;
