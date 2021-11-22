import { fork, put, all, takeLatest,select } from "redux-saga/effects";
import { push } from "connected-react-router";
import axios from "../../config/axios";
import { GET_USERS_LIST, DELETE_USER, ADD_USER, REGISTRATION_FORM_DROPDOWNS } from "./constant";
import {
  getUsersListSuccess,
  getUsersList,
  changeUserActivePage,
  fetchRegistrationDropdownSuccess,
} from "./actions";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { sagaErrorHandler } from "../sagaErrorHandler";
import { makeSelectAuthToken } from "../selectors";

function* fetchUsers({ payload }) {
  try {
    const token = yield select(makeSelectAuthToken());
    console.log("token in fetch user api",token)
    const headers = { headers: { Authorization: `Bearer ${token}`}};
    const response = yield axios.get(`/admin/users?page=${payload.page}`,headers);
    if (response.data.data.users.length == 0) {
      yield put(changeUserActivePage(response.data.totalPages));
    }
    yield put(getUsersListSuccess(response.data));
  } catch (error) {
    yield sagaErrorHandler(error.response);
  }
}

function* deleteUser({ payload }) {
  try {
    const token = yield select(makeSelectAuthToken());
    const headers = { headers: { Authorization: `Bearer ${token}`}};
    const response = yield axios.delete(`/admin/users/${payload.id}`,headers);
    toast.success(response.data.message);
    yield put(getUsersList({ page: payload.page }));
  } catch (error) {
    yield sagaErrorHandler(error.response);
  }
}
function* addUser({ payload }) {
  try { 
    
    const token = yield select(makeSelectAuthToken());
    const headers = { headers: { Authorization: `Bearer ${token}`}};
    // const response = yield axios.get(`/admin/users?page=${payload.page}`,headers);
    let data = {
      "email": payload.email,
      "password": payload.password,
      "username": payload.username,  
      "phoneNumber": payload.number, 
      "birthDate": payload.birthdate, 
      "location": payload.location, 
      "height": payload.height, 
      "sexualOrientation": payload.orientation, 
      "gender": payload.gender, 
      "relationshipStatus": payload.relationship, 
      "build": payload.buildIs, 
      "ethnicity": payload.ethnicity, 
      // "lookingToMeets": payload.lookingFor,  
      // "photo": payload.photo,  
    }
      const response = yield axios.post(`/admin/users`, data, headers);
      console.log("payload", response)
      toast.success("User created Successfully");
      yield put(push('/user/user'));
  } catch (error) {
    // yield sagaErrorHandler(error.response);
  }
}
function* fetchDropdownOptions({ payload }) {
  try {  
    const token = yield select(makeSelectAuthToken());
    console.log("yellow reyyyyy",token)
    const headers = { headers: { Authorization: `Bearer ${token}`}};
    const response = yield axios.get(`/profile/dropdown-data`,headers); 
    yield(put(fetchRegistrationDropdownSuccess(response.data.data)))
    console.log("Api response",response)
  } catch (error) {
    // console.log("yellow reyyyyy in error")
  }
}
export function* watchFetchUsers() {
  yield takeLatest(GET_USERS_LIST, fetchUsers);
}

export function* watchDeleteUser() {
  yield takeLatest(DELETE_USER, deleteUser);
}
export function* watchAddUser() {
  yield takeLatest(ADD_USER, addUser);
} 
export function* watchFetchDropdown() {
  yield takeLatest(REGISTRATION_FORM_DROPDOWNS, fetchDropdownOptions);
}
export default function* UserSaga() {
  yield all([fork(watchFetchUsers), fork(watchDeleteUser), fork(watchAddUser), fork(watchFetchDropdown)]);
}
