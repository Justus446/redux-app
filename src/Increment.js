import React from 'react';
import { connect } from 'react-redux';
import { incrementCounter} from './actions';

const Increment = () => {
  return (
    <div>
      <h2>Counter 2: {counter2}</h2>
      <button onClick={incrementCounter}>Increment</button>
      
    </div>
  );
};



const mapDispatchToProps = dispatch => {
  return {
    incrementCounter: () => dispatch(incrementCounter())
  }
}
export default connect(null, mapDispatchToProps)(Increment);
