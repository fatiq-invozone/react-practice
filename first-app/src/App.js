import './App.css';
import ButtonCounter from './ButtonCounter';
import HoverCounter from './HoverCounter';

function App() {
  return (
    <div className="App">
      <div>
        <h2>Counter with Functional Componet</h2>
        <ButtonCounter
          pageTitle = "This is the Button counter component"
          incrememtButtonTitle = "Increment on click"
          decrememtButtonTitle = "Decrement on click"
        ></ButtonCounter>
        <HoverCounter
          pageTitle = "This is the hover counter component"
          incrememtButtonTitle = "Increment on hover"
          decrememtButtonTitle = "Decrement on hover"
        ></HoverCounter>
      </div>
    </div>
  );
}

export default App;
