/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useState, Fragment } from 'react';
import CustomButton from '../../Components/shared/CustomButton';

const SumAndSubstraction = () => {
  const [count, setCounter] = useState(0)
  //the last button was added in order to see how defaults props works
  return (
    <Fragment>
      <CustomButton text={'Sum'} onClickFn={() => setCounter(count + 1)} />
      <CustomButton text={'Substraction'} onClickFn={() => setCounter(count - 1)} />
      RESULT: {count}
      <CustomButton></CustomButton>
    </Fragment>
  );
}

export default SumAndSubstraction;