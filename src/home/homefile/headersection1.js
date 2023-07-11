import React from "react";

function Headersection1() {
  return (
    <div className="mx-5 section1">
      <div className="d-flex justify-content-lg-between justify-content-center flex-lg-row flex-column  align-items-center">
        <div style={{}} className="mt-3 access1 text-lg-start text-center">
          <div className="access pb-3">
            Access to choice in global finance is limited.
          </div>
          <div className="notAnymore mt-3">Not anymore.</div>
        </div>
        <div className="access2 mt-lg-5">
          <div
            style={{
              width: "4.5rem",
              height: "0.5rem",
              borderRadius: "0.5rem",
              background: "#4E59E7",
            }}
          ></div>
          <div className="banksLock mt-5">
            Banks lock you in a silo when they offer their accounts, payments,
            cards, insurance and loans products without access to choice of
            products by other financial service providers. Not any more.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Headersection1;
