import React from "react";
import { Link } from "react-router-dom";
import vector from "./Vector (1).png";

function Comheader1() {
  return (
    <>
      <div className="positionlink">
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

      {/* <div>
        <div style={{}}>
          <img
            src={vector}
            alt=""
            style={{ width: "1.10rem", height: "0.93rem" }}
          />
        </div>

        <div className="positionlink1">
          <Link to="/individual" className="me-4 mt-4">
            Individuals
          </Link>
          <Link to="/business" className="me-4 mt-4">
            Businesses
          </Link>
          <Link to="/service" className="me-4 mt-4">
            Service Providers
          </Link>
        </div>
      </div> */}
    </>
  );
}

export default Comheader1;
