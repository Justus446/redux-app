
import './App.css';

import Increment from './Increment';
import Decrement from './Decrement';

import { useSelector } from 'react-redux';




function App() {

  const count = useSelector(state => state.counter);

  return (
    <div className="App">
      <header className="App-header">
       
        <p>
          Redux application
        </p>
        <div>
      <h1>Counter:{count} </h1>
      <h1>Count </h1>
      <Increment/>
      <Decrement/>
    </div>
      </header>


    </div>
  );
}

export default App;
