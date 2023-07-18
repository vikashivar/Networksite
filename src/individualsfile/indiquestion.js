import React, { useContext } from "react";
import Question from "./question";
import { indistore } from "./individual";

function Indiquestion() {
  const questionapi = useContext(indistore).indi.data.attributes.faq;

  return (
    <div>
      <Question question={questionapi} color={"#8E5FF5"}></Question>
    </div>
  );
}

export default Indiquestion;
