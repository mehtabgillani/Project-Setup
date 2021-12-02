import { all, fork } from 'redux-saga/effects'
import authSaga from '../../store/Auth/saga';
import UserSaga from "../../store/User/saga"
import SubusersSaga from "../../store/Subuser/saga"

export default function* rootSaga() {
    yield all([
        authSaga(),
        UserSaga(),
        SubusersSaga(),
    ])
}