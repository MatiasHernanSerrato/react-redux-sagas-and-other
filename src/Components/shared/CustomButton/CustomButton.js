import React from 'react';
import './CustomButton.css';

const customButton = props => {
  return (
    <button className='customButton' onClick={props.onClickFn}>{props.text}</button>
  )
}


customButton.defaultProps = {
  text: 'Che please insert a text here',
  onClickFn: () => console.warn('You should add a function on this button'),
}

export default customButton;