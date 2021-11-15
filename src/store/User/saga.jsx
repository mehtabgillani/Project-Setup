import { fork, put, all, takeLatest } from "redux-saga/effects";
import { push } from "connected-react-router";
import axios from "../../config/axios"
import { GET_USERS_LIST, DELETE_USER } from "./constant";
import { getUsersListSuccess } from "./actions";

function* fetchUsers({ payload }) {
  try {
    const response = yield axios.get(`/admin/users?page=${payload.page}`);
    yield put(getUsersListSuccess(response.data));
  } catch (error) {}
}

function* deleteUser({ payload }) {
  console.log(payload);
  try {
    const response =yield axios.get(`/admin/users?page=2`);
    yield put(push("/admins"));
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
