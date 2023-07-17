import React, { useContext, useState } from "react";
import gp from "../home/homephoto/gp.png";
import ap from "../home/homephoto/ap.png";
import downloadphone from "../home/homephoto/downloadphone.png";
import { Link } from "react-router-dom";
import { indistore } from "./individual";

function Download() {
  const array = useContext(indistore);
  const [download, setDownload] = useState(array.indi);

  const section = download.data.attributes.downloadcta.heading.split("///");
  const arraydownlod = download.data.attributes.downloadcta;
  return (
    <div>
      <div
        className="d-flex flex-lg-row flex-column justify-content-between align-items-center mx-5"
        style={{ marginTop: "6rem" }}
      >
        <div className="d-lg-block d-flex flex-column align-items-center ">
          <div className="download">{section[0]}</div>
          <div className="wallet">{section[1]}</div>
          <div className="ios mt-5">{arraydownlod.subHeading}</div>
          <div className="d-flex mt-4 pt-3">
            <Link
              to={arraydownlod.playStoreLink}
              className="d-flex justify-content-center align-items-center"
              style={{
                width: "10.5rem",
                height: "3.3125rem",
                borderRadius: "3.125rem",
                background: "#000",
              }}
            >
              <img
                src={gp}
                alt=""
                style={{ width: "8.20rem", height: "2.38rem" }}
              />
            </Link>
            <Link
              to={arraydownlod.appStoreLink}
              className="d-flex justify-content-center align-items-center ms-4"
              style={{
                width: "10.5rem",
                height: "3.3125rem",
                borderRadius: "3.125rem",
                background: "#000",
              }}
            >
              <img
                src={ap}
                alt=""
                style={{ width: "7.62rem", height: "2.59rem" }}
              />
            </Link>
          </div>
        </div>
        <div>
          <img
            src={downloadphone}
            style={{ maxWidth: "48.56rem", width: "100%" }}
          ></img>
        </div>
      </div>
    </div>
  );
}

export default Download;
