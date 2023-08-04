import React from "react";
import Aboutheader1 from "../aboutfile/aboutheader1";
import Comheader1 from "../aboutfile/comheader1";
import group from "./Group529.png";
import group1 from "./Group502.png";
import group2 from "./Group530.png";
import group3 from "./Group532.png";
import Footer from "../home/homefile/footer";

function Verifiedasset() {
  const tyeee = [
    {
      no: 1,

      title: "Swara Baby Products Private ...",
      ino: "112113",
      location: "india",
    },
    {
      no: 2,

      title: "Yellowchalk Design Studio ...",
      ino: "1121sdad",
      location: "india",
    },
    {
      no: 3,

      title: "Swara Baby Products Private ...",
      ino: "112113",
      location: "india",
    },
    {
      no: 4,

      title: "Swara Baby Products Private ...",
      ino: "112113",
      location: "india",
    },
    {
      no: 5,

      title: "Swara Baby Products Private ...",
      ino: "112113",
      location: "india",
    },
    {
      no: 6,

      title: "Swara Baby Products Private ...",
      ino: "112113",
      location: "india",
    },
  ];
  return (
    <div style={{}}>
      <Aboutheader1
        title="Verified Assets"
        aboutbackground="linear-gradient(282deg, rgba(193, 241, 238, 0.30) 0%, rgba(107, 202, 255, 0.50) 61.46%)"
        comheader1={<Comheader1></Comheader1>}
        detail={
          <div
            className="mt-5 pt-2 viewdetails"
            style={{
              color: "#393939",
              textAlign: "center",
              fontFamily: "Geomanist,sans-serif",

              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "1.875rem",
            }}
          >
            Browser investment assets on the Verifed Network ,Sign up to view
            details,
            <span className="d-md-block">
              make investments,and trade investments.
            </span>
          </div>
        }
      ></Aboutheader1>
      <div className="d-flex justify-content-lg-between justify-content-center flex-sm-row flex-column flex-wrap align-items-center mx-5 mt-5">
        <div className="position-relative mb-4">
          <input
            placeholder="Search assets"
            className="assetfilter assetsearch me-4 ps-5 serchfontstyle"
            type="search"
          ></input>
          <img
            src={group1}
            style={{
              width: "1.00775rem",
              height: "1rem",
              position: "absolute",
              top: "50%",
              left: "20px",
              transform: "translateY(-50%)",
            }}
            alt=""
          />
        </div>

        <select
          list="browsers1"
          name=""
          id="browsers1"
          className="assetfilter assetlist me-4 px-3 serchfontstyle mb-4"
          style={{
            background: `url(${group})`,
            backgroundSize: "0.70006rem 1.16694rem",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "90% center",
          }}
        >
          <option value="">Internet </option>
          <option value="Firefox">firefox</option>
          <option value="Chrome">chrome</option>
          <option value="Opera">opera</option>
          <option value="Safari">safari</option>
        </select>
        <select
          style={{
            background: `url(${group})`,
            backgroundSize: "0.70006rem 1.16694rem",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "90% center",
          }}
          list="browsers1"
          name=""
          id="browsers1"
          className="assetfilter assetlist me-4 px-3 serchfontstyle mb-4"
        >
          <option value="">Explorer</option>
          <option value="Firefox">firefox</option>
          <option value="Chrome">chrome</option>
          <option value="Opera">opera</option>
          <option value="Safari">safari</option>
        </select>
        <input
          className="searchborder me-4 mb-4"
          type="button"
          value="Search"
          style={{
            color: "#FFF",
            textAlign: "center",
            fontFamily: "Geomanist,sans-serif",
            fontSize: "1.125rem",
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "1.875rem",
            borderRadius: "3.37rem",
            background: "#4e59e7",
            boxShadow: "0px 20px 50px 0px rgba(78,89,231,0.30)",
            height: "3.37rem",
          }}
        ></input>
      </div>

      <div className="mt-5">
        <div className="d-flex justify-content-between mx-5 mt-5 mb-4 pt-4 pb-3">
          <div
            style={{
              color: "#393939",
              fontFamily: "Geomanist,sans-serif",
              fontSize: "2.5rem",
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "normal",
            }}
          >
            All{" "}
            <span style={{ fontWeight: "700", color: "#4e59e7" }}>Assets</span>
          </div>
          <div className="position-relative ">
            {" "}
            <select className="soryby px-3">
              <option>Sort by</option>
            </select>
            <div
              className="position-absolute"
              style={{ top: "50%", transform: "translateY(-50%)", left: "80%" }}
            >
              <img
                src={group3}
                alt=""
                style={{ width: "0.93rem", height: "0.75rem" }}
              />
            </div>
          </div>
        </div>
        <div
          className="d-flex ms-5 me-4  flex-wrap justify-content-center mb-5"
          style={{ position: "relative", zIndex: "3" }}
        >
          {" "}
          {tyeee.map((a, b) => {
            return (
              <div
                className="d-flex justify-content-between flex-column me-4 mb-4 "
                style={{
                  borderRadius: "1rem",
                  border: "1px solid rgba(220, 226, 255, 0.60)",
                  background: "#FFF",
                  boxShadow: "0px 20px 50px 0px rgba(78, 89, 231, 0.10)",
                  height: "21.5rem",
                  width: "21.5rem",
                  padding: "20px",
                }}
              >
                <div
                  className="d-flex justify-content-center align-items-center"
                  style={{
                    borderRadius: "0.5rem",
                    background:
                      a.no % 2 == 0
                        ? "rgba(193,241,238,0.50)"
                        : "rgba(220, 226,255,0.60)",
                    width: "8.375rem",
                    height: "2.5rem",
                  }}
                >
                  <div
                    style={{
                      color: a.no % 2 == 0 ? "#08C0B5" : "#8E5FF5",
                      fontFamily: "Geomanist,sans-serif",
                      fontSize: "1.125rem",
                      fontStyle: "normal",
                      fontWeight: 400,
                      lineHeight: "normal",
                    }}
                  >
                    Category
                  </div>
                </div>
                <div
                  style={{
                    color: "#393939",
                    fontFamily: "Geomanist,sans-serif",
                    fontSize: "1.5rem",
                    fontStyle: "normal",
                    fontWeight: 400,
                    lineHeight: "normal",
                  }}
                >
                  {a.title}
                </div>
                <div
                  style={{
                    color: "#393939",
                    fontFamily: "Geomanist,sans-serif",
                    fontSize: "1.25rem",
                    fontStyle: "normal",
                    fontWeight: 400,
                    lineHeight: "normal",
                  }}
                >
                  Product Name
                </div>
                <div
                  style={{
                    color: "#8f8f98",
                    fontFamily: "Geomanist,sans-serif",
                    fontSize: "1.25rem",
                    fontStyle: "normal",
                    fontWeight: 400,
                    lineHeight: "normal",
                    marginTop: "-30px",
                  }}
                >
                  {a.ino}
                </div>
                <div className="d-flex align-items-center">
                  <img
                    src={group2}
                    style={{ width: "0.83rem", height: "1rem" }}
                  ></img>
                  <div
                    className="ms-3"
                    style={{
                      color: "#8F8F98",
                      fontFamily: "Geomanist,sans-serif",
                      fontSize: "1.125rem",
                      fontStyle: "normal",
                      fontWeight: 400,
                      lineHeight: "normal",
                    }}
                  >
                    {a.location}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Verifiedasset;
