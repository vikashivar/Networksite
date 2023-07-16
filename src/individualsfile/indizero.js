import React, { useContext } from "react";
import { indistore } from "./individual";

function Indizero(props) {
  const api = useContext(indistore);
  const pricing = api.indi.data.attributes.pricing.heading.split("///");
  console.log(api.indi.data.attributes.pricing);
  return (
    <div>
      <div>
        <div className="pricing">
          {pricing[0]}
          <span style={{ color: props.color }}>{pricing[1]}</span>
        </div>
        <cdiv className="zerobalance">
          {api.indi.data.attributes.pricing.subheading}
        </cdiv>
      </div>
    </div>
  );
}

export default Indizero;
