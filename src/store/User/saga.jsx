import { fork, put, all, takeLatest,select } from "redux-saga/effects";
import { push } from "connected-react-router";
import axios from "../../config/axios";
import { GET_USERS_LIST, DELETE_USER, ADD_USER, REGISTRATION_FORM_DROPDOWNS,GET_USER } from "./constant";
import {
  getUsersListSuccess,
  getUsersList,
  changeUserActivePage,
  fetchRegistrationDropdownSuccess,
  getUserSuccess
} from "./actions";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { sagaErrorHandler } from "../sagaErrorHandler";
import { makeSelectAuthToken } from "../selectors";

function* fetchUsers({ payload }) {
  try {
    const token = yield select(makeSelectAuthToken());
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
    let data = {
      "email": payload.email,
      "password": payload.password,
      "username": payload.name,  
      "phoneNumber": payload.number, 
      "birthDate": payload.birthdate, 
      // "location": payload.location, 
      "height": payload.height, 
      "sexualOrientation": payload.orientation, 
      "gender": payload.gender, 
      "relationshipStatus": payload.relationship, 
      "build": payload.buildIs, 
      "ethnicity": payload.ethnicity, 
      "lookingToMeets": [payload.lookingFor],  
      // "photo": payload.photo,  
    }
      const response = yield axios.post(`/admin/users`, data, headers);
      toast.success("User created Successfully");
      yield put(push('/user/user'));
  } catch (error) {
    yield sagaErrorHandler(error.response);
  }
}
function* fetchDropdownOptions({ payload }) {
  try {  
    const token = yield select(makeSelectAuthToken());
    const headers = { headers: { Authorization: `Bearer ${token}`}};
    const response = yield axios.get(`/profile/dropdown-data`,headers); 
    yield(put(fetchRegistrationDropdownSuccess(response.data.data)))
  } catch (error) {
    yield sagaErrorHandler(error.response);
  }
}

function* fetchGetUser({ payload }) {
  try {  
    const token = yield select(makeSelectAuthToken());
    const headers = { headers: { Authorization: `Bearer ${token}`}};
    const response = yield axios.get(`/admin/users/${payload}`,headers); 
 console.log("response of get user",response.data.data.user)
 const userDetail =response.data.data.user;
 let data = {
     status: "success",
     data: {
      name: userDetail.username ?  userDetail.username  :'',
      email: userDetail.email ?  userDetail.email  :'',
      password: userDetail.password ?  userDetail.password  :'',
      number: userDetail.phoneNumber ?  userDetail.phoneNumber  :'',
      birthdate: userDetail.birthDate ?  userDetail.birthDate  :'',
      location: userDetail.location ?  userDetail.location  :'',
      height: userDetail.height ?  userDetail.height  :'average',
      orientation: userDetail.sexual_orientation.id ?  userDetail.sexual_orientation.id  : 1,
      gender: userDetail.sex.id ?  userDetail.sex.id  : 10,
      relationship: userDetail.relationship_status.id ?  userDetail.relationship_status.id  : 15,
      buildIs: userDetail.body_build.id ?  userDetail.body_build.id  : 21,
      ethnicity: userDetail.ethni.id ?  userDetail.ethni.id  : 27,
      lookingFor: userDetail.LookingToMeets[0].id ?  userDetail.LookingToMeets[0].id  : 2,
     },
   };

 yield put(getUserSuccess(data));


  } catch (error) {
    yield sagaErrorHandler(error.response);
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
export function* watchFetchGetUser() {
  yield takeLatest(GET_USER, fetchGetUser);
}

export default function* UserSaga() {
  yield all([
    fork(watchFetchUsers),
    fork(watchDeleteUser),
    fork(watchAddUser),
    fork(watchFetchDropdown),
    fork(watchFetchGetUser),
  ]);
}
