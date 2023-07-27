import React, { useContext } from "react";
import footer from "../homephoto/footer.svg";
import footerv from "../homephoto/footerv.png";
import { homeapi } from "../../App";
import { Link } from "react-router-dom";

function Footer() {
  const footerr = useContext(homeapi);
  const footerdata = footerr.home.data.attributes.UsecaseCard;

  return (
    <div className="footermargin">
      {" "}
      <div className="footer position-relative" style={{ marginBottom: "" }}>
        <div className=" " style={{}}>
          {" "}
          <div
            className="footertitle d-flex mx-5 justify-content-center flex-wrap position-relative"
            style={{ marginBottom: "8rem" }}
          >
            <div className="d-flex  align-items-center flex-column my-4 me-4 ">
              <Link to="/">
                <img
                  src={footerv}
                  style={{ width: "13.5rem", height: "3.187rem" }}
                  alt=""
                />
              </Link>
              <div
                className="network align-self-end"
                style={{ marginRight: "29px" }}
              >
                Verified Network
              </div>
            </div>
            <div className="d-flex flex-column m-4">
              <Link className="footerheading mb-5" to={footerdata[0].linkUrl}>
                Individuals
              </Link>
              <Link className="footeraccount" to={footerdata[0].linkUrl}>
                Account
              </Link>
              <Link className="footeraccount" to={footerdata[0].linkUrl}>
                Assets
              </Link>
              <Link className="footeraccount" to={footerdata[0].linkUrl}>
                Deposits
              </Link>
              <Link className="footeraccount" to={footerdata[0].linkUrl}>
                Payment
              </Link>
              <Link className="footeraccount" to={footerdata[0].linkUrl}>
                Investment
              </Link>
            </div>

            <div className="d-flex  flex-column m-4">
              <Link className="footerheading mb-5" to={footerdata[1].linkUrl}>
                Businesses
              </Link>
              <Link className="footeraccount" to={footerdata[1].linkUrl}>
                Account
              </Link>
              <Link className="footeraccount" to={footerdata[1].linkUrl}>
                Assets
              </Link>
              <Link className="footeraccount" to={footerdata[1].linkUrl}>
                Deposits
              </Link>
              <Link className="footeraccount" to={footerdata[1].linkUrl}>
                Payment
              </Link>
              <Link className="footeraccount" to={footerdata[1].linkUrl}>
                Investment
              </Link>
            </div>
            <div className="d-flex flex-column m-4">
              <Link className="footerheading mb-5" to={footerdata[2].linkUrl}>
                Service Providers
              </Link>
              <Link className="footeraccount" to={footerdata[2].linkUrl}>
                Asset Origination
              </Link>
              <Link className="footeraccount" to={footerdata[2].linkUrl}>
                Assets Management
              </Link>
              <Link className="footeraccount" to={footerdata[2].linkUrl}>
                Asset Servicing
              </Link>
              <Link className="footeraccount" to={footerdata[2].linkUrl}>
                Payments
              </Link>
              <Link className="footeraccount" to={footerdata[2].linkUrl}>
                Network Operators
              </Link>
            </div>
            <div className="d-flex flex-column m-4">
              <Link className="footerheading mb-5" to="/">
                Company
              </Link>
              <Link className="footeraccount" to="/About">
                About Us
              </Link>
              <Link className="footeraccount" to="/">
                Assets
              </Link>
              <Link className="footeraccount" to="/careers">
                Careers
              </Link>
              <Link className="footeraccount" to="/">
                Contact Us
              </Link>
              <Link className="footeraccount" to="/">
                Blog
              </Link>
            </div>
            <div className="d-flex flex-column my-4 ms-4">
              <Link className="footerheading mb-5" to="">
                Partners
              </Link>
              <Link className="footeraccount" to="/">
                Operators
              </Link>
              <Link className="footeraccount" to="/">
                Developers
              </Link>
              <Link className="footeraccount" to="/">
                Investors
              </Link>
            </div>
          </div>
          <div className="position-relative" style={{ zIndex: -1 }}>
            <img
              src={footer}
              style={{ width: "100%", maxHeight: "624px", height: "100%" }}
            ></img>
            <div
              className="footerend position-absolute pt-md-3 mb-md-3 pt-sm-2 mb-sm-2 pt-1 mb-1"
              style={{
                borderTop: "1px solid #E3E3E3",

                width: "100%",
                bottom: "0px",
                paddingRight: "6rem",
              }}
            >
              Privacy Policy | Terms of Use
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
