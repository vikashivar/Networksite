import React, { useContext, useState } from "react";
import { homeapi } from "../../App";
import fin from "../homephoto/fin.png";
import { useParams } from "react-router-dom";

function Homesection3() {
  const [inc, setInc] = useState(0);
  const [dec, setDec] = useState(1);

  const section3 = useContext(homeapi);
  const byCard = section3.home.data.attributes.ServicedByCard;

  const homesection3 = [
    {
      serviceName: byCard[0].serviceName,
      serviceDetails: byCard[0].serviceDetails,
    },
    {
      serviceName: byCard[1].serviceName,
      serviceDetails: byCard[1].serviceDetails,
    },
    {
      serviceName: byCard[2].serviceName,
      serviceDetails: byCard[2].serviceDetails,
    },
    {
      serviceName: byCard[3].serviceName,
      serviceDetails: byCard[3].serviceDetails,
    },
  ];

  const array = homesection3.slice(inc, dec);

  function plush() {
    if (inc === 3) {
      setInc(3);
      setDec(4);
    } else {
      setInc(inc + 1);
      setDec(dec + 1);
    }
  }
  console.log("q:", array);
  console.log(inc);
  console.log(dec);

  function minus() {
    if (inc === 0) {
      setInc(0);
      setDec(1);
    } else {
      setInc(inc - 1);
      setDec(dec - 1);
    }
  }

  return (
    <div style={{ marginTop: "6rem" }}>
      <div
        className="mx-5"
        style={{
          background:
            "linear-gradient(282deg, rgba(193, 241, 238, 0.50) 0%, #F1F4FF 72.92%, rgba(253, 206, 165, 0.00) 100%)",
          borderRadius: "1.3rem",
        }}
      >
        <div className="theVerified">
          The{" "}
          <span style={{ color: "rgba(78, 89, 231, 1)", fontWeight: 700 }}>
            Verified Network
          </span>{" "}
          is serviced by
        </div>
        <div className="d-flex flex-lg-row flex-column  justify-content-lg-around justify-content-center align-items-center mb-5 mt-lg-0 mt-5 text-lg-start text-center">
          <div>
            <img
              src={fin}
              alt=""
              style={{
                maxWidth: "22rem",
                maxHeight: "5.5rem",
                width: "100%",
                height: "100%",
              }}
            />
          </div>
          <div className="fini pb-5 ms-lg-5">
            <div className="finimmo ">{array[0].serviceName}</div>
            <div className="finimmoSupports mt-4 pt-2 mx-md-0 mx-3">
              {array[0].serviceDetails}
            </div>
            <div className="mt-4 pt-3 d-flex justify-content-lg-start justify-content-center">
              <div
                onClick={minus}
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
                onClick={plush}
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
      </div>
    </div>
  );
}

export default Homesection3;
