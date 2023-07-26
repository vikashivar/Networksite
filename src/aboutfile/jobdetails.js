import React, { useContext } from "react";
import Aboutheader1 from "./aboutheader1";
import { Link, useLocation } from "react-router-dom";
import Aboutheader2 from "./aboutheader2";
import Comheader1 from "./comheader1";
import vector from "./Vector.png";
import location from "./Location.png";
import full from "./Full.png";
import expe from "./Exp.png";
import posted from "./Posted.png";

function Jobdetails() {
  const data = useLocation().state.aboutjob;
  const data1 = useLocation().state.ctaCard;

  console.log(data1);
  return (
    <div>
      <Aboutheader1
        title="Careers"
        comheader1={<Comheader1></Comheader1>}
      ></Aboutheader1>
      <Aboutheader2
        aboutheader2={
          <>
            <div
              className="pt-3"
              style={{
                color: "#393939",
                textAlign: "center",
                fontFamily: "Geomanist,sans-serif",
                fontSize: "1.5rem",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "normal",
              }}
            >
              {data.department}
            </div>
            <div
              className="mt-sm-4 mt-3 pt-2 important"
              style={{
                color: "#4E59E7",
                textAlign: "center",
                fontFamily: "Geomanist,sans-serif",
                fontStyle: "normal",
                fontWeight: 700,
                lineHeight: "2.5rem",
              }}
            >
              {data.jobProfile}
            </div>

            <div className="d-flex justify-content-between align-items-sm-center align-items-start align-self-stretch flex-md-row flex-column mb-2  mt-md-5 mt-4 px-lg-5">
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
                  {data.location}
                </div>
              </div>
              <div className="d-flex align-items-center ps-md-3 mt-md-0 mt-2">
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
                  {data.jobType}
                </div>
              </div>
              <div className="d-flex align-items-center ps-md-3 mt-md-0 mt-2">
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
                  {data.experience}
                </div>
              </div>
              <div className="d-flex align-items-center ps-md-3  mt-md-0 mt-2">
                <img
                  src={posted}
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
                  {data.postedDate}
                </div>
              </div>
            </div>
          </>
        }
      ></Aboutheader2>

      <div>
        <div className="mx-5 px-md-5 mt-5 pt-5">
          <div
            className="description"
            style={{
              color: "#393939",
              fontFamily: "Geomanist,sans-serif",

              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "normal",
            }}
          >
            {data.jdTitle}
          </div>
          <div className="mt-4">
            {data.jdContent.split("/").map((a, b) => {
              return (
                <div key={a} className=" mt-1">
                  <div
                    className=""
                    style={{
                      color: "#8F8F98",
                      fontFamily: "Geomanist,sans-serif",
                      fontSize: "1.125rem",
                      fontStyle: "normal",
                      fontWeight: 400,
                      lineHeight: "1.875rem",
                    }}
                  >
                    {a}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* --------------------------------- */}
        <div className="mx-5 px-md-5 mt-5 pt-5">
          <div
            className="description"
            style={{
              color: "#393939",
              fontFamily: "Geomanist,sans-serif",

              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "normal",
            }}
          >
            {data.jrTitle}
          </div>
          <div className="mt-4">
            {data.jrContent.split("/").map((a, b) => {
              return (
                <div key={a} className="d-flex  mt-3">
                  <div>
                    <img
                      src={vector}
                      style={{ width: "0.60rem", height: "0.44rem" }}
                    ></img>
                  </div>
                  <div
                    className="ms-3"
                    style={{
                      color: "#8F8F98",
                      fontFamily: "Geomanist,sans-serif",
                      fontSize: "1.125rem",
                      fontStyle: "normal",
                      fontWeight: 400,
                      lineHeight: "1.875rem",
                    }}
                  >
                    {a}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {/* ----------------------------------- */}
        <div className="mx-5 px-md-5 mt-5 pt-5">
          <div
            className="description"
            style={{
              color: "#393939",
              fontFamily: "Geomanist,sans-serif",

              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "normal",
            }}
          >
            {data.reqTitle}
          </div>
          <div className="mt-4">
            {data.reqContent.split("/").map((a, b) => {
              return (
                <div key={a} className="d-flex  mt-3">
                  <div>
                    <img
                      src={vector}
                      style={{ width: "0.60rem", height: "0.44rem" }}
                    ></img>
                  </div>
                  <div
                    className="ms-3"
                    style={{
                      color: "#8F8F98",
                      fontFamily: "Geomanist,sans-serif",
                      fontSize: "1.125rem",
                      fontStyle: "normal",
                      fontWeight: 400,
                      lineHeight: "1.875rem",
                    }}
                  >
                    {a}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="mx-5 px-md-5 mt-5 pt-5">
        <div
          className="d-flex align-items-center flex-column pb-3 "
          style={{
            borderRadius: "16px",
            maxWidth: "71rem",
            background:
              "linear-gradient(282deg, rgba(193, 241, 238, 0.50) 0%, #F1F4FF 72.92%, rgba(253, 206, 165, 0.00) 100%)",
          }}
        >
          <div
            className="d-inline-block mt-5 px-4"
            style={{
              color: "#393939",
              textAlign: "center",
              fontFamily: "Geomanist, sans-serif",
              fontSize: "2.5rem",
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "3.75rem",
            }}
          >
            {data1.content.split("///")[1]}
            <span style={{ color: "#4e59e7", fontWeight: 700 }}>
              {" "}
              {data1.content.split("///")[3]}{" "}
            </span>
            <div className="d-inline-block">
              {" "}
              {data1.content.split("///")[3]}
            </div>
          </div>
          <Link
            to={data1.buttonCtaLink}
            className="d-flex justify-content-center align-items-center mt-5 mb-4 ctalink"
            style={{
              borderRadius: "2.06rem",
              background: "#4e59e7",
              boxShadow: "0px 20px 50px 0px rgba(78,89,231,0.31)",
            }}
          >
            <div
              style={{
                color: "#FFF",
                fontFamily: "Geomanist, sans-serif",
                fontSize: "1.5rem",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "1.875rem",
              }}
            >
              {data1.buttonText}
            </div>
          </Link>
        </div>
      </div>
      {/* ----------------------------apply for this job----------------------------- */}
      <div>
        <div style={{ background: "rgba(80, 91, 232, 0.03)" }}>
          <div
            style={{
              color: "#393939",
              fontFamily: "Geomanist, sans-serif",
              fontSize: "2.5rem",
              fontStyle: "normal",
              fontWeight: 700,
              lineHeight: "normal",
            }}
          >
            Apply for this <span style={{ color: "#4e59e7" }}>Job</span>
          </div>
          <form>
            <div>
              <lable
                htmlFor="firstname"
                style={{
                  color: "#393939",
                  fontFamily: "Geomanist, sans-serif",
                  fontSize: "1.125rem",
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "normal",
                }}
              >
                First Name
              </lable>
              <input
                className="focusvisible"
                type="text"
                style={{
                  color: "#8F8F98",
                  fontFamily: "Geomanist, sans-serif",
                  fontSize: "1.125rem",
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "normal",
                  width: "34rem",
                  height: "3.75rem",
                  background: "#fff",
                  border: "none",
                  borderRadius: "12px",
                  paddingLeft: "30px",
                }}
                placeholder="Enter your first name"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Jobdetails;
