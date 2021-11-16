import { fork, put, all, takeLatest } from "redux-saga/effects";
import { push } from "connected-react-router";
import axios from "../../config/axios"
import { GET_USERS_LIST, DELETE_USER } from "./constant";
import { getUsersListSuccess,getUsersList } from "./actions";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function* fetchUsers({ payload }) {
  try {
    console.log("payload of fetch users",payload)
    const response = yield axios.get(`/admin/users?page=${payload.page}`);
    yield put(getUsersListSuccess(response.data));
  } catch (error) {

  }
}

function* deleteUser({ payload }) {
  try {
    const response =yield axios.delete(`/admin/users/${payload.id}`);
    toast.success(response.data.message);
    console.log(response);
    yield put(getUsersList({page:payload.page}));
  } catch (error) {

  }
}

export function* watchFetchUsers() {
  yield takeLatest(GET_USERS_LIST, fetchUsers);
}

export function* watchDeleteUser() {
  yield takeLatest(DELETE_USER, deleteUser);
}

export default function* UserSaga() {
  yield all([fork(watchFetchUsers), fork(watchDeleteUser)]);
}
