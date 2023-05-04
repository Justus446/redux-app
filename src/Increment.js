import React from 'react';
import { useDispatch } from "react-redux";
import { incrementCounter } from './actions';

const Increment = () => {
  const dispatch = useDispatch();

  const handleIncrement = () => {
   dispatch(incrementCounter());
   console.log("clicked....");
  };

  return (
    <button onClick={handleIncrement}>Increment</button>
  );
};

export default Increment;
