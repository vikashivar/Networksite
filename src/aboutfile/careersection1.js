import React, { useContext } from "react";
import { careerdata } from "./carreers";
import vector from "./Vector.png";
import location from "./Location.png";
import full from "./Full.png";
import expe from "./Exp.png";
import { Link } from "react-router-dom";

function Careersection1() {
  const car = useContext(careerdata);

  return (
    <div className="ms-md-5 ">
      <div
        className="d-md-block d-none"
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
      {car.careers.data.attributes.jobInfo.map((a, b) => {
        return (
          <div
            key={b}
            style={{
              boxShadow: "0px 20px 50px rgba(78, 89, 231, 0.10)",
              border: "2px solid #f0f1f6",
              background: "#fff",
              maxWidth: "46.75rem",
              borderRadius: "1rem",
              marginTop: "2.5rem",
            }}
            className="d-flex  flex-column p-4 "
          >
            <div
              className="mt-2"
              style={{
                color: "#393939",

                fontFamily: "Geomanist,sans-serif",
                fontSize: "1.125rem",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "normal",
              }}
            >
              {a.department}
            </div>
            <div
              className="mt-2"
              style={{
                color: "#4E59E7",

                fontFamily: "Geomanist,sans-serif",
                fontSize: "1.75rem",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "normal",
              }}
            >
              {a.jobProfile}
            </div>
            <div className="mt-3 pt-3">
              {a.keypoints.split("/").map((c, d) => {
                return (
                  <div className="d-flex  mb-2 pb-1">
                    <img
                      src={vector}
                      style={{
                        width: "0.60rem",
                        height: "0.446rem",
                        marginTop: "12px",
                      }}
                    ></img>
                    <div
                      className="ps-3"
                      style={{
                        color: "#8F8F98",
                        fontFamily: "Geomanist,sans-serif",
                        fontSize: "1.125rem",
                        fontStyle: "normal",
                        fontWeight: 400,
                        lineHeight: "1.875rem",
                      }}
                    >
                      {c}
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="d-flex justify-content-between align-items-center mb-2  flex-wrap">
              <div className="d-flex align-items-center ">
                <img
                  src={location}
                  style={{ width: "0.76rem", height: "0.93rem" }}
                ></img>
                <div
                  className="ms-2"
                  style={{
                    color: "#8F8F98",
                    fontFamily: "Geomanist,sans-serif",
                    fontSize: "0.875rem",
                    fontStyle: "normal",
                    fontWeight: 400,
                    lineHeight: "1.875rem",
                  }}
                >
                  {a.location}
                </div>
              </div>
              <div className="d-flex align-items-center ms-2">
                <img
                  src={full}
                  style={{ width: "0.93rem", height: "0.93rem" }}
                ></img>
                <div
                  className="ms-2"
                  style={{
                    color: "#8F8F98",
                    fontFamily: "Geomanist,sans-serif",
                    fontSize: "0.875rem",
                    fontStyle: "normal",
                    fontWeight: 400,
                    lineHeight: "1.875rem",
                  }}
                >
                  {a.jobType}
                </div>
              </div>
              <div className="d-flex align-items-center ms-2">
                <img
                  src={expe}
                  style={{ width: "0.84rem", height: "0.94rem" }}
                ></img>
                <div
                  className="ms-2"
                  style={{
                    color: "#8F8F98",
                    fontFamily: "Geomanist,sans-serif",
                    fontSize: "0.875rem",
                    fontStyle: "normal",
                    fontWeight: 400,
                    lineHeight: "1.875rem",
                  }}
                >
                  {a.experience}
                </div>
              </div>
              <div
                style={{
                  width: "7.5rem",
                  height: "2.75rem",
                  borderRadius: "3.31rem",
                  boxShadow: "0px 10px 30px 0px rgba(78,89,231,0.30)",
                  background: "#4e59e7",
                }}
                className="d-flex justify-content-center align-items-center ms-2"
              >
                <Link
                  state={{
                    ctaCard: car.careers.data.attributes.ctaCard,
                    aboutjob: a,
                  }}
                  to={`/careers/job/?jobId=${a.jobId}`}
                  style={{
                    color: "#FFF",
                    textAlign: "center",
                    fontFamily: "Geomanist,sans-serif",
                    fontSize: "1.125rem",
                    fontStyle: "normal",
                    fontWeight: 400,
                    lineHeight: "normal",
                  }}
                >
                  Apply
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Careersection1;
