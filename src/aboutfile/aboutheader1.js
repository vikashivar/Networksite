import React from "react";
import vicon from "./vicon.png";
import { Link } from "react-router-dom";
import Comheader1 from "./comheader1";

function Aboutheader1(props) {
  return (
    <div
      className="aboutheaderpart1 position-relative"
      style={{ background: props.aboutbackground, zIndex: "1" }}
    >
      <div className="d-flex flex-row  justify-content-between justify-content-center align-items-center pt-4 px-5">
        <Link to="/" className="">
          <img
            src={vicon}
            alt=""
            style={{ width: "10.56rem", height: "2.5rem" }}
          />
        </Link>
        <div className=" hhnavbar align-self-center d-flex ">
          <div className="d-flex flex-sm-row flex-column justify-content-sm-between justify-content-center align-items-center flex-nowrap ">
            {props.comheader1}
            <div
              className="d-flex justify-content-center align-items-center login mt-sm-0 mt-3"
              style={{
                background: "#393939",
                boxShadow: "0px 20px 50px 0px rgba(57, 57, 57, 0.20)",
              }}
            >
              <Link style={{ color: "#fff" }} to="">
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div
        className="mt-5 assetstitle"
        style={{
          color: "#393939",
          textAlign: "center",
          fontFamily: "Geomanist,sans-serif",
          fontStyle: "normal",
          fontWeight: 700,
          lineHeight: "normal",
        }}
      >
        {props.title}
      </div>
      <div className="mx-md-5 px-md-5" style={{ textAlign: "center" }}>
        {props.detail}
      </div>
    </div>
  );
}

export default Aboutheader1;
