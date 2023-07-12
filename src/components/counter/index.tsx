import { useReducer } from "react";
import countReducer from "./data/count-reducer";
import "./index.css";

const Counter: React.FC = () => {
  const [state, dispatch] = useReducer(countReducer, { count: 0 });

  const handleIncrement = (): void =>
    state.count < 10
      ? dispatch({ type: "INCREMENT" }) // Dispatch an action to increase the count
      : alert("Count can't be more than 10"); // Show an alert if the count is already at the maximum value

  const handleDecrement = (): void =>
    state.count > 0
      ? dispatch({ type: "DECREMENT" }) // Dispatch an action to decrease the count
      : alert("Count can't be less than 0"); // Show an alert if the count is already at the minimum value

  const handleReset = (): void => dispatch({ type: "RESET" }); // Dispatch an action to reset the count to 0

  return (
    <div className="counter-container">
      <p className="counter-text">Count: {state.count}</p>
      <div className="counter-buttons">
        <button
          className={`counter-button counter-button-green`}
          onClick={handleIncrement}
        >
          Increase
        </button>
        <button
          className={`counter-button counter-button-red`}
          onClick={handleDecrement}
        >
          Decrease
        </button>
        <button className={`counter-button`} onClick={handleReset}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
