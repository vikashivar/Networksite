import React, { useContext } from "react";
import Question from "../../individualsfile/question";
import { busistore } from "./business";

function Busiquestion() {
  const que = useContext(busistore).busi.data.attributes.faqs;

  return (
    <div>
      <Question
        question={que}
        color="#08C0B5"
        backgroundcolor="rgba(80, 91, 232,.02999)"
      ></Question>
    </div>
  );
}

export default Busiquestion;
