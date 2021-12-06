import produce from "immer";
import {
  GET_SUBUSERS_LIST_SUCCESS,
  SET_LOADER,
  SUBUSER_UPDATE_ACTION,
  GET_SUBUSER_SUCCESS
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
    photo: "",
  }, 
  loader:false,
  subuserUpdateAction:{
    action:false,
    id:'',
  } ,
};

const Subusers = produce((state, action) => {
  switch (action.type) {
    case GET_SUBUSERS_LIST_SUCCESS:
      state.usersList = action.payload;
      break; 
    case SET_LOADER:
      state.loader =action.payload;
      break;
    case SUBUSER_UPDATE_ACTION:
      state.subuserUpdateAction =action.payload;
      break;
    case GET_SUBUSER_SUCCESS:
      state.userDetail =action.payload.data;
      break;
    default:
  }
}, initialState);

export default Subusers;
