import React, { useEffect, useState } from "react";
import Aboutheader1 from "../aboutfile/aboutheader1";
import Comheader1 from "../aboutfile/comheader1";
import Aboutheader2 from "../aboutfile/aboutheader2";
import pic1 from "./o1.png";
import pic2 from "./Group.png";
// import pic4 from "./Group 17547 (1).png";
// import pic3 from "./O2 1.png";
import pic5 from "./article1.png";
import pic6 from "./article 2.png";
import pic7 from "./article3.png";
import Footer from "../home/homefile/footer";
import { wait } from "@testing-library/user-event/dist/utils";
import z1 from "./z1.png";
import z2 from "./z2.png";

function Investors() {
  const [data, setData] = useState();

  useEffect(() => {
    async function api1() {
      const re = await fetch(
        "https://cms.verified.network/api/operator?populate=*"
      );
      const data = await re.json();
      setData(data?.data?.attributes);
    }
    api1();
  }, []);
  console.log(data);

  const object1 = [
    {
      img: pic1,
      class: "logoheightwidth1",
      display: "d-flex flex-md-row",
      heading: data?.infoCards[0]?.title.split("///"),
      line1: data?.infoCards[0].keypoints.split("///"),
      fontWeight1: "700",
    },
    {
      img: "",
      class: "logoheightwidth2",
      display: "d-flex flex-md-row-reverse",
      heading: data?.infoCards[1]?.title.split("///").slice(1),
      line1: data?.infoCards[1].keypoints.split("///"),
      fontWeight2: "700",
    },
    {
      img: "",
      class: "logoheightwidth3",
      display: "d-flex flex-md-row-reverse",
      heading: data?.infoCards[2]?.title.split("///").slice(1),
      line1: data?.infoCards[2].keypoints.split("///"),
      fontWeight2: "700",
    },
  ];
  const object3 = [
    {
      img: z1,
      class: "logoheightwidth1",
      display: "d-flex flex-md-row",
      heading: data?.infoCards[0]?.title.split("///"),
      line1: data?.infoCards[0].keypoints.split("///"),
      fontWeight1: "700",
    },
    {
      img: "",
      class: "logoheightwidth2",
      display: "d-flex flex-md-row-reverse",
      heading: data?.infoCards[1]?.title.split("///").slice(1),
      line1: data?.infoCards[1].keypoints.split("///"),
      fontWeight2: "700",
    },
  ];

  const object4 = [
    {
      img: z2,
      class: "logoheightwidth1",
      display: "d-flex flex-md-row",
      heading: data?.infoCards[0]?.title.split("///"),
      line1: data?.infoCards[0].keypoints.split("///"),
      fontWeight1: "700",
    },
  ];

  const object2 = [
    {
      img: pic5,
      heading: data?.articleCards[0]?.title,
      details: data?.articleCards[0]?.description,
      margin: "me-md-3",
    },
    {
      img: pic6,
      heading: data?.articleCards[1]?.title,
      details: data?.articleCards[1]?.description,
      margin: "me-md-3",
    },
    {
      img: pic7,
      heading: data?.articleCards[2]?.title,
      details: data?.articleCards[2]?.description,
    },
  ];

  const object5 = [
    { number: "72,000", title: "Investments made" },
    { number: "$200,00", title: "Invested" },
    { number: "$1.5M", title: "Earning Paid" },
    { number: "$1.2M", title: "Revenue" },
  ];

  return (
    data && (
      <div>
        <div>
          <Aboutheader1
            title={data.title}
            aboutbackground="linear-gradient(273deg, rgba(143, 143, 152, 0.20) -2.7%, rgba(220, 226, 255, 0.60) 81.17%)"
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
                  {data.headerCard.title.split("///")[0]}
                  <span style={{ fontWeight: 700, color: "#4e59e7" }}>
                    {data.headerCard.title.split("///")[1]}
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
                  {data.headerCard.subTitle}
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
                  {data.headerCard.description}
                </div>
                <div className="d-flex flex-md-row flex-column justify-content-center mt-5 pt-3">
                  <a
                    href={data.headerCard.primaryButtonLink}
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
                    {data.headerCard.primaryButtonText}
                  </a>
                </div>
              </div>
            }
          ></Aboutheader2>
        </div>
        {/* --------------------------------------------------------- */}
        <div
          className="d-flex  align-items-center flex-wrap mx-5"
          style={{ marginTop: "6rem" }}
        >
          <div
            style={{
              fontFamily: "Geomanist,sans-serif",
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "normal",
              marginRight: "21%",
            }}
            className="inthe"
          >
            <div style={{ color: "#4e59e7" }}>Invest</div>
            <div style={{ color: "#000" }}>In the Verified Network</div>
          </div>
          <div
            style={{
              background: "#4e59e7",
              borderRadius: "0.5rem",
              width: "4.5rem",
              height: "0.5rem",
            }}
          ></div>
        </div>

        <div className="" style={{ marginTop: "7rem" }}>
          <div className=" mx-5 ">
            {" "}
            {object1.map((a, b) => {
              return (
                <div
                  className={`${a.display} justify-content-between flex-column-reverse align-items-md-start align-items-center`}
                  key={b}
                  style={{ marginTop: "6rem" }}
                >
                  {a.img && (
                    <img
                      className={`${a.class} mt-5`}
                      src={a.img}
                      style={{
                        width: "100%",
                        height: "100%",
                      }}
                    />
                  )}
                  <div className="ms-4 champion">
                    <div
                      style={{
                        color: "#393939",
                        fontFamily: "Geomanist,sans-serif",

                        fontStyle: "normal",

                        lineHeight: "normal",
                      }}
                    >
                      {" "}
                      <span className="" style={{ fontWeight: a?.fontWeight1 }}>
                        {a.heading[0]}
                      </span>
                      <span style={{ fontWeight: a?.fontWeight2 }}>
                        {a.heading[1]}
                      </span>{" "}
                      {a.heading[2]}
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
          </div>
        </div>
        {/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}

        <div
          style={{
            background: "rgba(216,198,255,0.30)",
            paddingBottom: "6rem",
          }}
        >
          <div
            className="d-flex  align-items-center flex-wrap mx-5 "
            style={{ marginTop: "6rem", paddingTop: "6rem" }}
          >
            <div
              style={{
                fontFamily: "Geomanist,sans-serif",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "normal",
                marginRight: "16%",
              }}
              className="inthe"
            >
              <div style={{ color: "#4e59e7" }}>Earn</div>
              <div style={{ color: "#000" }}>From the Verified Network</div>
            </div>
            <div
              style={{
                background: "#4e59e7",
                borderRadius: "0.5rem",
                width: "4.5rem",
                height: "0.5rem",
              }}
            ></div>
          </div>

          <div className="" style={{ marginTop: "7rem" }}>
            <div className=" mx-5 ">
              {" "}
              {object3.map((a, b) => {
                return (
                  <div
                    className={`${a.display} justify-content-between flex-column-reverse align-items-md-start align-items-center`}
                    key={b}
                    style={{ marginTop: "6rem" }}
                  >
                    {a.img && (
                      <img
                        className={`${a.class} mt-5`}
                        src={a.img}
                        style={{
                          width: "100%",
                          height: "100%",
                        }}
                      />
                    )}
                    <div className="ms-4 champion">
                      <div
                        style={{
                          color: "#393939",
                          fontFamily: "Geomanist,sans-serif",

                          fontStyle: "normal",

                          lineHeight: "normal",
                        }}
                      >
                        {" "}
                        <span
                          className=""
                          style={{ fontWeight: a?.fontWeight1 }}
                        >
                          {a.heading[0]}
                        </span>
                        <span style={{ fontWeight: a?.fontWeight2 }}>
                          {a.heading[1]}
                        </span>{" "}
                        {a.heading[2]}
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
            </div>
          </div>
        </div>

        {/* =++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}
        {/* ------------------------------------------------------- */}
        <div
          style={{
            paddingBottom: "4rem",
          }}
        >
          <div
            className="d-flex  align-items-center flex-wrap mx-5 "
            style={{ marginTop: "7rem" }}
          >
            <div
              style={{
                fontFamily: "Geomanist,sans-serif",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "normal",
                marginRight: "19%",
              }}
              className="inthe"
            >
              <div style={{ color: "#4e59e7" }}>Liqudity</div>
              <div style={{ color: "#000" }}>On the Verified Network</div>
            </div>
            <div
              style={{
                background: "#4e59e7",
                borderRadius: "0.5rem",
                width: "4.5rem",
                height: "0.5rem",
              }}
            ></div>
          </div>

          <div className="" style={{ marginTop: "5rem" }}>
            <div className=" mx-5 ">
              {" "}
              {object4.map((a, b) => {
                return (
                  <div
                    className={`${a.display} justify-content-between flex-column-reverse align-items-md-start align-items-center`}
                    key={b}
                    style={{ marginTop: "6rem" }}
                  >
                    {a.img && (
                      <img
                        className={`${a.class} `}
                        src={a.img}
                        style={{
                          width: "100%",
                          height: "100%",
                        }}
                      />
                    )}
                    <div className="ms-4 champion mb-5">
                      <div
                        style={{
                          color: "#393939",
                          fontFamily: "Geomanist,sans-serif",

                          fontStyle: "normal",

                          lineHeight: "normal",
                        }}
                      >
                        {" "}
                        <span
                          className=""
                          style={{ fontWeight: a?.fontWeight1 }}
                        >
                          {a.heading[0]}
                        </span>
                        <span style={{ fontWeight: a?.fontWeight2 }}>
                          {a.heading[1]}
                        </span>{" "}
                        {a.heading[2]}
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
            </div>
          </div>
        </div>
        {/* ------------------------------------------------------------ */}
        <div>
          <div
            className="d-flex justify-content-between flex-md-row flex-column flex-mdwrap mx-5 px-5 pt-5 pb-md-5"
            style={{
              background: "#fff",
              boxShadow: "0px 4px 50px rgba(220,226,255,0.60)",
              borderRadius: "1rem",
            }}
          >
            {object5.map((a, b) => {
              return (
                <div
                  key={b}
                  style={{ textAlign: "center" }}
                  className="mb-md-0 mb-5"
                >
                  <div
                    style={{
                      color: "#4E59E7",
                      fontFamily: "Geomanist,sans-serif",
                      fontSize: "2.5rem",
                      fontStyle: "normal",
                      fontWeight: 400,
                      lineHeight: "normal",
                    }}
                  >
                    {a.number}
                  </div>
                  <div
                    className="mt-3"
                    style={{
                      color: "#393939",
                      fontFamily: "Geomanist,sans-serif",
                      fontSize: "1.25rem",
                      fontStyle: "normal",
                      fontWeight: 400,
                      lineHeight: "normal",
                    }}
                  >
                    {a.title}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div
          className="me-5 "
          style={{
            marginLeft: "6rem",
            marginTop: "3rem",
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
              className=" text-start  me-lg-5"
              style={{
                color: "#000",
                fontFamily: "Geomanist,sans-serif",
                fontSize: "2.5rem",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "3.75rem",
              }}
            >
              Invest in the Verified Network and earn a share of its revenue.
            </div>
            <a
              href={data.ctaCardDetails.buttonCtaLink}
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
              Invest now
            </a>
          </div>
        </div>
        <Footer></Footer>
      </div>
    )
  );
}

export default Investors;
