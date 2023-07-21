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
import Group from "./indiphoto/Group.png";

function Features() {
  const feat = useContext(indistore);
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
      direction: "flex-lg-row flex-column-reverse",
      maxwidth: "28.62rem",
      maxheight: "31.24rem",
      subheading1: "Multi Currency",
      subheading2: " Accounts",
      detail: [
        "Create a global, multi-currency account in seconds with open and democratic access for all.",
      ],
      img: sa,
    },
  ];

  const dataheading2 = feat.indi.data.attributes.features[1].title.split("///");
  const data2 = [
    {
      heading1: dataheading2[0],
      heading2: dataheading2[1],
      directioh: "flex-lg-row flex-column-reverse",
      maxwidth: "28.625rem",
      maxheight: "31.24rem",
      subheading1: "Self Custody",
      subheading2: " of Assets",
      detail: [
        "Stop paying high fees to banks for custody of your assets. Keep your assets secure with Verified self-custody.",
      ],
      img: ga,
    },
  ];

  const dataheading3 = feat.indi.data.attributes.features[2].title.split("///");
  const data3 = [
    {
      heading1: dataheading3[0],
      heading2: dataheading3[1],
      direction: "flex-lg-row flex-column-reverse",
      maxwidth: "26.68rem",
      maxheight: "30.125rem",
      subheading1: <span style={{ fontWeight: 400 }}>Deposit in </span>,
      subheading2: <span style={{ fontWeight: 700 }}>Stable Currencies</span>,
      detail: [
        "Keep fiat currency safe into your Verified Network account.",
        "Avoid currency depreciation and convert local fiat currency into a stable global currency at a lower cost.",
      ],
      img: max,
    },
  ];

  const dataheading4 = feat.indi.data.attributes.features[3].title.split("///");
  const data4 = [
    {
      heading1: dataheading4[0],
      heading2: dataheading4[1],
      direction: "flex-lg-row flex-column-reverse",
      maxwidth: "25.56rem",
      maxheight: "22.31rem",
      subheading1: "Multi-Country",
      subheading2: " Cards",
      detail: [
        "Make card payments from your blockchain account on the Verified Network.",
        "Pay for shopping, travel, entertainment and more with a standard Visa debit card.",
      ],
      img: ptac,
    },
    {
      direction: "flex-lg-row-reverse flex-column-reverse",
      maxwidth: "29.43rem",
      maxheight: "27.56rem",
      subheading1: "Peer to Peer",
      subheading2: " Payments",
      detail: [
        "Transfer money to friends and family across the world for free.",
        "Stop paying hefty commissions for foreign exchange conversions and withdrawals.",
      ],
      img: ptp,
    },
  ];
  const dataheading5 = feat.indi.data.attributes.features[4].title.split("///");
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
        "Earn interest on your assets by purchasing investment products on the Verified Network.",
        "Benefit from higher interest rates outside your local currency on investments into financial products across the globe.",
      ],
      img: hr,
    },
    {
      direction: "flex-lg-row-reverse flex-column-reverse",
      maxwidth: "24rem",
      maxheight: "35.625rem",
      subheading1: "Private Investment",
      subheading2: " Opportunities",
      detail: [
        "Explore private investment opportunities from the best asset managers.",
        "Access to the best investment deals without opening an expensive wealth account.",
      ],
      img: pi,
    },

    {
      direction: "flex-lg-row flex-column-reverse",
      maxwidth: "25.31rem",
      maxheight: "36.125rem",
      subheading1: "Liquidity",
      subheading2: " For Private Investments",
      detail: [
        "Sell your private investments directly and get access to liquidity when you need it – without having to pay expensive brokerage for trading investments. ",
      ],
      img: liq,
    },
  ];

  return (
    <div>
      <Indifeatures
        bshadow="0px 0px 50px 0px rgba(78, 89, 231, 0.10)"
        list={featurelist}
        datalist1={data1}
        datalist2={data2}
        datalist3={data3}
        datalist4={data4}
        datalist5={data5}
        color="#8E5FF5"
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

export default Features;
