
import './App.css';
import { connect } from 'react-redux';


function App(props) {
  return (
    <div className="App">
      <header className="App-header">
       
        <p>
          Redux application
        </p>
        <div>
      <h1>Count: {props.count}</h1>
      <button onClick={props.increment}>Increment</button>
      <button onClick={props.decrement}>Decrement</button>
    </div>
      </header>


    </div>
  );
}


function mapStateToProps(state) {
  return {
    count: state.count
  };
}



function mapDispatchToProps(dispatch) {
  return {
    increment: () => dispatch({ type: 'INCREMENT' }),
    decrement: () => dispatch({ type: 'DECREMENT' })
  };
}

export default connect(mapStateToProps, mapDispatchToProps) (App);
