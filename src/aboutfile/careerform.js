import React from "react";

function Careerform(props) {
  return (
    <div
      className={`d-flex flex-column mt-4 pt-3 ${props.margin}`}
      style={{ flex: 1 }}
    >
      <label
        className="ms-2"
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
        {props.name}
      </label>
      <input
        autoComplete="false"
        className="focusvisible mt-3"
        type={props.type}
        style={{
          color: "#8F8F98",
          fontFamily: "Geomanist, sans-serif",
          fontSize: "1.125rem",
          fontStyle: "normal",
          fontWeight: 400,
          lineHeight: "normal",

          height: "3.75rem",
          background: "#fff",
          border: "none",
          borderRadius: "12px",
          paddingLeft: "30px",
        }}
        placeholder={props.placeholder}
      />
    </div>
  );
}

export default Careerform;
