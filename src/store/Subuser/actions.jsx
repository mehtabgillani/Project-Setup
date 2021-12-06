import {
  GET_SUBUSERS_LIST_SUCCESS,
  GET_SUBUSERS_LIST, 
  ADD_SUBUSER,
  SET_LOADER,
  DELETE_SUBUSER,
  SUBUSER_UPDATE_ACTION,
  GET_SUBUSER,
  GET_SUBUSER_SUCCESS,
  EDIT_SUBUSER
} from "./constant";

export const getSubUsersList = (data) => {
  return {
    type: GET_SUBUSERS_LIST,
    payload: data,
  };
};
export const getSubUsersListSuccess = (data) => {
  return {
    type: GET_SUBUSERS_LIST_SUCCESS,
    payload: data,
  };
};
export const addNewSubuser = (data) => {
  return {
      type: ADD_SUBUSER,
      payload: data
  };
};
export const deleteSubUser = (data) => {
  return {
    type: DELETE_SUBUSER,
    payload: data,
  };
};
export const setLoader = (data) => {
  return {
      type: SET_LOADER,
      payload: data
  };
};
export const subuserUpdateAction = (data) => { 
  return {
    type: SUBUSER_UPDATE_ACTION,
    payload: data,
  };
};
export const getSubUser = (data) => {
  return {
    type: GET_SUBUSER,
    payload: data,
  };
};
export const getSubUserSuccess = (data) => {
  return {
    type: GET_SUBUSER_SUCCESS,
    payload: data,
  };
};
export const updateSubUser = (data) => {
  return {
      type: EDIT_SUBUSER,
      payload: data
  };
};