import React from 'react';
import { useDispatch } from "react-redux";
import { decrementCounter } from './actions/actions';

const Decrement = () => {
  const dispatch = useDispatch();

  const handleDecrement = () => {
    dispatch(decrementCounter());
  };

  return (
    <button onClick={handleDecrement}>Decrement</button>
  );
};

export default Decrement;
