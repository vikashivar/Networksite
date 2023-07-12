import React, { useContext } from "react";
import pay from "../homephoto/pay.png";
import finn from "../homephoto/finn.png";
import inv from "../homephoto/inv.png";
import { homeapi } from "../../App";

function Homesection4() {
  const section4 = useContext(homeapi);
  const card = section4.home.data.attributes.FeatureCard;

  return (
    <div>
      <div
        className="d-flex  flex-lg-row flex-column  mx-5"
        style={{ marginTop: "6rem" }}
      >
        <div className="text-lg-start text-center align-self-center timebreaking mb-lg-0 mb-5">
          <div className="istime">
            It is Time We Level the <br></br>
            <span style={{ fontWeight: 700, color: "rgba(78, 89, 231, 1)" }}>
              Playing Field.
            </span>
          </div>
          <div className="breaking mt-5">
            Breaking barriers and offering access, choice and control to
            Verified account holders.
          </div>
        </div>
        {/* ---------------------- */}
        <div className="d-flex align-items-center flex-md-row flex-column ">
          <div
            className="px-4 pb-5 pt-4 ms-lg-5 "
            style={{
              background: "rgba(193, 241, 238, 0.5)",
              borderRadius: "1.25rem",
            }}
          >
            <div
              className="d-flex justify-content-center align-items-center mt-2"
              style={{
                width: "4.375rem",
                height: "4.375rem",
                borderRadius: "40px",
                background: card[0].color,
                boxShadow: "0px 20px 50px rgba(17, 195, 184, 0.50)",
              }}
            >
              <img
                src={pay}
                alt=""
                style={{ width: "2.25rem", height: "2.25rem" }}
              />
            </div>
            <div
              className="payments mt-4 pt-2"
              style={{ color: card[0].color }}
            >
              {card[0].title}
            </div>
            <div className="make mt-4 pt-2 pb-4">{card[0].description}</div>
          </div>
          <div className="d-flex flex-column ms-4 ">
            <div
              className="px-4 pb-5 pt-4 mt-md-0 mt-4"
              style={{
                background: "rgba(216, 198, 255, 0.30)",
                borderRadius: "1.25rem",
              }}
            >
              <div
                className="d-flex justify-content-center align-items-center mt-2"
                style={{
                  width: "4.375rem",
                  height: "4.375rem",
                  borderRadius: "40px",
                  background: card[1].color,
                  boxShadow: "0px 20px 50px rgba(142, 142, 151, 0.50)",
                }}
              >
                <img
                  src={finn}
                  alt=""
                  style={{ width: "2.25rem", height: "2.25rem" }}
                />
              </div>
              <div
                className="payments mt-4 pt-2"
                style={{ color: card[1].color }}
              >
                {card[1].title}
              </div>
              <div className="make mt-4 pt-2 pb-4">{card[1].description}</div>
            </div>

            <div
              className="px-4 pb-5 pt-4 mt-4 "
              style={{
                background: "rgba(220, 226, 255, 0.50)",
                borderRadius: "1.25rem",
              }}
            >
              <div
                className="d-flex justify-content-center align-items-center mt-2"
                style={{
                  width: "4.375rem",
                  height: "4.375rem",
                  borderRadius: "40px",
                  background: card[2].color,
                  boxShadow: "0px 20px 50px rgba(78, 89, 231, 0.50)",
                }}
              >
                <img
                  src={inv}
                  alt=""
                  style={{ width: "2.25rem", height: "2.25rem" }}
                />
              </div>
              <div
                className="payments mt-4 pt-2"
                style={{ color: card[2].color }}
              >
                {card[2].title}
              </div>
              <div className="make mt-4 pt-2 pb-4">{card[2].description}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homesection4;
