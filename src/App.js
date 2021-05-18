import "./App.css";

import { DECREMENT, INCREMENT } from "./service/StoreType";
import { useDispatch, useSelector } from "react-redux";
import { getCalcul } from "./service/ActionService";

function App() {
  const counter = useSelector((state) => state);
  const dispatch = useDispatch();
  const handleClick = (type, state) => {
    getCalcul(type, state, dispatch);
  };
  return (
    <div className="App">
      <h1>num : {counter?.num ? counter.num : 0}</h1>
      <button onClick={() => handleClick(INCREMENT, 1)}> INCREMENT </button>
      <button onClick={() => handleClick(DECREMENT, 1)}> DECREMENT </button>
    </div>
  );
}

export default App;
