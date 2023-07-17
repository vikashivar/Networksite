import React, { useContext } from "react";
import Question from "./question";
import { indistore } from "./individual";

function Indiquestion() {
  const questionapi = useContext(indistore).indi.data.attributes.faq;

  return (
    <div>
      <Question question={questionapi}></Question>
    </div>
  );
}

export default Indiquestion;
