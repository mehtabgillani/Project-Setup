import {} from 'react';
export default {}
// import { useCallback, useState } from "react";
// import axios from "axios";

// import { RootState } from "../redux/app/store";
// import { useAppSelector } from "../redux/app/hooks";

// export const useHttpClient = () => {
//     const token = useAppSelector((state: RootState) => state.auth.token);

//     const [isLoading, setIsLoading] = useState<Boolean>(false);
//     const [error, setError] = useState<String>("");

//     const clearError = () => {
//         setError('');
//     };

//     const sendRequest = useCallback(
//         async (endpoint: String, method: String = "GET", body: any = null, headers: Object = {}) => {
//             setIsLoading(true);
//             let response;
//             try {
//                 if (method === "POST") {
//                     response = await axios.post(
//                         `${process.env.REACT_APP_BASE_URL}${endpoint}`,
//                         body, { headers: { ...headers, 'Authorization': `Bearer ${token}` } }
//                     )
//                 } else if (method === "PATCH") {
//                     response = await axios.patch(
//                         `${process.env.REACT_APP_BASE_URL}${endpoint}`,
//                         body, { headers: { ...headers, 'Authorization': `Bearer ${token}` } }
//                     );
//                 } else if (method === "PUT") {
//                     response = await axios.put(
//                         `${process.env.REACT_APP_BASE_URL}${endpoint}`,
//                         body, { headers: { ...headers, 'Authorization': `Bearer ${token}` } }
//                     );
//                 } else if (method === "DELETE") {
//                     response = await axios.delete(
//                         `${process.env.REACT_APP_BASE_URL}${endpoint}`,
//                         { headers: { ...headers, 'Authorization': `Bearer ${token}` } }
//                     );
//                 } else {
//                     response = await axios.get(
//                         `${process.env.REACT_APP_BASE_URL}${endpoint}`, { headers: { ...headers, 'Authorization': `Bearer ${token}` } }
//                     );
//                 }
//                 setIsLoading(false);
//                 return response;
//             } catch (err) {
//                 setError(err.response);
//                 setIsLoading(false);
//                 throw err;
//             }
//         }, []
//     );

//     return { isLoading, error, sendRequest, clearError };
// };