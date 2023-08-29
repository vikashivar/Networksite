import React, { useEffect, useState } from "react";
import Aboutheader1 from "../aboutfile/aboutheader1";
import Comheader1 from "../aboutfile/comheader1";
import group from "./Group502.png";
import group1 from "./Group.png";
import group2 from "./Group (1).png";
import group3 from "./Group (2).png";
import group4 from "./Group 70.png";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import pic1 from "./Слой 7.png";
import qs from "qs";
import axios from "axios";
import { array, date } from "yup";
import { Link } from "react-router-dom";
import Footer from "../home/homefile/footer";

function Helpdesk() {
  const [helpdata, sethelpdata] = useState();
  const [loading, setLoading] = useState(false);
  const [searchResults, setSearchResults] = useState({});
  const [searchlist, setSearchlist] = useState("");
  const [page, setPage] = useState(1);
  const [pparray, setpparray] = useState();
  const [paging, setpaging] = useState();
  const [parray, setparray] = useState([]);
  console.log(paging);

  useEffect(() => {
    console.log(page);
    let parray = [];
    if (pparray) {
      let pagearray = pparray.data.meta.pagination.page;
      console.log(pagearray);
      for (let a = 1; a <= pagearray; a++) {
        parray.push(a);
      }
    }
    setparray(parray);
  }, []);

  useEffect(() => {
    fetchSearchResults();
  }, []);

  useEffect(() => {
    fetchSearchResults();
  }, [searchlist, page]);

  const fetchSearchResults = async () => {
    const query = qs.stringify(
      {
        filters: {
          title: {
            $contains: searchlist,
          },
        },
        pagination: {
          page: page,
        },
        populate: "*",
      },
      {
        encodeValuesOnly: true,
      }
    );
    setLoading(true);
    axios
      .get(`https://cms.verified.network/api/articles?${query}`)
      .then((res) => {
        sethelpdata(res.data.data);
        setpparray(res);
        setpaging(res.data.meta.pagination.page);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const obj = [
    {
      tittle: "Category 1",
      img: group1,
      width: "2.25rem",
      height: "2rem",
    },
    {
      tittle: "Category 2",
      img: group2,
      width: "1.93rem",
      height: "2.25rem",
    },
    {
      tittle: "Category 3",
      img: group3,
      width: "2.37rem",
      height: "2.3rem",
    },
    {
      tittle: "Category 4",
      img: group4,
      width: "2.3rem",
      height: "2rem",
    },
  ];

  return (
    helpdata && (
      <div>
        <Aboutheader1
          comheader1={<Comheader1></Comheader1>}
          aboutbackground="linear-gradient(282deg, rgba(0, 221, 208, 0.30) 0%, rgba(193, 241, 238, 0.10) 82.61%)"
          detail={
            <div className="d-flex flex-column align-items-center mt-5 pb-3 ">
              <div
                className="mt-4 wehelp"
                style={{
                  color: "#393939",
                  fontFamily: "Geomanist,sans-serif",

                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "normal",
                }}
              >
                How can <span style={{ fontWeight: "700" }}>we help?</span>
              </div>
              <div className="position-relative mt-4">
                <input
                  onChange={(e) => {
                    setSearchlist(e.target.value);
                  }}
                  placeholder="Search anything, we have answers"
                  className="helpsearch px-4"
                  type="search"
                  style={{
                    height: "3.31rem",
                    color: "#8f8f98",
                    fontFamily: "Geomanist,sans-serif",
                    fontWeight: 400,
                    fontSize: "1.25rem",
                  }}
                />
                <img
                  src={group}
                  style={{
                    width: "1.007rem",
                    height: "1rem",
                    position: "absolute",
                    top: "50%",
                    transform: "translateY(-50%)",
                    right: "4%",
                  }}
                  alt=""
                />
              </div>
            </div>
          }
        ></Aboutheader1>
        <div
          className={` ${
            !searchlist ? "d-flex" : "d-none"
          } flex-column  justify-content-between mt-5`}
        >
          <div
            className="text-center mt-5"
            style={{
              color: "#393939",
              fontFamily: "Geomanist,sans-serif",
              fontSize: "2.5rem",
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "normal",
            }}
          >
            Categories
          </div>
          <div
            className={`d-flex ms-5 me-4 justify-content-lg-between justify-content-center flex-lg-nowrap flex-wrap mt-5`}
          >
            {obj.map((a, b) => {
              return (
                <div
                  key={b}
                  className="d-flex flex-column justify-content-center align-items-center me-4 mb-4"
                  style={{
                    width: "16rem",
                    height: "15rem",
                    background: "rgba(8, 192, 181, 0.10)",
                    borderRadius: "20px",
                  }}
                >
                  <div
                    className="d-flex justify-content-center align-items-center"
                    style={{
                      width: "6.25rem",
                      height: "6.25rem",
                      background: "#0ec2b7",
                      borderRadius: "52px",
                    }}
                  >
                    <img
                      src={a.img}
                      alt=""
                      style={{ width: a.width, height: a.height }}
                    />
                  </div>
                  <div
                    className="mt-4 pt-3"
                    style={{
                      color: "#393939",
                      fontFamily: "Geomanist,sans-serif",
                      fontSize: "1.5rem",
                      fontStyle: "normal",
                      fontWeight: 400,
                      lineHeight: "normal",
                    }}
                  >
                    {a.tittle}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div>
          <div
            style={{
              background: !searchlist ? "rgba(80,91,232,0.03)" : "#fff",
            }}
            className=""
          >
            {!searchlist ? (
              <div
                style={{
                  color: "#393939",
                  fontFamily: "Geomanist,sans-serif",
                  fontSize: "2.5rem",
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "normal",
                  textAlign: "center",
                  padding: "4rem 0rem",
                }}
              >
                Popular{" "}
                <span style={{ color: "#4e59e7", fontWeight: "700" }}>
                  Articles
                </span>
              </div>
            ) : (
              <div
                className="mx-5 mb-5"
                style={{
                  color: "#393939",
                  fontFamily: "Geomanist,sans-serif",
                  fontSize: "2.5rem",
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "normal",
                  marginTop: "9rem",
                }}
              >
                Search
                <span style={{ color: "#4e59e7", fontWeight: "700" }}>
                  {" "}
                  Results
                </span>
              </div>
            )}
            {/* --------------------------------------------------------------- */}
            <div className="ms-5 me-4" style={{ paddingBottom: "7rem" }}>
              <Accordion
                allowZeroExpanded={true}
                className="d-flex justify-content-between flex-wrap "
              >
                {helpdata.map((a, b) => {
                  return (
                    <AccordionItem
                      key={b}
                      className={`accordclass ${
                        !searchlist ? "accordclass1" : "accordclass2"
                      } d-flex flex-column justify-content-start   me-4 align-self-start`}
                      style={{ paddingTop: "25px" }}
                    >
                      <AccordionItemHeading>
                        <AccordionItemButton className="d-flex justify-content-between align-items-center ">
                          <div>{a.attributes.title}</div>
                          <img
                            className=""
                            src={pic1}
                            style={{
                              width: "0,979rem",
                              height: "0.587rem",
                              paddingRight: "30px",
                            }}
                            alt=""
                          />
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel className="mt-2">
                        <p className="mb-0">{a.attributes.content}</p>
                      </AccordionItemPanel>
                    </AccordionItem>
                  );
                })}
              </Accordion>
            </div>
          </div>
          {!searchlist ? (
            <div></div>
          ) : (
            <div
              className="d-flex align-items-center justify-content-center"
              style={{
                fontFamily: "Geomanist,sans-serif",
                fontSize: "1.125rem",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "normal",
                cursor: "pointer",
              }}
            >
              {parray.map((a, b) => {
                return (
                  <div
                    onClick={() => {
                      setPage(b + 1);
                    }}
                    className="d-flex justify-content-center align-items-center rounded-circle me-3"
                    key={b}
                    style={{
                      color: "#fff",
                      width: "2.187rem",
                      height: "2.187rem",
                      background: "#11c3b8",
                    }}
                  >
                    {b + 1}
                  </div>
                );
              })}
              <div
                onClick={() => {
                  setPage(page + 1);
                  // if (page < parray.length) {
                  //   setPage(page + 1);
                  // } else {
                  //   setPage(1);
                  // }
                }}
                className="ms-3"
                style={{ color: "#8f8f98" }}
              >
                Next
              </div>
            </div>
          )}
        </div>
        {/* ===================================================================== */}
        <div
          className="me-5 "
          style={{
            marginLeft: "6rem",
            marginTop: "6rem",
            position: "relative",
            zIndex: "10",
            marginBottom: "6rem",
          }}
        >
          <div
            className="d-flex flex-lg-row flex-column justify-content-center align-items-lg-start align-items-center hosta "
            style={{
              background:
                "linear-gradient(282deg, rgba(193, 241, 238, 0.50) 0%, #F1F4FF 72.92%, rgba(253, 206, 165, 0.00) 100%)",
              borderRadius: "19px",
              // padding: "0rem 4rem",
              // height: "20.62rem",
            }}
          >
            <div
              className=" text-lx-start  me-lg-5"
              style={{
                color: "#000",
                fontFamily: "Geomanist,sans-serif",
                fontSize: "2.5rem",
                fontStyle: "normal",
                fontWeight: 400,
              }}
            >
              <span
                style={{
                  lineHeight: "3.75rem",
                }}
              >
                Couldn't find solution yet ?
              </span>
              <span
                style={{
                  color: "#4e59e7",
                  fontWeight: "700",
                  lineHeight: "3.75rem",
                }}
                className="d-block"
              >
                Verified Network{" "}
                <span
                  style={{
                    color: "#000",
                    fontWeight: "2.5rem",
                    lineHeight: "3.75rem",
                  }}
                >
                  Community
                </span>
              </span>
              <div
                className="mt-5"
                style={{
                  color: "#8f8f98",
                  fontFamily: "Geomanist,sans-serif",
                  fontSize: "1.125rem",
                }}
              >
                Ask questions, and get answers from the experts.
              </div>
            </div>
            <Link
              to="/forum"
              className="d-flex justify-content-center align-items-center mt-lg-0 mt-5 Discussion "
              style={{
                borderRadius: "2.06rem",
                background: "#4e59e7",
                boxShadow: "0px 20px 50px 0px rgba(78,89,231,0.03)",
                color: "#FFF",
                fontFamily: "Geomanist,sans-serif",
                fontSize: "1.5rem",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "1.875rem",
              }}
            >
              Visit our forum
            </Link>
          </div>
        </div>
        <Footer></Footer>
        {/* ------------------------------------------------------------ */}
      </div>
    )
  );
}

export default Helpdesk;
