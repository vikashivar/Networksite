import React, { useState } from "react";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Featurescom from "./featurescom";

function Indifeatures(props) {
  const [zzz, setZZZ] = useState();

  console.log();
  return (
    <div style={{ marginTop: "6rem" }}>
      <div className="mx-5">
        <Tabs
          className={["mx-4"]}
          focusTabOnClick={false}
          onSelect={(index) => {
            setZZZ(index);
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
                <Tab key={b} style={{ cursor: "pointer" }}>
                  <div className="d-flex flex-column align-items-center">
                    <img
                      src={a.img}
                      alt=""
                      style={{ width: a.width, height: a.height }}
                    />
                    <div className="mt-3 mb-2">{a.name}</div>
                    <div
                      style={{
                        display: zzz === b ? "block" : "none",
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
            <Featurescom datalist={props.datalist1}></Featurescom>
          </TabPanel>
          <TabPanel>
            <Featurescom datalist={props.datalist2}></Featurescom>
          </TabPanel>
          <TabPanel>
            <Featurescom datalist={props.datalist3}></Featurescom>
          </TabPanel>
          <TabPanel>
            <Featurescom datalist={props.datalist4}></Featurescom>
          </TabPanel>
          <TabPanel>
            <Featurescom datalist={props.datalist5}></Featurescom>
          </TabPanel>
        </Tabs>
      </div>

      {/* ----------------------------------------------- */}
    </div>
  );
}

export default Indifeatures;
