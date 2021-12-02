import produce from "immer";
import {
  GET_SUBUSERS_LIST_SUCCESS,
  SET_LOADER
} from "./constant";
 
const initialState = {
  usersList: [],
  // userActivePage: 1,  
  userDetail: {
    name: "",
    email: "",
    password: "",
    number: "",
    birthdate: "", 
    // photo: "",
  }, 
  loader:false,
};

const Subusers = produce((state, action) => {
  switch (action.type) {
    case GET_SUBUSERS_LIST_SUCCESS:
      state.usersList = action.payload;
      break; 
    case SET_LOADER:
      state.loader =action.payload;
      break;
    default:
  }
}, initialState);

export default Subusers;
