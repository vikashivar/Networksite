import React, { useContext } from "react";
import { busistore } from "./business";
import { Link } from "react-router-dom";

function Section7() {
  const sectionapi = useContext(busistore).busi.data.attributes.ctaCardDetails;
  const contect = sectionapi.content.split("///");

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
            {contect[0]}

            {contect[1]}

            <span style={{ color: "#505BE8", fontWeight: 700 }}>
              {contect[2]}
            </span>
          </div>
          <div className="pb-5 mt-5">
            {" "}
            <Link
              className="getstart d-flex justify-content-center align-items-center"
              to={sectionapi.buttonCtaLink}
            >
              {sectionapi.buttonText}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section7;
