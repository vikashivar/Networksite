import React, { useContext, useState } from "react";
import Indizero from "../../individualsfile/indizero";
import colorright from "../businessphoto/colorright.png";
import whiteright from "../businessphoto/whiteright.png";
import { busistore } from "./business";

function Busizero() {
  const apii = useContext(busistore);
  const pricing = apii.busi.data.attributes.pricing.heading.split("///");

  const zero = [
    {
      height: "33.125rem",
      borderradius: "1.25rem",
      border: "3px solid #fff",
      boxshadow: "0px 20px 50px 0px rgba(0, 0, 0, 0.08)",
      background: "#fff",
      title: "Account",
      titlecolor: "#393939",
      heading: "For account creation, KYC and custody of assets",
      adownloadborder: "1.5px solid #08c0b5",
      abackground: "none",
      right: [
        {
          rightimg: colorright,
          color: "#8F8F98",
          title: "FREE account set up",
        },
        {
          rightimg: colorright,
          color: "#8F8F98",
          title: "$10 for KYC approval",
        },
        {
          rightimg: colorright,
          color: "#8F8F98",
          title: "0.03% per year on assets in custody.",
        },
      ],
    },
    {
      height: "40.625rem",
      borderradius: "0.75rem",
      border: "none",
      boxshadow: "0px 20px 50px 0px rgba(142, 95, 245, 0.30)",
      background: "#08C0B5",
      title: "Payments",
      titlecolor: "#fff",
      heading:
        "For payments and withdrawal of digital cash to your bank account.",
      adownloadborder: "none",
      abackground: "#fff",
      right: [
        {
          rightimg: whiteright,
          color: "#fff",
          title: "FREE peer to peer payments within the Verified Network.",
        },
        {
          rightimg: whiteright,
          color: "#fff",
          title:
            "$15 card set up fee. $10 annual fee on each card issued to employees.",
        },
        {
          rightimg: whiteright,
          color: "#fff",
          title: "0.3% on foreign exchange payments using cards.   ",
        },
        {
          rightimg: whiteright,
          color: "#fff",
          title:
            "0.3% on currency withdrawals from the Verified Network to your bank account.",
        },
      ],
    },
    {
      height: "33.125rem",
      borderradius: "1.25rem",
      border: "3px solid #fff",
      boxshadow: "0px 20px 50px 0px rgba(0, 0, 0, 0.08)",
      background: "#fff",
      title: "Financing",
      titlecolor: "#393939",
      heading:
        "For issuing investment products to raise capital on the Verified Network",
      adownloadborder: "1.5px solid #08C0B5",
      abackground: "none",
      right: [
        {
          rightimg: colorright,
          color: "#8F8F98",
          title: "$100 for upto four Credit Assessments per year.",
        },
        {
          rightimg: colorright,
          color: "#8F8F98",
          title: "0.5% for issuing investment products to raise capital.",
        },
        {
          rightimg: colorright,
          color: "#8F8F98",
          title:
            "0.1% for registering existing securities for sale. Calculated .",
        },
      ],
    },
  ];
  return (
    <div>
      <Indizero
        color="#08C0B5"
        zero={zero}
        pricing={pricing}
        zerobalance={apii.busi.data.attributes.pricing.subheading}
        backgroundcolor="rgba(193, 241, 238, 1)"
      ></Indizero>
    </div>
  );
}

export default Busizero;
