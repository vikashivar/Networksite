import React, { useContext } from "react";
import vicon from "../homephoto/vicon.png";
import gp from "../homephoto/gp.png";
import ap from "../homephoto/ap.png";
import { Link } from "react-router-dom";
import { homeapi } from "../../App";
import homephone from "../homephoto/homephone.png";

function Homeheader(props) {
  const hoemapi = useContext(homeapi);

  return (
    <div className="postition-relative">
      <div
        id="backgroundHeight"
        className="position-absolute backgroundHeight"
        style={{
          background: props.hhb,
          maxWidth: "81rem",

          width: "100%",
          top: "-45px",

          transform: "skew(0deg, -4deg)",
        }}
      ></div>
      <div className="position-relative mx-5 pt-4">
        <div className="d-flex flex-md-row flex-column justify-content-md-between justify-content-center align-items-center ">
          <div className="">
            <img
              src={vicon}
              alt=""
              style={{ width: "10.56rem", height: "2.5rem" }}
            />
          </div>
          <div className=" hhnavbar align-self-center d-flex ">
            <div className="d-flex flex-sm-row flex-column justify-content-sm-between justify-content-center align-items-center flex-nowrap">
              <div>
                <Link to="/individual" className="me-4">
                  Individuals
                </Link>
                <Link to="/bussiness" className="me-4">
                  Businesses
                </Link>
                <Link to="/service" className="me-4">
                  Service Providers
                </Link>
              </div>
              <div className="d-flex justify-content-center align-items-center login mt-sm-0 mt-3">
                <Link to="">Login</Link>
              </div>
            </div>
          </div>
        </div>
        <div
          className="d-flex flex-md-row flex-column justify-contetn-md-between justify-content-center "
          style={{ marginTop: "3.5rem" }}
        >
          <div className="mt-5">
            <div className="notABank">
              {props.notABank0}
              <span className="d-block">{props.notABank1}</span>
            </div>
            <div className="builtOn mt-4">{props.builtOn}</div>
            <div className="createYour mt-4 ">{props.createYour}</div>
            <div className="d-flex mt-5">
              <Link
                to={hoemapi.home.data.attributes.hero.playStoreLink}
                className="d-flex justify-content-center align-items-center"
                style={{
                  width: "10.5rem",
                  height: "3.3125rem",
                  borderRadius: "3.125rem",
                  background: "#000",
                }}
              >
                <img
                  src={gp}
                  alt=""
                  style={{ width: "8.20rem", height: "2.38rem" }}
                />
              </Link>
              <Link
                to={hoemapi.home.data.attributes.hero.appStoreLink}
                className="d-flex justify-content-center align-items-center ms-4"
                style={{
                  width: "10.5rem",
                  height: "3.3125rem",
                  borderRadius: "3.125rem",
                  background: "#000",
                }}
              >
                <img
                  src={ap}
                  alt=""
                  style={{ width: "7.62rem", height: "2.59rem" }}
                />
              </Link>
            </div>
          </div>
          <div
            style={{ maxWidth: "40rem", overflow: "hidden" }}
            className="d-flex justify-content-center align-items-center "
          >
            <img src={homephone} alt="" className="homephone" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homeheader;
