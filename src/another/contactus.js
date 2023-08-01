import React, { useState } from "react";
import Aboutheader1 from "../aboutfile/aboutheader1";
import Comheader1 from "../aboutfile/comheader1";
import Aboutheader2 from "../aboutfile/aboutheader2";
import Contactform from "./contactform";
import arrow from "./arrow-down-sign-to-navigate.png";
import Footer from "../home/homefile/footer";
import { useFormik } from "formik";

function Contactus(props) {
  const validate = () => {
    let errero = {};
    let validform = true;

    if (!values.firstname.trim()) {
      validform = false;
      errero = { ...errero, firstname: "First name is required" };
    } else if (values.firstname.trim < 3) {
      validform = false;
      errero = { ...errero, firstname: "Fill valid first name" };
    } else {
      errero = { ...errero, firstname: "" };
    }

    if (!values.lastname.trim()) {
      validform = false;
      errero = { ...errero, lastname: "Last name is required" };
    } else if (values.lastname.trim < 3) {
      validform = false;
      errero = { ...errero, lastname: "Fill valid last name" };
    } else {
      errero = { ...errero, lastname: "" };
    }

    if (!values.country) {
      validform = false;
      errero = { ...errero, country: "Country name is required" };
    } else {
      errero = { ...errero, country: "" };
    }
    // const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // !values.email.match(emailPattern)
    if (!values.email.trim()) {
      validform = false;
      errero = { ...errero, email: "Email is required" };
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      validform = false;
      errero = { ...errero, email: "Invalid email format" };
    } else {
      errero = { ...errero, email: "" };
    }

    // if (!values.phonenumber.trim()) {
    //   validate = false;
    //   errero = { ...errero, phonenumber: "Phone number is required" };
    // } else if (values.phonenumber.trim().length < 11) {
    //   validate = false;
    //   errero = { ...errero, phonenumber: "Invalid phone number" };
    // } else {
    //   errero = { ...errero, phonenumber: "" };
    // }

    if (!values.querytype) {
      validform = false;
      errero = { ...errero, querytype: "Query type is required" };
    } else {
      errero = { ...errero, querytype: "" };
    }

    if (!values.message.trim()) {
      validform = false;
      errero = { ...errero, message: "Message is required" };
    } else if (values.message.trim() < 11) {
      validform = false;
      errero = { ...errero, message: "invalid message" };
    } else {
      errero = { ...errero, message: "" };
    }

    if (validform) {
      console.log("form is submit");
    }

    return errero;
  };

  const {
    handleChange,
    values,
    handleSubmit,
    errors: errero,
    touched,
    handleBlur,
  } = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      country: "",
      email: "",
      phonenumber: "",
      querytype: "",
      message: "",
    },
    validate,
    onSubmit: (values) => {},
  });

  console.log("errors", { errero, touched });

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
            <form className="px-3" onSubmit={handleSubmit}>
              <div>
                <Contactform
                  error={
                    errero?.firstname && touched?.firstname
                      ? errero?.firstname
                      : ""
                  }
                  change={handleChange}
                  onBlur={handleBlur}
                  namee="First Name"
                  type="text"
                  name="firstname"
                  placeholder="Enter your first name"
                ></Contactform>
                <Contactform
                  error={
                    errero?.lastname && touched?.lastname
                      ? errero?.lastname
                      : ""
                  }
                  change={handleChange}
                  namee="Last Name"
                  type="text"
                  name="lastname"
                  placeholder="Enter your last name"
                  paddingclass="ps-lg-4"
                  onBlur={handleBlur}
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
                      onChange={handleChange}
                      name="country"
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
                      <option disabled selected hidden>
                        Select Country
                      </option>
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
                      {errero?.country}
                    </div>
                  </div>
                </div>
                {/* ================================ */}
                <Contactform
                  error={errero?.email}
                  change={handleChange}
                  namee="Email"
                  type="email"
                  name="email"
                  placeholder="Eg: robin@gmail.com"
                  paddingclass="ps-lg-4"
                  onBlur={handleBlur}
                ></Contactform>
              </div>
              <div>
                <Contactform
                  error={errero?.phonenumber}
                  change={handleChange}
                  namee="Phone Number"
                  type="text"
                  name="phonenumber"
                  placeholder="Enter 10 digit phone number"
                  onBlur={handleBlur}
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
                      onChange={handleChange}
                      name="querytype"
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
                      <option disabled selected hidden>
                        Select Query Type{" "}
                      </option>
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
                      {errero.querytype}
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
                    onChange={handleChange}
                    name="message"
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
                    {errero?.message}
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-center mt-5 ">
                <input
                  onClick={handleSubmit}
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
              onClick={handleSubmit}
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
      {/* <Footer></Footer> */}
    </div>
  );
}

export default Contactus;
