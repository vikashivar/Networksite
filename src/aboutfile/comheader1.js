import React from "react";
import { Link } from "react-router-dom";

function Comheader1() {
  return (
    <>
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
    </>
  );
}

export default Comheader1;
