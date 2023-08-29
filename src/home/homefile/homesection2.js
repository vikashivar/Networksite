import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { homeapi } from "../../App";
import fori from "../homephoto/fori.png";
import forb from "../homephoto/forb.png";
import fors from "../homephoto/fors.png";
import forii from "../homephoto/forii.png";
import forbb from "../homephoto/forbb.png";
import forss from "../homephoto/forss.png";
function Homesection2(props) {
  const section2 = useContext(homeapi);
  // console.log(section2.home.data.attributes.UsecaseCard[0].title);

  const homesection = [
    {
      photo: fori,
      width: "25.375rem",
      height: "30.75rem",
      icon: forii,
      iconwidth: "4.81244rem",
      iconheight: "4.73406rem",
      color: "rgba(142, 95, 245, 1)",
      title: section2.home.data.attributes.UsecaseCard[0].title,
      subtitle: section2.home.data.attributes.UsecaseCard[0].subtitle,
      description: section2.home.data.attributes.UsecaseCard[0].description,
      linkUrl: section2.home.data.attributes.UsecaseCard[0].linkUrl,
      direction: "row",
      homesectionmargin: "homesectionmargin1",
    },
    {
      photo: forb,
      width: "28.8125rem",
      height: "29.4375rem",
      icon: forbb,
      iconwidth: "4.03844rem",
      iconheight: "3.94969rem",
      color: "rgba(8, 192, 181, 1)",
      title: section2.home.data.attributes.UsecaseCard[1].title,
      subtitle: section2.home.data.attributes.UsecaseCard[1].subtitle,
      description: section2.home.data.attributes.UsecaseCard[1].description,
      linkUrl: section2.home.data.attributes.UsecaseCard[1].linkUrl,
      direction: "row-reverse",
      homesectionmargin: "homesectionmargin2",
    },
    {
      photo: fors,
      width: "28.4375rem",
      height: "27.75rem",
      icon: forss,
      iconwidth: "4.39288rem",
      iconheight: "4.69781rem",
      color: "rgba(82, 93, 231, 1)",
      title: section2.home.data.attributes.UsecaseCard[2].title,
      subtitle: section2.home.data.attributes.UsecaseCard[2].subtitle,
      description: section2.home.data.attributes.UsecaseCard[2].description,
      linkUrl: section2.home.data.attributes.UsecaseCard[2].linkUrl,
      direction: "row",
      homesectionmargin: "homesectionmargin3",
    },
  ];

  return (
    <div className="" style={{ margin: "0rem 6rem" }}>
      {homesection.map((a, b) => {
        return (
          <div
            style={{ marginTop: "6rem" }}
            key={b}
            className={`d-flex flex-lg-${a.direction} flex-column align-items-center justify-content-between`}
          >
            <div>
              <img
                src={a.photo}
                alt=""
                style={{ width: a.width, height: a.height }}
              />
            </div>
            <div
              style={{}}
              className={`${a.homesectionmargin} mt5 d-lg-block d-flex flex-column align-items-center`}
            >
              <div>
                <img
                  src={a.icon}
                  style={{ width: a.iconwidth, height: a.iconheight }}
                ></img>
              </div>
              <div
                className="mt-4"
                style={{
                  color: "#393939",
                  fontFamily: "Geomanist,sans-serif",
                  fontSize: "2.5rem",
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHight: "normal",
                }}
              >
                for{" "}
                <span style={{ color: a.color, fontWeight: 600 }}>
                  {a.title}
                </span>
              </div>
              <div className="subtitle">{a.subtitle}</div>
              <div
                className="description mt-5 text-lg-start text-center"
                style={{ fontSize: "1.125rem" }}
              >
                {a.description}
              </div>
              <Link
                to={a.linkUrl}
                style={{ color: a.color }}
                className="learnmore mt-4 d-flex justify-content-start align-items-center "
              >
                <span>Learn More</span>
                <i
                  className="fa-solid fa-arrow-left-long fa-rotate-180 fa-sm ms-2"
                  style={{ color: a.color }}
                ></i>
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Homesection2;
