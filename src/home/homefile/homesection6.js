import React, { useContext, useState } from "react";
import { homeapi } from "../../App";
import gp from "../homephoto/gp.png";
import ap from "../homephoto/ap.png";
import downloadphone from "../homephoto/downloadphone.png";
import { Link } from "react-router-dom";

function Homesection6() {
  const section6 = useContext(homeapi);
  const array1 = section6.home.data.attributes.News;
  const [arinc, setArinc] = useState(0);
  const [ardec, setArdec] = useState(3);
  const array6 = array1.slice(arinc, ardec);
  const arraydownlod = section6.home.data.attributes.downloadCta;
  const section6heading = arraydownlod.heading.split("///");
  console.log(array1);

  function plushh() {
    if (ardec >= array1.length) {
      setArinc(array1.length - 3);
      setArdec(array1.length);
    } else {
      setArinc(arinc + 1);
      setArdec(ardec + 1);
    }
  }
  function minuss() {
    if (ardec >= array1.length - 1) {
      setArinc(0);
      setArdec(3);
    } else {
      setArinc(arinc - 1);
      setArdec(ardec - 1);
    }
  }

  function allsee() {
    setArinc(0);
    setArdec(array1.length);
  }
  console.log(window.innerWidth);

  return (
    <div style={{ background: "rgba(216, 198, 255, 0.11)" }}>
      <div className="mx-5 pt-5 ">
        <div className="pt-4">
          <div className="d-flex justify-content-between align-items-center mb-5 pb-3 ">
            <div className="leatest">Leatest News</div>
            <div className="see" style={{ cursor: "pointer" }} onClick={allsee}>
              see all
            </div>
          </div>
          <div>
            <div
              className="d-flex flex-md-row flex-column "
              style={{ flexWrap: array1.length === ardec ? "wrap" : "nowrap" }}
            >
              {array6.map((a, b) => {
                return (
                  <div
                    className="cardnews cardnews1 ms-4 p-4 mb-md-0 mb-5"
                    key={b}
                  >
                    <div
                      className="d-flex justify-content-center align-items-center"
                      style={{
                        background: "#DCE2FF",
                        width: "6.7989rem",
                        height: "2.25rem",
                        borderRadius: "30px",
                      }}
                    >
                      <div className="date">{a.date}</div>
                    </div>
                    <div className="loren mt-4">{a.title}</div>
                    <div className="integer mt-5 mb-5 pb-5">
                      {a.description}
                    </div>
                    <div>
                      <a
                        href={a.link}
                        style={{ color: "rgba(78, 89, 231, 1)" }}
                        className="learnmore mt-4 d-flex justify-content-start align-items-center "
                      >
                        <span>Read More</span>
                        <i
                          className="fa-solid fa-arrow-left-long fa-rotate-180 fa-sm ms-2"
                          style={{ color: "rgba(78, 89, 231, 1)" }}
                        ></i>
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-4 pt-3 d-flex justify-content-lg-end justify-content-center">
              <div
                onClick={minuss}
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
                onClick={plushh}
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
        {/* --------------------------------------------------------------------------------------------------------- */}
        <div
          className="d-flex flex-lg-row flex-column justify-content-between align-items-center"
          style={{ marginTop: "6rem" }}
        >
          <div className="d-lg-block d-flex flex-column align-items-center ">
            <div className="download">{section6heading[0]}</div>
            <div className="wallet">{section6heading[1]}</div>
            <div className="ios mt-5">{arraydownlod.subHeading}</div>
            <div className="d-flex mt-4 pt-3">
              <Link
                to={arraydownlod.playStoreLink}
                className="d-flex justify-content-center align-items-center"
                style={{
                  width: "10.5rem",
                  height: "3.3125rem",
                  borderRadius: "3.125rem",
                  background: "#000",
                }}
              >
                <img
                  src={gp}
                  alt=""
                  style={{ width: "8.20rem", height: "2.38rem" }}
                />
              </Link>
              <Link
                to={arraydownlod.appStoreLink}
                className="d-flex justify-content-center align-items-center ms-4"
                style={{
                  width: "10.5rem",
                  height: "3.3125rem",
                  borderRadius: "3.125rem",
                  background: "#000",
                }}
              >
                <img
                  src={ap}
                  alt=""
                  style={{ width: "7.62rem", height: "2.59rem" }}
                />
              </Link>
            </div>
          </div>
          <div>
            <img
              src={downloadphone}
              style={{ maxWidth: "48.56rem", width: "100%" }}
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homesection6;
