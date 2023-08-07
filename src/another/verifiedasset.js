import React, { useEffect, useState } from "react";
import Aboutheader1 from "../aboutfile/aboutheader1";
import Comheader1 from "../aboutfile/comheader1";
import group from "./Group529.png";
import group1 from "./Group502.png";
import group2 from "./Group530.png";
import group3 from "./Group532.png";
import Footer from "../home/homefile/footer";
import { Link } from "react-router-dom";
import Select from "react-dropdown-select";

function Verifiedasset() {
  const [assethome, setAssethome] = useState();
  const [assetpro, setAssetpro] = useState();
  const [api3, setApi3] = useState();
  const [api4, setApi4] = useState();
  const [api5, setApi5] = useState();

  useEffect(() => {
    async function api1() {
      const re = await fetch(
        "https://cms.verified.network/api/asset-page?populate=*"
      );
      const data = await re.json();
      setAssethome(data);
    }
    api1();

    async function api2() {
      const re = await fetch(
        "https://cms.verified.network/api/assets?populate=*"
      );
      const data = await re.json();
      setAssetpro(data);
    }
    api2();
    async function api5() {
      const re = await fetch(
        "https://cms.verified.network/api/countries?populate=*"
      );
      const data = await re.json();
      setApi5(data);
    }
    api5();
  }, []);
  let object;

  if (api5?.data) {
    object = [];
    for (let a of api5.data) {
      object.push({ name: a.attributes.name });
    }
    console.log(object);
  }

  return (
    api5 &&
    object && (
      <Select
        options={object}
        labelField={"name"}
        valueField={"name"}
        onChange={(values) => this.setValues(values)}
        placeholder="All Country"
      />
    )
  );

  return (
    assethome &&
    assetpro &&
    api5 && (
      <div style={{}}>
        <Aboutheader1
          title={assethome?.data?.attributes?.main_heading}
          aboutbackground="linear-gradient(282deg, rgba(193, 241, 238, 0.30) 0%, rgba(107, 202, 255, 0.50) 61.46%)"
          comheader1={<Comheader1></Comheader1>}
          detail={
            <div
              className="mt-5 pt-2 viewdetails"
              style={{
                color: "#393939",
                textAlign: "center",
                fontFamily: "Geomanist,sans-serif",

                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "1.875rem",
              }}
            >
              {assethome?.data?.attributes?.description}
            </div>
          }
        ></Aboutheader1>
        <div className="d-flex justify-content-lg-between justify-content-center flex-sm-row flex-column flex-wrap align-items-center mx-5 mt-5">
          <div className="position-relative mb-4">
            <input
              placeholder="Search assets"
              className="assetfilter assetsearch me-4 ps-5 serchfontstyle"
              type="search"
            ></input>
            <img
              src={group1}
              style={{
                width: "1.00775rem",
                height: "1rem",
                position: "absolute",
                top: "50%",
                left: "20px",
                transform: "translateY(-50%)",
              }}
              alt=""
            />
          </div>

          <select
            list="browsers1"
            name=""
            id="browsers1"
            className="assetfilter assetlist me-4 px-3 serchfontstyle mb-4"
            style={{
              background: `url(${group})`,
              backgroundSize: "0.70006rem 1.16694rem",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "90% center",
            }}
          >
            <option style={{}} className="optionType" value="">
              Internet{" "}
            </option>
            <option value="Firefox">firefox</option>
            <option value="Chrome">chrome</option>
            <option value="Opera">opera</option>
            <option value="Safari">safari</option>
          </select>
          <select
            style={{
              background: `url(${group})`,
              backgroundSize: "0.70006rem 1.16694rem",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "90% center",
            }}
            list="browsers1"
            name=""
            id="browsers1"
            className="assetfilter assetlist me-4 px-3 serchfontstyle mb-4"
          >
            <option value="">Explorer</option>
            <option value="Firefox">firefox</option>
            <option value="Chrome">chrome</option>
            <option value="Opera">opera</option>
            <option value="Safari">safari</option>
          </select>
          <input
            className="searchborder me-4 mb-4"
            type="button"
            value="Search"
            style={{
              color: "#FFF",
              textAlign: "center",
              fontFamily: "Geomanist,sans-serif",
              fontSize: "1.125rem",
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "1.875rem",
              borderRadius: "3.37rem",
              background: "#4e59e7",
              boxShadow: "0px 20px 50px 0px rgba(78,89,231,0.30)",
              height: "3.37rem",
            }}
          ></input>
        </div>

        <div className="mt-5">
          <div className="d-flex justify-content-between mx-5 mt-5 mb-4 pt-4 pb-3">
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
              All{" "}
              <span style={{ fontWeight: "700", color: "#4e59e7" }}>
                Assets
              </span>
            </div>
            <div className="position-relative ">
              {" "}
              <select className="soryby px-3">
                <option>Sort by</option>
              </select>
              <div
                className="position-absolute"
                style={{
                  top: "50%",
                  transform: "translateY(-50%)",
                  left: "80%",
                }}
              >
                <img
                  src={group3}
                  alt=""
                  style={{ width: "0.93rem", height: "0.75rem" }}
                />
              </div>
            </div>
          </div>
          <div
            className="d-flex ms-5 me-4  flex-wrap  mb-5"
            style={{ position: "relative", zIndex: "3" }}
          >
            {" "}
            {assetpro.data.map((a, b) => {
              return (
                <Link
                  to={`/assets/detail?id=${a.id}`}
                  key={b}
                  className="d-flex justify-content-between flex-column me-4 mb-4 "
                  style={{
                    borderRadius: "1rem",
                    border: "1px solid rgba(220, 226, 255, 0.60)",
                    background: "#FFF",
                    boxShadow: "0px 20px 50px 0px rgba(78, 89, 231, 0.10)",
                    height: "21.5rem",
                    width: "21.5rem",
                    padding: "20px",
                  }}
                >
                  <div
                    className="d-flex justify-content-center align-items-center"
                    style={{
                      borderRadius: "0.5rem",
                      background:
                        a.id % 2 == 0
                          ? "rgba(193,241,238,0.50)"
                          : "rgba(220, 226,255,0.60)",
                      width: "8.375rem",
                      height: "2.5rem",
                    }}
                  >
                    <div
                      style={{
                        color: a.id % 2 == 0 ? "#08C0B5" : "#8E5FF5",
                        fontFamily: "Geomanist,sans-serif",
                        fontSize: "1.125rem",
                        fontStyle: "normal",
                        fontWeight: 400,
                        lineHeight: "normal",
                      }}
                    >
                      Category
                    </div>
                  </div>
                  <div
                    style={{
                      color: "#393939",
                      fontFamily: "Geomanist,sans-serif",
                      fontSize: "1.5rem",
                      fontStyle: "normal",
                      fontWeight: 400,
                      lineHeight: "normal",
                    }}
                  >
                    {a.attributes.title}
                  </div>
                  <div
                    style={{
                      color: "#393939",
                      fontFamily: "Geomanist,sans-serif",
                      fontSize: "1.25rem",
                      fontStyle: "normal",
                      fontWeight: 400,
                      lineHeight: "normal",
                    }}
                  >
                    Product Name
                  </div>
                  <div
                    style={{
                      color: "#8f8f98",
                      fontFamily: "Geomanist,sans-serif",
                      fontSize: "1.25rem",
                      fontStyle: "normal",
                      fontWeight: 400,
                      lineHeight: "normal",
                      marginTop: "-30px",
                    }}
                  >
                    {a.attributes.product_name}
                  </div>
                  <div className="d-flex align-items-center">
                    <img
                      src={group2}
                      style={{ width: "0.83rem", height: "1rem" }}
                    ></img>
                    <div
                      className="ms-3"
                      style={{
                        color: "#8F8F98",
                        fontFamily: "Geomanist,sans-serif",
                        fontSize: "1.125rem",
                        fontStyle: "normal",
                        fontWeight: 400,
                        lineHeight: "normal",
                      }}
                    >
                      {a.attributes.country.data.attributes.name}
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
        <Footer></Footer>
      </div>
    )
  );
}

export default Verifiedasset;
