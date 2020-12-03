/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useState } from "react";

import "./SumAndSubstraction.css";
import CustomButton from "../../Components/shared/CustomButton";

const SumAndSubstraction = () => {
  const [count, setCounter] = useState(0);
  //the last button was added in order to see how defaults props works
  return (
    <div className={"container"}>
      <h2>this was created as a basic example</h2>
      <CustomButton text={"Sum"} onClickFn={() => setCounter(count + 1)} />
      <CustomButton
        text={"Substraction"}
        onClickFn={() => setCounter(count - 1)}
      />
      RESULT: {count}
      <CustomButton></CustomButton>
    </div>
  );
};

export default SumAndSubstraction;
