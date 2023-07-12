import React, { useContext } from "react";
import goodphone from "../homephoto/goodphone.png";
import right from "../homephoto/right.png";
import { homeapi } from "../../App";

function Homesection5() {
  const section5 = useContext(homeapi);
  const homesection5 = section5.home.data.attributes.AboutWork;
  const hoo = homesection5.title.split("///");
  console.log(hoo);

  return (
    <div className="" style={{ marginTop: "6rem" }}>
      <div className="d-flex  flex-lg-row  flex-column justify-content-lg-between justify-content-center align-items-center mx-5">
        <div>
          <img
            src={goodphone}
            style={{ maxWidth: "38rem", width: "100%", height: "auto" }}
            alt=""
          />
        </div>
        <div className="mt-5">
          <div
            className="finance mt-2 text-lg-start text-center"
            style={{ fontWeight: 700, color: "#4e59e7" }}
          >
            {hoo[0]}
            <div style={{ fontWeight: 400, color: "rgba(57, 57, 57, 1)" }}>
              {hoo[1]}
            </div>
          </div>

          <div className="d-flex  flex-column work123 mt-5">
            <div className="work d-flex mt-3">
              <div>
                <img
                  src={right}
                  style={{ width: "1.6875rem", height: "1.6875" }}
                  alt=""
                />
              </div>
              <div className="ms-4">{homesection5.work1}</div>
            </div>
            <div className="work d-flex mt-lg-3 mt-4">
              <div>
                <img
                  src={right}
                  style={{ width: "1.6875rem", height: "1.6875" }}
                  alt=""
                />
              </div>
              <div className="ms-4">{homesection5.work2}</div>
            </div>
            <div className="work d-flex mt-lg-3 mt-4">
              <div>
                <img
                  src={right}
                  style={{ width: "1.6875rem", height: "1.6875" }}
                  alt=""
                />
              </div>
              <div className="ms-4">{homesection5.work3}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homesection5;
