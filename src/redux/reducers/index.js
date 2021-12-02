import themeReducer from './themeReducer';
import rtlReducer from './rtlReducer';
import sidebarReducer from './sidebarReducer';
import cryptoTableReducer from './cryptoTableReducer';
import newOrderTableReducer from './newOrderTableReducer';
import customizerReducer from './customizerReducer';
import todoReducer from './todoReducer';
import authReducer from './authReducer';
// import auth from './testReducer/reducer';
import auth from '../../store/Auth/reducer'
import Users from "../../store/User/reducer"
import Subusers from "../../store/Subuser/reducer" 

export {
  themeReducer,
  rtlReducer,
  sidebarReducer,
  cryptoTableReducer,
  newOrderTableReducer,
  customizerReducer,
  todoReducer,
  authReducer,
  auth,
  Users,
  Subusers
};
