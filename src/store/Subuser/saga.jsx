import { fork, put, all, takeLatest, select } from "redux-saga/effects";
import { push } from "connected-react-router";
import axios from "../../config/axios";
import {
  GET_SUBUSERS_LIST,
  ADD_SUBUSER,
  DELETE_SUBUSER,
  GET_SUBUSER,
  EDIT_SUBUSER
} from "./constant";
import {
  getSubUsersListSuccess, 
  getSubUsersList,
  getSubUserSuccess,
  setLoader
} from "./actions";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { sagaErrorHandler } from "../sagaErrorHandler";
import { makeSelectAuthToken } from "../selectors";
 

function* fetchSubusers({ payload }) {
  try {
    const token = yield select(makeSelectAuthToken());
    const headers = { headers: { Authorization: `Bearer ${token}` } };
    const response = yield axios.get(
      `/admin/admin-users?page=${payload.page}`,
      headers
    );  
    // if (response.data.data.users.length == 0) {
    //   if(response.data.totalPages == 0)
    //   {
    //     yield put(changeUserActivePage(1));
    //   }
    //   else{
    //     yield put(changeUserActivePage(response.data.totalPages));
    //   }
    // }
    yield put(getSubUsersListSuccess(response.data));
  } catch (error) {
    yield sagaErrorHandler(error.response);
  }
} 

function* addSubUser({ payload }) {
  console.log("payload of add user",payload)
  const formData = new FormData();
  formData.append("username", payload.name);
  formData.append("password", payload.password);
  formData.append("email", payload.email);
  formData.append("phoneNumber", payload.number);
  formData.append("birthDate", payload.birthdate);
  formData.append("photo", payload.photo); 
  try { 
  //  console.log("payload of add subuser", payload)
    const token = yield select(makeSelectAuthToken()); 
  
    const response = yield axios.post(`/admin/admin-users`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        "X-Requested-With": "XMLHttpRequest",
        Authorization: `Bearer ${token}`,
      },
    });
    yield put(setLoader(false));
    toast.success("User created successfully");
    yield put(push("/subusers"));
  } catch (error) {
    yield sagaErrorHandler(error.response);
    yield put(setLoader(false));
  }
}
 
function* deleteSubUser({ payload }) {
  try {
    const token = yield select(makeSelectAuthToken());
    const headers = { headers: { Authorization: `Bearer ${token}` } };
    const response = yield axios.delete(`/admin/users/${payload.id}`, headers);
    toast.success(response.data.message);
    yield put(getSubUsersList({ page: payload.page }));
  } catch (error) {
    yield sagaErrorHandler(error.response);
  }
}


function* fetchGetSubUser({ payload }) { 
  try {
    const token = yield select(makeSelectAuthToken());
    const headers = { headers: { Authorization: `Bearer ${token}` } };
    const response = yield axios.get(`/admin/users/${payload}`, headers);
    const userDetail = response.data.data.user;
    console.log(" final values of get user", response.data.data.user) 
    let data = {
      status: "success",
      data: {
        name: userDetail.username ? userDetail.username : "",
        email: userDetail.email ? userDetail.email : "",
        password: userDetail.password ? userDetail.password : "",
        number: userDetail.phoneNumber ? userDetail.phoneNumber : "",
        birthdate: userDetail.birthDate ? userDetail.birthDate : "", 
        photo: userDetail.UserPhotos ? userDetail.UserPhotos : "", 
      },
    };
    yield put(getSubUserSuccess(data));
    // yield put(getUserDetailSuccess(userDetail));
  } catch (error) {
    yield sagaErrorHandler(error.response);
  }
}

function* editSubUser({ payload }) {
  console.log("edit subsuer saga", payload)
  try {
    const token = yield select(makeSelectAuthToken());
    const headers = { headers: { Authorization: `Bearer ${token}` } };
    // let data = {
    //   email: payload.email,
    //   password: payload.password,
    //   username: payload.name,
    //   phoneNumber: payload.number,
    //   birthDate: payload.birthdate, 
    //   // "photo": payload.photo,
    // };

    console.log("payload of edit user",payload)
    const formData = new FormData();
    formData.append("username", payload.name);
    formData.append("password", payload.password);
    formData.append("email", payload.email);
    formData.append("phoneNumber", payload.number);
    formData.append("birthDate", payload.birthdate);
    formData.append("photo", payload.photo); 
    const response = yield axios.patch(
      `/admin/admin-users/${payload.id}`,
      formData,
      headers
    );
    yield put(setLoader(false));
    toast.success("User updated successfully");
    yield put(push("/subusers"));
  } catch (error) {
    yield sagaErrorHandler(error.response);
    yield put(setLoader(false));
  }
}
export function* watchFetchSubsers() {
  yield takeLatest(GET_SUBUSERS_LIST, fetchSubusers);
}   
export function* watchAddSubUser() {
  yield takeLatest(ADD_SUBUSER, addSubUser);
} 
export function* watchDeleteSubUser() {
  yield takeLatest(DELETE_SUBUSER, deleteSubUser);
}
export function* watchFetchGetSubUser() {
  yield takeLatest(GET_SUBUSER, fetchGetSubUser);
}
export function* watchEditSubUser() {
  yield takeLatest(EDIT_SUBUSER, editSubUser);
}
export default function* SubusersSaga() {
  yield all([
    fork(watchFetchSubsers), 
    fork(watchAddSubUser), 
    fork(watchDeleteSubUser),
    fork(watchFetchGetSubUser),
    fork(watchEditSubUser),
  ]);
}
