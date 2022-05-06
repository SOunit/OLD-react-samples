import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./cart/cart.slice";
import { userReducer } from "./user/user.slice";

// for single reducer
// const store = configureStore({ reducer: counterSlice.reducer });

// for multiple reducers
const store = configureStore({
  reducer: { counter: counterReducer, user: userReducer },
});

export default store;
