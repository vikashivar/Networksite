import React, { useEffect, useState } from "react";
import Aboutheader1 from "./aboutheader1";
import Aboutheader2 from "./aboutheader2";
import Group17 from "./Group 17490.png";
import right from "./right.png";
import bank1 from "./bank1.png";
import bank2 from "./bank2.png";
import bank3 from "./bank3.png";
import bank4 from "./bank4.png";
import man1 from "./man1.png";
import { Link } from "react-router-dom";
import Footer from "../home/homefile/footer";
import Map from "./Map.png";

function About() {
  const [about, setAbout] = useState();
  const [team, setTeam] = useState([0, 1]);
  useEffect(() => {
    async function api() {
      const re = await fetch(
        "https://cms.verified.network/api/about-us?populate=*"
      );
      const data = await re.json();
      setAbout(data);
    }
    api();
  }, []);
  const aboutUsHeader =
    about?.data?.attributes?.aboutUsHeader?.title.split("///");

  let teamdata;
  let plush;
  let minus;
  if (about) {
    teamdata = about.data.attributes.teamDetails.slice(team[0], team[1]);

    plush = function () {
      if (about.data.attributes.teamDetails.length === team[1]) {
        setTeam([team[0], team[1]]);
      } else {
        setTeam([team[0] + 1, team[1] + 1]);
      }
    };

    minus = function () {
      if (team[1] === 1) {
        setTeam([team[0], team[1]]);
      } else {
        setTeam([team[0] - 1, team[1] - 1]);
      }
    };
  }

  return (
    about && (
      <div>
        <Aboutheader1 title={about.data.attributes.title}></Aboutheader1>
        <Aboutheader2
          aboutheader2={
            <>
              <div
                style={{
                  color: "#4E59E7",
                  textAlign: "center",
                  fontFamily: "Geomanist,sans-serif",
                  fontSize: "3.125rem",
                  fontStyle: "normal",
                  fontWeight: 700,
                  lineHeight: "normal",
                }}
              >
                {aboutUsHeader[0]}
                <span style={{ color: "#393939", fontWeight: 400 }}>
                  {aboutUsHeader[1]}
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
                  maxWidth: "42.81rem",
                }}
              >
                {about.data.attributes.aboutUsHeader.description}
              </div>
            </>
          }
        ></Aboutheader2>
        <div className="d-flex flex-lg-row flex-column align-items-center justify-content-between p-5 mt-4 mx-xl-5">
          <img
            className="mt-lg-0 mt-4"
            src={Group17}
            style={{
              maxWidth: "30rem",
              maxHeight: "41.56rem",
              width: "100%",
              height: "100%",
            }}
          ></img>

          <div style={{}} className="aboutwe">
            <div
              className="featuresubheadign"
              style={{
                color: "#393939",
                fontFamily: "Geomanist,sans-serif",
                fontSize: "2.5rem",
                fontStyle: "normal",
                fontWeight: 700,
                lineHeight: "normal",
              }}
            >
              {about.data.attributes.infoCard.title}
            </div>
            <div className="mt-5">
              <div className="d-flex ">
                <div>
                  <img
                    src={right}
                    alt=""
                    style={{ width: "1.68rem", height: "1.68" }}
                  />
                </div>
                <div
                  style={{
                    color: "#8F8F98",
                    fontFamily: "Geomanist,sans-serif",
                    fontSize: "1.125rem",
                    fontStyle: "normal",
                    fontWeight: 400,
                    lineHeight: "1.875rem",
                  }}
                  className="feature ms-3 "
                >
                  {about.data.attributes.infoCard.keypoints.split("///")[0]}
                </div>
              </div>
              <div className="d-flex  mb-4">
                <div>
                  <img
                    src={right}
                    alt=""
                    style={{ width: "1.68rem", height: "1.68" }}
                  />
                </div>
                <div
                  style={{
                    color: "#8F8F98",
                    fontFamily: "Geomanist,sans-serif",
                    fontSize: "1.125rem",
                    fontStyle: "normal",
                    fontWeight: 400,
                    lineHeight: "1.875rem",
                  }}
                  className="feature ms-3 "
                >
                  {about.data.attributes.infoCard.keypoints.split("///")[1]}
                </div>
              </div>
              <div className="d-flex mb-4">
                <div>
                  <img
                    src={right}
                    alt=""
                    style={{ width: "1.68rem", height: "1.68" }}
                  />
                </div>
                <div
                  style={{
                    color: "#8F8F98",
                    fontFamily: "Geomanist,sans-serif",
                    fontSize: "1.125rem",
                    fontStyle: "normal",
                    fontWeight: 400,
                    lineHeight: "1.875rem",
                  }}
                  className="feature ms-3  mb-4"
                >
                  {about.data.attributes.infoCard.keypoints.split("///")[2]}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center">
          {" "}
          <div
            className="d-flex flex-column justify-content-evenly  mx-5 py-5 "
            style={{
              background:
                "linear-gradient(282deg, rgba(193, 241, 238, 0.50) 0%, #F1F4FF 72.92%, rgba(253, 206, 165, 0.00) 100%)",
              width: "65rem",

              borderRadius: "16px",
            }}
          >
            <div
              className="py-4"
              style={{
                color: "#4E59E7",
                textAlign: "center",
                fontFamily: "Geomanist,sans-serif",
                fontSize: "2.5rem",
                fontStyle: "normal",
                fontWeight: 700,
                lineHeight: "3.75rem",
              }}
            >
              Verified Networks{" "}
              <span style={{ color: "#000", fontWeight: 400 }}>Partners</span>
            </div>
            <div className="d-flex   justify-content-sm-between justify-content-center px-5 mx-5 flex flex-wrap ">
              <img
                className="mt-5 mx-4"
                src={bank1}
                style={{
                  maxWidth: "9.99rem",
                  maxHeight: "2.65rem",
                  width: "100%",
                  height: "100%",
                }}
              ></img>
              <img
                className="mt-5 mx-4"
                src={bank2}
                style={{
                  maxWidth: "8.54rem",
                  maxHeight: "2.30rem",
                  width: "100%",
                  height: "100%",
                }}
              ></img>
              <img
                className="mt-5 mx-4"
                src={bank3}
                style={{
                  maxWidth: "10.754rem",
                  maxHeight: "2.30rem",
                  width: "100%",
                  height: "100%",
                }}
              ></img>
              <img
                className="mt-5 mx-4"
                src={bank4}
                style={{
                  maxWidth: "8.87rem",
                  maxHeight: "2.30rem",
                  width: "100%",
                  height: "100%",
                }}
              ></img>
            </div>
            <div className="d-flex justify-content-center mt-5 pt-4">
              <div
                className="mx-1"
                style={{
                  width: "10px",
                  height: "10px",
                  background: "rgb(78,89,231)",
                  borderRadius: "8px",
                }}
              ></div>
              <div
                className="mx-1"
                style={{
                  width: "10px",
                  height: "10px",
                  background: "rgb(185,196,255)",
                  borderRadius: "8px",
                }}
              ></div>
              <div
                className="mx-1"
                style={{
                  width: "10px",
                  height: "10px",
                  background: "rgb(185,196,255)",
                  borderRadius: "8px",
                }}
              ></div>
            </div>
          </div>
        </div>
        {/* ---------------------our team------------------------------------ */}

        <div
          className="p-5"
          style={{ background: "rgba(80,91,232,0.0299)", marginTop: "6rem" }}
        >
          <div className="m-sm-5">
            <div
              className="mb-5"
              style={{
                color: "#393939",
                fontFamily: "Geomanist,sans-serif",
                fontSize: "2.5rem",
                fontStyle: "normal",
                fontWeight: 700,
                lineHeight: "normal",
                textAlign: "center",
              }}
            >
              {about?.data.attributes.teamTitle.split("///")[0]}
              <span style={{ color: "#4e59e7" }}>
                {about.data.attributes.teamTitle.split("///")[1]}
              </span>
            </div>
            <div className="d-flex flex-lg-row flex-column justify-content-xl-around justify-content-between p-xl-5 pt-5 align-items-center">
              <div>
                <img
                  className="man1"
                  src={man1}
                  alt=""
                  style={{
                    borderRadius: "1.25rem",
                  }}
                />
              </div>
              <div
                style={{}}
                className="mt-4 ms-lg-5 d-lg-block d-flex flex-column align-items-center"
              >
                <div
                  className=""
                  style={{
                    color: "#393939",
                    fontFamily: "Geomanist,sans-serif",
                    fontSize: "1.5rem",
                    fontStyle: "normal",
                    fontWeight: 400,
                    lineHeight: "normal",
                  }}
                >
                  {teamdata[0].name}
                </div>
                <div
                  className="pt-3"
                  style={{
                    color: "#4E59E7",
                    fontFamily: "Geomanist,sans-serif",
                    fontSize: "1.125rem",
                    fontStyle: "normal",
                    fontWeight: 400,
                    lineHeight: "1.25rem",
                  }}
                >
                  {teamdata[0].designation}
                </div>
                <div
                  className="mt-4 pt-3"
                  style={{
                    color: "#8F8F98",
                    fontFamily: "Geomanist,sans-serif",
                    fontSize: "1.125rem",
                    fontStyle: "normal",
                    fontWeight: 400,
                    lineHeight: "1.875rem",
                  }}
                >
                  {teamdata[0].description}
                </div>
                <div className="mt-5 pt-5 d-flex justify-content-start">
                  <div
                    onClick={minus}
                    className="d-flex justify-content-center align-items-center"
                    style={{
                      background: "rgba(220, 226, 255, 1)",
                      width: "3.25rem",
                      height: "3.25rem",
                      borderRadius: "26px",
                    }}
                  >
                    <i
                      className="fa-solid fa-arrow-left-long  fa-xl"
                      style={{ color: "#fcfcfd" }}
                    ></i>
                  </div>
                  <div
                    onClick={plush}
                    className="d-flex justify-content-center align-items-center ms-4"
                    style={{
                      background: "rgba(78, 89, 231, 1)",
                      width: "3.25rem",
                      height: "3.25rem",

                      borderRadius: "26px",
                    }}
                  >
                    <i
                      className="fa-solid fa-arrow-left-long fa-rotate-180 fa-xl"
                      style={{ color: "#fcfcfd" }}
                    ></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          {/* ----------------------------------------------------- */}
          <div>
            <div
              className="d-flex justify-content-center flex-column align-items-center mx-5 px-5"
              style={{ marginTop: "6rem", marginBottom: "8rem" }}
            >
              {" "}
              <div
                style={{
                  color: "#393939",
                  fontFamily: "Geomanist,sans-serif",
                  fontSize: "2.5rem",
                  fontStyle: "normal",
                  fontWeight: 700,
                  lineHeight: "normal",
                  textAlign: "center",
                  marginBottom: "4rem",
                }}
              >
                Group of<span style={{ color: "#4e59e7" }}> Companies</span>
              </div>
              <div
                className="p-lg-4 px-md-3 px-md-2  pt-md-3 p-4  mapwidth"
                style={{
                  borderRadius: "1.25rem",
                  background: "#fff",
                  boxShadow: "0px 11px 30px 0px rgba(90,90,193,0.20)",

                  zIndex: 1,
                }}
              >
                <div className="pt-1">
                  {" "}
                  <div className="verifiedag">Verified AG</div>
                  <div className="mt-3 agservice">
                    Verified AG services the platfrom connecting investors,
                    asset managers, and businesses
                  </div>
                  <div className="mt-lg-4 mt-2 p-lg-0 pb-1 pe-lg-0 pe-1 zerland">
                    Verified AG, Dammstrasse 16, 6300 Zug,{" "}
                    <span className="d-lg-inline d-block"> Switzerland</span>
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-center">
                <div>
                  <img
                    src={Map}
                    style={{
                      // maxWidth: "67.11rem",
                      // maxHeight: "37.81rem",
                      width: "100%",
                      height: "100%",
                    }}
                  />
                </div>
              </div>
              {/* <div className="pt-4"> */}
              {/* {" "}
                  <div className="">Verified AG</div>
                  <div className="mt-3 ">
                    Verified AG services the platfrom connecting investors,
                    asset managers, and businesses
                  </div>
                  <div className="mt-4 ">
                    Verified AG, Dammstrasse 16, 6300 Zug,{" "}
                     Switzerland
                  </div> */}
              {/* </div> */}
            </div>
          </div>

          {/* ------------------------------------------------------ */}
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
              {about.data.attributes.ctaCardDetails.content.split("///")[0]}
              <span style={{ color: "#505BE8", fontWeight: 700 }}>
                {about.data.attributes.ctaCardDetails.content.split("///")[1]}
              </span>
              {about.data.attributes.ctaCardDetails.content.split("///")[2]}
            </div>
            <div className="pb-5 mt-5">
              {" "}
              <Link
                style={{ color: "#fff" }}
                className="contectus d-flex justify-content-center align-items-center"
                to={about.data.attributes.ctaCardDetails.buttonCtaLink}
              >
                {about.data.attributes.ctaCardDetails.buttonText}
              </Link>
            </div>
          </div>
          <Footer></Footer>
        </div>
      </div>
    )
  );
}

export default About;
