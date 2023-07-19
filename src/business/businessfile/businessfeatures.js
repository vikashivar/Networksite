import React, { useContext } from "react";
import Indifeatures from "../../individualsfile/indifeatures";

import bac from "../businessphoto/bas.png";
import bas from "../businessphoto/bas.png";
import bdp from "../businessphoto/bdp.png";
import bpa from "../businessphoto/bpa.png";
import bin from "../businessphoto/bin.png";
import oa from "../businessphoto/oa.png";

import sa from "../businessphoto/sa.png";
import rs from "../businessphoto/rs.png";
import mcc from "../businessphoto/mcc.png";
import eas from "../businessphoto/eas.png";
import rc from "../businessphoto/rc.png";
import dc from "../businessphoto/dc.png";
import { busistore } from "./business";
import colorarrow from "../businessphoto/colorarrow.png";

function Businessfeatures() {
  const feat = useContext(busistore);
  const featurelist = [
    {
      name: feat.busi.data.attributes.features[0].name,
      img: bac,
      width: "1.87rem",
      height: "1.97rem",
    },
    {
      name: feat.busi.data.attributes.features[1].name,
      img: bas,
      width: "1.5rem",
      height: "1.97rem",
    },
    {
      name: feat.busi.data.attributes.features[2].name,
      img: bdp,
      width: "2.37rem",
      height: "1.97rem",
    },
    {
      name: feat.busi.data.attributes.features[3].name,
      img: bpa,
      width: "1.97rem",
      height: "1.97rem",
    },
    {
      name: feat.busi.data.attributes.features[4].name,
      img: bin,
      width: "1.98rem",
      height: "1.97rem",
    },
  ];
  const dataheading1 = feat.busi.data.attributes.features[0].title.split("///");
  const data1 = [
    {
      heading1: dataheading1[0],
      heading2: dataheading1[1],
      direction: "flex-lg-row flex-column-reverse",
      maxwidth: "30rem",
      maxheight: "28.25rem",
      subheading1: "Multi Currency",
      subheading2: " Accounts",
      detail: [
        "Use your Verified Network account in more than 30+ currencies with open democratic access to a regulation compliant digital assets platform.",
      ],
      img: oa,
    },
  ];
  const dataheading2 = feat.busi.data.attributes.features[1].title.split("///");
  const data2 = [
    {
      heading1: dataheading2[0],
      heading2: dataheading2[1],
      directioh: "flex-lg-row flex-column-reverse",
      maxwidth: "26.68rem",
      maxheight: "30.125rem",
      subheading1: "Self Custody",
      subheading2: " of Assets",
      detail: [
        "Stop paying high fees to banks for custody of your assets. Keep your assets secure with Verified self-custody and make their value go the extra mile.",
      ],
      img: sa,
    },
  ];

  const dataheading3 = feat.busi.data.attributes.features[2].title.split("///");

  const data3 = [
    {
      heading0: dataheading3[1],
      heading1: dataheading3[2],
      direction: "flex-lg-row flex-column-reverse",
      maxwidth: "28rem",
      maxheight: "23.06rem",
      subheading1: <span style={{ fontWeight: 400 }}>Deposit in </span>,
      subheading2: <span style={{ fontWeight: 700 }}>Stable Currencies</span>,
      detail: [
        "Keep your money safe from economic fluctuations through fiat currencies in your Verified Network account – that lets you convert local currencies into stable global currencies at competitive rates.",
      ],
      img: rs,
    },
  ];

  const dataheading4 = feat.busi.data.attributes.features[3].title.split("///");
  const data4 = [
    {
      heading1: dataheading4[0],
      heading2: dataheading4[1],
      direction: "flex-lg-row flex-column-reverse",
      maxwidth: "29.68rem",
      maxheight: "32.21rem",
      subheading1: "Multi-Country",
      subheading2: " Cards",
      detail: [
        "Pay expenses from your Verified blockchain account in a click without foreign transaction fees in 30+ countries.",
        "Provide Visa debit cards to employees and track your team in real time with controlled spending limits.",
      ],
      img: mcc,
    },
    {
      direction: "flex-lg-row-reverse flex-column-reverse",
      maxwidth: "29.43rem",
      maxheight: "27.56rem",
      subheading1: "Employee and Supplier",
      subheading2: " Payments",
      detail: [
        "Save time and effort while transferring money to employees and suppliers across the world for free.",
        "Take the expense out of expenses and stop paying hefty commissions on foreign exchange conversions and withdrawals.",
      ],
      img: eas,
    },
  ];

  const dataheading5 = feat.busi.data.attributes.features[4].title.split("///");
  const data5 = [
    {
      heading1: dataheading5[0],
      heading2: dataheading5[1],
      direction: "flex-lg-row flex-column-reverse",
      maxwidth: "24rem",
      maxheight: "35.31rem",
      subheading1: "Higher Return",
      subheading2: " Investments",
      detail: [
        "Borrow money at competitive interest rates by selling private bonds across the globe.",
        "Take advantage of selling to investors, who are interested in earning higher returns on theirassets. ",
      ],
      img: "",
    },
    {
      direction: "flex-lg-row-reverse flex-column-reverse",
      maxwidth: "28rem",
      maxheight: "21rem",
      subheading1: "Raise capital",
      subheading2: " for your business ",
      detail: [
        "Issue digital shares to investors across the world to raise capital.",
        "Ensure regulation-compliant cross border investments, allotment of shares and bonds,and distribution of interest and dividends to investors.",
      ],
      img: rc,
    },

    {
      direction: "flex-lg-row flex-column-reverse",
      maxwidth: "28.81rem",
      maxheight: "21rem",
      subheading1: "Digital credit ",
      subheading2: " Assessments",
      detail: [
        "Run credit assessments for your business using digital tools on the Verified Network to ensure an accurate credit rating.  ",
        "Build trust with investors by providing the latest information about your business.",
      ],
      img: dc,
    },
  ];

  return (
    <div>
      <Indifeatures
        list={featurelist}
        datalist1={data1}
        datalist2={data2}
        datalist3={data3}
        datalist4={data4}
        datalist5={data5}
        color="#08C0B5"
        arrow={
          <img
            className="ms-3"
            src={colorarrow}
            style={{ width: "1.0156rem", height: "0.72rem" }}
          />
        }
      ></Indifeatures>
    </div>
  );
}

export default Businessfeatures;
