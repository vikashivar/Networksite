import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { homeapi } from "../../App";

function Homesection7() {
  const section7 = useContext(homeapi);
  const apisection7 = section7.home.data.attributes.ctaCardDetails;
  const content = apisection7.content.split("///");

  return (
    <div>
      <div>
        <div
          className="d-flex justify-content-center align-items-center flex-column pt-5"
          style={{
            background:
              "linear-gradient(282deg, rgba(193, 241, 238, 0.50) 0%, #F1F4FF 72.92%, rgba(253, 206, 165, 0.00) 100%)",
            borderRadius: "20px",
            margin: "5rem",
          }}
        >
          <div className="invest pt-2">
            <span style={{ color: "#505BE8", fontWeight: 700 }}>
              {content[0]}
            </span>
            {content[1]}
          </div>
          <div className="pb-5 mt-5">
            {" "}
            <Link
              className="getstart d-flex justify-content-center align-items-center"
              to={apisection7.buttonCtaLink}
            >
              {apisection7.buttonText}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homesection7;
