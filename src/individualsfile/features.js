import React, { useContext } from "react";
import { indistore } from "./individual";
import account from "./indiphoto/account.png";
import assets from "./indiphoto/assets.png";
import deposites from "./indiphoto/deposites.png";
import payments from "./indiphoto/payments.png";
import invesment from "./indiphoto/invesment.png";
import Indifeatures from "./indifeatures";
import ga from "./indiphoto/ga.png";
import sa from "./indiphoto/sa.png";
import max from "./indiphoto/max.png";
import ptac from "./indiphoto/ptac.png";
import ptp from "./indiphoto/ptp.png";
import hr from "./indiphoto/hr.png";
import pi from "./indiphoto/pi.png";
import liq from "./indiphoto/liq.png";

function Features() {
  const feat = useContext(indistore);
  console.log(feat.indi.data.attributes.features);
  const featurelist = [
    {
      name: feat.indi.data.attributes.features[0].name,
      img: account,
      width: "1.87rem",
      height: "1.97rem",
    },
    {
      name: feat.indi.data.attributes.features[1].name,
      img: assets,
      width: "1.5rem",
      height: "1.97rem",
    },
    {
      name: feat.indi.data.attributes.features[2].name,
      img: deposites,
      width: "2.37rem",
      height: "1.97rem",
    },
    {
      name: feat.indi.data.attributes.features[3].name,
      img: payments,
      width: "1.97rem",
      height: "1.97rem",
    },
    {
      name: feat.indi.data.attributes.features[4].name,
      img: invesment,
      width: "1.98rem",
      height: "1.97rem",
    },
  ];
  const dataheading1 = feat.indi.data.attributes.features[0].title.split("///");
  const data1 = [
    {
      heading0: "Create ",
      heading1: "Verified digital ",
      heading2: "Wallets in seconds.",
      direction: "d-row",
      maxwidth: "33.68rem",
      maxheight: "32.81rem",
      subheading1: "Multi Currency",
      subheading2: " Accounts",
      detail:
        "Create a global, multi-currency account in seconds with open and democratic access for all.",
    },
  ];

  return (
    <div>
      <Indifeatures list={featurelist} datalist={data1}></Indifeatures>
    </div>
  );
}

export default Features;
