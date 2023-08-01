import React from "react";

function Contactform(props) {
  return (
    <div
      className={`d-lg-inline-block d-block paddingclass ${props.paddingclass}`}
    >
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
          {props.namee}
        </label>
        <input
          onChange={props.change}
          name={props.name}
          onBlur={props.onBlur}
          className="focusvisible1 mt-3"
          type={props.type}
          autoComplete="off"
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
            // width: "28rem",
          }}
          placeholder={props.placeholder}
        />
        <div
          className="mt-2"
          style={{
            color: "#FF7A7A",
            fontFamily: "Geomanist,sans-serif",
            fontSize: "0.8125rem",
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "normal",
          }}
        >
          {props.error}
        </div>
      </div>
    </div>
  );
}

export default Contactform;
