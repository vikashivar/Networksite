import React, { useContext, useEffect, useState } from "react";
import Aboutheader1 from "./aboutheader1";
import { Link, useLocation } from "react-router-dom";
import Aboutheader2 from "./aboutheader2";
import Comheader1 from "./comheader1";
import vector from "./Vector.png";
import locatio from "./Location.png";
import full from "./Full.png";
import expe from "./Exp.png";
import posted from "./Posted.png";
import Careerform from "./careerform";
import upload from "./upload.png";
import Footer from "../home/homefile/footer";

function Jobdetails() {
  const [job, setJob] = useState();
  const location = useLocation().search.split("=")[1];
  let jobdata;
  let data1;
  if (job) {
    jobdata = job.data.attributes.jobInfo.find((a, b) => {
      return a.jobId == location;
    });
    data1 = job.data.attributes.ctaCard;
  }

  useEffect(() => {
    async function api() {
      const re = await fetch(
        "https://cms.verified.network/api/career?populate=*"
      );
      const data = await re.json();
      setJob(data);
    }
    api();
  }, []);
  const [fn, setFn] = useState("");
  const [ln, setLn] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [loc, setLoc] = useState("");
  const [file, setFile] = useState("");
  const [error, setError] = useState({});

  const validate = () => {
    let validform = true;
    let errero = {};

    if (!fn.trim()) {
      validform = false;
      errero = { ...errero, firstname: "First name is required" };
    } else if (fn.trim().length < 3) {
      validform = false;
      errero = { ...errero, firstname: "Fill valid first name" };
    }

    if (!ln.trim()) {
      validform = false;
      errero = { ...errero, lastname: "Last name is required" };
    } else if (ln.trim().length < 3) {
      validform = false;
      errero = { ...errero, lastname: "Fill valid last name" };
    }

    if (!email.trim()) {
      validform = false;
      errero = { ...errero, email: "Email is required" };
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      validform = false;
      errero = { ...errero, email: "Invalid email format" };
    }

    if (!number.trim()) {
      validform = false;
      errero = { ...errero, number: "Phone number is required" };
    } else if (number.trim().length < 10) {
      validform = false;
      errero = { ...errero, number: "Invalid phone number" };
    }

    if (!file) {
      validform = false;
      errero = { ...errero, file: "document is required" };
    }

    if (!loc.trim()) {
      validform = false;
      errero = { ...errero, loc: "Message is required" };
    } else if (loc.trim().length < 4) {
      validform = false;
      errero = { ...errero, loc: "invalid message" };
    }
    setError(errero);

    if (validform) {
      setFn("");

      setLn("");

      setEmail("");
      setNumber("");
      setLoc("");
      setFile("");
      console.log("form is submit");
    }
  };

  return (
    job && (
      <div>
        <Aboutheader1
          aboutbackground="linear-gradient(282deg, rgba(0, 221, 208, 0.30) 0%, rgba(255, 255, 255, 0.40) 82.61%)"
          title={job.data.attributes.title}
          comheader1={<Comheader1></Comheader1>}
        ></Aboutheader1>
        <Aboutheader2
          aboutheader2={
            <>
              <div
                className="pt-3"
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
                {jobdata.department}
              </div>
              <div
                className="mt-sm-4 mt-3 pt-2 important"
                style={{
                  color: "#4E59E7",
                  textAlign: "center",
                  fontFamily: "Geomanist,sans-serif",
                  fontStyle: "normal",
                  fontWeight: 700,
                  lineHeight: "2.5rem",
                }}
              >
                {jobdata.jobProfile}
              </div>

              <div className="d-flex justify-content-between align-items-sm-center align-items-start align-self-stretch flex-md-row flex-column mb-2  mt-md-5 mt-4 px-lg-5">
                <div className="d-flex align-items-center ">
                  <img
                    src={locatio}
                    style={{ width: "0.76rem", height: "0.93rem" }}
                  ></img>
                  <div
                    className="ms-2"
                    style={{
                      color: "#8F8F98",
                      fontFamily: "Geomanist,sans-serif",
                      fontSize: "0.875rem",
                      fontStyle: "normal",
                      fontWeight: 400,
                      lineHeight: "1.875rem",
                    }}
                  >
                    {jobdata.location}
                  </div>
                </div>
                <div className="d-flex align-items-center ps-md-3 mt-md-0 mt-2">
                  <img
                    src={full}
                    style={{ width: "0.93rem", height: "0.93rem" }}
                  ></img>
                  <div
                    className="ms-2"
                    style={{
                      color: "#8F8F98",
                      fontFamily: "Geomanist,sans-serif",
                      fontSize: "0.875rem",
                      fontStyle: "normal",
                      fontWeight: 400,
                      lineHeight: "1.875rem",
                    }}
                  >
                    {jobdata.jobType}
                  </div>
                </div>
                <div className="d-flex align-items-center ps-md-3 mt-md-0 mt-2">
                  <img
                    src={expe}
                    style={{ width: "0.84rem", height: "0.94rem" }}
                  ></img>
                  <div
                    className="ms-2"
                    style={{
                      color: "#8F8F98",
                      fontFamily: "Geomanist,sans-serif",
                      fontSize: "0.875rem",
                      fontStyle: "normal",
                      fontWeight: 400,
                      lineHeight: "1.875rem",
                    }}
                  >
                    {jobdata.experience}
                  </div>
                </div>
                <div className="d-flex align-items-center ps-md-3  mt-md-0 mt-2">
                  <img
                    src={posted}
                    style={{ width: "0.93rem", height: "0.93rem" }}
                  ></img>
                  <div
                    className="ms-2"
                    style={{
                      color: "#8F8F98",
                      fontFamily: "Geomanist,sans-serif",
                      fontSize: "0.875rem",
                      fontStyle: "normal",
                      fontWeight: 400,
                      lineHeight: "1.875rem",
                    }}
                  >
                    {jobdata.postedDate}
                  </div>
                </div>
              </div>
            </>
          }
        ></Aboutheader2>

        <div>
          <div className="mx-5 px-md-5 mt-5 pt-5">
            <div
              className="description1"
              style={{
                color: "#393939",
                fontFamily: "Geomanist,sans-serif",

                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "normal",
              }}
            >
              {jobdata.jdTitle}
            </div>
            <div className="mt-4">
              {jobdata.jdContent.split("/").map((a, b) => {
                return (
                  <div key={a} className=" mt-1">
                    <div
                      className=""
                      style={{
                        color: "#8F8F98",
                        fontFamily: "Geomanist,sans-serif",
                        fontSize: "1.125rem",
                        fontStyle: "normal",
                        fontWeight: 400,
                        lineHeight: "1.875rem",
                      }}
                    >
                      {a}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* --------------------------------- */}
          <div className="mx-5 px-md-5 mt-5 pt-5">
            <div
              className="description1"
              style={{
                color: "#393939",
                fontFamily: "Geomanist,sans-serif",

                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "normal",
              }}
            >
              {jobdata.jrTitle}
            </div>
            <div className="mt-4">
              {jobdata.jrContent.split("/").map((a, b) => {
                return (
                  <div key={a} className="d-flex  mt-3">
                    <div>
                      <img
                        src={vector}
                        style={{ width: "0.60rem", height: "0.44rem" }}
                      ></img>
                    </div>
                    <div
                      className="ms-3"
                      style={{
                        color: "#8F8F98",
                        fontFamily: "Geomanist,sans-serif",
                        fontSize: "1.125rem",
                        fontStyle: "normal",
                        fontWeight: 400,
                        lineHeight: "1.875rem",
                      }}
                    >
                      {a}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          {/* ----------------------------------- */}
          <div className="mx-5 px-md-5 mt-5 pt-5">
            <div
              className="description1"
              style={{
                color: "#393939",
                fontFamily: "Geomanist,sans-serif",

                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "normal",
              }}
            >
              {jobdata.reqTitle}
            </div>
            <div className="mt-4">
              {jobdata.reqContent.split("/").map((a, b) => {
                return (
                  <div key={a} className="d-flex  mt-3">
                    <div>
                      <img
                        src={vector}
                        style={{ width: "0.60rem", height: "0.44rem" }}
                      ></img>
                    </div>
                    <div
                      className="ms-3"
                      style={{
                        color: "#8F8F98",
                        fontFamily: "Geomanist,sans-serif",
                        fontSize: "1.125rem",
                        fontStyle: "normal",
                        fontWeight: 400,
                        lineHeight: "1.875rem",
                      }}
                    >
                      {a}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="mx-5 px-md-5 mt-5 pt-5">
          <div
            className="d-flex align-items-center flex-column pb-3 "
            style={{
              borderRadius: "16px",
              maxWidth: "71rem",
              background:
                "linear-gradient(282deg, rgba(193, 241, 238, 0.50) 0%, #F1F4FF 72.92%, rgba(253, 206, 165, 0.00) 100%)",
            }}
          >
            <div
              className="d-inline-block mt-5 px-4"
              style={{
                color: "#393939",
                textAlign: "center",
                fontFamily: "Geomanist, sans-serif",
                fontSize: "2.5rem",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "3.75rem",
              }}
            >
              {data1.content.split("///")[1]}
              <span style={{ color: "#4e59e7", fontWeight: 700 }}>
                {" "}
                {data1.content.split("///")[3]}{" "}
              </span>
              <div className="d-inline-block">
                {" "}
                {data1.content.split("///")[3]}
              </div>
            </div>
            <Link
              to={data1.buttonCtaLink}
              className="d-flex justify-content-center align-items-center mt-5 mb-4 ctalink"
              style={{
                borderRadius: "2.06rem",
                background: "#4e59e7",
                boxShadow: "0px 20px 50px 0px rgba(78,89,231,0.31)",
              }}
            >
              <div
                style={{
                  color: "#FFF",
                  fontFamily: "Geomanist, sans-serif",
                  fontSize: "1.5rem",
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "1.875rem",
                }}
              >
                {data1.buttonText}
              </div>
            </Link>
          </div>
        </div>
        {/* ----------------------------apply for this job----------------------------- */}
        <div
          className="mt-5 pt-5"
          style={{ position: "relative", zIndex: "3" }}
        >
          <div
            className="px-5 d-flex flex-column"
            style={{ background: "rgba(80, 91, 232, 0.03)" }}
          >
            <div
              className=""
              style={{
                color: "#393939",
                fontFamily: "Geomanist, sans-serif",
                fontSize: "2.5rem",
                fontStyle: "normal",
                fontWeight: 700,
                lineHeight: "normal",
                paddingTop: "4rem",
              }}
            >
              Apply for this <span style={{ color: "#4e59e7" }}>Job</span>
            </div>
            <div>
              <form className="">
                <div className="d-flex justify-content-between flex-md-row flex-column">
                  <Careerform
                    error={error?.firstname}
                    value={fn}
                    change={(e) => {
                      setFn(e.target.value);
                    }}
                    type="text"
                    name="First Name"
                    placeholder="Enter your first name"
                  ></Careerform>
                  <Careerform
                    error={error?.lastname}
                    value={ln}
                    change={(e) => {
                      setLn(e.target.value);
                    }}
                    type="text"
                    name="Last Name"
                    placeholder="Enter your last name"
                    margin="ms-md-4"
                  ></Careerform>
                </div>
                <div className="d-flex justify-content-between flex-md-row flex-column">
                  <Careerform
                    error={error?.email}
                    value={email}
                    change={(e) => {
                      setEmail(e.target.value);
                    }}
                    type="text"
                    name="Email"
                    placeholder="eg: robin@gmail.com"
                  ></Careerform>
                  <Careerform
                    error={error?.number}
                    value={number}
                    change={(e) => {
                      setNumber(e.target.value);
                    }}
                    type="number"
                    name="Phone"
                    placeholder="Enter 10 digit phone number"
                    margin="ms-md-4"
                  ></Careerform>
                </div>
                <div className="d-flex justify-content-between flex-md-row flex-column">
                  <Careerform
                    error={error?.loc}
                    value={loc}
                    change={(e) => {
                      setLoc(e.target.value);
                    }}
                    type="text"
                    name="Location"
                    placeholder="Enter your location"
                  ></Careerform>
                  <div style={{ flex: "1" }} className="d-flex flex-column">
                    <Careerform
                      error={error?.file}
                      value={file}
                      change={(e) => {
                        setFile(e.target.value);
                      }}
                      type="file"
                      name="Resume/CV"
                      placeholder="Upload"
                      margin="ms-md-3"
                      paddingtop="1rem"
                    ></Careerform>
                    <div
                      className="ms-md-3 pt-2 "
                      style={{
                        color: "#393939",
                        fontFamily: "Geomanist,sans-serif",
                        fontSize: "0.8125rem",
                        fontStyle: "normal",
                        fontWeight: 400,
                        lineHeight: "normal",
                      }}
                    >
                      Resume/CV should be in .pdf or .doc format only
                    </div>
                  </div>
                </div>

                <div className="mb-5 mt-3 d-flex justify-content-center">
                  <input
                    className="forminput my-5"
                    type="button"
                    value="Submit Application"
                    style={{
                      background: "#dce2ff",
                      color: "#4E59E7",
                      fontFamily: "Geomanist,sans-serif",
                      fontSize: "1.5rem",
                      fontStyle: "normal",
                      fontWeight: 400,
                      lineHeight: "1.875rem",
                    }}
                    onClick={validate}
                  ></input>
                </div>
              </form>
            </div>
          </div>
        </div>
        <Footer></Footer>
      </div>
    )
  );
}

export default Jobdetails;
