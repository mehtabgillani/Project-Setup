import produce from "immer";
import { LOGIN_SUCCESS } from "./constant";

const initialState = {
  user: null,
  token: null,
};

const Auth = produce((state, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      console.log("in login success action response", action.payload.data);
      state.user = action.payload.data.user.name;
      state.token = action.payload.data.access_token;
      break;

    default:
      break;
  }
}, initialState);

export default Auth;
