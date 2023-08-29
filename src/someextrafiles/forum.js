import React, { useEffect, useState } from "react";
import Aboutheader1 from "../aboutfile/aboutheader1";
import Aboutheader2 from "../aboutfile/aboutheader2";

import gorup1 from "./group1.png";
import gorup2 from "./group2.png";
import gorup3 from "./group3.png";
import gorup4 from "./group4.png";
import Features from "../individualsfile/features";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

import Comheader1 from "../aboutfile/comheader1";
import moment from "moment/moment";
import Forumcat from "./forumcat";
import axios from "axios";
import qs from "qs";
import Footer from "../home/homefile/footer";
import Pp from "../pp";

function Forum() {
  const [forumapi, setForumapi] = useState();
  const [data, setData] = useState();

  const [loading, setLoading] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [searchTerm, setSearchTerm] = useState();
  const [category, setCategory] = useState("");
  const [categorydata, setCategorydata] = useState();
  // const [refetch, setRefetch] = useState();
  const [isAnswered, setAnswered] = useState("");
  const [isSolved, setSolved] = useState("");
  console.log(category);

  const [questions, setQuestions] = useState({});

  // const { addToast } = useToasts();
  const questionsListQuery = (page, filters = {}) =>
    qs.stringify(
      {
        ...filters,
        pagination: {
          page,
          // pageSize: LIST_PAGE_SIZE,
        },
        populate: "*",
      },
      {
        encodeValuesOnly: true,
      }
    );

  useEffect(() => {
    if (searchTerm) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, [searchTerm, category]);

  useEffect(() => {
    onPageChange();
  }, [searchTerm]);

  useEffect(() => {
    setMounted(true);
  }, []);

  const onPageChange = async (page = 0) => {
    setLoading(true);
    const filters = { filters: {} };

    // filters.filters.user.id = {
    //   $eq: user.id,
    // };

    filters.filters.isSolved = {
      $eq: isSolved,
    };

    filters.filters.isAnswered = {
      $eq: isAnswered,
    };

    if (searchTerm) {
      filters.filters.title = {
        $contains: searchTerm,
      };
    }
    if (category) {
      filters.filters.category = {
        id: {
          $eq: category,
        },
      };
    }
    const query = questionsListQuery(page, filters);

    axios
      .get(`https://cms.verified.network/api/questions?${query}`)
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => {})
      .finally(() => {
        setLoading(false);
      });
  };

  console.log(data);
  // -----------------------------------------------------------

  useEffect(() => {
    async function api1() {
      const re = await fetch(
        "https://cms.verified.network/api/forum?populate=*"
      );
      const data = await re.json();
      return data;
    }
    api1().then((e) => {
      setForumapi(e);
    });

    async function api2() {
      const re = await fetch(
        "https://cms.verified.network/api/categories?populate=*"
      );
      const data = await re.json();
      setCategorydata(data);
    }
    api2();
  }, []);

  let formheader;
  if (forumapi) {
    formheader = forumapi.data.attributes.seoData.metaDescription.split(" ");
    var formheader1 = formheader.slice(0, formheader.length - 2);
    var formheader2 = formheader.slice(formheader.length - 2);
  }

  const [index, setIndex] = useState();
  const selectcategry = [
    {
      img: gorup1,
      width: "2.50rem",
      height: "2.60rem",
      Text: categorydata?.data[0]?.attributes?.name,
      id: categorydata?.data[0].id,
    },
    {
      img: gorup2,
      width: "2.88rem",
      height: "2.82rem",
      Text: categorydata?.data[1]?.attributes?.name,
      id: categorydata?.data[1].id,
    },
    {
      img: gorup3,
      width: "2.98rem",
      height: "3.05rem",
      Text: categorydata?.data[2]?.attributes?.name,
      id: categorydata?.data[2].id,
    },
    {
      img: gorup4,
      width: "2.24rem",
      height: "2.62rem",
      Text: categorydata?.data[3]?.attributes?.name,
      id: categorydata?.data[3].id,
    },
  ];
  return (
    forumapi &&
    data && (
      <div>
        <div>
          <Aboutheader1
            title={forumapi.data.attributes.seoData.pageTitle}
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
                  {formheader1[0] + " " + formheader1[1] + " " + formheader1[2]}
                  <span style={{ color: "#4e59e7", fontWeight: 700 }}>
                    {" " + formheader2[0] + " " + formheader2[1]}
                  </span>{" "}
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
                    onChange={(e) => {
                      setTimeout(() => {
                        setSearchTerm(e.target.value);
                      }, 1000);
                    }}
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
                  onClick={(e) => {
                    setCategory(String(a.id));
                  }}
                  className="d-flex flex-column align-items-center justify-content-evenly me-3 mb-5"
                  key={b}
                  style={{
                    width: "15.5rem",
                    height: "15rem",
                    background: "rgba(8,192,181,0.10)",
                    borderRadius: "20px",
                    cursor: "pointer",
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
        <div className="" style={{ position: "relative", zIndex: 1000 }}>
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
                  onClick={() => {
                    // setSolved(true);
                  }}
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
                  onClick={() => {
                    // setAnswered(false);
                  }}
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
                  <Pp></Pp>
                </Tab>
              </TabList>

              <TabPanel className="">
                <Forumcat Arrya={data.data}></Forumcat>
              </TabPanel>
              <TabPanel>
                <Forumcat Arrya={data.data}></Forumcat>
              </TabPanel>
              <TabPanel>
                <Forumcat Arrya={data.data}></Forumcat>
              </TabPanel>
              <TabPanel>
                <Forumcat Arrya={data.data}></Forumcat>
              </TabPanel>
              <TabPanel>
                <Forumcat Arrya={data.data}></Forumcat>
              </TabPanel>
            </Tabs>
          </div>
        </div>
        <Footer></Footer>
        {/* ================================================================= */}
      </div>
    )
  );
}

export default Forum;
