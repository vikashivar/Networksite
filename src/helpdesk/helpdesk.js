import React from "react";
import Aboutheader1 from "../aboutfile/aboutheader1";
import Comheader1 from "../aboutfile/comheader1";
import group from "./Group502.png";
import group1 from "./Group.png";
import group2 from "./Group (1).png";
import group3 from "./Group (2).png";
import group4 from "./Group 70.png";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

function Helpdesk() {
  const obj = [
    {
      tittle: "Category 1",
      img: group1,
      width: "2.25rem",
      height: "2rem",
    },
    {
      tittle: "Category 2",
      img: group2,
      width: "1.93rem",
      height: "2.25rem",
    },
    {
      tittle: "Category 3",
      img: group3,
      width: "2.37rem",
      height: "2.3rem",
    },
    {
      tittle: "Category 4",
      img: group4,
      width: "2.3rem",
      height: "2rem",
    },
  ];
  return (
    <div>
      <Aboutheader1
        comheader1={<Comheader1></Comheader1>}
        aboutbackground="linear-gradient(282deg, rgba(0, 221, 208, 0.30) 0%, rgba(193, 241, 238, 0.10) 82.61%)"
        detail={
          <div className="d-flex flex-column align-items-center mt-5 pb-3 ">
            <div
              className="mt-4 wehelp"
              style={{
                color: "#393939",
                fontFamily: "Geomanist,sans-serif",

                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "normal",
              }}
            >
              How can <span style={{ fontWeight: "700" }}>we help?</span>
            </div>
            <div className="position-relative mt-4">
              <input
                placeholder="Search anything, we have answers"
                className="helpsearch px-4"
                type="search"
                style={{
                  height: "3.31rem",
                  color: "#8f8f98",
                  fontFamily: "Geomanist,sans-serif",
                  fontWeight: 400,
                  fontSize: "1.25rem",
                }}
              />
              <img
                src={group}
                style={{
                  width: "1.007rem",
                  height: "1rem",
                  position: "absolute",
                  top: "50%",
                  transform: "translateY(-50%)",
                  right: "4%",
                }}
                alt=""
              />
            </div>
          </div>
        }
      ></Aboutheader1>
      <div className="d-flex flex-column  justify-content-between mt-5">
        <div
          className="text-center mt-5"
          style={{
            color: "#393939",
            fontFamily: "Geomanist,sans-serif",
            fontSize: "2.5rem",
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "normal",
          }}
        >
          Categories
        </div>
        <div className="d-flex ms-5 me-4 justify-content-lg-between justify-content-center flex-lg-nowrap flex-wrap mt-5">
          {obj.map((a, b) => {
            return (
              <div
                key={b}
                className="d-flex flex-column justify-content-center align-items-center me-4 mb-4"
                style={{
                  width: "16rem",
                  height: "15rem",
                  background: "rgba(8, 192, 181, 0.10)",
                  borderRadius: "20px",
                }}
              >
                <div
                  className="d-flex justify-content-center align-items-center"
                  style={{
                    width: "6.25rem",
                    height: "6.25rem",
                    background: "#0ec2b7",
                    borderRadius: "52px",
                  }}
                >
                  <img
                    src={a.img}
                    alt=""
                    style={{ width: a.width, height: a.height }}
                  />
                </div>
                <div
                  className="mt-4 pt-3"
                  style={{
                    color: "#393939",
                    fontFamily: "Geomanist,sans-serif",
                    fontSize: "1.5rem",
                    fontStyle: "normal",
                    fontWeight: 400,
                    lineHeight: "normal",
                  }}
                >
                  {a.tittle}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <div style={{ background: "rgba(80,91,232,0.03)" }} className="px-5">
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
            Popular{" "}
            <span style={{ color: "#4e59e7", fontWeight: "700" }}>
              Articles
            </span>
          </div>
          {/* --------------------------------------------------------------- */}
          <div>
            <Accordion allowZeroExpanded={true} className="">
              <AccordionItem className="accordclass d-flex flex-column justify-content-center align-items-center">
                <AccordionItemHeading>
                  <AccordionItemButton className="">
                    <div> What harsh truths do you prefer to ignore?</div>
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    Exercitation in fugiat est ut ad ea cupidatat ut in
                    cupidatat occaecat ut occaecat consequat est minim minim
                    esse tempor laborum consequat esse adipisicing eu
                    reprehenderit enim.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Helpdesk;
