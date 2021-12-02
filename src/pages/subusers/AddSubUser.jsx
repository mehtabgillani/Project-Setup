import React, { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  Form,
  Input,
  Button,
  FormGroup,
  Label,
} from "reactstrap";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import {
  addNewSubuser, 
  // getUser,
  // getUserSuccess,
  // updateUser,
  setLoader
} from "../../store/Subuser/actions"; 
import moment from "moment";
function AddSubUser() {
  const dispatch = useDispatch();
   
  const userDetail = useSelector((state) => state.Subusers.userDetail); 
  const updateAction = useSelector((state) => state.Users.updateAction); 
  const loader = useSelector((state) => state.Subusers.loader);
  useEffect(() => { 
    if (updateAction.action == true) {
      // dispatch(
      //   getUser(updateAction.id)
      //   );
    } else if (updateAction.action == false) {
      // dispatch(
      //   getUserSuccess({
      //     status: "success",
      //     data: {
      //       name: "",
      //       email: "",
      //       password: "",
      //       number: "",
      //       birthdate: ""
      //     },          
      //   })
      // );
    }
  }, []);
  const [showPassword, setShowPassword] = useState("password");
  const changePasswordState = () => {
    if (showPassword === "password") {
      setShowPassword("text");
    } else {
      setShowPassword("password");
    }
  };

  const AddSubUserSchema = Yup.object().shape({
    isUpdate: Yup.boolean().default(updateAction.action),
    name: Yup.string()
      .required("Username is required")
      .matches(/^[^-\s]{1,40}$/, "Invalid username!"),
    email: Yup.mixed().when(["isUpdate"], {
      is: true,
      then: Yup.mixed(),
      otherwise: Yup.string()
        .email("Email must be a valid email address")
        .required("Email is required"),
    }),

    password: Yup.mixed().when(["isUpdate"], {
      is: true,
      then: Yup.mixed(),
      otherwise: Yup.string()
        .required("Password is required")
        .matches(
          /^(?=(?:.*[A-Z].*){1})(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
          "Must contain 8 characters,  One uppercase, One lowercase, One number and one special case character"
        ),
    }),
    number: Yup.string()
      .required("Phone number is required")
      .min(10, "Phone number can not be less than 10 digits")
      .max(17, "Phone number can not be more than 17 digits"),
    birthdate: Yup.string().required("Birthday is required"), 
  });

  const addSubUserFormik = useFormik({
    enableReinitialize: true,
    initialValues: userDetail,
    validationSchema: AddSubUserSchema,
    onSubmit: async (values) => {
       console.log("Add subuser", values);
      dispatch(setLoader(true));
      if (updateAction.action == false) {
        await dispatch(
          addNewSubuser({
            name: values.name,
            email: values.email,
            password: values.password,
            number: values.number,
            birthdate: values.birthdate, 
            photo: values.photo,
          })
        );
      } else if (updateAction.action == true) {
        // await dispatch(
        //   updateUser({
        //     id: updateAction.id,
        //     name: values.name,
        //     email: values.email,
        //     password: values.password,
        //     number: values.number,
        //     birthdate: values.birthdate, 
        //   })
        // );
      }
    },
  });

  return (
    <React.Fragment>
      <Container fluid>
        <div className="page-title-box">
          <Row className="align-items-center">
            <Col sm="6">
              <h4
                className="page-title mb-3"
              >
                {updateAction.action == false ? "Add Subuser" : "Update User"}
              </h4>
            </Col>
          </Row>
        </div>

        <Row>
          <Col lg="12">
            <Card>
              <CardBody>
                <>
                  <Row className="justify-content-center mt-3">
                    <Col lg="12">
                      <Form
                        className="form add_new_user login-form"
                        onSubmit={addSubUserFormik.handleSubmit}
                      >
                        <Row>
                          <Col lg="3">
                            <div className="form__form-group">
                              <span className="form__form-group-label">
                                Username
                              </span>
                              <div className="form__form-group-field">
                                <Input
                                  className="input-without-border-radius"
                                  name="name"
                                  label="name"
                                  value={addSubUserFormik.values.name}
                                  onChange={addSubUserFormik.handleChange}
                                  placeholder="Enter username"
                                  type="text"
                                />
                              </div>
                              {addSubUserFormik.touched.name &&
                              addSubUserFormik.errors.name ? (
                                <div className="text-start mb-1 text-danger">
                                  {addSubUserFormik.errors.name}
                                </div>
                              ) : null}
                            </div>
                          </Col>
                          {updateAction.action ? (
                            <Col lg="3">
                              <div className="form__form-group">
                                <span className="form__form-group-label">
                                  Email{" "}
                                </span>
                                <div className="form__form-group-field">
                                  <Input
                                    className="input-without-border-radius"
                                    name="email"
                                    label="email"
                                    value={addSubUserFormik.values.email}
                                    onChange={addSubUserFormik.handleChange}
                                    placeholder="Enter email"
                                    type="text"
                                    disabled
                                  />
                                </div>
                                {addSubUserFormik.touched.email &&
                                addSubUserFormik.errors.email ? (
                                  <div className="text-start mb-1 text-danger">
                                    {addSubUserFormik.errors.email}
                                  </div>
                                ) : null}
                              </div>
                            </Col>
                          ) : (
                            <Col lg="3">
                              <div className="form__form-group">
                                <span className="form__form-group-label">
                                  Email{" "}
                                </span>
                                <div className="form__form-group-field">
                                  <Input
                                    className="input-without-border-radius"
                                    name="email"
                                    label="email"
                                    value={addSubUserFormik.values.email}
                                    onChange={addSubUserFormik.handleChange}
                                    placeholder="Enter email"
                                    type="text"
                                  />
                                </div>
                                {addSubUserFormik.touched.email &&
                                addSubUserFormik.errors.email ? (
                                  <div className="text-start mb-1 text-danger">
                                    {addSubUserFormik.errors.email}
                                  </div>
                                ) : null}
                              </div>
                            </Col>
                          )}
                          {updateAction.action ? (
                            // <Col lg="3">
                            //   <div className="form__form-group">
                            //     <span className="form__form-group-label">
                            //       Password
                            //     </span>
                            //     <div className="form__form-group-field">
                            //       <Input
                            //         className="input-without-border-radius"
                            //         name="password"
                            //         label="password"
                            //         value={addSubUserFormik.values.password}
                            //         onChange={addSubUserFormik.handleChange}
                            //         placeholder="Enter password"
                            //         type="text"
                            //         disabled
                            //       />
                            //     </div>
                            //     {addSubUserFormik.touched.password &&
                            //     addSubUserFormik.errors.password ? (
                            //       <div className="text-start mb-1 text-danger">
                            //         {addSubUserFormik.errors.password}
                            //       </div>
                            //     ) : null}
                            //   </div>
                            // </Col>
                            <>
                            </>
                          ) : (
                            <Col lg="3">
                              <div className="form__form-group">
                                <span className="form__form-group-label">
                                  Password
                                </span>
                                <div className="form__form-group-field">
                                  <Input
                                    className="input-without-border-radius"
                                    name="password"
                                    label="password"
                                    value={addSubUserFormik.values.password}
                                    onChange={addSubUserFormik.handleChange}
                                    placeholder="Enter password"
                                    type="text"
                                  />
                                </div>
                                {addSubUserFormik.touched.password &&
                                addSubUserFormik.errors.password ? (
                                  <div className="text-start mb-1 text-danger">
                                    {addSubUserFormik.errors.password}
                                  </div>
                                ) : null}
                              </div>
                            </Col>
                          )}

                          <Col lg="3">
                            <div className="form__form-group">
                              <span className="form__form-group-label">
                                {" "}
                                Phone number
                              </span>
                              <div className="form__form-group-field">
                                <Input
                                  className="input-without-border-radius"
                                  name="number"
                                  label="Phone number"
                                  value={addSubUserFormik.values.number}
                                  onChange={addSubUserFormik.handleChange}
                                  placeholder="Enter phone number"
                                  type="text"
                                />
                              </div>
                              {addSubUserFormik.touched.number &&
                              addSubUserFormik.errors.number ? (
                                <div className="text-start mb-1 text-danger">
                                  {addSubUserFormik.errors.number}
                                </div>
                              ) : null}
                            </div>
                          </Col>
                          <Col lg="3">
                            <div className="form__form-group">
                              <span className="form__form-group-label">
                                 Birthday?
                              </span>
                              <div className="form__form-group-field">
                                <Input
                                  className="input-without-border-radius"
                                  name="birthdate"
                                  label="When is your birthday?"
                                  value={addSubUserFormik.values.birthdate}
                                  onChange={addSubUserFormik.handleChange}
                                  placeholder="Enter Date"
                                  type="date"
                                  max={moment().format("YYYY-MM-DD")}
                                />
                              </div>
                              {addSubUserFormik.touched.birthdate &&
                              addSubUserFormik.errors.birthdate ? (
                                <div className="text-start mb-1 text-danger">
                                  {addSubUserFormik.errors.birthdate}
                                </div>
                              ) : null}
                            </div>
                          </Col> 
                          <Col lg="3">
                            <FormGroup>
                              <Label for="ad">Add photo</Label>
                              <Input
                                name="photo" 
                                label="Add photo"
                                onChange={(event) => {
                                  addSubUserFormik.setFieldValue(
                                    "photo",
                                    event.target.files[0]
                                  );
                                }}
                                type="file"
                                // multiple="multiple"
                                accept="image/*"
                              />
                              {addSubUserFormik.touched.photo && addSubUserFormik.errors.photo ? (
                                <div className="text-start mb-1 text-danger">
                                  {addSubUserFormik.errors.photo}
                                </div>
                              ) : null}
                            </FormGroup>
                          </Col>
                        </Row>
                        <Row>
                          <Col lg="3">
                            <div className="form__form-group">
                              <div className="form__form-group form__form-group-field"></div>
                            </div>
                            {loader == true && false ? (
                            <div className="d-flex justify-content-center account__btn" style={{height:'40px',paddingTop:'3px'}}>
                            <div className="spinner-border" role="status" style={{color:'whitesmoke'}}>
                              <span className="sr-only">Loading...</span>
                            </div>
                          </div>
                            ) : (
                              <>
                                {updateAction.action == false ? (
                                  <Button
                                    className="account__btn"
                                    type="submit"
                                    color="primary"
                                    // onClick={() => {
                                    
                                    //   addSubUserFormik.handleSubmit();
                                    // }}
                                  >
                                    Create
                                  </Button>
                                ) : (
                                  <Button
                                    className="account__btn"
                                    type="submit"
                                    color="primary"
                                    // onClick={() => {
                                    
                                    //   addSubUserFormik.handleSubmit();
                                    // }}
                                  >
                                    Update
                                  </Button>
                                )}
                              </>
                            )}
                          </Col>
                        </Row>
                      </Form>
                    </Col>
                  </Row>
                </>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}

export default AddSubUser;
