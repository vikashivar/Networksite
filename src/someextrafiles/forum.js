import React, { useState } from "react";
import Aboutheader1 from "../aboutfile/aboutheader1";
import Aboutheader2 from "../aboutfile/aboutheader2";

import gorup1 from "./group1.png";
import gorup2 from "./group2.png";
import gorup3 from "./group3.png";
import gorup4 from "./group4.png";
import Features from "../individualsfile/features";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

import Comheader1 from "../aboutfile/comheader1";

function Forum() {
  const [index, setIndex] = useState();
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
          comheader1={<Comheader1></Comheader1>}
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
        <div className="d-flex justify-content-xl-between justify-content-evenly m-5 flex-wrap">
          {selectcategry.map((a, b) => {
            return (
              <div
                className="d-flex flex-column align-items-center justify-content-evenly me-3 mb-5"
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
        <div className="allforum mx-5 my-5">
          All<span style={{ color: "#4e59e7", fontWeight: 700 }}> Forum</span>{" "}
          Activity
        </div>
        <div>
          <Tabs
            onSelect={(index) => {
              setIndex(index);
            }}
            disableUpDownKeys={true}
            className="mx-5"
            focusTabOnClick={false}
          >
            <TabList
              className="tabsrecent d-flex justify-content-between ps-5 pe-3 align-items-center py-3"
              style={{
                listStyle: "none",
                // height: "5.625rem",
                borderRadius: "1.25rem",
                boxShadow: "0px 0px 50px 0px rgba(78,89,231,0.10)",
                color: "#393939",
                fontFamily: "Geomanist,sans-serif",

                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "normal",
              }}
            >
              <Tab
                style={{ cursor: "pointer" }}
                className="d-flex justify-content-center align-items-center flex-column"
              >
                <div>Recent Discussions</div>
                <div
                  style={{
                    width: "3.8125rem",
                    height: "0.5rem",
                    background: "#4e59e7",
                    borderRadius: "0.3125rem",
                    display: index == 0 ? "block" : "none",
                    position: "relative",
                    top: "27px",
                  }}
                ></div>
              </Tab>
              <Tab
                style={{ cursor: "pointer" }}
                className="d-flex justify-content-center align-items-center flex-column"
              >
                <div>My Discussions</div>
                <div
                  style={{
                    width: "3.8125rem",
                    height: "0.5rem",
                    background: "#4e59e7",
                    borderRadius: "0.3125rem",
                    display: index == 1 ? "block" : "none",
                    position: "relative",
                    top: "27px",
                  }}
                ></div>
              </Tab>
              <Tab
                style={{ cursor: "pointer" }}
                className="d-flex justify-content-center align-items-center flex-column"
              >
                <div>Solved</div>
                <div
                  style={{
                    width: "3.8125rem",
                    height: "0.5rem",
                    background: "#4e59e7",
                    borderRadius: "0.3125rem",
                    display: index == 2 ? "block" : "none",
                    position: "relative",
                    top: "27px",
                  }}
                ></div>
              </Tab>
              <Tab
                style={{ cursor: "pointer" }}
                className="d-flex justify-content-center align-items-center flex-column"
              >
                <div>Unanswered</div>
                <div
                  style={{
                    width: "3.8125rem",
                    height: "0.5rem",
                    background: "#4e59e7",
                    borderRadius: "0.3125rem",
                    display: index == 3 ? "block" : "none",
                    position: "relative",
                    top: "27px",
                  }}
                ></div>
              </Tab>
              <Tab
                className="tabqueation d-flex justify-content-center align-items-center "
                style={{
                  color: "#fff",
                  background: "#4e59e7",
                  borderRadius: "1rem",

                  cursor: "pointer",
                }}
              >
                Ask Question
              </Tab>
            </TabList>

            <TabPanel className="">
              <h2>Any content 1</h2>
            </TabPanel>
            <TabPanel>
              <h2>Any content 2</h2>
            </TabPanel>
            <TabPanel>
              <h2>Any content 3</h2>
            </TabPanel>
            <TabPanel>
              <h2>Any content 4</h2>
            </TabPanel>
            <TabPanel>
              <h2>Any content 5</h2>
            </TabPanel>
          </Tabs>
        </div>
      </div>
      {/* ================================================================= */}
      <div className="m-5">
        <div
          className="px-4 pt-4 pb-3"
          style={{
            borderRadius: "1.25rem",
            border: "1px solid #dce2ff",
            boxShadow: "0px 0px 50px 0px rgba(78,89,231,0.10)",
          }}
        >
          <div
            className="p-1 px-2"
            style={{
              color: "#393939",
              fontFamily: "Geomanist,sans-serif",
              fontSize: "1.125rem",
              fontStyle: "normal",
              fontWeight: 400,
              lineFeight: "2rem",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,amet,
            consectetur adipiscing elit, Ut elit tellus, Iuctus nec ullamcrper
            mattis,pulvinar dapibus leo, Interger suscipit jso vel iaculis
            scelerisque.
          </div>
          <div className="d-flex justify-content-between align-items-lg-center flex-wrap px-2 py-2 mt-3 flex-md-row flex-column">
            <div className="d-flex align-items-center ">
              <div
                style={{
                  width: "4rem",
                  height: "4rem",
                  background: "red",
                  borderRadius: "30px",
                }}
              ></div>
              <div
                className="ms-4 "
                style={{
                  color: "#4E59E7",
                  fontFamily: "Geomanist,sans-serif",
                  fontSize: "1.125rem",
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "normal",
                }}
              >
                Asked by Rahul
              </div>
            </div>
            <div className="d-flex align-items-center  mt-md-0 mt-4  minutes">
              <div
                style={{
                  color: "#8f8f98",
                  fontFamily: "Geomanist,sans-serif",
                  fontSize: "1.125rem",
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "normal",
                }}
              >
                2 minutes ago
              </div>
              <div className="d-flex align-items-center ps-4">
                <div
                  style={{
                    width: "0.5rem",
                    height: "0.5rem",
                    background: "#505be7",
                    borderRadius: "4px",
                  }}
                ></div>
                <div
                  className="ps-3"
                  style={{
                    color: "#8f8f98",
                    fontFamily: "Geomanist,sans-serif",
                    fontSize: "1.125rem",
                    fontStyle: "normal",
                    fontWeight: 400,
                    lineHeight: "normal",
                  }}
                >
                  4 replies
                </div>
              </div>
              <div className="d-flex align-items-center ps-3">
                <div
                  style={{
                    width: "0.5rem",
                    height: "0.5rem",
                    background: "#505be7",
                    borderRadius: "4px",
                  }}
                ></div>
                <div
                  className="ps-3"
                  style={{
                    color: "#8f8f98",
                    fontFamily: "Geomanist,sans-serif",
                    fontSize: "1.125rem",
                    fontStyle: "normal",
                    fontWeight: 400,
                    lineHeight: "normal",
                  }}
                >
                  2 views
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Forum;
