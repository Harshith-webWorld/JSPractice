import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { incrementCount, decrementCount } from "./redux/action/countAction";
import Routers from "./Routers";
import PokerGame from "./PokerGame";

function App() {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  const { count } = counter;

  return (
    <div className="App">
      <header className="App-header">
        <Routers />
        <br />

        {`-------------------------------------`}
        <br />
        <br />
        <PokerGame />
        <br />

        {`-------------------------------------`}
        <br />
        <br />

        <div className="Flex-column">
          <button onClick={() => dispatch(incrementCount())}>Increment</button>
          <h1>{count}</h1>
          <button onClick={() => dispatch(decrementCount())}>Decrement</button>
        </div>
      </header>
    </div>
  );
}

export default App;
