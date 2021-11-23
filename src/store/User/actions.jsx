import {
  GET_USERS_LIST_SUCCESS,
  GET_USERS_LIST,
  CHANGE_USER_ACTIVE_PAGE,
  DELETE_USER,
  REGISTRATION_FORM_DROPDOWNS,
  REGISTRATION_FORM_DROPDOWNS_SUCCESS,
  ADD_USER
} from "./constant";

export const getUsersList = (data) => {
  return {
    type: GET_USERS_LIST,
    payload: data,
  };
};
export const getUsersListSuccess = (data) => {
  return {
    type: GET_USERS_LIST_SUCCESS,
    payload: data,
  };
};

export const changeUserActivePage = (data) => {
  return {
    type: CHANGE_USER_ACTIVE_PAGE,
    payload: data,
  };
};

export const deleteUser = (data) => {
  return {
    type: DELETE_USER,
    payload: data,
  };
};

export const addNewUser = (data) => {
  return {
      type: ADD_USER,
      payload: data
  };
};
export const fetchRegistrationDropdown = () => { 
  return {
      type: REGISTRATION_FORM_DROPDOWNS, 
  };
};
export const  fetchRegistrationDropdownSuccess = (data) => {
  return {
      type: REGISTRATION_FORM_DROPDOWNS_SUCCESS,
      payload: data
  };
};