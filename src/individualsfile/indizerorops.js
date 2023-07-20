import React, { useContext } from "react";
import Indizero from "./indizero";
import whiteright from "./indiphoto/whiteright.png";
import blueright from "./indiphoto/blueright.png";
import { indistore } from "./individual";

function Indizerorops() {
  const api = useContext(indistore);
  const pricing = api.indi.data.attributes.pricing.heading.split("///");

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
      adownloadborder: "1.5px solid #8e5ff5",
      abackground: "none",
      right: [
        {
          rightimg: blueright,
          color: "#8F8F98",
          title: "FREE account set up",
        },
        {
          rightimg: blueright,
          color: "#8F8F98",
          title:
            "KYC Approval fee is waived off with 10 invites to friends to family.",
        },
        {
          rightimg: blueright,
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
      background: "#8e5ff5",
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
          title: "$15 card set up fee. $10 annual fee.",
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
      title: "Investments",
      titlecolor: "#393939",
      heading:
        "For registering existing assets for sale, and trading investments.",
      adownloadborder: "1.5px solid #8e5ff5",
      abackground: "none",
      right: [
        {
          rightimg: blueright,
          color: "#8F8F98",
          title:
            "0.1% for registering existing securities for sale. Calculated on value of assets sold. ",
        },
        {
          rightimg: blueright,
          color: "#8F8F98",
          title:
            "0.1% on every investment brought and sold on the Verified Network.",
        },
      ],
    },
  ];

  return (
    <div>
      <Indizero
        color="#8E5FF5"
        zero={zero}
        pricing={pricing}
        zerobalance={api.indi.data.attributes.pricing.subheading}
        backgroundcolor=""
      ></Indizero>
    </div>
  );
}

export default Indizerorops;
