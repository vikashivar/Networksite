import React from "react";
import Aboutheader1 from "../aboutfile/aboutheader1";
import Comheader1 from "../aboutfile/comheader1";
import Aboutheader2 from "../aboutfile/aboutheader2";
import Footer from "../home/homefile/footer";

function Assetdetail() {
  return (
    <div>
      <Aboutheader1
        comheader1={<Comheader1></Comheader1>}
        aboutbackground="linear-gradient(282deg, rgba(193, 241, 238, 0.30) 0%, rgba(107, 202, 255, 0.50) 61.46%)"
      ></Aboutheader1>
      <Aboutheader2
        aboutheader2={
          <div className="d-flex flex-column  justify-content-between  my-3">
            <div
              className="align-self-center assetstitle text-center"
              style={{
                color: "#393939",
                fontFamily: "Geomanist,sans-serif",

                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "normal",
              }}
            >
              Swara Baby Podicts Privates Ltd
            </div>
            <div className="d-flex justify-content-around flex-md-row flex-column text-center mx-5 mt-4 pt-2 ">
              <div
                className="mb-2"
                style={{
                  color: "#08C0B5",
                  fontFamily: "Geomanist,sans-serif",
                  fontSize: "1.125rem",
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "1.875rem",
                }}
              >
                Asset Type: <span style={{ color: "#393939" }}>Shares</span>
              </div>
              <div
                className="mb-2"
                style={{
                  color: "#08C0B5",
                  fontFamily: "Geomanist,sans-serif",
                  fontSize: "1.125rem",
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "1.875rem",
                }}
              >
                Industry:{" "}
                <span style={{ color: "#393939" }}>Industry Name</span>
              </div>
              <div
                className="mb-2"
                style={{
                  color: "#08C0B5",
                  fontFamily: "Geomanist,sans-serif",
                  fontSize: "1.125rem",
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "1.875rem",
                }}
              >
                Country: <span style={{ color: "#393939" }}>India</span>
              </div>
            </div>
          </div>
        }
      ></Aboutheader2>
      <div className="m-5 pt-5" style={{ position: "relative", zIndex: "3" }}>
        <div
          className="description"
          style={{
            color: "#393939",
            fontFamily: "Geomanist,sans-serif",

            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "normal",
          }}
        >
          Description
        </div>
        <div
          className=" mt-4 pt-1 mb-5"
          style={{
            color: "#8F8F98",
            fontFamily: "Geomanist,sans-serif",
            fontSize: "1.125rem",
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "2rem",
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Integer
          suscipit justo vel iaculis scelerisque. etiam imperdiet ornare ex sit
          amet blandit. Sed libero metus, lobortis et orci ultrices, feugiat
          euismod massa. Fusce eleifend bibendum faucibus. Donec fringilla
          ligula id diam fringilla
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Assetdetail;
