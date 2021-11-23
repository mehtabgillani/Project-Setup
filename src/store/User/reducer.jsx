import produce from "immer";
import {
  GET_USERS_LIST_SUCCESS,
  CHANGE_USER_ACTIVE_PAGE,
  REGISTRATION_FORM_DROPDOWNS_SUCCESS,
  GET_USER_SUCCESS,
  UPDATE_ACTION,
  GET_USER_DETAIL_SUCCESS,
  SET_LOADER
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
  } ,
  userData:"",
  loader:false,
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
      state.userDetail =action.payload.data;
      break;
    case GET_USER_DETAIL_SUCCESS:
       state.userData =action.payload;
       break;
    case UPDATE_ACTION:
      state.updateAction =action.payload;
      break;
    case SET_LOADER:
        state.loader =action.payload;
        break;
    default:
  }
}, initialState);

export default Users;
