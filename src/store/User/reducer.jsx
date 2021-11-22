import produce from "immer";
import {
  GET_USERS_LIST_SUCCESS,
  CHANGE_USER_ACTIVE_PAGE,
  REGISTRATION_FORM_DROPDOWNS_SUCCESS
} from "./constant";

const initialState = {
  usersList: [],
  userActivePage: 1,
  registrationDropdownValues:[],
};

const Users = produce((state, action) => {
  switch (action.type) {
    case GET_USERS_LIST_SUCCESS:
      state.usersList = action.payload;
      break;
    case CHANGE_USER_ACTIVE_PAGE:
      state.userActivePage = action.payload;
      break;  
    case REGISTRATION_FORM_DROPDOWNS_SUCCESS:
      state.registrationDropdownValues = action.payload; 
      break;
    default:
  }
}, initialState);

export default Users;
