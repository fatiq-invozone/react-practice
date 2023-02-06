import logo from './logo.svg';
import './App.css';
import ButtonCounter from './ButtonCounter';

function App() {
  return (
    <div className="App">
      <ButtonCounter
        pageTitle = "This is the counter page"
        incrememtButtonTitle = "Increment"
        decrememtButtonTitle = "Decrement"
      ></ButtonCounter>
    </div>
  );
}

export default App;
