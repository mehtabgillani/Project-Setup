import { takeEvery, fork, put, all, call, takeLatest } from 'redux-saga/effects';
import { LOGIN } from './constant';
import { loginSuccess } from './actions';
import { push } from 'connected-react-router';
import axios from 'axios';

function* loginUser({ payload }) {
    try {
        let data = {
            "email": payload.email,
            "password": payload.password
        }
        console.log("hjvabkjdansdhbajsnldkasbdjnaksdb")
        const response = yield axios.post(`http://ec2-18-118-15-229.us-east-2.compute.amazonaws.com/api/v1/users/login`, data, {
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "application/json",
                "X-Requested-With": "XMLHttpRequest",
            }
        });
        yield put(loginSuccess(response.data));
        yield put(push('/online_marketing_dashboard'));

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