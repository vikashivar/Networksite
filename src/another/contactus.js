import React, { useState } from "react";
import Aboutheader1 from "../aboutfile/aboutheader1";
import Comheader1 from "../aboutfile/comheader1";
import Aboutheader2 from "../aboutfile/aboutheader2";
import Contactform from "./contactform";
import arrow from "./arrow-down-sign-to-navigate.png";
import Footer from "../home/homefile/footer";
import { useFormik } from "formik";

function Contactus(props) {
  const [fn, setFn] = useState("");
  const [ln, setLn] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [query, setQuery] = useState();
  const [country, setCountry] = useState();
  const [message, setMessage] = useState("");
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

    if (!country) {
      validform = false;
      errero = { ...errero, country: "Country name is required" };
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

    if (!query) {
      validform = false;
      errero = { ...errero, query: "Query type is required" };
    }

    if (!message.trim()) {
      validform = false;
      errero = { ...errero, message: "Message is required" };
    } else if (message.trim().length < 4) {
      validform = false;
      errero = { ...errero, message: "invalid message" };
    }
    setError(errero);

    if (validform) {
      setFn("");
      setLn("");
      setCountry("");
      setEmail("");
      setMessage("");
      setQuery("");
      setNumber("");
      console.log("form is submit");
    }
  };

  return (
    <div>
      <Aboutheader1
        title="Contact Us"
        aboutbackground="linear-gradient(307deg, rgba(164, 239, 255, 0.76) 0.58%, rgba(185, 239, 254, 0.20) 58.85%, rgba(195, 234, 255, 0.10) 100%)"
        comheader1={<Comheader1></Comheader1>}
      ></Aboutheader1>
      <Aboutheader2
        aboutheader2={
          <div>
            <div
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
              Have questions? The quickest way to get in touch with us is by
              filling form below.
            </div>
            <form className="px-3">
              <div>
                <Contactform
                  error={error?.firstname}
                  value={fn}
                  change={(e) => {
                    setFn(e.target.value);
                  }}
                  namee="First Name"
                  type="text"
                  placeholder="Enter your first name"
                ></Contactform>
                <Contactform
                  error={error?.lastname}
                  value={ln}
                  change={(e) => {
                    setLn(e.target.value);
                  }}
                  namee="Last Name"
                  type="text"
                  placeholder="Enter your last name"
                  paddingclass="ps-lg-4"
                ></Contactform>
              </div>
              <div>
                {/* ================================= */}
                <div
                  className={`d-lg-inline-block d-block paddingclass ${props.paddingclass}`}
                >
                  <div
                    className={`d-flex flex-column mt-4 pt-3 ${props.margin}`}
                    style={{ flex: 1 }}
                  >
                    <label
                      className="ms-2"
                      htmlFor="country"
                      style={{
                        color: "#393939",
                        fontFamily: "Geomanist, sans-serif",
                        fontSize: "1.125rem",
                        fontStyle: "normal",
                        fontWeight: 400,
                        lineHeight: "normal",
                      }}
                    >
                      Country
                    </label>
                    <select
                      value={country}
                      onChange={(e) => {
                        setCountry(e.target.value);
                      }}
                      id="country"
                      className="focusvisible1 mt-3"
                      style={{
                        color: "#8F8F98",
                        fontFamily: "Geomanist, sans-serif",
                        fontSize: "1.125rem",
                        fontStyle: "normal",
                        fontWeight: 400,
                        lineHeight: "normal",
                        background: `url(${arrow}) no-repeat `,
                        backgroundPosition: "95% center",
                        backgroundSize: " 20px",
                        height: "3.75rem",

                        border: "none",
                        borderRadius: "12px",
                        paddingLeft: "30px",
                        // width: "28rem",
                      }}
                    >
                      <option>Select Country</option>
                      <option value="United States">United States</option>
                      <option value="Canada">Canada</option>
                      <option value="United Kingdom">United Kingdom</option>
                      <option value="Germany">Germany</option>
                      <option value="France">France</option>
                      <option value="Australia">Australia</option>
                      <option value="Japan">Japan</option>
                      <option value="China">China</option>
                      <option value="India">India</option>
                      <option value="Brazil">Brazil</option>
                      <option value="Russia">Russia</option>
                      <option value="South Korea">South Korea</option>
                    </select>
                    <div
                      className="mt-2"
                      style={{
                        color: "#FF7A7A",
                        fontFamily: "Geomanist,sans-serif",
                        fontSize: "0.8125rem",
                        fontStyle: "normal",
                        fontWeight: 400,
                        lineHeight: "normal",
                      }}
                    >
                      {error?.country}
                    </div>
                  </div>
                </div>
                {/* ================================ */}
                <Contactform
                  error={error?.email}
                  value={email}
                  change={(e) => {
                    setEmail(e.target.value);
                  }}
                  namee="Email"
                  type="email"
                  placeholder="Eg: robin@gmail.com"
                  paddingclass="ps-lg-4"
                ></Contactform>
              </div>
              <div>
                <Contactform
                  error={error?.number}
                  value={number}
                  change={(e) => {
                    setNumber(e.target.value);
                  }}
                  namee="Phone Number"
                  type="number"
                  placeholder="Enter 10 digit phone number"
                ></Contactform>
                {/* ================================= */}
                <div
                  className={`d-lg-inline-block d-block paddingclass ${props.paddingclass} ps-lg-4`}
                >
                  <div
                    className={`d-flex flex-column mt-4 pt-3 ${props.margin}`}
                    style={{ flex: 1 }}
                  >
                    <label
                      className="ms-2"
                      htmlFor="country"
                      style={{
                        color: "#393939",
                        fontFamily: "Geomanist, sans-serif",
                        fontSize: "1.125rem",
                        fontStyle: "normal",
                        fontWeight: 400,
                        lineHeight: "normal",
                      }}
                    >
                      Query Type
                    </label>
                    <select
                      value={query}
                      onChange={(e) => {
                        setQuery(e.target.value);
                      }}
                      id="querytype"
                      className="focusvisible1 mt-3"
                      style={{
                        color: "#8F8F98",
                        fontFamily: "Geomanist, sans-serif",
                        fontSize: "1.125rem",
                        fontStyle: "normal",
                        fontWeight: 400,
                        lineHeight: "normal",
                        background: `url(${arrow}) no-repeat `,
                        backgroundPosition: "95% center",
                        backgroundSize: " 20px",
                        height: "3.75rem",

                        border: "none",
                        borderRadius: "12px",
                        paddingLeft: "30px",
                        // width: "28rem",
                      }}
                    >
                      <option>Select Query Type </option>
                      <option value="United States">United States</option>
                      <option value="Canada">Canada</option>
                      <option value="United Kingdom">United Kingdom</option>
                      <option value="Germany">Germany</option>
                      <option value="France">France</option>
                      <option value="Australia">Australia</option>
                      <option value="Japan">Japan</option>
                      <option value="China">China</option>
                      <option value="India">India</option>
                      <option value="Brazil">Brazil</option>
                      <option value="Russia">Russia</option>
                      <option value="South Korea">South Korea</option>
                    </select>
                    <div
                      className="mt-2"
                      style={{
                        color: "#FF7A7A",
                        fontFamily: "Geomanist,sans-serif",
                        fontSize: "0.8125rem",
                        fontStyle: "normal",
                        fontWeight: 400,
                        lineHeight: "normal",
                      }}
                    >
                      {error?.query}
                    </div>
                  </div>
                </div>
                {/* ================================ */}
              </div>
              <div className="">
                <div className={` mt-4 pt-3 ${props.margin}`}>
                  <label
                    className="ps-1"
                    htmlFor="message"
                    style={{
                      color: "#393939",
                      fontFamily: "Geomanist,sans-serif",
                      fontSize: "1.125rem",
                      fontStyle: "normal",
                      fontWeight: 400,
                      lineHeight: "normal",
                    }}
                  >
                    Message
                  </label>
                  <textarea
                    value={message}
                    onChange={(e) => {
                      setMessage(e.target.value);
                    }}
                    className="focusvisible1 mt-2 px-4 py-2"
                    style={{
                      resize: "none",
                      width: "100%",
                      minHeight: "12.875rem",
                      borderRadius: "14px",
                      color: "#8F8F98",
                      fontFamily: "Geomanist,sans-serif",
                      fontSize: "1.125rem",
                      fontStyle: "normal",
                      fontWeight: 400,
                      lineHeight: "1.875rem",
                    }}
                    placeholder="Type your message here"
                  ></textarea>
                  <div
                    className="mt-2"
                    style={{
                      color: "#FF7A7A",
                      fontFamily: "Geomanist,sans-serif",
                      fontSize: "0.8125rem",
                      fontStyle: "normal",
                      fontWeight: 400,
                      lineHeight: "normal",
                    }}
                  >
                    {error?.message}
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-center mt-5 ">
                <input
                  onClick={validate}
                  className="focusvisible2 my-3"
                  type="button"
                  style={{
                    width: "18.5rem",
                    height: "4.125rem",
                    borderRadius: "2.0623rem",
                    background: "#4e59e7",
                    boxShadow: "0px 20px 50px 0px rgba(78,89,231,0.30)",
                    color: "#FFF",
                    fontFamily: "Geomanist,sans-serif",
                    fontSize: "1.5rem",
                    fontStyle: "normal",
                    fontWeight: 400,
                    lineHeight: "1.875rem",
                    border: "none",
                  }}
                  value={"Submit"}
                ></input>
              </div>
            </form>
          </div>
        }
      ></Aboutheader2>

      <div className="mx-5  mt-5 pt-5 px-md-5">
        <div
          className="p-sm-4 py-4 p-2 "
          style={{
            background:
              "linear-gradient(282deg, rgba(193, 241, 238, 0.50) 0%, #F1F4FF 72.92%, rgba(253, 206, 165, 0.00) 100%)",
            width: "100%",
            position: "relative",
            zIndex: "3",
            borderRadius: "1rem",
          }}
        >
          <div
            className="mt-3 needhelp"
            style={{
              color: "#4E59E7",
              textAlign: "center",
              fontFamily: "Geomanist,sans-serif",
              fontStyle: "normal",
              fontWeight: 700,
              lineHeight: "3.125rem",
            }}
          >
            Need Help?
            <span
              style={{ color: "#393939", fontWeight: 400 }}
              className="d-block"
            >
              Verified Networks Help Desk
            </span>
          </div>
          <div
            className="mt-3 pt-1"
            style={{
              color: "#8F8F98",
              fontFamily: "Geomanist,sans-serif",
              fontSize: "1.125rem",
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "1.875rem",
              textAlign: "center",
            }}
          >
            Ask Questions, Browse Articles, Find Answers
          </div>
          <div className="text-center mt-4 pb-3 d-flex justify-content-center">
            <input
              // onClick={""}
              className=" "
              type="button"
              style={{
                width: "16.5rem",
                height: "4.125rem",
                borderRadius: "2.0623rem",
                background: "#4e59e7",
                boxShadow: "0px 20px 50px 0px rgba(78,89,231,0.30)",
                color: "#FFF",
                fontFamily: "Geomanist,sans-serif",
                fontSize: "1.5rem",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "1.875rem",
                border: "none",
              }}
              value={"Explore Help Desk"}
            ></input>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Contactus;
