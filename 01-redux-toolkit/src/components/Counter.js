import { useDispatch, useSelector } from "react-redux";
import { counterActions } from "../store/cart/cart.slice";

const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.counter);
  const show = useSelector((state) => state.counter.showCounter);

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };

  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  const toggleHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  const increaseHandler = () => {
    dispatch(counterActions.increase({ amount: 10 }));
  };

  const decreaseHandler = () => {
    dispatch(counterActions.decrease({ amount: 10 }));
  };

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            width: "50%",
            height: "10rem",
          }}
        >
          <button onClick={incrementHandler}>INCREMENT</button>
          <button onClick={decrementHandler}>DECREMENT</button>
          <button onClick={toggleHandler}>TOGGLE</button>
          <button onClick={increaseHandler}>INCREASE by 10</button>
          <button onClick={decreaseHandler}>DECREASE by 10</button>
        </div>
      </div>

      <h1>Counter</h1>
      <p>{show && count}</p>
    </div>
  );
};

export default Counter;
