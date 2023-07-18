import React, { useState } from "react";
import plush from "./indiphoto/plush.png";
import cross from "./indiphoto/cross.png";

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

export default function Question(props) {
  const [quui, setQuui] = useState("");

  return (
    <div className="m-5" style={{}}>
      <div className="frequently my-5">Frequently Asked Questions</div>

      <Accordion
        allowZeroExpanded={true}
        onChange={(e) => {
          setQuui(e[0]);
        }}
      >
        {props.question.map((a, b) => {
          return (
            <AccordionItem className="accordionitem p-4 mb-4" key={b} uuid={b}>
              <AccordionItemHeading>
                <AccordionItemButton
                  className="accordionitembutton d-flex justify-content-between align-items-center"
                  style={{ color: b === quui ? props.color : "#393939" }}
                >
                  {a.question}

                  {quui !== b ? (
                    <img
                      alt="playstore"
                      src={plush}
                      style={{ width: "2.2rem", height: "2.2rem" }}
                    ></img>
                  ) : (
                    <img
                      alt="appstore"
                      src={cross}
                      style={{ width: "1.56rem", height: "1.56rem" }}
                    ></img>
                  )}
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel className="accordionitempanel">
                <p className=" mb-0" style={{ marginTop: "10px" }}>
                  {a.answer}
                </p>
              </AccordionItemPanel>
            </AccordionItem>
          );
        })}
      </Accordion>
    </div>
  );
}
