import React from "react";
import Aboutheader1 from "../aboutfile/aboutheader1";
import Comheader1 from "../aboutfile/comheader1";
import Aboutheader2 from "../aboutfile/aboutheader2";
import pic1 from "./O1 1.png";
import pic2 from "./Group.png";
import pic4 from "./Group 17547 (1).png";
import pic3 from "./O2 1.png";
import pic5 from "./article1.png";
import pic6 from "./article 2.png";
import pic7 from "./article3.png";
import Footer from "../home/homefile/footer";

function Operators() {
  const object1 = [
    {
      img: pic1,
      class: "logoheightwidth1",
      display: "d-flex",
      heading: ["Champion", "Secentralized Finance"],
      line1: [
        "The Verified Network is a two layered Ethereum based platform. You can help support decentralization of financial services by hosting a Layer 2 node for the Verified Network.",
        "Layer 1 - Public Ethereum network Layer 2 - Private Quorum- based network ",
        "Layer 2 executes most transactions, while Layer 1is its gateway to digital assets and Dapps on the Ethereum mainnet.",
      ],
    },
    {
      img: pic3,
      class: "logoheightwidth2",
      display: "d-flex flex-row-reverse",
      heading: ["Champion", "Secentralized Finance"],
      line1: [
        "Leverage your license to offer financial services by hosting a node for the Verified Network and offering financial products and services accessible to the Verified Network community.",
        "The Verified Network is serviced by regulated financial services providers. Services for paying in and withdrawing of fiat currencies, registration and transfer of tokenized securities, and asset management of tokenized securities are regulated and serviced by licensed services providers.  ",
        "Layer 2 executes most transactions, while Layer 1is its gateway to digital assets and Dapps on the Ethereum mainnet.",
      ],
    },
    {
      img: pic4,
      class: "logoheightwidth3",
      display: "d-flex",
      heading: ["Bring in", "Revenue share"],
      line1: [
        "Earn a share of revenue when you provide decentralized financial services on the Verified Network.",
        "The Verified Network is operated by blockchain smart contracts which deduct transaction fees for payments, withdrawals, issuing and trading of tokenized securities, digital credit assessments, and digital custody of assets. ",
        "This revenue from transaction fees is shared with node operators of the Verified Network. ",
      ],
    },
  ];

  const object2 = [
    {
      img: pic5,
      heading: "Title of the News",
      details:
        "Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Fusce dapibus, tellus ac cursus commodo, ",
      margin: "me-md-3",
    },
    {
      img: pic6,
      heading: "Title of the News",
      details:
        "Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Fusce dapibus, tellus ac cursus commodo, ",
      margin: "me-md-3",
    },
    {
      img: pic7,
      heading: "Title of the News",
      details:
        "Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Fusce dapibus, tellus ac cursus commodo, ",
    },
  ];

  return (
    <div>
      <div>
        <Aboutheader1
          title="Operators"
          aboutbackground="linear-gradient(282deg, rgba(255, 226, 228, 0.70) 0%, rgba(195, 234, 255, 0.60) 59.76%)"
          comheader1={<Comheader1></Comheader1>}
        ></Aboutheader1>
        <Aboutheader2
          aboutheader2={
            <div className="d-flex flex-column align-items-center">
              <div
                style={{
                  color: "#393939",
                  textAlign: "center",
                  fontFamily: "Geomanist,sans-serif",
                  fontSize: "3.125rem",
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "3.75rem",
                }}
              >
                Host a nod eon the{" "}
                <span style={{ fontWeight: 700, color: "#4e59e7" }}>
                  verified Network.
                </span>
              </div>
              <div
                style={{
                  color: "#8F8F98",
                  textAlign: "center",
                  fontFamily: "Geomanist,sans-serif",
                  fontSize: "1.125rem",
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "1.875rem",
                  maxWidth: "45.37rem",
                }}
              >
                And join the movement to democratise access to choose financial
                products and services.
              </div>
              <div
                className="mt-5"
                style={{
                  color: "#8F8F98",
                  textAlign: "center",
                  fontFamily: "Geomanist,sans-serif",
                  fontSize: "1.125rem",
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "1.875rem",
                  maxWidth: "42rem",
                }}
              >
                Earn from a share of fees paid on payments, investments,
                issuances of tokenized securities, and trading of tokenized
                securities.
              </div>
              <div className="d-flex flex-md-row flex-column justify-content-center mt-5 pt-3">
                <div
                  className="d-flex  justify-content-center align-items-center viewdocumentation"
                  style={{
                    border: "2px solid #4e59e7",
                    borderRadius: "3.125rem",
                    color: "#393939",
                    textAlign: "center",
                    fontFamily: "Geomanist,sans-serif",
                    fontSize: "1.125rem",
                    fontStyle: "normal",
                    fontWeight: 400,
                    lineHeight: "normal",
                  }}
                >
                  View Documentation
                </div>
                <div
                  className="d-flex justify-content-center align-items-center ms-md-4 mt-md-0 mt-4 jointhediscussion"
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
                  Join the Discussion
                </div>
              </div>
            </div>
          }
        ></Aboutheader2>
      </div>
      {/* --------------------------------------------------------- */}

      <div className="" style={{ marginTop: "7rem" }}>
        <div className=" mx-5 ">
          {" "}
          {object1.map((a, b) => {
            return (
              <div
                className={`${a.display} flex-md-row flex-column-reverse align-items-md-start align-items-center`}
                key={b}
                style={{ marginTop: "6rem" }}
              >
                <img
                  className={`${a.class} mt-5`}
                  src={a.img}
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                />
                <div className="ms-4 champion">
                  <div
                    style={{
                      color: "#393939",
                      fontFamily: "Geomanist,sans-serif",

                      fontStyle: "normal",

                      lineHeight: "normal",
                    }}
                  >
                    <span style={{ fontWeight: "700" }}>{a.heading[0]}</span>{" "}
                    {a.heading[1]}
                  </div>
                  <div className="mt-5">
                    {a.line1.map((a, b) => {
                      return (
                        <div className="d-flex  mt-4" key={b}>
                          <img
                            src={pic2}
                            style={{ width: "1.68rem", height: "1.68rem" }}
                          />
                          <div
                            className="ms-3"
                            style={{
                              color: "#8F8F98",
                              fontFamily: "Geomanist,sans-serif",
                              fontSize: "1.125rem",
                              fontStyle: "normal",
                              fontWeight: 400,
                              lineHeight: "1.875rem",
                            }}
                          >
                            {a}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
          {/* ================================================= */}
        </div>
      </div>
      <div style={{ background: "rgba(78,89,231,0.03)", marginTop: "5rem" }}>
        <div style={{ width: "100%" }} className="">
          <div
            className="mx-5"
            style={{
              color: "#000",
              fontFamily: "Geomanist,sans-serif",
              fontSize: "2.5rem",
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "normal",
              paddingTop: "4rem",
              paddingBottom: "3rem",
            }}
          >
            Suggested <span style={{ color: "#4e59e7" }}>Articles</span>
          </div>
          <div
            className="d-flex px-5 flex-md-nowrap flex-wrap justify-content-md-between justify-content-center "
            style={{ paddingBottom: "4.5rem" }}
          >
            {object2.map((a, b) => {
              return (
                <div
                  className={`flex-md-nowrap flex-wrap ${a.margin} mb-md-0 mb-4`}
                  key={b}
                  style={{
                    maxWidth: "22.68rem",
                    // maxHeight: "29.56rem",
                    width: "100%",
                    height: "100%",
                    borderRadius: "1.25rem",
                    background: "#fff",
                    boxShadow: "0px 20px 50px 0px rgba(220,226,255,0.60)",
                    overflow: "hidden",
                  }}
                >
                  <img
                    src={a.img}
                    style={{
                      maxWidth: "22.68rem",
                      maxHeight: "16.125rem",
                      width: "100%",
                      height: "100%",
                    }}
                  />
                  <div
                    className="px-4 mt-3 pt-3"
                    style={{
                      color: "#393939",
                      fontFamily: "Geomanist,sans-serif",
                      fontSize: "1.5rem",
                      fontStyle: "normal",
                      fontWeight: 400,
                      lineHeight: "1.875rem",
                    }}
                  >
                    {a.heading}
                  </div>
                  <div
                    className="px-4 my-3 py-3 "
                    style={{
                      color: "#8F8F98",
                      fontFamily: "Geomanist,sans-serif",
                      fontSize: "1.125rem",
                      fontStyle: "normal",
                      fontWeight: 400,
                      lineHeight: "1.875rem",
                    }}
                  >
                    {a.details}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div
        className="me-5 "
        style={{
          marginLeft: "6rem",
          marginTop: "6rem",
          position: "relative",
          zIndex: "10",
          marginBottom: "6rem",
        }}
      >
        <div
          className="d-flex flex-lg-row flex-column justify-content-center align-items-lg-start align-items-center hosta "
          style={{
            background:
              "linear-gradient(282deg, rgba(193, 241, 238, 0.50) 0%, #F1F4FF 72.92%, rgba(253, 206, 165, 0.00) 100%)",
            borderRadius: "19px",
            // padding: "0rem 4rem",
            // height: "20.62rem",
          }}
        >
          <div
            className=" text-lx-start text-center me-lg-5"
            style={{
              color: "#000",
              fontFamily: "Geomanist,sans-serif",
              fontSize: "2.5rem",
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "3.75rem",
            }}
          >
            Host a blockchain node for the{" "}
            <span
              style={{ color: "#4e59e7", fontWeight: "700" }}
              className="d-block"
            >
              Verified Network
            </span>
          </div>
          <div
            className="d-flex justify-content-center align-items-center mt-lg-0 mt-5 Discussion "
            style={{
              borderRadius: "2.06rem",
              background: "#4e59e7",
              boxShadow: "0px 20px 50px 0px rgba(78,89,231,0.03)",
              color: "#FFF",
              fontFamily: "Geomanist,sans-serif",
              fontSize: "1.5rem",
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "1.875rem",
            }}
          >
            Join the Discussion
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Operators;
