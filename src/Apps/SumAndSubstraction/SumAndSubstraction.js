/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useState, Fragment } from 'react';
import CustomButton from '../../Components/shared/CustomButton';

const SumAndSubstraction = () => {
  const [count, setCounter] = useState(0)

  return (
    <Fragment>
      <CustomButton text={'Sum'} onClickFn={() => setCounter(count + 1)} />
      <CustomButton text={'Substraction'} onClickFn={() => setCounter(count - 1)} />
      RESULT: {count}
      <CustomButton></CustomButton> //this buttons was added to see how defaults props works
    </Fragment>
  );
}

export default SumAndSubstraction;