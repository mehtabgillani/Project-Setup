import { takeEvery, fork, put, all, call, takeLatest } from 'redux-saga/effects';
import { LOGIN } from './constant';
import { loginSuccess } from './actions';
import { push } from 'connected-react-router';
import axios from "../../config/axios"
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function* loginUser({ payload }) {
    localStorage.setItem('token', 'hjvabkjdansdhbajsnldkasbdjnaksdb')
    try {
        let data = {
            "email": payload.email,
            "password": payload.password
        }
        const response = yield axios.post(`/admin/auth/login`, data);
        console.log("response of login",response)
        yield put(loginSuccess(response.data));
        toast.success("Login Successfully");
        yield put(push('/user/user'));

    } catch (error) {
        // yield put(setNotification({ status: 'error', data: { message: error.response.data.message } }));
    }
}



export function* watchLogin() {
    yield takeLatest(LOGIN, loginUser);
}


export default function* authSaga() {
    yield all(
        [
            fork(watchLogin),
        ]
    );
}