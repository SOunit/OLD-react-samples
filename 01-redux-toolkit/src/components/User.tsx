import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { userActions } from "../store/user/user.slice";
import ButtonContainer from "./ButtonContainer";
import ComponentContainer from "./ComponentContainer";

const User = () => {
  const user = useSelector((state: RootState) => state.user.user);
  const dispatch = useDispatch();

  const loginHandler = () => {
    dispatch(userActions.login({ user: { name: "Jack" } }));
  };
  const logoutHandler = () => {
    dispatch(userActions.logout());
  };

  return (
    <ComponentContainer>
      <h1>User</h1>
      {user && user.name}
      <ButtonContainer>
        <button onClick={loginHandler}>Login</button>
        <button onClick={logoutHandler}>Logout</button>
      </ButtonContainer>
    </ComponentContainer>
  );
};

export default User;
