import logo from './logo.svg';
import './App.css';
import ButtonCounter from './ButtonCounter';
import Counter from './Counter';

function App() {
  return (
    <div className="App">
      <div>
        <h2>Counter with Functional Componet</h2>
        <ButtonCounter
          pageTitle = "This is the counter page"
          incrememtButtonTitle = "Increment"
          decrememtButtonTitle = "Decrement"
        ></ButtonCounter>
      </div>
      <div>
        <h2>Counter with Class Componet</h2>
        <Counter
          pageTitle = "This is the counter page"
          incrememtButtonTitle = "Increment"
          decrememtButtonTitle = "Decrement"
        ></Counter>
      </div>
      

        
    </div>
  );
}

export default App;
