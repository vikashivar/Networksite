import moment from "moment";
import React from "react";

function Forumcat(props) {
  return (
    <div>
      <div className="m-5">
        {props.Arrya.map((a, b) => {
          return (
            <div
              key={b}
              className="px-4 pt-4 pb-3"
              style={{
                borderRadius: "1.25rem",
                border: "1px solid #dce2ff",
                boxShadow: "0px 0px 50px 0px rgba(78,89,231,0.10)",
              }}
            >
              <div
                className="p-1 px-2"
                style={{
                  color: "#393939",
                  fontFamily: "Geomanist,sans-serif",
                  fontSize: "1.125rem",
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineFeight: "2rem",
                }}
              >
                {a.attributes.title}
              </div>
              <div className="d-flex justify-content-between align-items-lg-center flex-wrap px-2 py-2 mt-3 flex-md-row flex-column">
                <div className="d-flex align-items-center ">
                  <div
                    style={{
                      width: "4rem",
                      height: "4rem",
                      background: "red",
                      borderRadius: "30px",
                    }}
                  ></div>
                  <div
                    className="ms-4 "
                    style={{
                      color: "#4E59E7",
                      fontFamily: "Geomanist,sans-serif",
                      fontSize: "1.125rem",
                      fontStyle: "normal",
                      fontWeight: 400,
                      lineHeight: "normal",
                    }}
                  >
                    Asked by {a.attributes.user.data.attributes.username}
                  </div>
                </div>
                <div className="d-flex align-items-center  mt-md-0 mt-4  minutes">
                  <div
                    style={{
                      color: "#8f8f98",
                      fontFamily: "Geomanist,sans-serif",
                      fontSize: "1.125rem",
                      fontStyle: "normal",
                      fontWeight: 400,
                      lineHeight: "normal",
                    }}
                  >
                    {moment(a.attributes.createdAt).format("mm")} minutes ago
                  </div>
                  <div className="d-flex align-items-center ps-4">
                    <div
                      style={{
                        width: "0.5rem",
                        height: "0.5rem",
                        background: "#505be7",
                        borderRadius: "4px",
                      }}
                    ></div>
                    <div
                      className="ps-3"
                      style={{
                        color: "#8f8f98",
                        fontFamily: "Geomanist,sans-serif",
                        fontSize: "1.125rem",
                        fontStyle: "normal",
                        fontWeight: 400,
                        lineHeight: "normal",
                      }}
                    >
                      {a.attributes.replies.data.length} replies
                    </div>
                  </div>
                  <div className="d-flex align-items-center ps-3">
                    <div
                      style={{
                        width: "0.5rem",
                        height: "0.5rem",
                        background: "#505be7",
                        borderRadius: "4px",
                      }}
                    ></div>
                    <div
                      className="ps-3"
                      style={{
                        color: "#8f8f98",
                        fontFamily: "Geomanist,sans-serif",
                        fontSize: "1.125rem",
                        fontStyle: "normal",
                        fontWeight: 400,
                        lineHeight: "normal",
                      }}
                    >
                      {a.attributes.views} views
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Forumcat;
