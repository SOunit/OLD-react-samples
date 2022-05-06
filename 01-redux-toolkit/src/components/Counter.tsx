import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { counterActions } from "../store/counter/counter.slice";
import ButtonContainer from "./ButtonContainer";
import ComponentContainer from "./ComponentContainer";

const Counter: FC = () => {
  const dispatch = useDispatch();
  const count = useSelector((state: RootState) => state.counter.counter);
  const show = useSelector((state: RootState) => state.counter.showCounter);

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
    <ComponentContainer>
      <ButtonContainer>
        <button onClick={incrementHandler}>INCREMENT</button>
        <button onClick={decrementHandler}>DECREMENT</button>
        <button onClick={toggleHandler}>TOGGLE</button>
        <button onClick={increaseHandler}>INCREASE by 10</button>
        <button onClick={decreaseHandler}>DECREASE by 10</button>
      </ButtonContainer>
      <h1>Counter</h1>
      <p>{show && count}</p>
    </ComponentContainer>
  );
};

export default Counter;
