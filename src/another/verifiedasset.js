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
import ReactDropdown from "react-dropdown";
import axios from "axios";
import qs from "qs";
import gorup17 from "./Group 17538.png";
function Verifiedasset() {
  const [assethome, setAssethome] = useState();
  const [assetpro, setAssetpro] = useState();
  const [api3, setApi3] = useState();
  const [api4, setApi4] = useState();
  const [api5, setApi5] = useState();
  const [serchapi, setSerchapi] = useState("");

  const [data, setData] = useState();

  const [optionvalue, setoption] = useState();
  const [optionvalue1, setoption1] = useState();

  const [loading, setLoading] = useState(false);
  const [assetType, setAssetType] = useState({});
  const [country, setCountry] = useState({});
  const [sortOrder, setOrder] = useState("desc");
  const [searchText, setSearchText] = useState("");
  const [mounted, setMounted] = useState(false);
  const [assetsList, setAssetsList] = useState([]);
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      setLoading(true);
      setTimeout(() => {
        getAssets();
      }, 1000);
    }
  }, [sortOrder]);

  const getAssets = (page = 0) => {
    setLoading(true);

    const filters = {
      sort: [`publishedAt:${sortOrder}`],
      filters: {},
      populate: "*",
    };

    if (searchText) {
      filters.filters.title = {
        $contains: searchText,
      };
    }

    if (country.value) {
      filters.filters.country = {
        id: {
          $eq: country.value,
        },
      };
    }

    if (assetType.value) {
      filters.filters.asset_type = {
        id: {
          $eq: assetType.value,
        },
      };
    }

    const query = qs.stringify(filters, {
      encodeValuesOnly: true, // prettify URL
    });

    axios
      .get(
        `https://cms.verified.network/api/assets?${query}&pagination[page]=${page}`
      )
      .then((res) => {
        setData(res.data?.data || []);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleOrderChange = (event) => {
    const order = event.target.value;
    setOrder(order);
  };

  const handleSearch = () => {
    setLoading(true);
    setTimeout(() => {
      getAssets();
    }, 1000);
  };

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
      setData(data.data);
    }
    api2();
    async function api3() {
      const re = await fetch(
        "https://cms.verified.network/api/asset-types?populate=*"
      );
      const data = await re.json();

      let object1;
      if (data) {
        object1 = [];
        for (let a of data.data) {
          object1.push({ value: a.id, label: a.attributes.name });
        }
        setAssetsList(object1);
      }
    }
    api3();
    async function api5() {
      const re = await fetch(
        "https://cms.verified.network/api/countries?populate=*"
      );
      const data = (await re.json()) || [];
      if (data) {
        let object = [];
        for (let a of data.data) {
          object.push({ value: a.id, label: a.attributes.name });
        }

        setCountries(object);
      }
    }
    api5();
  }, []);

  return (
    data &&
    assethome && (
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
        <div style={{ position: "absolute", width: "100%" }}>
          <div
            style={{ zIndex: 1000, position: "relative" }}
            className="d-flex justify-content-lg-between justify-content-center flex-sm-row flex-column flex-wrap  mx-5 mt-5"
          >
            <div className="position-relative mb-4">
              <input
                value={serchapi}
                onChange={(e) => {
                  setSerchapi(e.target.value);
                  setSearchText(e.target.value);
                }}
                placeholder="Search assets"
                className="assetfilter assetsearch  ps-5 serchfontstyle"
                type="search"
                style={{
                  background: `url(${group1}) no-repeat 5% center`,
                  backgroundSize: "16px",
                }}
              ></input>
            </div>

            <ReactDropdown
              options={assetsList}
              // value={assetType}
              onChange={(value) => {
                setAssetType(value);
              }}
              placeholder="All Assets"
            />
            {/* ------------------------------------------------------ */}
            <ReactDropdown
              options={countries}
              onChange={(value) => {
                setCountry(value);
              }}
              // value={country}
              placeholder="All Countries"
              keepOpen
            />
            {/* ---------------------------------------------------------- */}
            <input
              onClick={handleSearch}
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
        </div>
        {data.length ? (
          <div
            className=""
            style={{ position: "relative", zIndex: 100, marginTop: "10rem" }}
          >
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
              {data?.map((a, b) => {
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
        ) : (
          <div className="mx-5" style={{ marginTop: "9rem" }}>
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
              No assets found
            </div>
            <div
              className="d-flex justify-content-center "
              style={{ marginTop: "4rem" }}
            >
              <img
                src={gorup17}
                style={{ maxHeight: "22.06rem", maxWidth: "13.31rem" }}
                alt=""
              />
            </div>
          </div>
        )}
        <Footer></Footer>
      </div>
    )
  );
}

export default Verifiedasset;
