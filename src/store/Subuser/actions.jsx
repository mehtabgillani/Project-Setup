import {
  GET_SUBUSERS_LIST_SUCCESS,
  GET_SUBUSERS_LIST, 
  ADD_SUBUSER,
  SET_LOADER,
  DELETE_SUBUSER
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
