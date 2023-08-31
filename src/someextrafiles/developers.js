import React, { useEffect, useState } from "react";
import Aboutheader1 from "../aboutfile/aboutheader1";
import Comheader1 from "../aboutfile/comheader1";
import Aboutheader2 from "../aboutfile/aboutheader2";
import pic1 from "./g1.png";
import pic2 from "./Group.png";
import pic4 from "./g3.png";
import pic3 from "./g2.png";
import pic5 from "./article1.png";
import pic6 from "./article 2.png";
import pic7 from "./article3.png";
import Footer from "../home/homefile/footer";
import { wait } from "@testing-library/user-event/dist/utils";

function Developers() {
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
      img: pic3,
      class: "logoheightwidth2",
      display: "d-flex flex-md-row-reverse",
      heading: data?.infoCards[1]?.title.split("///").slice(1),
      line1: data?.infoCards[1].keypoints.split("///"),
      fontWeight2: "700",
    },
    {
      img: pic4,
      class: "logoheightwidth3",
      display: "d-flex flex-md-row",
      heading: data?.infoCards[2]?.title.split("///").slice(1),
      line1: data?.infoCards[2].keypoints.split("///"),
      fontWeight2: "700",
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

  return (
    data && (
      <div>
        <div>
          <Aboutheader1
            title={data.title}
            aboutbackground="linear-gradient(273deg, #E0FFEE -2.7%, #EAF2FF 81.17%)"
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
                    href={data.headerCard.secondaryButtonLink}
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
                    {data.headerCard.secondaryButtonText}
                  </a>
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

        <div className="" style={{ marginTop: "7rem" }}>
          <div className=" mx-5 ">
            {" "}
            {object1.map((a, b) => {
              return (
                <div
                  className={`${a.display} justify-content-between flex-md-row flex-column-reverse align-items-md-start align-items-center`}
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
              {data.ctaCardDetails.content.split("///")[1]}
              <span
                style={{ color: "#4e59e7", fontWeight: "700" }}
                className="d-block"
              >
                {data.ctaCardDetails.content.split("///")[2]}
              </span>
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
              {data.ctaCardDetails.buttonText}
            </a>
          </div>
        </div>
        <Footer></Footer>
      </div>
    )
  );
}

export default Developers;
