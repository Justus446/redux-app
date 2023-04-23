
import './App.css';

import Increment from './Increment';
import Decrement from './Decrement';



function App() {
  return (
    <div className="App">
      <header className="App-header">
       
        <p>
          Redux application
        </p>
        <div>
      <h1>Count: </h1>
      <Increment/>
      <Decrement/>
    </div>
      </header>


    </div>
  );
}

export default App;
