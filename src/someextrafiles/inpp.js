import React, { useEffect, useRef, useState } from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

import t1 from "./t1.png";
import t2 from "./t2.png";
import t3 from "./t3.png";
import t4 from "./t4.png";
import t5 from "./t5.png";
import arrow from "./arrow.png";
import cross from "./cross.png";

import arrow1 from "./Group (1).png";
import arrow2 from "./Слой 34.png";
function Inpp() {
  const [pSee, setpSee] = useState(true);
  const ted = [
    {
      width: "2.07rem",
      height: "2.17rem",
      pic: t1,
      text: "Install Metamask",
    },
    { width: "2.17rem", height: "1.33rem", pic: t2, text: "WalletConnect" },
    {
      width: "2.68rem",
      height: "2.68rem",
      pic: t3,
      text: "Coinbase Wallet ",
    },
    { width: "1.62rem", height: "1.62rem", pic: t4, text: "Fortmatic" },
    { width: "1.55rem", height: "2.35rem", pic: t5, text: "Portis" },
  ];

  const object1 = ["Verified Network’ Terms of Service", "Protocol Disclaimer"];
  const object2 = [
    {
      title: "Auto",
      subtitle:
        "This app fetches the optimal trade route from a Verified Network server.",
    },
    {
      title: "Infura",
      subtitle:
        "This app fetches on chain-data and constructs contract calls with an Infura APIS",
    },
    {
      title: "TRM Labs",
      subtitle:
        "The app securely connects your wallet address and shares it with TRM Labs Inc. for risk and compliance reasons.",
      learn: "Learn more",
    },
    {
      title: "Google Analytics",
      subtitle:
        "The app logs anonymized usage statistics in order to improve over time.",
    },
    {
      title: "The Graph",
      subtitle:
        "The app fetches blockchain  data from The Graph’s hosted service.",
    },
  ];
  //   useEffect(() => {
  //     if (document.getElementsByClassName("popup-content"))
  //       console.log(document.getElementsByClassName("popup-content"));
  //   }, []);
  console.log(document.getElementsByClassName("popup-content"));
  const reff = useRef();
  console.log(reff);

  return (
    <div className="" ref={reff}>
      {
        <Popup
          modal
          trigger={
            <a
              href={"#"}
              className="d-flex justify-content-center align-items-center ms-md-4 mt-md-0 mt-4 jointhediscussion iiiiii"
              style={{
                background: "#4e59e7",
                borderRadius: "3.125rem",
                boxShadow: "0px 20px 50px 0px rgba(78,86,231,0.31)",
                color: "#FFF",
                textAlign: "center",
                fontFamily: "Geomanist,sans-serif",
                fontSize: "1.125rem",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "normal",
              }}
            >
              {"Join the Discussion"}
            </a>
          }
        >
          {(close) =>
            pSee ? (
              <div className="px-4 pb-4 pt-3">
                <div className="text-end">
                  <img
                    onClick={close}
                    src={cross}
                    style={{
                      width: "0.93rem",
                      height: "0.93rem",
                      cursor: "pointer",
                    }}
                  />
                </div>
                <div
                  className="d-flex  align-items-center flex-column "
                  style={{}}
                >
                  <div
                    style={{
                      color: "#393939",
                      textAlign: "center",
                      fontFamily: "Geomanist,sans-serif",
                      fontSize: "40px",
                      fontStyle: "normal",
                      fontWeight: 700,
                      lineHeight: "60px",
                    }}
                  >
                    Connect a <span style={{ color: "#4e59e7" }}>Wallet</span>
                  </div>
                </div>
                <div
                  className="p-4"
                  style={{
                    color: "#8F8F98",
                    textAlign: "center",
                    fontFamily: "Geomanist,sans-serif",
                    fontSize: "1.125rem",
                    fontStyle: "normal",
                    fontWeight: 400,
                    lineHeight: "1.875rem",
                  }}
                >
                  By connecting a wallent, you agree to Verified network '
                  <span style={{ color: "#4e59e7" }}> Terms of Service</span>{" "}
                  and acknowledge that you have read and understand the Verified
                  network{" "}
                  <span style={{ color: "#4e59e7" }}>Protocol Desclaimer.</span>
                </div>
                <div>
                  {ted.map((a, b) => {
                    return (
                      <div
                        key={b}
                        className="d-flex align-items-center py-3 px-4 mt-4"
                        style={{
                          background: "#f1f4ff",
                          border: "2px solid rgba(220,226,255,0.60)",
                          borderRadius: "1rem",
                        }}
                      >
                        <img
                          src={a.pic}
                          style={{ width: a.width, height: a.height }}
                        />
                        <div
                          className="ms-4"
                          style={{
                            color: "#393939",
                            fontFamily: "Geomanist,sans-serif",
                            fontSize: "1.25rem",
                            fontStyle: "normal",
                            fontWeight: 400,
                            lineHeight: "1.875rem",
                          }}
                        >
                          {a.text}
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div
                  onClick={() => {
                    setpSee(false);
                  }}
                  style={{ cursor: "pointer" }}
                  className="d-flex justify-content-center align-items-center mt-5"
                >
                  <div
                    className="me-4"
                    style={{
                      color: "#4E59E7",
                      textAlign: "center",
                      fontFamily: "Geomanist,sans-serif",
                      fontSize: "1.125rem",
                      fontStyle: "normal",
                      fontWeight: 400,
                      lineHeight: "1.875rem",
                    }}
                  >
                    How this app uses APIs
                  </div>
                  <img
                    src={arrow}
                    style={{ width: "0.93rem", height: "0.72rem" }}
                  />
                </div>
              </div>
            ) : (
              <div className="px-4 pb-4 pt-3">
                <div className="text-start">
                  <img
                    onClick={() => {
                      setpSee(true);
                    }}
                    // onClick={close}
                    src={arrow1}
                    style={{
                      width: "1.006rem",
                      height: "0.937rem",
                      cursor: "pointer",
                    }}
                  />
                </div>
                <div
                  className="d-flex  align-items-center flex-column "
                  style={{}}
                >
                  <div
                    style={{
                      color: "#393939",
                      textAlign: "center",
                      fontFamily: "Geomanist,sans-serif",
                      fontSize: "40px",
                      fontStyle: "normal",
                      fontWeight: 700,
                      lineHeight: "60px",
                    }}
                  >
                    Legal & <span style={{ color: "#4e59e7" }}>Privacy</span>
                  </div>
                </div>
                <div>
                  {object1.map((a, b) => {
                    return (
                      <div
                        key={b}
                        className="d-flex justify-content-between py-2 px-3 align-items-center mt-2"
                        style={{
                          background: "#f1f4ff",
                          border: "2px solid rgba(220,226,255,0.60)",
                          borderRadius: "1rem",
                        }}
                      >
                        <div
                          style={{
                            color: "#393939",
                            fontFamily: "Geomanist,sans-serif",
                            fontSize: "1.125rem",
                            fontStyle: "normal",
                            fontWeight: 400,
                            lineHeight: "1.875rem",
                          }}
                        >
                          {a}
                        </div>
                        <img
                          src={arrow2}
                          style={{ width: "8px", height: "14px" }}
                        />
                      </div>
                    );
                  })}
                </div>
                <div
                  className="mt-3"
                  style={{
                    color: "#8F8F98",
                    fontFamily: "Geomanist,sans-serif",
                    fontSize: "1.125rem",
                    fontStyle: "normal",
                    fontWeight: 400,
                    lineHeight: "1.875rem",
                  }}
                >
                  This app uses the followning third-party APIs:
                </div>
                <div>
                  {object2.map((a, b) => {
                    return (
                      <div
                        key={b}
                        className="mt-2 py-3 px-3"
                        style={{
                          background: "#fff",
                          border: "1px solid rgba(220,226,255,0.60)",
                          //   boxShadow: "0px 10px 20px rgba(0,0,0,0.06)",
                          fontFamily: "Geomanist,sans-serif",
                          fontSize: "1.125rem",
                          fontStyle: "normal",
                          fontWeight: 400,
                          lineHeight: "1.875rem",
                          borderRadius: "1rem",
                        }}
                      >
                        <div style={{ color: "#393939" }}>{a.title}</div>
                        <div style={{ color: "#8f8f98" }}>
                          {a.subtitle}
                          <a style={{ color: "#4e59e7" }}> {a?.learn}</a>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div
                  style={{ cursor: "pointer" }}
                  className="d-flex justify-content-center align-items-center mt-3"
                >
                  <div
                    className="me-4"
                    style={{
                      color: "#4E59E7",
                      textAlign: "center",
                      fontFamily: "Geomanist,sans-serif",
                      fontSize: "1.125rem",
                      fontStyle: "normal",
                      fontWeight: 400,
                      lineHeight: "1.875rem",
                    }}
                  >
                    Learn more
                  </div>
                  <img
                    src={arrow}
                    style={{ width: "0.93rem", height: "0.72rem" }}
                  />
                </div>
              </div>
            )
          }
        </Popup>
      }
    </div>
  );
}

export default Inpp;
