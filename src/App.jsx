import "./App.css";
import Counter from "./components/Counter";
import ExponentTwo from "./components/ExponentTwo";
import ExponentThree from "./components/ExponentThree";
import ExponentFour from "./components/ExponentFour";
import ExponentFive from "./components/ExponentFive";
import ExponentSix from "./components/ExponentSix";
import { useState } from "react";
import ExponentComponent from "./components/ExponentComponent";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <h2>
        <em>Counter</em>
      </h2>

      <Counter count={count} setCount={setCount} />

      <br />
      <h2>
        <em>Exponents</em>
      </h2>

      <div className="container">
        <ExponentComponent exponent={2} count={count}/>
        <ExponentComponent exponent={3} count={count}/>
        <ExponentComponent exponent={4} count={count}/>
        <ExponentComponent exponent={5} count={count}/>
        <ExponentComponent exponent={6} count={count}/>
        {/* <ExponentTwo count={count} />
        <ExponentThree count={count} />
        <ExponentFour count={count} />
        <ExponentFive count={count} />
        <ExponentSix count={count} /> */}
      </div>
    </div>
  );
}

export default App;
