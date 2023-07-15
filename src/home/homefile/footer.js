import React, { useContext } from "react";
import footer from "../homephoto/footer.svg";
import footerv from "../homephoto/footerv.png";
import { homeapi } from "../../App";
import { Link } from "react-router-dom";

function Footer() {
  const footerr = useContext(homeapi);
  const footerdata = footerr.home.data.attributes.UsecaseCard;

  return (
    <div className="footer overflow-hidden">
      <div
        className="d-flex flex-column justify-content-sm-start "
        style={{
          background: `url('${footer}')`,
          width: "100%",
          height: "34rem",
          backgroundRepeat: "round",
        }}
      >
        {" "}
        <div
          className="d-flex mx-5 justify-content-between"
          style={{ paddingTop: "7rem" }}
        >
          <div className="d-lg-flex d-none align-items-center flex-column ">
            <img
              src={footerv}
              style={{ width: "13.5rem", height: "3.187rem" }}
              alt=""
            />
            <div
              className="network align-self-end"
              style={{ marginRight: "29px" }}
            >
              Verified Network
            </div>
          </div>
          <div className="d-md-flex d-none flex-column">
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

          <div className="d-md-flex d-none flex-column">
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
          <div className="d-flex flex-column">
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
          <div className="d-flex flex-column">
            <Link className="footerheading mb-5" to={""}>
              Company
            </Link>
            <Link className="footeraccount" to={""}>
              About Us
            </Link>
            <Link className="footeraccount" to={""}>
              Assets
            </Link>
            <Link className="footeraccount" to={""}>
              Careers
            </Link>
            <Link className="footeraccount" to={""}>
              Contact Us
            </Link>
            <Link className="footeraccount" to={""}>
              Blog
            </Link>
          </div>
          <div className="d-flex flex-column ">
            <Link className="footerheading mb-5" to={""}>
              Partners
            </Link>
            <Link className="footeraccount" to={""}>
              Operators
            </Link>
            <Link className="footeraccount" to={""}>
              Developers
            </Link>
            <Link className="footeraccount" to={""}>
              Investors
            </Link>
          </div>
        </div>
        <div
          className="footerend"
          style={{ borderTop: "1px solid #E3E3E3", padding: "1.2rem 6rem" }}
        >
          Privacy Policy | Terms of Use
        </div>
      </div>
    </div>
  );
}

export default Footer;
