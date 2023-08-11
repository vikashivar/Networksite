import React from "react";
import Aboutheader1 from "../aboutfile/aboutheader1";
import Aboutheader2 from "../aboutfile/aboutheader2";

import gorup1 from "./group1.png";
import gorup2 from "./group2.png";
import gorup3 from "./group3.png";
import gorup4 from "./group4.png";
import Features from "../individualsfile/features";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

function Forum() {
  const selectcategry = [
    {
      img: gorup1,
      width: "2.50rem",
      height: "2.60rem",
      Text: "Individuals",
    },
    {
      img: gorup2,
      width: "2.88rem",
      height: "2.82rem",
      Text: "Businesses",
    },
    {
      img: gorup3,
      width: "2.98rem",
      height: "3.05rem",
      Text: "Service Providers",
    },
    {
      img: gorup4,
      width: "2.24rem",
      height: "2.62rem",
      Text: "Operators",
    },
  ];
  return (
    <div>
      <div>
        <Aboutheader1
          title="Forum"
          comheader1={<comheader1></comheader1>}
          aboutbackground="linear-gradient(282deg, rgba(94, 177, 255, 0.60) 0%, rgba(164, 239, 255, 0.30) 59.76%)"
        ></Aboutheader1>
        <Aboutheader2
          aboutheader2={
            <div>
              <div
                className="mx-5"
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
                Welcome to{" "}
                <span style={{ color: "#4e59e7", fontWeight: 700 }}>
                  Verified Network
                </span>{" "}
                Community
              </div>
              <div
                className="mt-4"
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
                Ask questions and get answered by experts in the forum
              </div>
              <div style={{}} className="mt-5 d-flex justify-content-center">
                {" "}
                <input
                  placeholder="Search forum"
                  type="search"
                  className="forumsearch px-4"
                  style={{
                    width: "40.125rem",
                    height: "3.3125rem",
                  }}
                ></input>
              </div>
            </div>
          }
        ></Aboutheader2>
      </div>
      <div className="">
        <div
          className=""
          style={{
            color: "#393939",
            fontFamily: "Geomanist,sans-serif",
            fontSize: "2.0625rem",
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "normal",
            textAlign: "center",
            marginTop: "5rem",
          }}
        >
          {" "}
          Select from the Category below to view discussions
        </div>
        <div className="d-flex justify-content-between m-5">
          {selectcategry.map((a, b) => {
            return (
              <div
                className="d-flex flex-column align-items-center justify-content-evenly"
                key={b}
                style={{
                  width: "15.5rem",
                  height: "15rem",
                  background: "rgba(8,192,181,0.10)",
                  borderRadius: "20px",
                }}
              >
                <div
                  style={{
                    width: "6.25rem",
                    height: "6.25rem",
                    background: "#0ec2b7",
                    borderRadius: "58px",
                  }}
                  className="d-flex justify-content-center align-items-center mt-3"
                >
                  <img
                    src={a.img}
                    alt=""
                    style={{ width: a.width, height: a.height }}
                  />
                </div>
                <div
                  style={{
                    color: "#393939",
                    textAlign: "center",
                    fontFamily: "Geomanist,sans-serif",
                    fontSize: "1.5rem",
                    fontStyle: "normal",
                    fontWeight: 400,
                    lineHeight: "normal",
                  }}
                >
                  {a.Text}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <Tabs>
          <TabList>
            <Tab>Title 1</Tab>
            <Tab>Title 2</Tab>
          </TabList>

          <TabPanel>
            <h2>Any content 1</h2>
          </TabPanel>
          <TabPanel>
            <h2>Any content 2</h2>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
}

export default Forum;
