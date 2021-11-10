import {} from 'react';
export default {}

// import { LOCAL_STORAGE_KEY } from "../constants/AppConstants";
// import { useAppDispatch } from "../redux/app/hooks";
// import { login } from "../redux/slices/authSlice";

// export interface LocalData {
//     data: string;
//     expires_at: number;
// }

// export interface AuthData {
//     id: string;
//     token: string
// }

// const date = new Date();
// const seconds = date.getTime() / 1000;

// export const useAuth = () => {
//     const dispatch = useAppDispatch();
//     const stringify = JSON.stringify({ data: '', expires_at: '' })
//     const stored_data = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) ?? stringify)

//     if (stored_data?.data && stored_data?.expires_at > seconds) dispatch(login({
//         id: stored_data?.data?.split('&MQP')[0],
//         token: stored_data?.data?.split('&MQP')[1],
//         expires_at: stored_data?.expires_at
//     }))
//     else localStorage.removeItem(LOCAL_STORAGE_KEY);
// }
