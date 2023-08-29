import React, { useState } from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

function Pp() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [error, setError] = useState({});

  function validate() {
    let validateform = true;
    let error = {};
    if (!title.trim()) {
      validateform = false;
      error = { ...error, title: "Required title" };
    }

    if (!body.trim()) {
      validateform = false;
      error = { ...error, body: "Required query" };
    } else if (body.trim().length < 4) {
      validateform = false;
      error = { ...error, body: "Describe briefly your problem or query here" };
    }
    setError(error);
    if (validateform) {
      console.log(true);
      setTitle("");
      setBody("");
    } else {
      console.log(false);
      console.log(error);
    }
  }

  return (
    <div className="">
      <Popup
        modal
        nasted
        trigger={
          <span style={{ padding: "19px 42px", display: "inline-block" }}>
            Ask Question
          </span>
        }
      >
        {(close) => (
          <>
            <div
              className="d-flex  align-items-center flex-column p-5"
              style={{}}
            >
              <div
                style={{
                  color: "#393939",
                  textAlign: "center",
                  fontFamily: "Geomanist,sans-serif",
                  fontSize: "40px",
                  fontStyle: "normal",
                  fontWeight: 700,
                  lineHeight: "60px",
                }}
              >
                Ask <span style={{ color: "#4e59e7" }}>Question</span>
              </div>

              <label
                className="align-self-start ps-2 d-inline-block mt-5 mb-3"
                htmlFor="title"
                style={{
                  color: "#393939",
                  fontFamily: "Geomanist,sans-serif",
                  fontSize: "18px",
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "normal",
                }}
              >
                Title*
              </label>
              <input
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
                id="title"
                type="search"
                className="descriptivetitle ps-4"
                placeholder="Write a descriptive title"
                style={{ height: "60px" }}
              />
              <div
                className="align-self-start ms-5 mt-2"
                style={{
                  color: "#FF7A7A",
                  fontFamily: "Geomanist,sans-serif",
                  fontSize: "16px",
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "30px",
                }}
              >
                {error?.title}
              </div>

              <label
                className="align-self-start ps-2 d-inline-block mt-5 mb-3"
                htmlFor="title"
                style={{
                  color: "#393939",
                  fontFamily: "Geomanist,sans-serif",
                  fontSize: "18px",
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "normal",
                }}
              >
                Body*
              </label>
              <textarea
                value={body}
                onChange={(e) => {
                  setBody(e.target.value);
                }}
                id="Body"
                type="search"
                className="descriptivetitle ps-4 pt-3"
                placeholder="Describe briefly your problem or query here"
                style={{ minHeight: "215px" }}
              />
              <div
                className="align-self-start ms-5 mt-2"
                style={{
                  color: "#FF7A7A",
                  fontFamily: "Geomanist,sans-serif",
                  fontSize: "16px",
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "30px",
                }}
              >
                {error?.body}
              </div>
            </div>
            <div
              className="d-flex pb-3 mb-3 justify-content-end px-5"
              style={{
                fontFamily: "Geomanist,sans-serif",
                fontSize: "20px",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "normal",
              }}
            >
              <div
                className="d-flex justify-content-center align-items-center me-3"
                style={{
                  color: "#8f8f98",
                  width: "215px",
                  height: "48px",
                  background: "#e3e3e3",
                  borderRadius: "50px",
                  cursor: "pointer",
                }}
                onClick={close}
              >
                Cancel
              </div>
              <div
                onClick={validate}
                className="d-flex justify-content-center align-items-center"
                style={{
                  color: "#4e59e7",
                  width: "215px",
                  height: "48px",
                  background: "#dce2ff",
                  borderRadius: "50px",
                  cursor: "pointer",
                }}
              >
                Post in the forum
              </div>
            </div>
          </>
        )}
      </Popup>
    </div>
  );
}

export default Pp;
