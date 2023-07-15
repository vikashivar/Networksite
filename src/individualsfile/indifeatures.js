import React from "react";
import { Link } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Featurescom from "./featurescom";

function Indifeatures(props) {
  return (
    <div style={{ marginTop: "6rem" }}>
      <div className="mx-5">
        <Tabs
          className={["mx-4"]}
          focusTabOnClick={false}
          onSelect={(index) => {
            console.log(index);
          }}
        >
          <TabList
            className={[
              "d-flex",
              "flex-row",
              "justify-content-between",
              "reacttabs",
              "px-5",
              "pt-4",
            ]}
          >
            {props.list.map((a, b) => {
              return (
                <Tab key={b}>
                  <div className="d-flex flex-column align-items-center">
                    <img
                      src={a.img}
                      alt=""
                      style={{ width: a.width, height: a.height }}
                    />
                    <div className="mt-3 mb-2">{a.name}</div>
                    <div
                      style={{
                        borderRadius: "0.3125rem",
                        background: "#4e59e7",
                        width: "3.8125rem",
                        height: "0.5rem",
                      }}
                    ></div>
                  </div>
                </Tab>
              );
            })}
          </TabList>

          <TabPanel>
            <Featurescom datalist1={props.datalist}></Featurescom>
          </TabPanel>
          <TabPanel>
            <h2>Any content 1</h2>
          </TabPanel>
          <TabPanel>
            <h2>Any content 3</h2>
          </TabPanel>
          <TabPanel>
            <h2>Any content 4</h2>
          </TabPanel>
          <TabPanel>
            <h2>Any content 4</h2>
          </TabPanel>
        </Tabs>
      </div>

      {/* ----------------------------------------------- */}
    </div>
  );
}

export default Indifeatures;
