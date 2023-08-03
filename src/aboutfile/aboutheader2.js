import React from "react";

function Aboutheader2(props) {
  return (
    <div
      className="d-flex justify-content-center"
      style={{ position: "relative", zIndex: "3" }}
    >
      <div className="aboutheaderpart2 mx-5 px-md-5 px-4 d-flex justify-content-around flex-column ">
        {props.aboutheader2}
      </div>
    </div>
  );
}

export default Aboutheader2;
