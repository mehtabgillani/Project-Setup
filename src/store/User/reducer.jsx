import produce from "immer";
import {
  GET_USERS_LIST_SUCCESS,
  CHANGE_USER_ACTIVE_PAGE,
  REGISTRATION_FORM_DROPDOWNS_SUCCESS,
  GET_USER_SUCCESS,
  UPDATE_ACTION,
} from "./constant";

const initialState = {
  usersList: [],
  userActivePage: 1,
  registrationDropdownValues: [],
  userDetail: {
    name: "",
    email: "",
    password: "",
    number: "",
    birthdate: "",
    // location: "",
    height: "average",
    orientation: 1,
    gender: 10,
    relationship: 15,
    buildIs: 21,
    ethnicity: 27,
    lookingFor: 2,
    // photo: "",
  },
  updateAction:{
    action:false,
    id:'',
  } 
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
    case GET_USER_SUCCESS:
      console.log("action.payload.data in reducer of get user success",action.payload.data)
      state.userDetail =action.payload.data;
      break;
    case UPDATE_ACTION:
      state.updateAction =action.payload;
      break;
    default:
  }
}, initialState);

export default Users;
