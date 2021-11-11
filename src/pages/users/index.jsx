import React, { useState } from "react";
import { Form, Input, Button } from "reactstrap";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";

function UserPage() {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState("password");
 

  return (
    <React.Fragment>
    <div>
        heyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy
    </div>
    </React.Fragment>
  );
}


export default UserPage;

