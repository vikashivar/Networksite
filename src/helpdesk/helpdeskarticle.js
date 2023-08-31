import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Comheader1 from "../aboutfile/comheader1";
import Aboutheader1 from "../aboutfile/aboutheader1";
import group from "./Group502.png";
import group1 from "./Слой 3.png";
import Footer from "../home/homefile/footer";

function Helpdeskarticle() {
  const location = useLocation().search.split("=")[1];
  const [articledata, setArticle] = useState();

  useEffect(() => {
    async function api() {
      const re = await fetch(
        `https://cms.verified.network/api/articles/${location}?populate=*`
      );
      const data = await re.json();
      setArticle(data);
    }
    api();
  }, []);

  console.log(articledata?.data.attributes.content.split("\n").slice(2));
  return (
    articledata && (
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
                  fontWeight: 700,
                  lineHeight: "normal",
                }}
              >
                Articles
              </div>
              <div className="position-relative mt-5">
                <input
                  // value={searchlist}
                  onChange={(e) => {
                    //   setSearchlist(e.target.value);
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
              {/* <div className="mt-2">
                <div
                  className="helpsearch1 "
                  style={{
                    background: "#fff",
                    borderRadius: "1rem",
                    boxShadow: "0px 20px 50px 0px rgba(8,192,181,0.20)",
                  }}
                >
                  {searchlist &&
                    helpdata.map((a, b) => {
                      return (
                        <div
                          className="d-flex align-items-center p-4"
                          key={b}
                          onClick={(e) => {
                            setSearchlist(e.target.innerText);
                          }}
                          style={{ cursor: "pointer" }}
                        >
                          <img
                            src={group5}
                            style={{ width: "0.88rem", height: "0.875rem" }}
                          />
                          <div
                            className="ms-4"
                            style={{
                              color: "#8F8F98",
                              textAlign: "center",
                              fontFamily: "Geomanist,sans-serif",
                              fontSize: "1.125rem",
                              fontStyle: "normal",
                              fontWeight: 400,
                              lineHeight: "normal",
                            }}
                          >
                            {a?.attributes?.title}
                          </div>
                        </div>
                      );
                    })}
                </div>
              </div> */}
            </div>
          }
        ></Aboutheader1>
        <div className="mx-5" style={{ marginTop: "7rem" }}>
          {" "}
          <div
            className="d-flex mb-3 pb-3 forindi flex-md-nowrap flex-wrap "
            style={{
              color: "#393939",
              fontFamily: "Geomanist,sans-serif",

              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "normal",
            }}
          >
            <div className="d-flex align-items-center me-3 mb-3">
              <div className="me-3">Forum</div>
              <img
                src={group1}
                style={{
                  width: "10px",
                  height: "16px",
                  transform: "",
                }}
              />
            </div>
            <div className="d-flex align-items-center me-3 mb-3">
              <div className="me-3">Category Name</div>
              <img
                src={group1}
                style={{
                  width: "10px",
                  height: "16px",
                  transform: "",
                }}
              />
            </div>
            <div className="d-flex align-items-center me-3">
              <div className="">
                Verified Networks for{" "}
                {articledata.data.attributes.category.data.attributes.name}
              </div>
            </div>
          </div>
          <div className=" d-flex flex-lg-row flex-column align-items-center mt-3">
            {" "}
            <div
              className="me-lg-5  mb-5
        
            "
              style={{ maxWidth: "42.31rem" }}
            >
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
                Verified Networks for{" "}
                <span style={{ color: "#4e59e7", fontWeight: "700" }}>
                  {articledata.data.attributes.category.data.attributes.name}
                </span>
              </div>
              <div
                style={{
                  color: "#8F8F98",
                  fontFamily: "Geomanist,sans-serif",
                  fontSize: "1.125rem",
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "1.875rem",
                }}
              >
                {articledata?.data.attributes.content
                  .split("\n")
                  .slice(2)
                  .map((a, b) => {
                    return (
                      <div key={b} className="mt-5">
                        {a}
                      </div>
                    );
                  })}
              </div>
            </div>
            {/* ----------------------------------------------- */}
            <div
              style={{
                background: "#e0f8f7",
                borderRadius: "1rem",
                maxWidth: "363px",
                width: "100%",
              }}
              className="align-self-lg-start"
            >
              <div
                className="p-4"
                style={{
                  color: "#08C0B5",

                  fontFamily: "Geomanist,sans-serif",
                  fontSize: "1.5rem",
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "normal",
                }}
              >
                Related Articles
              </div>
              <div
                className=""
                style={{
                  color: "#8f8f98",

                  fontFamily: "Geomanist,sans-serif",
                  fontSize: "1.25rem",
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "normal",
                }}
              >
                <div
                  className="py-3"
                  style={{
                    borderTop: "2px solid #c4edeb",
                  }}
                >
                  <span className=" ps-4">Lorem Ipsum es simplemente.</span>
                </div>
                <div
                  className="py-3"
                  style={{
                    borderTop: "2px solid #c4edeb",
                  }}
                >
                  <span className=" ps-4">Lorem Ipsum es simplemente.</span>
                </div>
                <div
                  className="py-3"
                  style={{
                    borderTop: "2px solid #c4edeb",
                  }}
                >
                  <span className=" ps-4">Lorem Ipsum es simplemente.</span>
                </div>
                <div
                  className="py-3"
                  style={{
                    borderTop: "2px solid #c4edeb",
                  }}
                >
                  <span className=" ps-4">Lorem Ipsum es simplemente.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ marginTop: "6rem" }}>
          <Footer></Footer>
        </div>
      </div>
    )
  );
}

export default Helpdeskarticle;
