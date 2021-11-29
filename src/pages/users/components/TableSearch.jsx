import React, {useState} from 'react';
import CloseIcon from 'mdi-react/CloseIcon';
import { Formik, Form } from "formik";
// import * as Yup from "yup";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
// import {  getUsersList } from "../../store/User/actions";
import {  getUsersList } from "../../../store/User/actions";

function TopbarSearch(){
  const users = useSelector((state) => state.Users);
  const [search, setSearch] = useState('')
  const dispatch = useDispatch();
  const searchHandleChange = (search_str) => {
    (
      dispatch(getUsersList({ 
        page: users.userActivePage ,
        search:search_str
      }))
    );
  }
  const searchCloseChange = (search_str) => {
    (
      dispatch(getUsersList({ 
        page: users.userActivePage ,
        search:"", 
      }))
    );
  }
  // const SearchSchema = Yup.object().shape({ 
  //   search: Yup.string().required("Search is required"),
  // });
  const searchUserFormik = useFormik({
    initialValues: {
      search: "", 
    },
    // validationSchema: SearchSchema,
    onSubmit: async (values) => {
      // console.log("values of serach form", values);
      // await dispatch(
      //   dispatch(getUsersList({ 
      //     page: users.userActivePage ,
      //     search:""
      //   }))
      // );
    },
  });
  return (
    <>
    <Formik > 
      <Form className="topbar__search" onSubmit={searchUserFormik.handleSubmit}>
        {/* {searchUserFormik.touched.search && searchUserFormik.errors.search ? (
            <div className="text-start mb-1 text-danger">
              {searchUserFormik.errors.search}
            </div>
        ) : null} */}
        <input 
          placeholder="Search..." 
          className="topbar__search-field" 
          name="search"
          type="text" 
          value={search}
          onChange={(event)=> {
            setSearch(event.target.value) 
            searchHandleChange(event.target.value)
          }}
          // onChange={searchUserFormik.handleChange}
        />
       
        <button className="topbar__btn topbar__search-btn" type="reset"
        onClick={()=> {  
          setSearch("")
          searchCloseChange()
        }} 
        >
          <CloseIcon />
        </button> 
      </Form>
    </Formik>
    </>
  ); 
}
export default TopbarSearch;
