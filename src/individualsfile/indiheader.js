import React, { useContext } from "react";
import vicon from "../home/homephoto/vicon.png";

import { Link } from "react-router-dom";
import { homeapi } from "../App";

function Indiheader(props) {
  const hoemapi = useContext(homeapi);

  return (
    <div>
      <div className="postition-relative">
        <div
          id="indibackheight"
          className="position-absolute backgroundHeight"
          style={{
            // --------------------------------------------
            background: props.hhb,
            maxWidth: "90rem",

            width: "100%",
            top: "-50px",

            transform: "skew(0deg, -4deg)",
          }}
        ></div>
        <div className="position-relative mx-5 pt-4">
          <div className="d-flex flex-md-row flex-column justify-content-md-between justify-content-center align-items-center ">
            <Link to="/" className="">
              <img
                src={vicon}
                alt=""
                style={{ width: "10.56rem", height: "2.5rem" }}
              />
            </Link>
            <div className=" hhnavbar align-self-center d-flex ">
              <div className="d-flex flex-sm-row flex-column justify-content-sm-between justify-content-center align-items-center flex-nowrap">
                <div>
                  <Link to="/individual" className="me-4">
                    Individuals
                  </Link>
                  <Link to="/business" className="me-4">
                    Businesses
                  </Link>
                  <Link to="/service" className="me-4">
                    Service Providers
                  </Link>
                </div>
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
          {/* =========================================== */}
          <div className=" " style={{ marginTop: "6rem" }}>
            <div className="mt-5">
              <div className="Anew">{props.anew}</div>
              <div className="Newage mt-3">
                {props.newage}
                {props.span}
              </div>
              <div className="makes mt-5">{props.makes} </div>
              <div className="today">{props.today}</div>
              <div className="d-flex justify-content-center mt-4">
                {props.pg}

                {props.pa}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ height: "8rem", width: "100%" }}></div>
    </div>
  );
}

export default Indiheader;
