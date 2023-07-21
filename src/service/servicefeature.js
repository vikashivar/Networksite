import React, { useContext } from "react";
import ao from "./servicephoto/ao.png";
import am from "./servicephoto/am.png";
import as from "./servicephoto/as.png";
import ap from "./servicephoto/as.png";
import no from "./servicephoto/no.png";
import { serstore } from "./service";
import or from "./servicephoto/or.png";
import ma from "./servicephoto/ma.png";
import inv from "./servicephoto/inv.png";
import cu from "./servicephoto/cu.png";
import age from "./servicephoto/age.png";
import to from "./servicephoto/to.png";
import di from "./servicephoto/di.png";
import acc from "./servicephoto/acc.png";
import dec from "./servicephoto/dec.png";
import sr from "./servicephoto/sr.png";
import Featurescom from "../individualsfile/featurescom";
import Group from "./servicephoto/Group.png";
import Indifeatures from "../individualsfile/indifeatures";
function Servicefeature() {
  const feat = useContext(serstore);

  const featurelist = [
    {
      name: feat.ser.data.attributes.features[0].name,
      img: ao,
      width: "1.93rem",
      height: "1.74rem",
    },
    {
      name: feat.ser.data.attributes.features[1].name,
      img: am,
      width: "1.74rem",
      height: "1.68rem",
    },
    {
      name: feat.ser.data.attributes.features[2].name,
      img: as,
      width: "1.75rem",
      height: "1.75rem",
    },
    {
      name: feat.ser.data.attributes.features[3].name,
      img: ap,
      width: "1.75rem",
      height: "1.75rem",
    },
    {
      name: feat.ser.data.attributes.features[4].name,
      img: no,
      width: "1.75rem",
      height: "1.75rem",
    },
  ];

  // const dataheading1 = feat.ser.data.attributes.features[0].title.split("///");
  // const data1 = [
  //   {
  //     heading0: dataheading1[1],
  //     heading1: dataheading1[2],
  //     heading2: dataheading1[3],
  //     direction: "flex-lg-row flex-column-reverse",
  //     maxwidth: "27.81rem",
  //     maxheight: "26.125rem",
  //     subheading1: "Asset",
  //     subheading2: "Origination",
  //     detail: [
  //       "Originate digital assets and issue securities that are secure and credit worthy for clients on the Verified Network.",
  //       "Take advantage of liquidity and capital on any exchange connected to the Verified Network.",
  //     ],
  //     img: or,
  //   },
  // ];

  // const dataheading2 = feat.ser.data.attributes.features[1].title.split("///");

  // const data2 = [
  //   {
  //     heading0: dataheading2[1],
  //     heading1: dataheading2[2],
  //     heading2: dataheading2[3],
  //     directioh: "flex-lg-row flex-column-reverse",
  //     maxwidth: "24.31rem",
  //     maxheight: "24.22rem",
  //     subheading1: <span style={{ fontWeight: 400 }}>Asset </span>,
  //     subheading2: <span style={{ fontWeight: 700 }}>Management</span>,
  //     detail: [
  //       "Become regulated asset managers and handle the assets of Verified Network account holders.",
  //       "Take charge of investments in underlying shares and bonds issued by businesses where investments are made.",
  //     ],
  //     img: ma,
  //   },
  //   {
  //     direction: "flex-lg-row-reverse flex-column-reverse",
  //     maxwidth: "23.68rem",
  //     maxheight: "24.93rem",
  //     subheading1: "Brokerage For Private",

  //     subheading2: "Investments",
  //     detail: [
  //       "Provide access to a select range of private investment assets issued on the Verified Network for your asset management and brokerage clients.",

  //       "Increase your clients’ returns by enabling access to a large number of underlying assets.",
  //     ],
  //     img: inv,
  //   },
  // ];

  // const dataheading3 = feat.ser.data.attributes.features[2].title.split("///");

  // const data3 = [
  //   {
  //     heading1: dataheading3[0],
  //     heading2: dataheading3[1],
  //     direction: "flex-lg-row flex-column-reverse",
  //     maxwidth: "26.25rem",
  //     maxheight: "28.87rem",
  //     subheading1: "Brokerage For Private",

  //     subheading2: "Investments",
  //     detail: [
  //       "Exercise control on assets by providing regulated custody for fiat currencies paid by investors on the Verified Network.",
  //       "Settle funds for issuance of tokenized securities by businesses. ",
  //     ],
  //     img: cu,
  //   },
  //   {
  //     direction: "flex-lg-row-reverse flex-column-reverse",
  //     maxwidth: "31.25rem",
  //     maxheight: "31.125rem",
  //     subheading1: "Transfer",
  //     subheading2: " Agency",
  //     detail: [
  //       "Function as a regulated custodian and provide custody for underlying assets of tokenized securities.",
  //       "Transfer assets from sellers to buyers to fulfill transactions of tokenized securities.",
  //     ],
  //     img: age,
  //   },
  //   {
  //     direction: "flex-lg-row flex-column-reverse",
  //     maxwidth: "27.75rem",
  //     maxheight: "24.5rem",
  //     subheading1: "Brokerage For Private",

  //     subheading2: "Investments",
  //     detail: [
  //       "Exercise control on assets by providing regulated custody for fiat currencies paid by investors on the Verified Network.",
  //       "Settle funds for issuance of tokenized securities by businesses. ",
  //     ],
  //     img: to,
  //   },
  // ];

  // const dataheading4 = feat.ser.data.attributes.features[3].title.split("///");

  // const data4 = [
  //   {
  //     heading0: dataheading4[0],
  //     heading1: dataheading4[1],
  //     heading2: dataheading4[2],
  //     direction: "flex-lg-row flex-column-reverse",
  //     maxwidth: "31.36rem",
  //     maxheight: "28.87rem",
  //     subheading1: "Brokerage For Private",

  //     subheading2: "Investments",
  //     detail: [
  //       "Be immune to economic instability by accepting local fiat currency paid by account holders as regulated payment institution.",
  //       "Issue digital cash tokens to account holders in exchange for payments in fiat currency.",
  //     ],
  //     img: di,
  //   },
  //   {
  //     direction: "flex-lg-row-reverse flex-column-reverse",
  //     maxwidth: "33.75rem",
  //     maxheight: "32.81rem",
  //     subheading1: "Payment",
  //     subheading2: " Acceptance",
  //     detail: [
  //       "Accept digital cash tokens transfers from account holders in multiple foreign currencies.",
  //       "Pay out local fiat currency to beneficiaries in exchange for regulated payment institution.",
  //     ],
  //     img: acc,
  //   },
  // ];
  // const dataheading5 = feat.ser.data.attributes.features[4].title.split("///");
  // const data5 = [
  //   {
  //     heading0: dataheading5[1],
  //     heading1: dataheading5[2],
  //     heading2: dataheading5[3],
  //     direction: "flex-lg-row flex-column-reverse",
  //     maxwidth: "24rem",
  //     maxheight: "35.31rem",
  //     subheading1: "Higher Return",
  //     subheading2: " Investments",
  //     detail: [
  //       "Earn interest on your assets by purchasing investment products on the Verified Network.",
  //       "Benefit from higher interest rates outside your local currency on investments into financial products across the globe.",
  //     ],
  //     img: dec,
  //   },
  // ];
  // console.log(data1);

  const dataheading1 = feat.ser.data.attributes.features[0].title.split("///");
  const data1 = [
    {
      heading0: dataheading1[1],
      heading1: dataheading1[2],
      heading2: dataheading1[3],
      direction: "flex-lg-row flex-column-reverse",
      maxwidth: "27rem",
      maxheight: "126.25rem",
      subheading1: <span style={{ fontWeight: 400 }}>Asset </span>,
      subheading2: <span style={{ fontWeight: 700 }}>Origination</span>,
      detail: [
        "Originate digital assets and issue securities that are secure and credit worthy for clients on the Verified Network.",
        "Take advantage of liquidity and capital on any exchange connected to the Verified Network.",
      ],
      img: or,
    },
  ];
  const dataheading2 = feat.ser.data.attributes.features[1].title.split("///");
  const data2 = [
    {
      heading0: dataheading2[1],
      heading1: dataheading2[2],
      heading2: dataheading2[3],
      directioh: "flex-lg-row flex-column-reverse",
      maxwidth: "24.31rem",
      maxheight: "24.22rem",
      subheading1: <span style={{ fontWeight: 400 }}>Asset </span>,
      subheading2: <span style={{ fontWeight: 700 }}>Management</span>,
      detail: [
        "Become regulated asset managers and handle the assets of Verified Network account holders.",
        "Take charge of investments in underlying shares and bonds issued by businesses where investments are made.",
      ],
      img: ma,
    },

    {
      direction: "flex-lg-row-reverse flex-column-reverse",
      maxwidth: "23.68rem",
      maxheight: "24.93rem",
      subheading1: <span style={{ fontWeight: 400 }}>Brokerage</span>,
      subheading2: (
        <span style={{ fontWeight: 700 }}> For Private Investments</span>
      ),
      detail: [
        "Provide access to a select range of private investment assets issued on the Verified Network for your asset management and brokerage clients.",
        "Increase your clients’ returns by enabling access to a large number of underlying assets.",
      ],
      img: inv,
    },
  ];

  const dataheading3 = feat.ser.data.attributes.features[2].title.split("///");

  const data3 = [
    {
      heading1: dataheading3[0],
      heading2: dataheading3[1],
      direction: "flex-lg-row flex-column-reverse",
      maxwidth: "26.25rem",
      maxheight: "28.87rem",
      subheading1: <span style={{ fontWeight: 400 }}>Digital</span>,
      subheading2: <span style={{ fontWeight: 700 }}> Asset Custody</span>,
      detail: [
        "Exercise control on assets by providing regulated custody for fiat currencies paid by investors on the Verified Network.",
        "Settle funds for issuance of tokenized securities by businesses. ",
      ],
      img: sr,
    },
    {
      direction: "flex-lg-row-reverse flex-column-reverse",
      maxwidth: "31.25rem",
      maxheight: "31.125rem",
      subheading1: "Transfer",
      subheading2: "Agency",
      detail: [
        "Function as a regulated custodian and provide custody for underlying assets of tokenized securities.",
        "Transfer assets from sellers to buyers to fulfill transactions of tokenized securities.",
      ],
      img: age,
    },
    {
      direction: "flex-lg-row flex-column-reverse",
      maxwidth: "27.75rem",
      maxheight: "24.5rem",
      subheading1: "Register",
      subheading2: (
        <span style={{ fontWeight: 700 }}>
          {" "}
          Tokenized<span style={{ fontWeight: 400 }}> Securities</span>
        </span>
      ),
      detail: [
        "Partner with businesses on the Verified Network and register shares and bonds issued by them  with national depositories  and on the blockchain ledger, subject to country regulations.",
        ,
        "Offer registered tokenized securities for subscription to investors on the Verified Network.",
      ],
      img: to,
    },
  ];

  const dataheading4 = feat.ser.data.attributes.features[3].title.split("///");
  const data4 = [
    {
      heading0: dataheading4[1],
      heading1: dataheading4[2],
      direction: "flex-lg-row flex-column-reverse",
      maxwidth: "31.36rem",
      maxheight: "28.87rem",
      subheading1: "Digital",
      subheading2: " Payments",
      detail: [
        "Be immune to economic instability by accepting local fiat currency paid by account holders as regulated payment institution.",
        "Issue digital cash tokens to account holders in exchange for payments in fiat currency.",
      ],
      img: di,
    },
    {
      direction: "flex-lg-row-reverse flex-column-reverse",
      maxwidth: "33.75rem",
      maxheight: "32.81rem",
      subheading1: "Payment",
      subheading2: " Acceptance",
      detail: [
        "Accept digital cash tokens transfers from account holders in multiple foreign currencies.",
        "Pay out local fiat currency to beneficiaries in exchange for regulated payment institution.",
      ],
      img: acc,
    },
  ];

  const dataheading5 = feat.ser.data.attributes.features[4].title.split("///");
  const data5 = [
    {
      heading0: dataheading5[1],
      heading1: dataheading5[2],
      heading2: dataheading5[3],
      direction: "flex-lg-row flex-column-reverse",
      maxwidth: "35.25rem",
      maxheight: "30.125rem",
      subheading1: "Decentralise",
      subheading2: " Finance",
      detail: [
        "Hosting on the Verified Network infrastructure accelerates decentralisation and helps democratise access to financial products and services.",
        "Earn a technology service fee by hosting a blockchain node for the Verified Network.",
      ],
      img: dec,
    },
  ];
  return (
    <div>
      <Indifeatures
        bshadow="0px 10px 50px rgba(78, 89, 231, 0.10)"
        list={featurelist}
        datalist1={data1}
        datalist2={data2}
        datalist3={data3}
        datalist4={data4}
        datalist5={data5}
        color="#4E59E7"
        arrow={
          <img
            className="ms-3"
            src={Group}
            style={{ width: "1.0156rem", height: "0.72rem" }}
          />
        }
      ></Indifeatures>
    </div>
  );
}

export default Servicefeature;
