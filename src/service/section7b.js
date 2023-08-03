import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { serstore } from "./service";

function Section7b() {
  const sectionapi = useContext(serstore).ser.data.attributes.CtaCardDetails;
  const contect = sectionapi.heading.split("///");
  console.log(contect);

  return (
    <div>
      <div style={{ position: "relative", zIndex: "3" }}>
        <div
          className="d-flex justify-content-center align-items-center flex-column pt-5"
          style={{
            background:
              "linear-gradient(282deg, rgba(193, 241, 238, 0.50) 0%, #F1F4FF 72.92%, rgba(253, 206, 165, 0.00) 100%)",
            borderRadius: "20px",
            margin: "5rem",
          }}
        >
          <div className="invest py-4">
            {contect[0]}

            <span style={{ color: "#505BE8", fontWeight: 700 }}>
              {contect[1]}
            </span>
          </div>
          <div className="pb-5 mt-5 d-flex">
            {" "}
            <Link
              className=" d-flex justify-content-center align-items-center my-3 "
              style={{
                width: "15rem",
                height: "4.125rem",
                borderRadius: "2.06rem",
                background: "#4E59E7",
                boxShadow: "0px 20px 50px 0px rgba(78,89,231,0.30)",
                color: "#fff",
                fontFamily: "Geomanist,sans-serif",
                fontWeight: 400,
                fontStyle: "normal",
                lineHeight: "1.875rem",
              }}
              to={sectionapi.primaryButtonLink}
            >
              {sectionapi.primaryButtonText}
            </Link>
            <Link
              className="d-flex justify-content-center align-items-center my-3 "
              style={{
                width: "15rem",
                height: "4.125rem",
                borderRadius: "2.06rem",
                border: "3px solid #4e59e7",
                color: "#393939",
                boxShadow: "0px 20px 50px 0px rgba(78,89,231,0.30)",
                fontFamily: "Geomanist,sans-serif",
                fontWeight: 400,
                fontStyle: "normal",
                lineHeight: "1.875rem",
              }}
              to={sectionapi.secondaryButtonLink}
            >
              {sectionapi.secondaryButtonText}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section7b;
