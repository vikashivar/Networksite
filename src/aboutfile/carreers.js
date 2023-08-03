import React, { createContext, useEffect, useState } from "react";
import Comheader1 from "./comheader1";
import Aboutheader1 from "./aboutheader1";
import Aboutheader2 from "./aboutheader2";
import { Link } from "react-router-dom";
import Careersection1 from "./careersection1";
import Carreersection2 from "./carreersection2";
import Footer from "../home/homefile/footer";
const careerdata = createContext();
function Careers() {
  const [careers, setCareers] = useState();
  useEffect(() => {
    async function api() {
      const re = await fetch(
        "https://cms.verified.network/api/career?populate=*"
      );
      const data = await re.json();
      setCareers(data);
    }
    api();
  }, []);

  return (
    careers && (
      <careerdata.Provider value={{ careers }}>
        <div>
          <Aboutheader1
            title="Careers"
            comheader1={<Comheader1></Comheader1>}
            aboutbackground="linear-gradient(
    315deg,
    #c3eaff 4.17%,
    rgba(220, 242, 255, 0.6) 85.57%
  )"
          ></Aboutheader1>
          <Aboutheader2
            aboutheader2={
              <div className="d-flex flex-column align-items-center">
                <div
                  className="px-lg-5 mx-lg-2 disrupt"
                  style={{
                    color: "#4E59E7",
                    textAlign: "center",
                    fontFamily: "Geomanist,sans-serif",

                    fontStyle: "normal",
                    fontWeight: 700,
                  }}
                >
                  {
                    careers.data.attributes.careerHeader.headerContent.split(
                      "///"
                    )[0]
                  }
                  <span style={{ color: "#000", fontWeight: "400" }}>
                    {
                      careers.data.attributes.careerHeader.headerContent.split(
                        "///"
                      )[1]
                    }
                  </span>
                </div>
                <div
                  style={{
                    width: "218px",
                    height: "53px",
                    borderRadius: "53px",
                    background: "#4e59e7",
                  }}
                  className="d-flex justify-content-center align-items-center mt-5 py-sm-0 py-3"
                >
                  <Link
                    style={{
                      color: "#FFF",
                      textAlign: "center",
                      fontFamily: "Geomanist,sans-serif",
                      fontSize: "18px",
                      fontStyle: "normal",
                      fontWeight: 400,
                      lineHeight: "normal",
                    }}
                    to={careers.data.attributes.careerHeader.buttonLink}
                  >
                    {careers.data.attributes.careerHeader.buttonText}
                  </Link>
                </div>
              </div>
            }
          >
            {" "}
          </Aboutheader2>
          <div className="d-flex mx-5 flex-md-row-reverse flex-column-reverse   justify-content-center mt-5 pt-5">
            {" "}
            <Careersection1></Careersection1>
            <Carreersection2></Carreersection2>
          </div>
          <Footer></Footer>
        </div>
      </careerdata.Provider>
    )
  );
}
export { careerdata };

export default Careers;
